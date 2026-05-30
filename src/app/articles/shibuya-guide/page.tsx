import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】渋谷エリア 子連れおでかけ完全ガイド｜授乳室・ランチ・無料遊び場まとめ | ベビーカーナビ",
  description:
    "渋谷・表参道・代官山・恵比寿のベビーカーで行ける授乳室、子連れランチ、無料の室内遊び場、穴場の屋上庭園を完全網羅。景丘の家・co渋谷・MIYASHITA PARKなど20以上のスポットを紹介。",
  keywords: [
    "渋谷", "子連れ", "ベビーカー", "授乳室", "表参道", "代官山", "恵比寿",
    "ランチ", "レストラン", "遊び場", "赤ちゃん", "おむつ替え", "無料", "東京",
  ],
  openGraph: {
    title: "渋谷エリア 子連れおでかけ完全ガイド | ベビーカーナビ",
    description: "渋谷・表参道・代官山・恵比寿で赤ちゃんと安心して過ごせるスポット20選。",
    url: "https://stroller-navi.vercel.app/articles/shibuya-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function ShibuyaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "渋谷エリア 子連れおでかけ完全ガイド",
    "description": "渋谷・表参道・代官山・恵比寿の授乳室・子連れランチ・遊び場を完全網羅",
    "url": "https://stroller-navi.vercel.app/articles/shibuya-guide",
    "datePublished": "2026-04-20",
    "dateModified": "2026-04-20",
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">お役立ち記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">
            【2026年最新】渋谷エリア<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">
            渋谷・表参道・代官山・恵比寿 / 読了時間：約10分
          </p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約7分" />
          <article className="space-y-6">

            {/* 目次 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <div className="space-y-1.5 text-xs text-gray-600">
                <p>1. 渋谷エリアの無料で遊べる室内スポット5選</p>
                <p>2. ベビーカー散歩に最適！穴場の屋上庭園4選</p>
                <p>3. 子連れランチにおすすめのレストラン6選</p>
                <p>4. 授乳室・おむつ替えスポット完全MAP</p>
                <p>5. エリア別おすすめモデルコース（渋谷・代官山・恵比寿）</p>
              </div>
            </section>

            {/* イントロ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                「渋谷＝若者の街」というイメージが強いですが、実は渋谷区は子育て支援施設が非常に充実している自治体のひとつです。無料の子育て広場「co渋谷」「景丘の家」「かぞくのアトリエ」など、0歳から利用できる質の高い施設が点在しています。さらに表参道・代官山・恵比寿と個性的な街が隣接しており、それぞれにベビーカーで楽しめるスポットがあります。この記事では、渋谷エリア（渋谷・表参道・代官山・恵比寿）を4つのエリアに分けて、子連れで本当に使えるスポットを厳選してご紹介します。
              </p>
            </section>

            {/* 1. 無料室内スポット */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                1. 無料で遊べる室内スポット5選
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                渋谷区は子育て支援に力を入れており、無料で利用できる質の高い施設が揃っています。区外在住でも利用可能な施設ばかりです。
              </p>

              <SpotCard
                name="景丘の家（恵比寿）"
                desc="渋谷区が運営するおしゃれな交流施設。4Fの乳幼児専用フロアには木製の良質なおもちゃが充実しています。3Fの飲食フロアには電子レンジがあり離乳食の温めもOK。こども食堂も併設されており、地域の温かさを感じられる場所です。"
                tags={["無料", "授乳室", "木のおもちゃ", "離乳食温め可", "こども食堂"]}
                link="/spots/3328"
                tip="恵比寿駅から徒歩5分。4Fが0〜2歳向けなので大きい子との接触を心配する必要がありません"
              />
              <SpotCard
                name="co渋谷（子育て支援センター）"
                desc="渋谷PARCO近くにある子育て広場。無印良品がデザイン監修した木のぬくもりある空間で、段差や上り降りできるスペースがあり、赤ちゃんの運動機能の発達にも◎。カフェが併設されており、離乳食も注文できる珍しい施設です。"
                tags={["無料", "無印良品監修", "カフェ併設", "離乳食注文可"]}
                link="/spots/3329"
                tip="渋谷PARCOの屋上公園→co渋谷のコースが最強の半日プランです"
              />
              <SpotCard
                name="子育てひろば BUTTER（代官山）"
                desc="渋谷東しぜんの国こども園が運営する穴場の子育てひろば。ガラス張りで自然光が入る明るい空間に、有名ブランドの良質なおもちゃが揃います。代官山駅徒歩7分。知る人ぞ知る隠れた名施設です。"
                tags={["無料", "穴場", "良質なおもちゃ", "ガラス張り"]}
                link="/spots/3330"
                tip="近くの代官山T-SITEの蔦屋書店で絵本を見て、BUTTERで遊ぶのが定番コースです"
              />
              <SpotCard
                name="Playground 渋谷kids"
                desc="渋谷駅から徒歩圏内の室内遊び場。抗菌マット完備で衛生面も安心。ボールプールやおままごとコーナーがあり、天候を気にせず遊べます。"
                tags={["抗菌マット", "ボールプール", "おままごと"]}
                link="/spots/3359"
                tip="渋谷で急に雨が降ったときの避難先としても覚えておくと便利です"
              />
              <SpotCard
                name="ITOCHU SDGs STUDIO KIDS PARK（外苑前）"
                desc="伊藤忠商事が運営する予約制の無料遊び場。SDGsをテーマにしたデジタル・アナログの遊びで、赤ちゃんの感性を刺激します。表参道・渋谷エリアからもアクセスしやすい外苑前駅すぐ。"
                tags={["無料", "予約制", "デジタル体験", "SDGs"]}
                link="/spots/3340"
                tip="予約制なので混雑の心配なし。人気なので早めの予約がおすすめです"
              />
            </section>

            {/* 2. 屋上庭園 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                2. ベビーカー散歩に最適！穴場の屋上庭園4選
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                渋谷エリアには意外と知られていない屋上庭園が複数あります。テイクアウトコーヒー片手にのんびり過ごせる、子連れの味方です。
              </p>

              <SpotCard
                name="MIYASHITA PARK（宮下公園）"
                desc="渋谷駅から徒歩3分。商業施設の屋上に芝生広場がある都市型公園。エレベーター・スロープ完備でベビーカーでも楽にアクセスできます。1Fにはカフェやショップが並び、買い物ついでにお散歩が楽しめます。"
                tags={["芝生広場", "エレベーター", "スロープ", "カフェ併設"]}
                link="/spots/3203"
                tip="渋谷駅から原宿方面に向かう途中にあるので、渋谷散策のスタートに最適です"
              />
              <SpotCard
                name="渋谷PARCO 屋上公園"
                desc="渋谷PARCOの屋上に小さな芝生スペースがあります。あまり知られていない穴場で、テイクアウトコーヒーを片手にのんびりできます。co渋谷とセットで訪れるのがおすすめ。"
                tags={["穴場", "芝生", "テイクアウト可"]}
                link="/spots/3338"
                tip="1Fのカフェでドリンクを買って屋上へ。空いていて静かに過ごせます"
              />
              <SpotCard
                name="アトレ恵比寿 屋上庭園"
                desc="恵比寿駅直結のアトレ屋上に、貸し菜園やハーブ栽培の庭園があります。芝生広場もあり、歩き始めの赤ちゃんが安全に歩く練習ができる場所として人気。駅直結なので雨でもアクセス楽々。"
                tags={["駅直結", "芝生", "ハーブ栽培", "授乳室近い"]}
                link="/spots/3337"
                tip="歩き始めの1歳前後の赤ちゃんに特におすすめ。転んでも芝生なら安心です"
              />
              <SpotCard
                name="代々木公園"
                desc="渋谷エリア最大の公園。広大な芝生広場はピクニックシートを広げて赤ちゃんを自由に遊ばせるのに最適。原宿門・参宮橋門付近に多機能トイレ（おむつ替え台あり）があります。"
                tags={["広大な芝生", "おむつ替え", "無料", "サイクリング"]}
                link="/spots/3028"
                tip="原宿門から入ると噴水広場が近く、赤ちゃんも水の音を楽しめます"
              />
            </section>

            {/* 3. レストラン */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                3. 子連れランチにおすすめのレストラン6選
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                渋谷エリアはおしゃれなカフェやレストランが多い一方、赤ちゃん連れだと入りにくい雰囲気のお店も…。ここでは実際にベビーカー入店OK・子連れ歓迎を確認済みのお店だけを厳選しました。
              </p>

              <RestCard
                name="chano-ma 渋谷公園通り"
                cuisine="カフェ"
                price="1,500〜2,500円"
                desc="名物のマットレス席（小上がり席）で赤ちゃんを寝かせながらゆっくり食事ができます。離乳食の持ち込みもOK。"
                tags={["マットレス席", "離乳食持ち込みOK", "キッズメニュー"]}
                link="/spots/7111"
              />
              <RestCard
                name="ommori house 渋谷"
                cuisine="親子カフェ"
                price="1,200〜2,000円"
                desc="渋谷の親子カフェ。キッズスペース付きで、遊びながら食事ができる贅沢な空間。座敷席もあり。"
                tags={["キッズスペース付き", "座敷あり", "キッズメニュー"]}
                link="/spots/7110"
              />
              <RestCard
                name="elan 表参道 GYRE"
                cuisine="フレンチ"
                price="3,000〜6,000円"
                desc="表参道GYRE 4Fのフレンチレストラン。年齢制限なしでベビーカー横付け可能。施設内におむつ替え台もあり。特別な日のランチにも。"
                tags={["年齢制限なし", "ベビーカー横付け", "おむつ替え台近い"]}
                link="/spots/7112"
              />
              <RestCard
                name="焼肉トラジ 恵比寿店"
                cuisine="焼肉"
                price="3,000〜6,000円"
                desc="個室完備でベビーカー入店OK。キッズプレートあり。恵比寿で子連れ焼肉ならここ。"
                tags={["個室あり", "キッズメニュー", "ベビーチェア"]}
                link="/spots/7239"
              />
              <RestCard
                name="CLINSTON ST. BAKING COMPANY 南青山"
                cuisine="カフェ"
                price="1,500〜2,500円"
                desc="パンケーキが人気のカフェ。ソファ席があり赤ちゃん連れでもゆったり過ごせます。テラス席もあり。"
                tags={["ソファ席", "テラス席", "パンケーキ"]}
                link="/spots/7113"
              />
              <RestCard
                name="サイゼリヤ 渋谷東急ハンズ前店"
                cuisine="イタリアン"
                price="500〜1,500円"
                desc="コスパ最強の子連れランチ。キッズメニュー290円〜。ベビーチェアあり。気軽に入れるのが最大の魅力。"
                tags={["リーズナブル", "ベビーチェア", "キッズメニュー"]}
                link="/spots/7004"
              />

              <div className="bg-amber-50 rounded-xl p-3.5 mt-4">
                <p className="text-xs text-amber-700 font-bold mb-1">💡 渋谷エリアの子連れランチのコツ</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  渋谷駅周辺は混雑するので、11:00のオープン直後が狙い目。代官山・恵比寿は比較的落ち着いた雰囲気で入りやすいです。予約できるお店は事前に「ベビーカーで行きます」と伝えておくとスムーズです。
                </p>
              </div>
            </section>

            {/* 4. 授乳室MAP */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                4. 授乳室・おむつ替えスポット完全MAP
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                渋谷エリアは商業施設に授乳室が点在しています。エリア別にまとめておくと、いざという時に慌てません。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">🏙️ 渋谷駅周辺</h3>
              <div className="space-y-2 mb-4">
                <FacilityInfo name="渋谷ヒカリエ 6F・7F" desc="授乳室・おむつ替え台完備。渋谷駅直結で最もアクセスしやすい" link="/spots/3015" />
                <FacilityInfo name="渋谷スクランブルスクエア" desc="各フロアに授乳室。SHIBUYA SKYの展望台も赤ちゃん入場OK" link="/spots/3202" />
                <FacilityInfo name="渋谷駅 東口地下広場" desc="多機能トイレにおむつ替え台・ベビーチェアあり" />
              </div>

              <h3 className="text-sm font-bold text-gray-800 mb-2">👗 表参道エリア</h3>
              <div className="space-y-2 mb-4">
                <FacilityInfo name="表参道ヒルズ B3F" desc="キッズエリア近くに授乳室。スパイラルスロープでベビーカー移動が楽" link="/spots/3003" />
                <FacilityInfo name="表参道GYRE" desc="おむつ替え台あり。elanレストランのフロア" />
              </div>

              <h3 className="text-sm font-bold text-gray-800 mb-2">🌿 代官山エリア</h3>
              <div className="space-y-2 mb-4">
                <FacilityInfo name="代官山T-SITE" desc="蔦屋書店内に快適な授乳室。子供向け書籍コーナーも充実" link="/spots/3221" />
                <FacilityInfo name="子育てひろば BUTTER" desc="おむつ替え可能。代官山駅から徒歩7分" link="/spots/3330" />
              </div>

              <h3 className="text-sm font-bold text-gray-800 mb-2">🍷 恵比寿エリア</h3>
              <div className="space-y-2 mb-4">
                <FacilityInfo name="恵比寿ガーデンプレイス" desc="B1F・2F各所に授乳室。写真美術館にもおむつ替え台あり" link="/spots/3220" />
                <FacilityInfo name="アトレ恵比寿" desc="各フロアに授乳室完備。駅直結" link="/spots/3337" />
                <FacilityInfo name="景丘の家" desc="授乳室・おむつ替え完備。電子レンジあり" link="/spots/3328" />
              </div>
            </section>

            {/* 5. モデルコース */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                5. エリア別おすすめモデルコース
              </h2>

              <div className="space-y-4">
                <div className="bg-brand-50/30 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-brand-700 mb-2">🌿 代官山〜恵比寿コース（半日）</h3>
                  <p className="text-[11px] text-gray-500 mb-2">おしゃれな街をベビーカーでのんびり散策</p>
                  <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <p>10:00 代官山T-SITEで絵本探し＆カフェ休憩</p>
                    <p>11:00 子育てひろば BUTTERで遊ぶ</p>
                    <p>12:00 恵比寿方面に移動（徒歩10分）</p>
                    <p>12:30 景丘の家で昼食（3F電子レンジで離乳食温め）</p>
                    <p>13:30 景丘の家 4Fで遊ぶ</p>
                    <p>14:30 アトレ恵比寿 屋上庭園でお散歩</p>
                  </div>
                </div>

                <div className="bg-orange-50/30 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-orange-700 mb-2">🏙️ 渋谷駅周辺コース（半日）</h3>
                  <p className="text-[11px] text-gray-500 mb-2">渋谷の新しいスポットを巡る</p>
                  <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <p>10:00 co渋谷で遊ぶ（無印良品監修の子育て広場）</p>
                    <p>11:30 渋谷PARCO 屋上公園でお散歩</p>
                    <p>12:00 chano-ma 渋谷公園通りでランチ（マットレス席）</p>
                    <p>13:30 MIYASHITA PARKの芝生広場でのんびり</p>
                    <p>14:30 渋谷ヒカリエで授乳＆おむつ替え→帰宅</p>
                  </div>
                </div>

                <div className="bg-green-50/30 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-green-700 mb-2">🌳 自然満喫コース（半日）</h3>
                  <p className="text-[11px] text-gray-500 mb-2">緑いっぱいの公園でリフレッシュ</p>
                  <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <p>10:00 代々木公園でピクニック（原宿門から入場）</p>
                    <p>11:30 なぎ食堂 代々木公園店でランチ</p>
                    <p>13:00 表参道ヒルズでお買い物＆休憩</p>
                    <p>14:00 ITOCHU SDGs STUDIO KIDS PARK（予約制）</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 渋谷×赤ちゃんの意外な事実 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                💡 知っておきたい！渋谷エリアの子連れ豆知識
              </h2>
              <div className="space-y-3">
                <div className="bg-blue-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-blue-700 mb-1">渋谷駅のベビーカー移動のコツ</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    渋谷駅は構造が複雑ですが、ヒカリエ側（東口）のエレベーターが最も使いやすいです。半蔵門線・副都心線からはヒカリエ直結の改札を使うと地上に出やすくなります。
                  </p>
                </div>
                <div className="bg-green-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-green-700 mb-1">渋谷区の子育て支援がすごい</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    渋谷区は「ネウボラ」（フィンランド式の子育て支援）を導入しており、景丘の家・co渋谷・かぞくのアトリエなどの施設は区外在住でも無料で利用可能。週末は混み合うことがあるので、平日の午前中が狙い目です。
                  </p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-amber-700 mb-1">坂道に注意</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    渋谷〜代官山間、渋谷〜表参道間は坂道があります。代官山→渋谷方面は下り坂なので、代官山をスタート地点にすると楽です。恵比寿→渋谷はほぼフラットです。
                  </p>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                渋谷エリアは「若者の街」のイメージが強いですが、実際には景丘の家・co渋谷・BUTTERなど、0歳から利用できる質の高い子育て支援施設が充実しています。MIYASHITA PARKや渋谷PARCOの屋上庭園など、意外な穴場もたくさん。代官山・恵比寿はおしゃれなカフェが多く、ママの気分転換にも最適です。渋谷駅の移動はヒカリエ経由が鉄則。この記事を参考に、赤ちゃんと一緒に渋谷エリアを楽しんでください！
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビで渋谷のスポットを探す</p>
              <p className="text-xs text-gray-500 mb-3">
                天気連動おすすめ・現在地から近い順表示・<br />おでかけプラン自動生成など便利機能が満載！
              </p>
              <Link href="/"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                アプリを開く
              </Link>
            </section>

            {/* 関連記事 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold mb-3">📚 関連記事</h3>
              <div className="space-y-2">
                <Link href="/articles/shinjuku-guide" className="block text-xs text-brand-500 hover:underline">
                  → 新宿エリア 子連れおでかけ完全ガイド
                </Link>
                <Link href="/articles/stroller-guide" className="block text-xs text-brand-500 hover:underline">
                  → ベビーカーでのおでかけ完全ガイド
                </Link>
                <Link href="/spots/region/東京" className="block text-xs text-brand-500 hover:underline">
                  → 東京のおすすめスポット一覧
                </Link>
              </div>
            </section>
          </article>
                  <ArticleAreaNav currentSlug="shibuya-guide" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

function SpotCard({ name, desc, tags, link, tip }: { name: string; desc: string; tags: string[]; link: string; tip?: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 mb-3">
      <Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link>
      <p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {tags.map((t) => (
          <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
        ))}
      </div>
      {tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}
    </div>
  );
}

function RestCard({ name, cuisine, price, desc, tags, link }: { name: string; cuisine: string; price: string; desc: string; tags: string[]; link: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 mb-3">
      <div className="flex items-center gap-2 mb-1">
        <Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link>
        <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span>
        <span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed mt-1 mb-2">{desc}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((t) => (
          <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}

function FacilityInfo({ name, desc, link }: { name: string; desc: string; link?: string }) {
  return (
    <div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5">
      <span className="text-sm">🍼</span>
      <div>
        {link ? (
          <Link href={link} className="text-xs font-bold text-purple-700 hover:underline">{name}</Link>
        ) : (
          <div className="text-xs font-bold text-purple-700">{name}</div>
        )}
        <div className="text-[11px] text-gray-500">{desc}</div>
      </div>
    </div>
  );
}
