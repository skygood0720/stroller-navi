"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

type Step = "form" | "confirm" | "done";

const FACILITY_OPTIONS = [
  "授乳室", "おむつ替え", "エレベーター", "スロープ", "ベビーカー貸出",
  "ベビーチェア", "多目的トイレ", "駐車場", "ミルク用お湯", "電子レンジ",
  "キッズスペース", "バリアフリー対応",
];

const CATEGORY_OPTIONS = [
  "ショッピングモール", "公園", "動物園・水族館", "博物館・美術館",
  "遊園地・テーマパーク", "道の駅・SA", "百貨店", "カフェ・レストラン", "その他",
];

export default function SpotSubmitPage() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({
    name: "",
    category: "",
    address: "",
    region: "",
    facilities: [] as string[],
    desc: "",
    age: "",
    website: "",
    submitter: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleFacility = (f: string) => {
    setForm((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(f)
        ? prev.facilities.filter((x) => x !== f)
        : [...prev.facilities, f],
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "施設名を入力してください";
    if (!form.category) e.category = "カテゴリを選択してください";
    if (!form.address.trim()) e.address = "住所を入力してください";
    if (!form.desc.trim()) e.desc = "施設の説明を入力してください";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setStep("confirm");
  };

  const handleSend = async () => {
    // メール本文を組み立てて mailto: で開く（サーバーレス）
    const body = [
      `■ 施設名：${form.name}`,
      `■ カテゴリ：${form.category}`,
      `■ 住所：${form.address}`,
      `■ 地域：${form.region}`,
      `■ 設備：${form.facilities.join("、") || "なし"}`,
      `■ 説明：${form.desc}`,
      `■ 対象年齢：${form.age}`,
      `■ 公式HP：${form.website}`,
      `■ 投稿者ニックネーム：${form.submitter}`,
    ].join("\n");

    const mailto = `mailto:stroller.navi@gmail.com?subject=${encodeURIComponent("【スポット追加申請】" + form.name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStep("done");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/spots" className="hover:text-white">スポット一覧</Link>
            <span className="mx-1.5">›</span>
            <span>スポット追加申請</span>
          </nav>
          <div className="text-3xl mb-2">📍</div>
          <h1 className="text-xl font-black">スポット追加・口コミ投稿</h1>
          <p className="text-xs text-white/70 mt-1">
            「このスポットも掲載してほしい！」「行ってみたら設備が充実してた」などの情報をお寄せください
          </p>
        </header>

        <main className="p-5 space-y-5">
          {/* ステップインジケーター */}
          <div className="flex items-center gap-2">
            {(["form", "confirm", "done"] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                  ${step === s ? "bg-brand-500 text-white" :
                    (step === "confirm" && s === "form") || step === "done"
                      ? "bg-brand-200 text-brand-700" : "bg-gray-200 text-gray-400"
                  }`}>{i + 1}</div>
                <span className="text-[10px] text-gray-500">
                  {s === "form" ? "入力" : s === "confirm" ? "確認" : "送信完了"}
                </span>
                {i < 2 && <span className="text-gray-300 text-xs">›</span>}
              </div>
            ))}
          </div>

          {/* ── フォーム ── */}
          {step === "form" && (
            <div className="space-y-4">
              <section className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  📝 いただいた情報は編集部で確認後、順次サイトに反映します。
                  掲載まで1〜2週間ほどお時間をいただく場合があります。
                </p>
              </section>

              {/* 施設名 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
                <h2 className="text-sm font-bold text-gray-700">📍 基本情報</h2>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">施設名 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="例：〇〇ショッピングモール"
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">カテゴリ <span className="text-red-500">*</span></label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 ${errors.category ? "border-red-400" : "border-gray-200"}`}
                  >
                    <option value="">選択してください</option>
                    {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.category && <p className="text-[11px] text-red-500 mt-1">{errors.category}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">住所 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="例：東京都渋谷区〇〇1-2-3"
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 ${errors.address ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.address && <p className="text-[11px] text-red-500 mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">公式ウェブサイト（任意）</label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400"
                  />
                </div>
              </div>

              {/* 設備 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h2 className="text-sm font-bold text-gray-700 mb-3">🛗 設備・サービス（複数選択可）</h2>
                <div className="flex flex-wrap gap-2">
                  {FACILITY_OPTIONS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFacility(f)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                        form.facilities.includes(f)
                          ? "bg-brand-500 text-white border-brand-500"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-300"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* 詳細 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
                <h2 className="text-sm font-bold text-gray-700">💬 詳細情報</h2>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">施設の説明・口コミ <span className="text-red-500">*</span></label>
                  <textarea
                    value={form.desc}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    rows={4}
                    placeholder="例：授乳室が2Fにあり、個室でミルクのお湯もありました。ベビーカーのまま入れて助かりました。通路も広くて移動しやすいです。"
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 resize-none ${errors.desc ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.desc && <p className="text-[11px] text-red-500 mt-1">{errors.desc}</p>}
                  <p className="text-[11px] text-gray-400 mt-1">できるだけ具体的に書いていただくと掲載されやすくなります</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">何ヶ月の赤ちゃんと行きましたか？（任意）</label>
                  <input
                    type="text"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    placeholder="例：生後3ヶ月 / 1歳2ヶ月"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">ニックネーム（任意・掲載時に使用）</label>
                  <input
                    type="text"
                    value={form.submitter}
                    onChange={(e) => setForm({ ...form, submitter: e.target.value })}
                    placeholder="例：2歳ママ / 0歳パパ"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold hover:opacity-90 transition"
              >
                内容を確認する →
              </button>
            </div>
          )}

          {/* ── 確認画面 ── */}
          {step === "confirm" && (
            <div className="space-y-4">
              <section className="bg-white rounded-2xl p-5 shadow-sm">
                <h2 className="text-sm font-bold text-gray-700 mb-4">📋 投稿内容の確認</h2>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "施設名", val: form.name },
                    { label: "カテゴリ", val: form.category },
                    { label: "住所", val: form.address },
                    { label: "設備", val: form.facilities.join("、") || "なし" },
                    { label: "説明・口コミ", val: form.desc },
                    { label: "赤ちゃんの月齢", val: form.age || "未記入" },
                    { label: "ニックネーム", val: form.submitter || "匿名" },
                    { label: "公式HP", val: form.website || "未記入" },
                  ].map(({ label, val }) => (
                    <div key={label} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                      <dt className="text-[10px] text-gray-400 mb-0.5">{label}</dt>
                      <dd className="text-gray-800">{val}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  ✉️ 「送信する」をクリックするとメールアプリが開きます。
                  そのまま送信してください。送信後、編集部で内容を確認して掲載を検討します。
                </p>
              </section>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("form")}
                  className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 text-sm font-bold hover:bg-gray-50 transition"
                >
                  ← 修正する
                </button>
                <button
                  onClick={handleSend}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold hover:opacity-90 transition"
                >
                  送信する ✉️
                </button>
              </div>
            </div>
          )}

          {/* ── 送信完了 ── */}
          {step === "done" && (
            <section className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-base font-bold text-gray-800 mb-2">ありがとうございます！</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                メールアプリが開きましたか？そのまま送信してください。
                いただいた情報は編集部で確認後、順次サイトに掲載します。
                掲載まで1〜2週間ほどお時間をいただく場合があります。
              </p>
              <div className="space-y-3">
                <Link
                  href="/spots"
                  className="block py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold hover:opacity-90 transition"
                >
                  🗺️ スポット一覧を見る
                </Link>
                <button
                  onClick={() => { setStep("form"); setForm({ name:"",category:"",address:"",region:"",facilities:[],desc:"",age:"",website:"",submitter:"" }); }}
                  className="block w-full py-3 rounded-xl border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
                >
                  別のスポットを投稿する
                </button>
              </div>
            </section>
          )}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
