import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "アンパンマンミュージアム 子連れ完全ガイド【2026年】横浜・福岡・神戸の授乳室・混雑・料金",
  description: "横浜・福岡・神戸のアンパンマンミュージアム子連れガイド。授乳室・ベビーカー情報・混雑を避けるコツ・料金・持ち物リストを完全解説。0歳〜5歳に大人気のスポット。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/anpanman-museum" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function AnpanmanMuseum() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>アンパンマンミュージアム</span>
          </nav>
          <div className="text-4xl mb-2">🍞</div>
          <h1 className="text-xl font-black leading-snug">
            アンパンマンミュージアム<br />子連れ完全ガイド【2026年】
          </h1>
          <p className="text-xs text-white/80 mt-2">横浜・福岡・神戸｜授乳室・混雑回避・料金・持ち物リスト</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-red-800 mb-2">🍞 アンパンマンミュージアムの基本情報</p>
            <div className="space-y-1 text-xs text-red-700">
              <p>• 全国に<strong>横浜・仙台・福岡・神戸・名古屋</strong>の5か所</p>
              <p>• ミュージアム（有料）＋ モール（無料）の2エリア構成</p>
              <p>• 対象年齢：<strong>0〜5歳</strong>が特に楽しめる</p>
              <p>• 日時指定チケット制（オンライン事前購入推奨）</p>
            </div>
          </div>

          <S t="🗺️ 各地のアンパンマンミュージアム比較">
            <div className="space-y-3">
              {[
                { name: "横浜アンパンマンこどもミュージアム", area: "横浜・みなとみらい", access: "みなとみらい線「みなとみらい駅」から徒歩5分", baby: "授乳室あり（3F）", stroller: "館内ベビーカーOK（一部エリアは預かり）", note: "ハーバーランド・umieとセットで観光できる好立地。屋内型で雨の日も◎" },
                { name: "神戸アンパンマンこどもミュージアム&モール", area: "神戸・ハーバーランド", access: "「ハーバーランド」駅すぐ", baby: "授乳室あり（ミュージアム内）", stroller: "館内ほぼ全域ベビーカーOK", note: "神戸港の海を望む立地。ハーバーランドで食事→ミュージアムのセットコースが人気。" },
                { name: "福岡アンパンマンこどもミュージアムinモール", area: "福岡・博多", access: "「博多駅」から徒歩3分", baby: "授乳室あり", stroller: "館内ベビーカーOK", note: "博多駅直結で新幹線でのアクセスが便利。九州旅行の1スポットとして立ち寄りやすい。" },
                { name: "仙台アンパンマンこどもミュージアム&モール", area: "仙台・新寺", access: "「地下鉄仙台駅」から約5分", baby: "授乳室あり（ミュージアム内）", stroller: "館内ベビーカーOK", note: "東北唯一のアンパンマンミュージアム。仙台観光とセットで。" },
              ].map((m) => (
                <div key={m.name} className="border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-bold mb-1">{m.name}</p>
                  <p className="text-[10px] text-gray-400 mb-2">📍 {m.area} | {m.access}</p>
                  <p className="text-xs text-gray-600 mb-1">🍼 {m.baby}</p>
                  <p className="text-xs text-gray-600 mb-2">🚼 {m.stroller}</p>
                  <p className="text-[11px] text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg">💡 {m.note}</p>
                </div>
              ))}
            </div>
          </S>

          <S t="⏰ 混雑を避けるコツ">
            <div className="space-y-2">
              {[
                { tip: "平日の午前中（10〜12時）を狙う", detail: "土日・祝日・夏休み・GWは激混み。平日の開館直後が最もすいています。" },
                { tip: "日時指定チケットを事前にオンライン購入", detail: "現地でのチケット購入は長蛇の列になることも。公式サイトから事前購入すれば並ばずに入れます。" },
                { tip: "昼食は11時前か14時以降に", detail: "12〜13時はレストランが混雑のピーク。早めか遅めの食事にずらすと快適に食べられます。" },
                { tip: "キャラクターショーの時間を事前確認", detail: "ショーの時間に合わせてスケジュールを組むと子どもが大喜び。入館直後にスケジュールを確認して。" },
              ].map((t, i) => (
                <div key={i} className="flex gap-3 bg-yellow-50 rounded-xl p-3">
                  <span className="text-base shrink-0">💡</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-900 mb-0.5">{t.tip}</p>
                    <p className="text-xs text-yellow-700">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="🎒 持ち物チェックリスト">
            <div className="space-y-1">
              {[
                "✅ 日時指定チケット（スマホ画面でOK）",
                "✅ 着替え（テンション上がって汗だく・飲みこぼし対策）",
                "✅ おやつ（園内フードは高め・待ち時間のぐずり対策に）",
                "✅ 抱っこ紐（ベビーカーが込み合う時間帯用）",
                "✅ おむつ多め（テンションが高いとうんちが増える！）",
                "✅ カメラ（アンパンマンとの写真撮影タイムあり）",
                "✅ 手口ふき（チョコレートでベタベタになる）",
                "✅ 折りたたみベビーカー（混雑時に素早くたためると便利）",
              ].map((i) => (
                <p key={i} className="text-xs text-gray-700">{i}</p>
              ))}
            </div>
          </S>

          <S t="💰 料金の目安（横浜の場合）">
            <div className="space-y-2">
              {[
                { type: "大人（高校生以上）", price: "2,200円" },
                { type: "小・中学生", price: "1,600円" },
                { type: "1歳〜就学前", price: "1,600円" },
                { type: "0歳（1歳未満）", price: "無料" },
                { type: "モールのみ（無料エリア）", price: "入場無料" },
              ].map((r) => (
                <div key={r.type} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm">{r.type}</span>
                  <span className="text-sm font-bold text-brand-500">{r.price}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-2">※各施設・時期により料金が異なります。公式サイトで最新情報をご確認ください。</p>
          </S>

          <ArticleAreaNav currentSlug="anpanman-museum" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
