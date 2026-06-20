import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】浅草エリア 子連れおでかけ完全ガイド｜雷門・スカイツリー・授乳室情報",
  description: "浅草・スカイツリーエリアの授乳室・おむつ替え・ベビーカーでのアクセス情報を完全網羅。雷門・仲見世通り・隅田公園・東京スカイツリータウンの子連れ攻略法を解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/asakusa-guide" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

function SC({ name, area, baby, stroller, tags, tip }: { name: string; area: string; baby: string; stroller: string; tags: string[]; tip: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 mb-3">
      <div className="flex items-start justify-between mb-1">
        <p className="font-bold text-sm">{name}</p>
        <span className="text-[10px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-bold shrink-0 ml-2">{area}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((t) => <span key={t} className="text-[9px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>)}
      </div>
      <p className="text-xs text-gray-600 mb-1">🍼 授乳室: {baby}</p>
      <p className="text-xs text-gray-600 mb-2">🚼 ベビーカー: {stroller}</p>
      <p className="text-[11px] text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg">💡 {tip}</p>
    </div>
  );
}

export default function AsakusaGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-red-500 via-orange-500 to-amber-600 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>浅草ガイド</span>
          </nav>
          <div className="text-4xl mb-2">🏮</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】浅草エリア<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">雷門・仲見世通り・スカイツリー｜授乳室・ベビーカー情報完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-amber-800 mb-1">📍 浅草エリアの子連れポイント</p>
            <ul className="text-xs text-amber-700 space-y-1">
              <li>✅ 仲見世通り＝石畳・段差あり → ベビーカーは舗道側が安全</li>
              <li>✅ 東京スカイツリータウンはバリアフリー完備・授乳室4か所</li>
              <li>✅ 隅田公園は広くてベビーカーに優しい無料スポット</li>
              <li>✅ 浅草駅はエレベーターで改札からホームへアクセス可能</li>
            </ul>
          </div>

          <S t="🏮 雷門・仲見世通りのベビーカー攻略">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              仲見世通りは石畳のためベビーカーの走行が少々揺れます。混雑時は通行が難しいため、<strong>平日午前中（10時前）</strong>または夕方以降が比較的すいています。
              宝蔵門から先の境内もエレベーターはありませんが、ベビーカーのまま参拝できます。
            </p>
            <div className="bg-red-50 rounded-xl p-3">
              <p className="text-xs font-bold text-red-700 mb-1">📷 浅草寺でのベビーカーポイント</p>
              <p className="text-xs text-red-600">仲見世通りは舗装エリアのみを通るルートを選択。境内の手水舎・本堂前は広いスペースがあり、おむつ替えシートを敷いての休憩も可能です。</p>
            </div>
          </S>

          <S t="🗼 東京スカイツリータウン 授乳室・ベビー設備">
            <SC
              name="東京スカイツリータウン（ソラマチ）"
              area="押上"
              baby="授乳室4か所（各フロア）、おむつ替え台完備"
              stroller="ベビーカー貸出あり、エレベーター完備、全フロアアクセス可"
              tags={["授乳室4か所", "バリアフリー", "ベビーカー貸出", "ショッピング"]}
              tip="5階のソラマチひろばは子どもが遊べるスペースがあり、休憩に最適。エレベーターは東側・西側に各2基あります。"
            />
            <SC
              name="すみだ水族館（スカイツリータウン）"
              area="押上"
              baby="授乳室あり（インフォメーション近く）"
              stroller="館内全フロアベビーカー走行可、傾斜スロープあり"
              tags={["水族館", "雨の日◎", "0歳〜", "屋内"]}
              tip="ペンギンとクラゲが赤ちゃんに人気。薄暗い館内でも泣かない子が多く、授乳しながら見学できます。"
            />
          </S>

          <S t="🌳 子連れに優しい公園・無料スポット">
            <SC
              name="隅田公園"
              area="浅草〜向島"
              baby="管理棟トイレにおむつ替え台あり"
              stroller="ほぼ全域ベビーカーOK・舗装済み"
              tags={["無料", "広い", "川沿い", "春はお花見"]}
              tip="隅田川沿いを散歩しながら浅草〜吾妻橋まで歩けます。春の桜の季節は特に絵になるスポットです。"
            />
            <SC
              name="浅草花やしき"
              area="浅草"
              baby="授乳室あり"
              stroller="ほとんどのエリアはベビーカー走行可"
              tags={["遊園地", "レトロ", "1歳〜", "小規模"]}
              tip="日本最古の遊園地。ベビーカーで入場できる乗り物もありますが、乗車対象年齢を事前確認。幼児向けエリアが充実。"
            />
          </S>

          <S t="🍜 子連れランチ・おすすめスポット">
            {[
              { name: "浅草ビューホテル レストラン", desc: "個室ありで授乳・おむつ替えができるホテルレストラン。子連れに優しく落ち着いた雰囲気。", price: "2,000〜3,500円/人" },
              { name: "雷門 三定（てんぷら）", desc: "江戸前天ぷらの老舗。座敷もありベビーカーを畳んで利用可。離乳食期の子連れには少し難易度高め。", price: "2,500〜4,000円/人" },
              { name: "ソラマチ内フードコート", desc: "5階のフードコートはベビーカー走行可・子ども向けメニューあり。混雑時間帯は早めに入るのがコツ。", price: "700〜1,500円/人" },
              { name: "カフェ・ウエスト 浅草店", desc: "ゆったりとしたカフェでベビーカー置き場あり。和洋ケーキとコーヒーで授乳後の休憩に◎", price: "600〜1,200円/人" },
            ].map((r) => (
              <div key={r.name} className="border border-gray-100 rounded-xl p-3 mb-2">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-bold">{r.name}</p>
                  <span className="text-[10px] text-gray-500">{r.price}</span>
                </div>
                <p className="text-xs text-gray-600">{r.desc}</p>
              </div>
            ))}
          </S>

          <S t="🚉 アクセス・ベビーカーでの移動">
            <div className="space-y-3">
              {[
                { line: "東武スカイツリーライン・浅草駅", desc: "エレベーターあり。地上→改札→ホームまでエレベーターで移動可能。" },
                { line: "東京メトロ銀座線・浅草駅", desc: "エレベーターあり（1番出口側）。改札外から地上までバリアフリー対応。" },
                { line: "都営浅草線・浅草駅", desc: "エレベーターあり。A4出口付近が使いやすい。" },
                { line: "つくばエクスプレス・浅草駅", desc: "エレベーターあり。TX浅草駅は比較的新しくバリアフリー完備。" },
              ].map((a) => (
                <div key={a.line} className="flex gap-3 text-sm">
                  <span className="text-base shrink-0">🚉</span>
                  <div>
                    <p className="font-bold text-xs">{a.line}</p>
                    <p className="text-xs text-gray-600">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="📅 モデルコース（赤ちゃん連れ半日）">
            <ol className="space-y-3">
              {[
                { time: "9:30", text: "浅草駅着 → 雷門・仲見世通りを散策（空いている時間帯）" },
                { time: "10:00", text: "浅草寺参拝・おみくじ（境内でベビーカー走行可）" },
                { time: "10:40", text: "隅田公園でひと休み・授乳・おむつ替え" },
                { time: "11:30", text: "東武線に乗り換え → とうきょうスカイツリー駅（隣駅）" },
                { time: "12:00", text: "東京スカイツリータウン・ソラマチでランチ（フードコートが便利）" },
                { time: "13:00", text: "すみだ水族館（0歳〜楽しめる・館内授乳室あり）" },
                { time: "15:00", text: "ソラマチでショッピング・休憩 → 帰宅" },
              ].map((s) => (
                <li key={s.time} className="flex gap-3 text-sm">
                  <span className="shrink-0 text-[11px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full h-fit">{s.time}</span>
                  <span className="text-gray-700">{s.text}</span>
                </li>
              ))}
            </ol>
          </S>

          <ArticleAreaNav currentSlug="asakusa-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
