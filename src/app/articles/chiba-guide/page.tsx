import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】千葉 子連れおでかけ完全ガイド｜鴨川シーワールド・マザー牧場・幕張",
  description: "千葉でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。鴨川シーワールド・マザー牧場・幕張イオンモール・ディズニー周辺情報を徹底解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/chiba-guide" },
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

export default function ChibaGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>千葉ガイド</span>
          </nav>
          <div className="text-4xl mb-2">🌊</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】千葉<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">鴨川シーワールド・マザー牧場・幕張｜授乳室・ベビーカー情報</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-teal-800 mb-1">📍 千葉子連れポイントまとめ</p>
            <ul className="text-xs text-teal-700 space-y-1">
              <li>✅ 幕張エリア（イオン・幕張メッセ）は都心から近くバリアフリー◎</li>
              <li>✅ 鴨川シーワールドは宿泊込みで行くと余裕を持って楽しめる</li>
              <li>✅ マザー牧場は広大なため電動カート利用がおすすめ</li>
              <li>✅ ディズニー周辺のホテルは赤ちゃん対応が充実している</li>
            </ul>
          </div>

          <S t="🐋 鴨川シーワールド 子連れ攻略">
            <SC
              name="鴨川シーワールド"
              area="鴨川市"
              baby="授乳室2か所（第1水族館・管理棟）"
              stroller="ベビーカー貸出あり、ほぼ全エリア走行可"
              tags={["ショーあり", "海の生き物", "1歳〜", "宿泊可"]}
              tip="シャチのショーは迫力があって赤ちゃんも夢中に。前列の濡れゾーンは避けましょう。電車でのアクセスはバスの乗り換えが必要なため、車での訪問が快適です。"
            />
          </S>

          <S t="🐄 マザー牧場 子連れ攻略">
            <SC
              name="マザー牧場"
              area="富津市"
              baby="授乳室あり（ファームハウス内）"
              stroller="ベビーカー・電動カートあり（一部砂利道）"
              tags={["動物ふれあい", "広大", "1歳〜", "季節の花"]}
              tip="広大な牧場なので電動カート（有料）の利用がおすすめ。子ひつじや子ぶたへのえさやりは赤ちゃんも大喜びです。季節の花畑は写真撮影に最適。"
            />
          </S>

          <S t="🏬 幕張エリア（都心から30分）">
            <SC
              name="イオンモール幕張新都心"
              area="幕張"
              baby="授乳室12か所以上、おむつ替え台完備"
              stroller="ベビーカー貸出あり、全フロアエレベーターあり"
              tags={["授乳室12+", "ショッピング", "電車アクセス◎", "雨の日OK"]}
              tip="日本最大級のイオンモール。ベビー専門エリアが充実しており、おでかけ帰りの買い物にも便利。海浜幕張駅から徒歩約10分。"
            />
            <SC
              name="千葉市科学館（きぼーる）"
              area="千葉市中央区"
              baby="授乳室あり（3F）"
              stroller="館内バリアフリー・エレベーター完備"
              tags={["科学館", "無料エリアあり", "屋内", "雨の日OK"]}
              tip="プラネタリウムは赤ちゃんと一緒に入れる回があります。事前に公式サイトで「赤ちゃんタイム」を確認して。入場無料エリアも多い。"
            />
          </S>

          <S t="🌿 その他おすすめスポット">
            <SC
              name="千葉市動物公園"
              area="千葉市若葉区"
              baby="授乳室あり（サービスセンター内）"
              stroller="ほぼ全域ベビーカーOK・舗装済み"
              tags={["動物園", "モノレール隣接", "コスパ◎"]}
              tip="千葉都市モノレール「動物公園駅」直結で電車でのアクセスが楽。入園料も比較的リーズナブルで半日コースに最適です。"
            />
            <SC
              name="茂原公園・あじさい園"
              area="茂原市"
              baby="管理棟トイレ・おむつ替えあり"
              stroller="全域ベビーカーOK"
              tags={["無料", "自然", "季節の花", "広い"]}
              tip="6月のあじさいが有名。無料で広い敷地内を散歩できる穴場スポット。駐車場も無料で車でのアクセスが便利。"
            />
          </S>

          <S t="📅 モデルコース（幕張・日帰り）">
            <ol className="space-y-3">
              {[
                { time: "10:00", text: "海浜幕張駅着 → イオンモール幕張でランチ（フードコート）" },
                { time: "12:00", text: "授乳・おむつ替え（授乳室12か所以上）→ ショッピング" },
                { time: "14:00", text: "千葉市科学館きぼーる（屋内・無料エリアあり）" },
                { time: "16:00", text: "帰宅、または近隣カフェで休憩" },
              ].map((s) => (
                <li key={s.time} className="flex gap-3 text-sm">
                  <span className="shrink-0 text-[11px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full h-fit">{s.time}</span>
                  <span className="text-gray-700">{s.text}</span>
                </li>
              ))}
            </ol>
          </S>

          <ArticleAreaNav currentSlug="chiba-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
