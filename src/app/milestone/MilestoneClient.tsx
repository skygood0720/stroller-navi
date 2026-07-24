"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

// ─── Types ─────────────────────────────────────────────────────────────────
interface MilestoneRecord {
  date: string;
  note: string;
  photo?: string;
}
interface Milestone {
  id: string;
  emoji: string;
  name: string;
  category: "motor" | "comm" | "food" | "life";
  months: string;
}
interface BabyInfo {
  name: string;
  birthday: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────
const MILESTONES: Milestone[] = [
  { id: "neck",         emoji: "👶", name: "首すわり",             category: "motor", months: "3〜4ヶ月" },
  { id: "roll",         emoji: "🔄", name: "寝返り",               category: "motor", months: "4〜5ヶ月" },
  { id: "roll-back",    emoji: "↩️", name: "寝返り返り",           category: "motor", months: "5〜6ヶ月" },
  { id: "sit",          emoji: "🧸", name: "一人座り",             category: "motor", months: "6〜7ヶ月" },
  { id: "army-crawl",   emoji: "🐛", name: "ずりばい",             category: "motor", months: "6〜8ヶ月" },
  { id: "crawl",        emoji: "🐢", name: "ハイハイ",             category: "motor", months: "7〜9ヶ月" },
  { id: "stand-sup",    emoji: "🏋️", name: "つかまり立ち",         category: "motor", months: "8〜10ヶ月" },
  { id: "cruise",       emoji: "🚶", name: "つたい歩き",           category: "motor", months: "9〜11ヶ月" },
  { id: "stand",        emoji: "⭐", name: "一人立ち",             category: "motor", months: "10〜12ヶ月" },
  { id: "walk",         emoji: "👣", name: "はじめての一歩",       category: "motor", months: "10〜14ヶ月" },
  { id: "smile",        emoji: "😊", name: "声を出して笑う",       category: "comm",  months: "3〜4ヶ月" },
  { id: "name-turn",    emoji: "👋", name: "名前で振り向く",       category: "comm",  months: "6〜8ヶ月" },
  { id: "bye",          emoji: "✋", name: "バイバイ",             category: "comm",  months: "8〜10ヶ月" },
  { id: "point",        emoji: "☝️", name: "指差し",               category: "comm",  months: "10〜12ヶ月" },
  { id: "mama",         emoji: "💕", name: "「ママ」「パパ」と言う",category: "comm",  months: "10〜13ヶ月" },
  { id: "word",         emoji: "🗣️", name: "はじめての言葉",       category: "comm",  months: "10〜14ヶ月" },
  { id: "two-words",    emoji: "💬", name: "二語文",               category: "comm",  months: "18〜24ヶ月" },
  { id: "weaning",      emoji: "🥣", name: "離乳食スタート",       category: "food",  months: "5〜6ヶ月" },
  { id: "finger-food",  emoji: "✌️", name: "手づかみ食べ",         category: "food",  months: "9〜10ヶ月" },
  { id: "straw",        emoji: "🥤", name: "ストローで飲む",       category: "food",  months: "9〜12ヶ月" },
  { id: "cup",          emoji: "🥛", name: "コップで飲む",         category: "food",  months: "12〜18ヶ月" },
  { id: "spoon",        emoji: "🥄", name: "スプーン・フォーク",   category: "food",  months: "12〜18ヶ月" },
  { id: "outdoor",      emoji: "🌟", name: "はじめての外出",       category: "life",  months: "1ヶ月健診後" },
  { id: "bath",         emoji: "🛁", name: "はじめてのお風呂",     category: "life",  months: "退院直後" },
  { id: "tooth",        emoji: "🦷", name: "歯が生える",           category: "life",  months: "6〜8ヶ月" },
  { id: "sleep-alone",  emoji: "😴", name: "一人で眠れた",         category: "life",  months: "個人差あり" },
];

const CATEGORIES = [
  { id: "all",   label: "すべて" },
  { id: "motor", label: "🏃 運動" },
  { id: "comm",  label: "💬 言葉" },
  { id: "food",  label: "🍽 食事" },
  { id: "life",  label: "✨ 生活" },
] as const;

const KEY_BABY    = "milestone_baby_v1";
const KEY_RECORDS = "milestone_records_v1";
const KEY_CUSTOM  = "milestone_custom_v1";

// ─── Helpers ────────────────────────────────────────────────────────────────
async function compressImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxW = 480;
        const ratio = Math.min(maxW / img.width, maxW / img.height, 1);
        const canvas = document.createElement("canvas");
        canvas.width  = Math.round(img.width  * ratio);
        canvas.height = Math.round(img.height * ratio);
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.6));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

