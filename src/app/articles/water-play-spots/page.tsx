import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "赤ちゃんと水遊び！東京近郊おすすめスポット15選【2026年夏】無料の噴水・じゃぶじゃぶ池も | ベビーカーナビ",
  description: "赤ちゃん・0歳〜2歳と楽しめる水遊びスポットを東京近郊から15か所厳選。無料のじゃぶじゃぶ池・噴水広場・ウォーターパーク。授乳室・おむつ替え情報付き。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">赤ちゃんと水遊び！<br />東京近郊おすすめ15選</h1>
          <p className="text-[11px] opacity-80 mt-2">無料じゃぶじゃぶ池から本格ウォーターパークまで / 読了時間：約7分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約7分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">夏の赤ちゃんとのおでかけの定番といえば水遊び！ジャバジャバと水しぶきを浴びて大喜びする赤ちゃんの笑顔は格別です。でも「どこに行けばいい？」「安全？」「授乳室は？」と心配も多いですよね。この記事では安心して連れて行ける水遊びスポットを厳選してご紹介します。</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 mt-3">
                <p className="text-xs font-bold text-amber-800">⚠️ 水遊びの注意点</p>
                <p className="text-xs text-gray-700 mt-1">・熱中症対策（帽子・水分補給・日陰休憩）は必須</p>
                <p className="text-xs text-gray-700">・赤ちゃんは日焼け止め＋ラッシュガードを着用</p>
                <p className="text-xs text-gray-700">・着替え・バスタオルは多めに持参</p>
                <p className="text-xs text-gray-700">・オムツ着用の赤ちゃんはプールNGの施設も多い</p>
              </div>
            </S>

            <S t="【無料】じゃぶじゃぶ池・噴水広場">
              {[
                { name: "砧公園 水遊び広場（世田谷区）", desc: "毎年7〜8月に開放される無料の水遊び場。噴水・シャワー・流れる水路があり0歳から楽しめる。オムツ交換所あり。管理棟に授乳スペースあり。", tags: ["無料", "授乳スペース", "0歳〜OK"] },
                { name: "昭和記念公園 ふわふわドームと水遊び場（立川市）", desc: "じゃぶじゃぶ池は0歳から利用可。水深は最大15cm程度。更衣室・トイレ・授乳室完備。園内はベビーカーOK。入園料450円。", tags: ["授乳室あり", "更衣室あり", "ベビーカーOK"] },
                { name: "光が丘公園 じゃぶじゃぶ池（練馬区）", desc: "都内有数の広さを誇る無料のじゃぶじゃぶ池。木陰も多く熱中症対策がしやすい。水深は浅く安全。近くに授乳所あり。", tags: ["無料", "木陰あり", "ベビーカーOK"] },
                { name: "国立競技場 外苑いちょう並木前 噴水", desc: "夏期に噴水が開放されて水遊びができる。ベビーカー移動しやすい平坦エリア。近隣のフードコートで授乳・食事可。", tags: ["中心部", "ベビーカーOK"] },
                { name: "お台場潮風公園 水辺広場", desc: "お台場の海を眺めながら水遊びができる。海水浴場と隣接。無料。夏の週末はファミリーで賑わう。おむつ替えはトイレ内で。", tags: ["無料", "海が見える", "夏限定"] },
              ].map((item) => (
                <SC key={item.name} name={item.name} desc={item.desc} tags={item.tags} />
              ))}
            </S>

            <S t="【有料】プール・ウォーターパーク">
              {[
                { name: "よみうりランド プールジャンボプール（稲城市）", desc: "スライダー・波のプール・幼児専用プールが充実。赤ちゃん（0歳〜）が入れる「ベビーゾーン」あり。授乳室完備。ロッカー・シャワー完備で長時間滞在可能。", tags: ["ベビーゾーンあり", "授乳室", "シャワー完備"] },
                { name: "東京サマーランド（あきる野市）", desc: "屋内・屋外両方のプールが楽しめる。流れるプールは0歳〜利用可。授乳室あり。雨でも屋内プールで楽しめるのが強み。", tags: ["屋内プールあり", "授乳室", "雨でもOK"] },
                { name: "LaLaport TOKYO-BAY 内のキッズ噴水（船橋市）", desc: "ショッピングモール内のキッズ向け噴水エリア。無料で水遊び可能。授乳室はモール内に複数あり。買い物と組み合わせやすい。", tags: ["無料", "授乳室多数", "雨でもOK"] },
              ].map((item) => (
                <SC key={item.name} name={item.name} desc={item.desc} tags={item.tags} />
              ))}
            </S>

            <S t="水遊び持ち物チェックリスト">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "水遊び用オムツ（必要に応じて）", "ラッシュガード・水着", "日焼け止め（SPF50以上）", "帽子（つば広タイプ）",
                  "着替え3セット", "バスタオル2枚", "サンダル（脱ぎ履きしやすいもの）", "水筒（麦茶たっぷり）",
                  "ウォータープルーフのオムツポーチ", "テント・タープ（日陰確保）",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-cyan-50 rounded-lg px-2.5 py-2">
                    <span className="text-cyan-500 text-sm">✓</span>
                    <span className="text-[11px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">水遊びは赤ちゃんの感覚刺激にとって最高の体験のひとつ。準備をしっかりして熱中症・日焼けに気を付ければ、大切な夏の思い出になります。まずは近所の無料じゃぶじゃぶ池から始めて、慣れてきたらプールデビューを目指してみましょう！</p>
            </S>
            <section className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold hover:opacity-90 transition">アプリで水遊びスポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="text-sm font-bold text-brand-600">{name}</div><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
