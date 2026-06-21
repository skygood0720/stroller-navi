"use client";

import { useState } from "react";
import {
  generateFamilyCode,
  setFamilyCode,
  clearFamilyCode,
  formatFamilyCode,
  normalizeFamilyCode,
} from "@/lib/family";

interface Props {
  currentCode: string | null;
  onClose: () => void;
  onCodeChange: (code: string | null) => void;
}

export default function FamilyShareModal({ currentCode, onClose, onCodeChange }: Props) {
  const [mode, setMode] = useState<"menu" | "create" | "join" | "active">(
    currentCode ? "active" : "menu"
  );
  const [inputCode, setInputCode] = useState("");
  const [createdCode, setCreatedCode] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    setError("");
    const code = generateFamilyCode().replace(/-/g, "");
    try {
      const res = await fetch("/api/family", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", room_code: code }),
      });
      if (!res.ok) throw new Error("作成失敗");
      setFamilyCode(code);
      setCreatedCode(code);
      onCodeChange(code);
      setMode("create");
    } catch {
      setError("コードの作成に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    const clean = normalizeFamilyCode(inputCode);
    if (clean.length !== 8) {
      setError("8文字のコードを入力してください");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/family", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "join", room_code: clean }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "コードが見つかりません");
        return;
      }
      setFamilyCode(clean);
      onCodeChange(clean);
      onClose();
    } catch {
      setError("参加に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const handleLeave = () => {
    clearFamilyCode();
    onCodeChange(null);
    onClose();
  };

  const copyCode = async (code: string) => {
    const formatted = formatFamilyCode(code);
    await navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareCode = async (code: string) => {
    const formatted = formatFamilyCode(code);
    if (navigator.share) {
      await navigator.share({
        title: "ベビーカーナビ 家族コード",
        text: `家族コード: ${formatted}\nベビーカーナビで一緒におでかけ記録と離乳食を管理しよう！\nhttps://stroller-navi.vercel.app`,
      });
    } else {
      copyCode(code);
    }
  };

  const displayCode = createdCode ?? currentCode ?? "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[640px] bg-white rounded-t-3xl p-6 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ハンドル */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        {/* === ACTIVE MODE === */}
        {mode === "active" && currentCode && (
          <>
            <div className="text-center mb-6">
              <p className="text-xs text-brand-500 font-bold mb-1">👨‍👩‍👧 家族と共有中</p>
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-2xl px-5 py-3 mt-1">
                <span className="text-2xl font-black tracking-[0.2em] text-brand-700">
                  {formatFamilyCode(currentCode)}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => copyCode(currentCode)}
                className="w-full flex items-center justify-center gap-2 bg-brand-500 text-white font-bold rounded-2xl py-3.5"
              >
                {copied ? "✅ コピー済み" : "📋 コードをコピー"}
              </button>
              <button
                onClick={() => shareCode(currentCode)}
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-2xl py-3.5"
              >
                📨 LINEなどで家族を招待
              </button>
              <button
                onClick={handleLeave}
                className="w-full text-sm text-gray-400 py-2"
              >
                共有を解除する
              </button>
            </div>
          </>
        )}

        {/* === MENU MODE === */}
        {mode === "menu" && (
          <>
            <h2 className="text-lg font-black text-center mb-1">👨‍👩‍👧 家族と共有する</h2>
            <p className="text-xs text-gray-500 text-center mb-6">
              おでかけ記録と離乳食チェックを家族と同期できます
            </p>
            <div className="space-y-3">
              <button
                onClick={handleCreate}
                disabled={loading}
                className="w-full bg-brand-500 text-white font-bold rounded-2xl py-4 disabled:opacity-60"
              >
                {loading ? "作成中..." : "✨ 家族コードを新しく作る"}
              </button>
              <button
                onClick={() => setMode("join")}
                className="w-full bg-gray-100 text-gray-700 font-bold rounded-2xl py-4"
              >
                🔑 家族のコードで参加する
              </button>
            </div>
          </>
        )}

        {/* === CREATE DONE MODE === */}
        {mode === "create" && displayCode && (
          <>
            <h2 className="text-base font-black text-center mb-1">家族コードができました！</h2>
            <p className="text-xs text-gray-500 text-center mb-4">
              このコードを家族に共有してください
            </p>
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 text-center mb-5">
              <p className="text-3xl font-black tracking-[0.25em] text-brand-700 mb-2">
                {formatFamilyCode(displayCode)}
              </p>
              <p className="text-[11px] text-gray-400">このコードを家族のスマホで入力します</p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => shareCode(displayCode)}
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-2xl py-3.5"
              >
                📨 LINEなどで家族を招待
              </button>
              <button
                onClick={() => copyCode(displayCode)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold rounded-2xl py-3"
              >
                {copied ? "✅ コピー済み" : "📋 コードをコピー"}
              </button>
              <button onClick={onClose} className="w-full text-sm text-gray-400 py-2">
                閉じる
              </button>
            </div>
          </>
        )}

        {/* === JOIN MODE === */}
        {mode === "join" && (
          <>
            <h2 className="text-base font-black text-center mb-1">家族コードで参加</h2>
            <p className="text-xs text-gray-500 text-center mb-4">
              パートナーや家族が作ったコードを入力してください
            </p>
            <input
              type="text"
              maxLength={9}
              placeholder="例: ABCD-1234"
              value={inputCode}
              onChange={(e) => {
                setError("");
                const raw = e.target.value.replace(/[^A-Za-z0-9-]/g, "").toUpperCase();
                setInputCode(raw);
              }}
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center text-xl font-black tracking-[0.2em] focus:outline-none focus:border-brand-400 mb-2"
            />
            {error && <p className="text-xs text-red-500 text-center mb-3">{error}</p>}
            <div className="space-y-3 mt-3">
              <button
                onClick={handleJoin}
                disabled={loading}
                className="w-full bg-brand-500 text-white font-bold rounded-2xl py-3.5 disabled:opacity-60"
              >
                {loading ? "確認中..." : "参加する"}
              </button>
              <button
                onClick={() => { setMode("menu"); setError(""); }}
                className="w-full text-sm text-gray-400 py-2"
              >
                戻る
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