function calcAge(birthday: string, targetDate: string): string {
  const birth  = new Date(birthday);
  const target = new Date(targetDate);
  const totalDays = Math.floor((target.getTime() - birth.getTime()) / 86_400_000);
  if (totalDays < 0)  return "";
  if (totalDays < 30) return `生後${totalDays}日`;
  const months = Math.floor(totalDays / 30.4375);
  if (months < 24) return `生後${months}ヶ月`;
  return `${Math.floor(months / 12)}歳${months % 12 > 0 ? months % 12 + "ヶ月" : ""}`;
}

// ─── Setup screen ───────────────────────────────────────────────────────────
function SetupScreen({ onSave }: { onSave: (b: BabyInfo) => void }) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">👶</div>
          <h1 className="text-2xl font-black text-gray-800">成長記録をはじめよう</h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            ハイハイ・寝返り・はじめての一歩など<br />大切な瞬間を写真と一緒に記録できます
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1.5">赤ちゃんの名前（ニックネームでもOK）</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="例：はなちゃん"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1.5">
              生年月日 <span className="text-red-400">*</span>
            </label>
            <input
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
            <p className="text-[10px] text-gray-400 mt-1">達成時の月齢を自動計算するために使います</p>
          </div>
          <button
            onClick={() => birthday && onSave({ name: name.trim(), birthday })}
            disabled={!birthday}
            className="w-full py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-xl text-sm disabled:opacity-40 transition"
          >
            はじめる ✨
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Record modal ────────────────────────────────────────────────────────────
interface ModalProps {
  ms: Pick<Milestone, "id" | "emoji" | "name">;
  existing?: MilestoneRecord;
  birthday: string;
  onSave: (rec: MilestoneRecord) => void;
  onDelete: () => void;
  onClose: () => void;
}
function RecordModal({ ms, existing, birthday, onSave, onDelete, onClose }: ModalProps) {
  const today = new Date().toISOString().slice(0, 10);
  const [date,  setDate]  = useState(existing?.date  ?? today);
  const [note,  setNote]  = useState(existing?.note  ?? "");
  const [photo, setPhoto] = useState<string | undefined>(existing?.photo);
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPhoto(await compressImage(f));
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-[440px] p-5 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{ms.emoji}</span>
          <div>
            <h3 className="text-base font-bold text-gray-800">{ms.name}</h3>
            <p className="text-xs text-gray-400">{existing ? "✓ 記録済み — 編集できます" : "日付を選んで記録しよう"}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">達成日 <span className="text-red-400">*</span></label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            />
            {birthday && date && (
              <p className="text-[10px] text-brand-600 font-bold mt-1">
                → {calcAge(birthday, date)}での達成 🎉
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">メモ（任意）</label>
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="そのときの様子を書いておこう..."
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-400 resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">写真（任意）</label>
            {photo ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt="" className="w-full h-40 object-cover rounded-xl" />
                <button
                  onClick={() => setPhoto(undefined)}
                  className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold"
                >✕</button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full border-2 border-dashed border-gray-200 rounded-xl py-6 text-gray-400 hover:border-brand-300 hover:text-brand-400 transition flex flex-col items-center gap-1.5"
              >
                <span className="text-3xl">📷</span>
                <span className="text-xs">写真を追加する</span>
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {existing && (
            <button
              onClick={onDelete}
              className="px-4 py-2.5 rounded-xl border border-red-100 text-red-400 text-xs font-bold hover:bg-red-50 transition"
            >削除</button>
          )}
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500">
            キャンセル
          </button>
          <button
            onClick={() => onSave({ date, note, photo })}
            disabled={!date}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold disabled:opacity-40"
          >
            記録する 🎉
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function MilestoneClient() {
  const [baby,    setBaby]    = useState<BabyInfo | null>(null);
  const [records, setRecords] = useState<Record<string, MilestoneRecord>>({});
  const [custom,  setCustom]  = useState<Milestone[]>([]);
  const [tab,     setTab]     = useState("all");
  const [view,    setView]    = useState<"grid" | "timeline">("grid");
  const [modal,   setModal]   = useState<Milestone | null>(null);
  const [photoFull, setPhotoFull] = useState<string | null>(null);
  const [toast,   setToast]   = useState(false);
  const [addingCustom, setAddingCustom] = useState(false);
  const [cName, setCName] = useState("");
  const [cEmoji, setCEmoji] = useState("⭐");

  useEffect(() => {
    try {
      const b = localStorage.getItem(KEY_BABY);
      if (b) setBaby(JSON.parse(b));
      const r = localStorage.getItem(KEY_RECORDS);
      if (r) setRecords(JSON.parse(r));
      const c = localStorage.getItem(KEY_CUSTOM);
      if (c) setCustom(JSON.parse(c));
    } catch {}
  }, []);

  const saveRecords = useCallback((next: Record<string, MilestoneRecord>) => {
    setRecords(next);
    try { localStorage.setItem(KEY_RECORDS, JSON.stringify(next)); } catch {}
  }, []);

  const handleSetup = (b: BabyInfo) => {
    setBaby(b);
    try { localStorage.setItem(KEY_BABY, JSON.stringify(b)); } catch {}
  };

  const handleSave = (rec: MilestoneRecord) => {
    if (!modal) return;
    saveRecords({ ...records, [modal.id]: rec });
    setModal(null);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };

  const handleDelete = () => {
    if (!modal) return;
    const next = { ...records };
    delete next[modal.id];
    saveRecords(next);
    setModal(null);
  };

  const addCustom = () => {
    if (!cName.trim()) return;
    const m: Milestone = {
      id: `custom_${Date.now()}`,
      emoji: cEmoji || "⭐",
      name: cName.trim(),
      category: "life",
      months: "カスタム",
    };
    const next = [...custom, m];
    setCustom(next);
    try { localStorage.setItem(KEY_CUSTOM, JSON.stringify(next)); } catch {}
    setCName(""); setCEmoji("⭐"); setAddingCustom(false);
  };

  if (!baby) return <SetupScreen onSave={handleSetup} />;

  const all      = [...MILESTONES, ...custom];
  const filtered = tab === "all" ? all : all.filter(m => m.category === tab);
  const achieved = all.filter(m => records[m.id]).length;

  const timeline = Object.entries(records)
    .map(([id, rec]) => ({ rec, ms: all.find(m => m.id === id) }))
    .filter((e): e is { rec: MilestoneRecord; ms: Milestone } => !!e.ms)
    .sort((a, b) => a.rec.date.localeCompare(b.rec.date));

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <header className="bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white px-5 pt-5 pb-5">
        <div className="max-w-[640px] mx-auto">
          <nav className="text-xs text-white/70 mb-2 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span>›</span>
            <span>成長記録</span>
          </nav>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-black">
                {baby.name ? `${baby.name}の成長記録` : "成長記録"}
              </h1>
              <p className="text-xs text-white/70 mt-0.5">
                {achieved} / {all.length} 達成 🎉
              </p>
            </div>
            <button
              onClick={() => { setBaby(null); try { localStorage.removeItem(KEY_BABY); } catch {} }}
              className="text-[10px] text-white/50 hover:text-white/80 underline"
            >設定変更</button>
          </div>
          {/* Progress */}
          <div className="bg-white/20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-700"
              style={{ width: `${all.length ? (achieved / all.length) * 100 : 0}%` }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-[640px] mx-auto px-4 pt-4 pb-8">
        {/* View toggle */}
        <div className="flex gap-2 mb-4">
          {(["grid", "timeline"] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                view === v ? "bg-brand-500 text-white shadow-sm" : "bg-white text-gray-500 border border-gray-200"
              }`}
            >
              {v === "grid" ? "📋 一覧" : "📅 タイムライン"}
            </button>
          ))}
        </div>

        {/* ── Grid view ── */}
        {view === "grid" && (
          <>
            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4" style={{ scrollbarWidth: "none" }}>
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setTab(c.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    tab === c.id ? "bg-brand-500 text-white shadow-sm" : "bg-white text-gray-500 border border-gray-200"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Milestone grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {filtered.map(m => {
                const rec = records[m.id];
                return (
                  <button
                    key={m.id}
                    onClick={() => setModal(m)}
                    className={`text-left rounded-2xl p-4 shadow-sm border transition-all active:scale-95 ${
                      rec
                        ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                        : "bg-white border-gray-100 hover:border-brand-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-3xl leading-none">{m.emoji}</span>
                      {rec && <span className="text-green-500 font-bold text-base leading-none">✓</span>}
                    </div>

                    {rec?.photo && (
                      <div
                        className="w-full h-20 rounded-xl overflow-hidden mb-2"
                        onClick={e => { e.stopPropagation(); setPhotoFull(rec.photo!); }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={rec.photo} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                    )}

                    <p className="text-xs font-bold text-gray-800 leading-snug mb-1">{m.name}</p>

                    {rec ? (
                      <>
                        <p className="text-[10px] font-bold text-green-700">{rec.date.replace(/-/g, "/")}</p>
                        {baby.birthday && (
                          <p className="text-[10px] text-green-600">{calcAge(baby.birthday, rec.date)}で達成🎉</p>
                        )}
                        {rec.note && (
                          <p className="text-[10px] text-gray-500 mt-1 overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                            {rec.note}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-[10px] text-gray-400">{m.months}</p>
                    )}
                  </button>
                );
              })}

              {/* Add custom button */}
              {!addingCustom && (
                <button
                  onClick={() => setAddingCustom(true)}
                  className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-brand-300 hover:text-brand-400 transition min-h-[100px]"
                >
                  <span className="text-2xl">＋</span>
                  <span className="text-xs font-bold">カスタム追加</span>
                </button>
              )}
            </div>

            {/* Custom milestone input */}
            {addingCustom && (
              <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 border border-brand-100">
                <p className="text-sm font-bold text-gray-800 mb-3">✨ オリジナルマイルストーンを追加</p>
                <div className="flex gap-2 mb-3">
                  <input
                    value={cEmoji}
                    onChange={e => setCEmoji(e.target.value)}
                    placeholder="🌟"
                    maxLength={2}
                    className="w-14 border border-gray-200 rounded-xl px-2 py-2 text-center text-xl outline-none focus:border-brand-400"
                  />
                  <input
                    value={cName}
                    onChange={e => setCName(e.target.value)}
                    placeholder="例：はじめてのプール"
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-400"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setAddingCustom(false)} className="flex-1 py-2 rounded-xl border border-gray-200 text-xs text-gray-500">
                    キャンセル
                  </button>
                  <button
                    onClick={addCustom}
                    disabled={!cName.trim()}
                    className="flex-1 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold disabled:opacity-40"
                  >
                    追加する
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── Timeline view ── */}
        {view === "timeline" && (
          <div className="space-y-0 mb-4">
            {timeline.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center text-gray-400 shadow-sm">
                <div className="text-5xl mb-3">📅</div>
                <p className="text-sm font-bold">まだ記録がありません</p>
                <p className="text-xs mt-1">一覧から最初のマイルストーンを記録してみよう</p>
                <button
                  onClick={() => setView("grid")}
                  className="mt-4 px-5 py-2 bg-brand-500 text-white text-xs font-bold rounded-full"
                >一覧を見る</button>
              </div>
            ) : (
              timeline.map(({ rec, ms }, i) => (
                <div key={ms.id} className="flex gap-3">
                  {/* Spine */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-base shrink-0">
                      {ms.emoji}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-brand-100 my-1" />}
                  </div>
                  {/* Content */}
                  <button
                    onClick={() => setModal(ms)}
                    className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left mb-3 hover:border-brand-200 transition"
                  >
                    <p className="text-[10px] text-brand-600 font-bold">{rec.date.replace(/-/g, "/")}</p>
                    <p className="text-sm font-bold text-gray-800">{ms.name}</p>
                    {baby.birthday && (
                      <p className="text-[10px] text-gray-400">{calcAge(baby.birthday, rec.date)}で達成 🎉</p>
                    )}
                    {rec.note && <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{rec.note}</p>}
                    {rec.photo && (
                      <div
                        className="mt-2"
                        onClick={e => { e.stopPropagation(); setPhotoFull(rec.photo!); }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={rec.photo} alt="" className="h-24 w-auto rounded-xl object-cover" />
                      </div>
                    )}
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Link to seasonal articles */}
        <div className="bg-gradient-to-r from-orange-50 to-brand-50 border border-brand-100 rounded-2xl p-4 mt-2">
          <p className="text-xs font-bold text-brand-700 mb-2">🎃 季節の行事も記念日に</p>
          <div className="space-y-1.5">
            {[
              { href: "/articles/halloween-baby", label: "赤ちゃんとはじめてのハロウィン" },
              { href: "/articles/christmas-baby", label: "赤ちゃんとはじめてのクリスマス" },
              { href: "/articles/shichigosan-guide", label: "七五三 子連れガイド" },
            ].map(a => (
              <Link key={a.href} href={a.href} className="flex items-center gap-2 text-xs text-brand-600 hover:underline">
                <span className="text-gray-300">›</span>{a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Record modal */}
      {modal && (
        <RecordModal
          ms={modal}
          existing={records[modal.id]}
          birthday={baby.birthday}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={() => setModal(null)}
        />
      )}

      {/* Photo fullscreen */}
      {photoFull && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPhotoFull(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoFull} alt="" className="max-w-full max-h-full object-contain rounded-xl" />
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg pointer-events-none">
          🎉 記録しました！
        </div>
      )}

      <div className="max-w-[640px] mx-auto">
        <SiteFooter />
      </div>
    </div>
  );
}
