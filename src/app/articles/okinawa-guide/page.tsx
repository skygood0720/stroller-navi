import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】沖縄 子連れおでかけ完全ガイド｜授乳室・水族館・ビーチベビーカー情報 | ベビーカーナビ",
  description: "沖縄でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。美ら海水族館・首里城・イオンモール沖縄ライカムのベビー設備を詳しく解説。赤ちゃんとの沖縄旅行完全ガイド。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】沖縄<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">美ら海・ビーチ・水族館で最高の思い出を / 読了時間：約9分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約9分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">沖縄は赤ちゃん連れ旅行の人気ナンバーワンといっても過言ではありません。一年を通じて温暖な気候、世界屈指の透明度を誇るビーチ、そして美ら海水族館。飛行機でのアクセスは要注意ですが、現地に着いてしまえば広いショッピングモールや授乳室完備のリゾートホテルが赤ちゃんとの滞在をサポートしてくれます。</p>
            </S>

            <S t="赤ちゃん連れ沖縄旅行の注意点">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <p className="text-xs font-bold text-amber-800">⚠️ 出発前に確認しよう</p>
                <p className="text-xs text-gray-700">✔ 飛行機は生後8日〜搭乗OK（航空会社・路線による）</p>
                <p className="text-xs text-gray-700">✔ 夏場は熱中症・日焼けに要注意（日陰・水分補給必須）</p>
                <p className="text-xs text-gray-700">✔ レンタカー利用時はチャイルドシートを必ず予約</p>
                <p className="text-xs text-gray-700">✔ 那覇市内は公共交通（ゆいレール）でベビーカー移動可</p>
                <p className="text-xs text-gray-700">✔ 美ら海水族館は那覇から車で約2時間（レンタカー推奨）</p>
              </div>
            </S>

            <S t="1. おすすめスポット">
              <SC name="沖縄美ら海水族館" desc="世界最大級のジンベエザメ水槽は圧巻。ベビーカー貸出無料。館内全域バリアフリー。授乳室は1F入口近くに完備。隣の熱帯ドリームセンター・イルカラグーンも合わせて楽しめる。" tags={["授乳室", "ベビーカー貸出", "バリアフリー"]} tip="開館直後の8:30〜9:00は一番空いています。ジンベエザメの給餌タイム（11:00・14:00・16:00）に合わせて計画を。" />
              <SC name="首里城公園" desc="琉球王国の城跡。無料の外苑エリアはベビーカーでアクセス可。正殿エリアは石畳で段差あり（スロープルートあり）。授乳室は公園内の総合案内所。2019年の火災から復元工事が進行中。" tags={["世界遺産", "無料エリアあり", "スロープあり"]} tip="無料エリアの御苑は広い芝生でピクニックにも最適。ゆいレール首里駅から徒歩15分。" />
              <SC name="イオンモール沖縄ライカム" desc="沖縄最大のショッピングモール。授乳室は各フロアに計7か所。ベビーカー貸出あり。フードコートにはベビーチェアが多数。雨の日でも一日中楽しめる。" tags={["授乳室7か所", "ベビーカー貸出", "雨の日OK"]} tip="3Fの赤ちゃんルームはベビーバス・電子レンジ・おむつ替え台が充実。" />
              <SC name="ビオスの丘" desc="亜熱帯の自然の中で湖水ボートや水牛車を楽しめる体験型施設。ベビーカーOK。授乳室あり。赤ちゃんでも楽しめる動物ふれあいコーナーが人気。" tags={["自然体験", "授乳室", "動物ふれあい"]} tip="ボート乗船は0歳でも可。船上から亜熱帯植物を見上げる体験は忘れられない思い出に。" />
              <SC name="那覇市内国際通り周辺" desc="那覇の中心商店街。ゆいレールでベビーカーのまま移動可（各駅にエレベーター完備）。牧志公設市場付近のアーケードはベビーカーで通れる幅あり。周辺の百貨店・デパートに授乳室が揃う。" tags={["ゆいレール直結", "アーケード", "授乳室あり"]} tip="夜市は混雑するので、ベビーカーは夕方4時までに切り上げるのが無難。" />
            </S>

            <S t="2. 子連れランチ">
              <RC name="沖縄そば処 しむじょう" cuisine="沖縄そば" price="900〜1,500円" desc="那覇の老舗沖縄そば。子ども椅子あり。ソーキそばのコラーゲンたっぷりのスープは離乳食後期の赤ちゃんにも◎。" tags={["子ども椅子", "名物グルメ"]} />
              <RC name="美ら海水族館内レストラン イノー" cuisine="沖縄料理" price="1,200〜2,500円" desc="水族館の海が見えるレストラン。ベビーチェアあり。水族館入場不要で利用可能。テーブル席はゆったり広め。" tags={["ベビーチェア", "水族館内"]} />
              <RC name="イオンモール ライカム フードコート" cuisine="多国籍" price="600〜1,500円" desc="100席以上のベビーチェア完備。沖縄料理から洋食・中華まで選択肢豊富。授乳室・おむつ替えが直近にある安心感。" tags={["ベビーチェア多数", "選択肢豊富"]} />
            </S>

            <S t="3. 授乳室・おむつ替えMAP">
              <div className="space-y-2">
                <TI name="美ら海水族館 1F入口近く" desc="授乳室・ミルク用お湯・おむつ替え台・休憩ソファ" />
                <TI name="イオンモール沖縄ライカム 3F赤ちゃんルーム" desc="授乳室・ベビーバス・電子レンジ・おむつ替え台" />
                <TI name="那覇空港 国内線2F" desc="授乳室・おむつ替え台（出発ロビー内）" />
                <TI name="ゆいレール 牧志駅・県庁前駅" desc="多機能トイレ（おむつ替え台）" />
                <TI name="DFS T ギャラリア 沖縄" desc="授乳室・おむつ替え台" />
              </div>
            </S>

            <S t="📍 おすすめモデルコース（2泊3日）">
              <div className="bg-teal-50/40 rounded-xl p-4 mb-3">
                <h3 className="text-sm font-bold text-teal-700 mb-2">1日目：那覇観光</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>午前：那覇空港着→ホテルへ（ゆいレール利用）</p>
                  <p>午後：首里城公園の無料エリアを散策</p>
                  <p>夕方：国際通りをぶらぶら・沖縄そばで夕食</p>
                </div>
              </div>
              <div className="bg-blue-50/40 rounded-xl p-4 mb-3">
                <h3 className="text-sm font-bold text-blue-700 mb-2">2日目：美ら海水族館</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>8:30 美ら海水族館 開館直後に入館</p>
                  <p>11:00 ジンベエザメ給餌タイム鑑賞</p>
                  <p>12:30 館内レストランでランチ＆授乳休憩</p>
                  <p>14:00 海洋博公園・ビーチ周辺を散策</p>
                  <p>17:00 ホテルへ戻る</p>
                </div>
              </div>
              <div className="bg-green-50/40 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-700 mb-2">3日目：ショッピング＆帰宅</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>午前：イオンモール ライカムで授乳＆おみやげ</p>
                  <p>午後：那覇空港へ→帰宅</p>
                </div>
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">沖縄は赤ちゃん連れ旅行の中で最高クラスの満足度を誇ります。美ら海水族館のバリアフリー設備、イオンモールの充実した授乳室、ゆいレールのエレベーター完備など、インフラが整っています。夏場の熱中症対策と飛行機の搭乗制限を確認した上で、ぜひ家族で沖縄の青い海を楽しんでください。</p>
            </S>
            <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-bold hover:opacity-90 transition">アプリで沖縄のスポットを探す</Link>
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
