import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
export const metadata: Metadata = { title: "雨の日でも大丈夫！赤ちゃんと楽しめる室内スポット特集｜東京 | ベビーカーナビ", description: "雨の日・猛暑日・寒い日でも安心。東京都内のベビーカーで行ける室内おでかけスポットを厳選。ショッピングモール、水族館、科学館、無料の遊び場まで。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">雨の日でも大丈夫！<br />赤ちゃんと楽しめる室内スポット特集</h1>
        <p className="text-[11px] opacity-80 mt-2">東京都内の室内おでかけ先を厳選 / 読了時間：約7分</p>
      </header>
      <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約7分" /><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">梅雨、猛暑、真冬…赤ちゃんとの外出が難しい天候の日でも、「家の中だけでは赤ちゃんもパパママもストレスが溜まる！」という方は多いはず。東京都内には、天候に関係なく快適に過ごせる室内スポットが実はたくさんあります。しかも無料の施設も多い！この記事では、ベビーカーで行きやすい室内スポットを目的別に厳選しました。ベビーカーナビの天気連動おすすめ機能も活用してみてください。</p></S>

        <S t="1. 無料で遊べる室内施設">
          <SC name="景丘の家（恵比寿）" desc="渋谷区運営。4Fに乳幼児専用フロア。木製おもちゃが充実。3Fで離乳食の温めもOK。" link="/spots/3328" />
          <SC name="co渋谷" desc="無印良品監修の子育て広場。カフェ併設で離乳食注文可。" link="/spots/3329" />
          <SC name="パパママ☆すぽっと（池袋）" desc="木育系遊び場。区外でも無料。予約優先制。" link="/spots/3333" />
          <SC name="消防博物館（四谷三丁目）" desc="入館無料。駅直結で雨でも濡れない。消防車の実物展示。" link="/spots/3095" />
          <SC name="東京都庁 展望室" desc="無料で地上202mの絶景。授乳室あり。赤ちゃんも景色に目を輝かせます。" link="/spots/3363" />
          <SC name="東京都水の科学館（有明）" desc="入場無料で水の不思議を体験。ベビーカーのまま入場OK。" link="/spots/3094" />
        </S>

        <S t="2. 水族館・科学館">
          <SC name="サンシャイン水族館（池袋）" desc="空飛ぶペンギンが名物。赤ちゃんも暗い空間で落ち着いて過ごせることも。ベビーカーOK。" link="/spots/3212" />
          <SC name="すみだ水族館" desc="スカイツリー内。完全バリアフリー。おむつ替え室が広い。" link="/spots/3046" />
          <SC name="日本科学未来館" desc="「おやっ？っこ」という親子スペースが充実。プラネタリウムも。" link="/spots/3047" />
          <SC name="地下鉄博物館（葛西）" desc="実物の電車に乗れる。通路が広くベビーカーでも楽々。" link="/spots/3385" />
        </S>

        <S t="3. ショッピングモール（1日過ごせる）">
          <SC name="ららぽーと豊洲" desc="授乳室・レストラン・遊び場がすべて揃う最強モール。100本のスプーン（離乳食無料）もここ。" link="/spots/3008" />
          <SC name="サンシャインシティ（池袋）" desc="水族館・ナンジャタウン・プラネタリウムが館内に。地下通路で駅直結。" link="/spots/3016" />
          <SC name="有明ガーデン" desc="モール全体が子連れに特化。広場や無料遊び場が豊富。" link="/spots/3018" />
          <SC name="ダイバーシティ東京プラザ" desc="リトルプラネットやガンダム。各フロアにおむつ替え台。" link="/spots/3012" />
        </S>

        <S t="4. 有料の室内遊び場">
          <SC name="レゴランド・ディスカバリー・センター東京" desc="デュプロ・ビレッジは小さい子向け。お台場デックス東京ビーチ内。" link="/spots/3390" />
          <SC name="アソボ〜ノ！（水道橋）" desc="0〜2歳専用ハイハイガーデンがある巨大屋内パーク。" link="/spots/3389" />
          <SC name="京王あそびの森 HUGHUG" desc="2歳以下専用はいはいパーク。木のぬくもりある空間。" link="/spots/3387" />
          <SC name="東京あそびマーレ（八王子）" desc="室内で雪遊びができるスノータウン！年中遊べる。" link="/spots/3358" />
        </S>

        <S t="5. 雨の日のおでかけチェックリスト">
          <div className="bg-blue-50/50 rounded-xl p-4">
            <p className="text-xs text-gray-700 leading-relaxed">レインカバー（ベビーカー用）、タオル（2〜3枚）、着替え一式（濡れた場合に備えて）、ビニール袋（濡れた衣類用）、授乳ケープ、室内用の靴下（赤ちゃん用）、おやつ・飲み物。レインカバーは常にベビーカーに付けておくと急な雨でも安心です。</p>
          </div>
        </S>

        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">雨の日こそ「どこに行こう？」のチャンスです。東京は無料の室内施設が充実しているので、お金をかけずに赤ちゃんと楽しい時間を過ごせます。ベビーカーナビの天気連動おすすめ機能を使えば、現在の天気に合わせて自動的に室内スポットをおすすめしてくれるので、ぜひ活用してみてください。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">天気連動おすすめを見る</Link></section>
      </article>          <ArticleAreaNav currentSlug="rainy-day-spots" />
        </main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, link }: any) { return (<div className="border border-gray-100 rounded-xl p-3.5 mb-2"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><p className="text-xs text-gray-600 leading-relaxed mt-1">{desc}</p></div>); }
