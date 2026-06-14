import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "春の赤ちゃん連れおでかけスポット特集【2026年】お花見・チューリップ畑・ピクニック | ベビーカーナビ",
  description: "過ごしやすい春は赤ちゃん連れおでかけのベストシーズン！お花見・チューリップ・菜の花畑など春の絶景スポット、ベビーカーでのお花見のコツ、持ち物チェックリストを解説。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-pink-400 via-rose-500 to-orange-400 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">春の赤ちゃん連れおでかけ<br />スポット特集【2026年】</h1>
          <p className="text-[11px] opacity-80 mt-2">お花見・チューリップ・ピクニックの完全ガイド / 読了時間：約7分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年3月" readTime="約7分" />
          <article className="space-y-6">
            <S t="春のおでかけはこんなに素敵">
              <p className="text-sm text-gray-700 leading-relaxed">3〜5月は赤ちゃん連れおでかけの絶好シーズン。気温が穏やかで、花粉が落ち着けば外で過ごしやすい季節です。桜・チューリップ・菜の花と彩り豊かな自然の中で、赤ちゃんの五感を育てましょう。ただしお花見ピークは混雑するため、穴場スポットやタイミングの選び方が重要です。</p>
            </S>

            <S t="お花見おすすめスポット（東京近郊）">
              {[
                { name: "砧公園（世田谷区）", desc: "広大な芝生エリアでピクニックに最適。花見シーズンも比較的ゆったりしておりベビーカーで快適に移動できる。授乳室はパークプラザ内。", tags: ["広い芝生", "授乳室あり", "ベビーカーOK"] },
                { name: "新宿御苑", desc: "東京最大級の桜の名所。ベビーカーOK（一部ルートを除く）。授乳室はインフォメーションセンター内。入園料500円（未就学児無料）。", tags: ["入園料500円", "授乳室あり"] },
                { name: "小石川植物園（文京区）", desc: "桜・枝垂れ桜が美しい植物園。比較的空いており落ち着いてお花見できる穴場。ベビーカーOK。", tags: ["穴場", "静か", "ベビーカーOK"] },
                { name: "昭和記念公園（立川市）", desc: "チューリップ・菜の花・桜が一気に楽しめる。ベビーカー貸出あり・授乳室完備。ピクニックエリアが広く、家族でゆったりできる。", tags: ["授乳室", "ベビーカー貸出", "チューリップ"] },
                { name: "国営ひたち海浜公園（茨城）", desc: "ネモフィラ（4〜5月）の絶景が有名。広い園内はベビーカーOK。茨城・日帰りで行けるおすすめスポット。", tags: ["ネモフィラ絶景", "ベビーカーOK"] },
              ].map((item) => (
                <SC key={item.name} name={item.name} desc={item.desc} tags={item.tags} />
              ))}
            </S>

            <S t="ベビーカーでのお花見 注意点と準備">
              <div className="space-y-2">
                {[
                  { icon: "🌸", tip: "花見ピーク時のベビーカーは歩行困難な混雑に注意", desc: "上野・千鳥ヶ淵などの超人気スポットはピーク時にベビーカーを押せないほど混雑します。穴場スポットか平日午前中を狙いましょう" },
                  { icon: "🌞", tip: "紫外線対策をしっかり", desc: "4月でもUVは強い。帽子・日焼け止めは必須。ベビーカーの幌をしっかり閉めて日陰を作ること" },
                  { icon: "🧺", tip: "レジャーシートと授乳ケープを忘れずに", desc: "公園のベンチは花見シーズン争奪戦。レジャーシートを持参して芝生で授乳できると楽" },
                  { icon: "🌬️", tip: "急な気温変化に備える", desc: "春は昼夜の気温差が大きい。薄手の上着を1枚多く持参すること" },
                ].map((item) => (
                  <div key={item.tip} className="bg-pink-50/40 rounded-xl p-3.5">
                    <div className="text-xs font-bold text-rose-700 mb-1">{item.icon} {item.tip}</div>
                    <p className="text-[11px] text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </S>

            <S t="春のおでかけ 持ち物チェックリスト">
              <div className="grid grid-cols-2 gap-2">
                {["レジャーシート（大きめ）", "日焼け止め・帽子", "薄手の上着（体温調整用）", "飲み物・離乳食", "授乳ケープ", "おむつ・おしりふき", "虫除けスプレー", "ウェットティッシュ"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-pink-50 rounded-lg px-2.5 py-2">
                    <span className="text-rose-400 text-sm">✓</span>
                    <span className="text-[11px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">春は赤ちゃんとのおでかけが最も楽しい季節のひとつ。満開の桜の下でごろんと寝転がる赤ちゃんの写真は一生の宝物になります。超人気スポットは混雑を避けて穴場を選び、紫外線・気温変化の対策をしっかりしてから出かけましょう。素敵な春のおでかけ思い出を作ってください！</p>
            </S>
            <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-bold hover:opacity-90 transition">アプリで春のスポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="text-sm font-bold text-brand-600">{name}</div><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-pink-50 text-pink-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
