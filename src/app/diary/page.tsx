"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import DiaryEntryModal, { DiaryEntry, getDeviceId } from "@/components/DiaryEntryModal";
import { getFamilyCode } from "@/lib/family";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getMonth() + 1}月${d.getDate()}日（${"日月火水木金土"[d.getDay()]}）`;
}

function getMonthLabel(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}年${d.getMonth() + 1}月`;
}

function groupByMonth(entries: DiaryEntry[]): { month: string; entries: DiaryEntry[] }[] {
  const map = new Map<string, DiaryEntry[]>();
  for (const e of entries) {
    const m = getMonthLabel(e.entry_date);
    if (!map.has(m)) map.set(m, []);
    map.get(m)!.push(e);
  }
  return Array.from(map.entries()).map(([month, entries]) => ({ month, entries }));
}

export default function DiaryPage() {
  const [entries, setEntries]     = useState<DiaryEntry[]>([]);
  const [mounted, setMounted]     = useState(false);
  const [loading, setLoading]     = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting]   = useState<string | null>(null);
  const familyCode = mounted ? getFamilyCode() : null;

  const load = useCallback(async () => {
    setLoading(true);
    const deviceId = getDeviceId();
    const roomCode = getFamilyCode();
    const params   = roomCode
      ? `room_code=${roomCode}`
      : `device_id=${deviceId}`;
    try {
      const res = await fetch(`/api/diary?${params}`);
      const { entries: data } = await res.json();
      setEntries(data ?? []);
    } catch {
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    if (!confirm("この日記を削除しますか？")) return;
    setDeleting(id);
    const deviceId = getDeviceId();
    try {
      await fetch(`/api/diary?id=${id}&device_id=${deviceId}`, { method: "DELETE" });
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } finally {
      setDeleting(null);
    }
  };

  const grouped = groupByMonth(entries);

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-28">
      <div className="max-w-[640px] mx-auto">

        {showModal && (
          <DiaryEntryModal
            onClose={() => setShowModal(false)}
            onSaved={(entry) => setEntries((prev) => [entry, ...prev])}
          />
        )}

        {/* ヘッダー */}
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>おでかけ日記</span>
          </nav>
          <div className="text-4xl mb-2">📔</div>
          <h1 className="text-xl font-black leading-snug">
            おでかけ日記
          </h1>
          <p className="text-xs text-white/80 mt-1">
            {mounted && !loading
              ? `${entries.length}件の思い出${familyCode ? " · 家族と共有中 👨‍👩‍👧" : ""}`
              : "読み込み中..."}
          </p>
        </header>

        <main className="p-5">

          {/* 書くボタン */}
          <button
            onClick={() => setShowModal(true)}
            className="w-full flex items-center justify-center gap-2 bg-white border-2 border-dashed border-brand-300 text-brand-500 font-bold rounded-2xl py-4 mb-5 hover:bg-brand-50 active:scale-[0.98] transition"
          >
            <span className="text-xl">✏️</span>
            今日のおでかけを記録する
          </button>

          {/* エントリ一覧 */}
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl h-24 animate-pulse" />
              ))}
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-3">📔</p>
              <p className="text-sm font-bold text-gray-500">まだ日記がありません</p>
              <p className="text-xs text-gray-400 mt-1">おでかけの思い出を残してみよう！</p>
            </div>
          ) : (
            <div className="space-y-6">
              {grouped.map(({ month, entries: monthEntries }) => (
                <section key={month}>
                  {/* 月ラベル */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-gray-500">{month}</span>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400">{monthEntries.length}件</span>
                  </div>

                  <div className="space-y-3">
                    {monthEntries.map((entry) => (
                      <div
                        key={entry.id}
                        className="bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start"
                      >
                        {/* スタンプ */}
                        <div className="text-4xl w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl shrink-0">
                          {entry.sticker}
                        </div>

                        {/* コンテンツ */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-black leading-tight truncate">
                              {entry.spot_name}
                            </p>
                            <button
                              onClick={() => handleDelete(entry.id)}
                              disabled={deleting === entry.id}
                              className="text-gray-300 hover:text-red-400 transition shrink-0 text-lg leading-none"
                              aria-label="削除"
                            >
                              {deleting === entry.id ? "…" : "×"}
                            </button>
                          </div>
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            {formatDate(entry.entry_date)}
                            {entry.baby_month != null && (
                              <span className="ml-2">👶 {entry.baby_month}ヶ月</span>
                            )}
                          </p>
                          {entry.memo && (
                            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed line-clamp-3">
                              {entry.memo}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
