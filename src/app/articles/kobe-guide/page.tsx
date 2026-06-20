import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "【2026年】神戸 子連れおでかけ完全ガイド｜王子動物園・ハーバーランド・授乳室情報",
  description: "神戸でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。王子動物園・ハーバーランド・北野異人館・海洋博物館の子連れ攻略法と2泊3日モデルコースを解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/kobe-guide" },
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

export default function KobeGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>神戸ガイド</span>
          </nav>
          <div className="text-4xl mb-2">⚓</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】神戸<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">王子動物園・ハーバーランド・授乳室｜ベビーカー情報完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-blue-800 mb-1">📍 神戸子連れポイントまとめ</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>✅ 王子動物園はベビーカー無料貸出・授乳室2か所</li>
              <li>✅ ハーバーランド・umieはバリアフリー完備・授乳室多数</li>
              <li>✅ 北野異人館エリアは坂道多め → 下から上る順がラク</li>
              <li>✅ 新幹線新神戸駅からベビーカーでアクセスしやすい</li>
            </ul>
          </div>

          <S t="🦁 王子動物園 子連れ完全攻略">
            <SC
              name="神戸市立王子動物園"
              area="灘区"
              baby="授乳室2か所（正門付近・動物科学資料館内）"
              stroller="ベビーカー無料貸出あり、園内舗装済みほぼ全域OK"
              tags={["ベビーカー貸出", "授乳室2か所", "パンダ", "無料エリアあり"]}
              tip="園内はほぼ平坦で歩きやすい。人気のパンダエリアは午前中が空いているため早めの到着がおすすめ。"
            />
          </S>

          <S t="🛍️ ハーバーランド・umie（授乳室・ベビー設備）">
            <SC
              name="umie（ウミエ）"
              area="ハーバーランド"
              baby="授乳室3か所（各フロア）、おむつ替え台完備"
              stroller="ベビーカー貸出あり、全フロアエレベーターあり"
              tags={["ショッピング", "授乳室3か所", "海側テラス", "食事充実"]}
              tip="海側のテラスはベビーカーで散歩しながら海を眺められる開放的なスポット。風が強い日は防寒を。"
            />
            <SC
              name="神戸アンパンマンこどもミュージアム＆モール"
              area="ハーバーランド"
              baby="授乳室あり（ミュージアム内）"
              stroller="館内ほぼ全域ベビーカーOK"
              tags={["アンパンマン", "1歳〜", "屋内遊び場", "キャラクター"]}
              tip="0〜5歳のお子さんに大人気。ミュージアム入場（有料）とショッピングモール（無料）で予算に合わせて楽しめます。"
            />
          </S>

          <S t="🌊 海沿い・公園の子連れスポット">
            <SC
              name="メリケンパーク"
              area="中央区"
              baby="近隣施設トイレあり"
              stroller="ほぼ全域ベビーカーOK・舗装済み"
              tags={["無料", "海沿い", "広場", "写真映え"]}
              tip="神戸港を望む広い公園。授乳ケープ持参で外でのんびり授乳も。ポートタワーのリニューアルで更に魅力アップ。"
            />
            <SC
              name="神戸海洋博物館・カワサキワールド"
              area="メリケンパーク内"
              baby="授乳室あり"
              stroller="館内バリアフリー、エレベーターあり"
              tags={["乗り物好きに◎", "屋内", "科学系", "入館料あり"]}
              tip="実物の新幹線や航空機が展示されており、乗り物好きのお子さんにおすすめ。館内は広くベビーカーで快適に移動できます。"
            />
          </S>

          <S t="🍽️ 子連れランチ・神戸グルメ">
            {[
              { name: "umieレストランフロア（2F）", desc: "授乳室近くで食事できるフロア。洋食・和食・カフェと選択肢が豊富。ベビーチェアも揃っている。", price: "1,000〜2,500円" },
              { name: "南京町（中華街）の点心", desc: "食べ歩きはベビーカーでも楽しめるが、混雑時は大変。両手フリーが必要なため抱っこ紐利用も◎", price: "500〜1,500円" },
              { name: "北野坂のカフェ・ランチ", desc: "外国の雰囲気漂うカフェが多い。坂道の途中にあるため、平坦ルートの確認が必要。", price: "800〜2,000円" },
              { name: "ハーバーランド内ファミレス", desc: "ベビーチェア・授乳室近くの席指定がしやすく、子連れには最も安心感が高い選択肢。", price: "700〜1,800円" },
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

          <S t="📅 子連れ神戸旅行 1泊2日モデルコース">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-black text-gray-500 mb-2">▶ 1日目</p>
                <ol className="space-y-2">
                  {[
                    { time: "10:00", text: "新幹線・新神戸駅着 → ホテルチェックイン（荷物預け）" },
                    { time: "11:00", text: "王子動物園（ベビーカー貸出・授乳室あり）" },
                    { time: "13:30", text: "北野異人館エリア（下から上へ。坂のルート確認を）" },
                    { time: "15:30", text: "ハーバーランド・umie（ショッピング・夕食）" },
                    { time: "18:00", text: "ホテル戻り・就寝準備" },
                  ].map((s) => (
                    <li key={s.time} className="flex gap-3 text-sm">
                      <span className="shrink-0 text-[11px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full h-fit">{s.time}</span>
                      <span className="text-gray-700">{s.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-xs font-black text-gray-500 mb-2">▶ 2日目</p>
                <ol className="space-y-2">
                  {[
                    { time: "9:30", text: "神戸アンパンマンミュージアム（0〜5歳に大人気）" },
                    { time: "12:00", text: "メリケンパーク周辺でランチ" },
                    { time: "13:30", text: "神戸海洋博物館・カワサキワールド" },
                    { time: "15:30", text: "南京町でお土産購入 → 新幹線で帰宅" },
                  ].map((s) => (
                    <li key={s.time} className="flex gap-3 text-sm">
                      <span className="shrink-0 text-[11px] font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full h-fit">{s.time}</span>
                      <span className="text-gray-700">{s.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </S>

          <ArticleAreaNav currentSlug="kobe-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
