import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】広島 子連れおでかけ完全ガイド｜授乳室・宮島・平和公園ベビーカー情報 | ベビーカーナビ",
  description: "広島でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。宮島・平和記念公園・広島市植物公園のベビー設備と、ベビーカーでの移動ルートを詳しく解説。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】広島エリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">宮島・平和公園・植物公園を快適に周る / 読了時間：約8分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">広島といえば宮島の厳島神社が有名ですが、平和記念公園・広島市植物公園・広島城など、ベビーカーで回りやすいスポットが豊富です。宮島へはフェリーでアクセスでき、ベビーカーのまま乗船可能。平和の大切さを赤ちゃんと一緒に感じながら、家族の思い出を作れる旅先です。</p>
            </S>

            <S t="1. おすすめスポット">
              <SC name="宮島（厳島神社）" desc="ベビーカーは鳥居周辺の砂浜を除いてほぼOK。参道の石畳は幅広く移動しやすい。授乳室は表参道商店街の「宮島交流館」内にあり。宮島口フェリーターミナルにもおむつ替え台完備。" tags={["フェリーOK", "授乳室あり", "世界遺産"]} tip="引き潮の時間帯に合わせると鳥居の根元まで歩いて行けます（10〜15kg程度のベビーカーは砂浜は難しいのでスリングを持参すると便利）。" />
              <SC name="平和記念公園" desc="広い芝生と舗装通路でベビーカーOK。資料館は特定エリアのみ（乳幼児連れは見学制限あり）。公園内のトイレにおむつ替え台。ピースパーク内のカフェで休憩もできます。" tags={["ベビーカーOK", "広い公園", "無料"]} tip="平日早朝〜午前中は観光客が少なく、ゆっくり見学できます。" />
              <SC name="広島市植物公園" desc="約3,000種の植物が楽しめる緑豊かな公園。温室はベビーカーOK。授乳室は植物公園の管理棟内。スロープも完備。入園料260円（高校生以下無料）。" tags={["スロープ完備", "授乳室", "一部無料"]} tip="バラ園（5月・11月）とクリスマスローズ（2〜3月）の時期は特に美しい。" />
              <SC name="ひろしま美術館" desc="印象派の作品が充実。ベビーカーでの入館OK。ソファ席が多く授乳スペースもあり（係員に要相談）。中央公園内にあり、公園散策と組み合わせられる。" tags={["ベビーカーOK", "休憩スペース充実"]} tip="観覧後は隣の中央公園でシートを広げてお昼休憩がおすすめ。" />
              <SC name="エディオンピースウイング広島（サンフレッチェ広島スタジアム）" desc="2024年開業の新スタジアム。ファミリー席・授乳室完備。試合日以外もスタジアム周辺を散策できる。中央公園内で公共交通アクセスも良好。" tags={["授乳室", "ファミリー席", "新施設"]} tip="非試合日は無料開放エリアでベビーカーのまま見学可能。" />
            </S>

            <S t="2. 子連れランチ">
              <RC name="広島お好み物語 駅前広場店" cuisine="お好み焼き" price="1,000〜1,800円" desc="広島駅ビル近く。子ども椅子あり。広島風お好み焼きを鉄板を囲んで家族で楽しめる。テイクアウトも可能。" tags={["子ども椅子あり", "名物グルメ"]} />
              <RC name="エールエール地下街 グルメフロア" cuisine="多国籍" price="800〜2,000円" desc="広島駅直結の地下街。天候関係なくアクセス◎。ベビーカーOKの店舗多数。授乳室は近くの商業施設で。" tags={["駅直結", "雨の日OK"]} />
              <RC name="宮島口 牡蠣小屋" cuisine="海鮮" price="1,500〜3,000円" desc="フェリーターミナル周辺に牡蠣小屋が集中。煙で赤ちゃんに注意が必要だが、テーブル席のある店も多い。焼き牡蠣は地元の味。" tags={["海鮮", "テーブル席あり"]} />
            </S>

            <S t="3. 授乳室・おむつ替えMAP">
              <div className="space-y-2">
                <TI name="宮島口フェリーターミナル" desc="授乳室・おむつ替え台（宮島への乗船前後に利用可）" />
                <TI name="宮島 宮島交流館" desc="授乳室・おむつ替え台" />
                <TI name="広島駅ビルアッセ 3F" desc="授乳室・おむつ替え台・ミルクお湯" />
                <TI name="そごう広島 4Fベビールーム" desc="授乳室・おむつ替え台・ウォーマー" />
                <TI name="平和記念公園内トイレ" desc="多機能トイレ・おむつ替え台" />
              </div>
            </S>

            <S t="📍 おすすめモデルコース">
              <div className="bg-brand-50/30 rounded-xl p-4 mb-3">
                <h3 className="text-sm font-bold text-brand-700 mb-2">⛩️ 宮島日帰りコース</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>9:00 広島駅から宮島口へ（JR25分）</p>
                  <p>9:30 フェリーで宮島へ（10分）</p>
                  <p>10:00 厳島神社・参道散策</p>
                  <p>12:00 参道の牡蠣グルメでランチ</p>
                  <p>13:30 フェリーで戻る</p>
                  <p>14:00 広島駅でお好み焼き</p>
                </div>
              </div>
              <div className="bg-green-50/30 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-700 mb-2">🌿 市内のんびりコース</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>10:00 平和記念公園を散策</p>
                  <p>11:30 中央公園でピクニックランチ</p>
                  <p>13:00 ひろしま美術館でアート鑑賞</p>
                  <p>15:00 そごう広島でショッピング＆授乳休憩</p>
                </div>
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">広島は宮島という最高のベビーカースポットを擁しつつ、市内も公園・美術館・ショッピングが充実しています。宮島フェリーはベビーカーのまま乗れるので移動のストレスがありません。牡蠣・お好み焼きなど大人のグルメも充実しているので、子育て世代の旅行先として高くおすすめできます。</p>
            </S>
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリで広島のスポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags, tip }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="text-sm font-bold text-brand-600">{name}</div><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1 mb-2">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div>{tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}</div>); }
function RC({ name, cuisine, price, desc, tags }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="flex items-center gap-2 mb-1"><div className="text-sm font-bold text-brand-600">{name}</div><span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span><span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span></div><p className="text-xs text-gray-600 mt-1 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
function TI({ name, desc }: any) { return (<div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5"><span className="text-sm">🍼</span><div><div className="text-xs font-bold text-purple-700">{name}</div><div className="text-[11px] text-gray-500">{desc}</div></div></div>); }
