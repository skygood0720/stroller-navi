import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】新宿エリア 子連れおでかけ完全ガイド｜授乳室・ランチ・遊び場まとめ | ベビーカーナビ",
  description:
    "新宿駅周辺のベビーカーで行ける授乳室・おむつ替え完備のスポット、子連れランチにおすすめのレストラン、無料の遊び場を地図付きで完全網羅。新宿御苑・伊勢丹・都庁展望室など20以上のスポットを紹介。",
  keywords: [
    "新宿", "子連れ", "ベビーカー", "授乳室", "おむつ替え",
    "ランチ", "レストラン", "遊び場", "おでかけ", "赤ちゃん",
    "新宿御苑", "伊勢丹", "キッズメニュー", "東京",
  ],
  openGraph: {
    title: "新宿エリア 子連れおでかけ完全ガイド | ベビーカーナビ",
    description: "授乳室・ランチ・遊び場を完全網羅。新宿で赤ちゃんと安心して過ごせるスポット20選。",
    url: "https://stroller-navi.vercel.app/articles/shinjuku-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function ShinjukuGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "新宿エリア 子連れおでかけ完全ガイド",
    "description": "新宿駅周辺の授乳室・子連れランチ・遊び場を完全網羅",
    "url": "https://stroller-navi.vercel.app/articles/shinjuku-guide",
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
            【2026年最新】新宿エリア<br />子連れおでかけ完全ガイド
          </h1>
          <p className="text-[11px] opacity-80 mt-2">
            授乳室・ランチ・遊び場を完全網羅 / 読了時間：約10分
          </p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約7分" />
          <article className="space-y-6">

            {/* 目次 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-3">📋 この記事でわかること</h2>
              <div className="space-y-1.5 text-xs text-gray-600">
                <p>1. 新宿駅の授乳室・おむつ替えスポット5選</p>
                <p>2. ベビーカーで行ける無料の遊び場・公園4選</p>
                <p>3. 子連れランチにおすすめのレストラン7選</p>
                <p>4. 百貨店・商業施設のベビー休憩室ランキング</p>
                <p>5. 雨の日でも安心！室内おでかけスポット</p>
                <p>6. 新宿エリアのバリアフリートイレMAP</p>
              </div>
            </section>

            {/* イントロ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                新宿駅は1日の乗降客数が世界一。巨大ターミナルゆえに「ベビーカーで移動できるか不安」「授乳室はどこにあるの？」と悩むパパ・ママは多いのではないでしょうか。実は新宿エリアは、百貨店の充実したベビー休憩室、駅直結の商業施設、緑豊かな公園が揃っており、ポイントを押さえれば赤ちゃん連れでも快適に過ごせるエリアです。この記事では、実際にベビーカーで新宿を歩いた経験をもとに、授乳室・ランチ・遊び場を完全ガイドします。
              </p>
            </section>

            {/* 1. 授乳室 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                1. 新宿駅周辺の授乳室・おむつ替えスポット5選
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                新宿駅周辺には主要な百貨店・商業施設に授乳室が完備されています。緊急時に慌てないよう、事前に場所を把握しておくのがおすすめです。
              </p>

              <SpotCard
                name="伊勢丹新宿店 6F ベビー休憩室"
                desc="新宿エリアで最も充実した授乳室。個室の授乳スペース、ミルク用のお湯、体重計、おむつ替え台を完備。ベビーカー貸出もあり。6Fにはベビー・キッズフロアがあり、離乳食の名店も入っています。"
                tags={["個室授乳室", "ミルク用お湯", "体重計", "ベビーカー貸出"]}
                link="/spots/3065"
                tip="6Fに行けば授乳・おむつ替え・離乳食購入・おもちゃ選びがすべて完結します"
              />
              <SpotCard
                name="新宿タカシマヤ 9F ベビー休憩室"
                desc="9Fに広いベビー休憩室があり、静かな環境で授乳できます。13FにはSKY PLAZA IBASHOという親子でくつろげる展望スペースもあり、景色を楽しみながら休憩できる穴場です。"
                tags={["静かな授乳室", "展望スペース", "ベビーフード試食"]}
                link="/spots/3007"
                tip="9F授乳室は伊勢丹より空いていることが多いので穴場です"
              />
              <SpotCard
                name="ルミネ新宿 LUMINE2 5F"
                desc="新宿駅南口直結で雨の日もアクセス楽々。5Fにベビー休憩室があり、おむつ替え台と授乳スペースを完備。駅直結なので電車移動の合間にも立ち寄りやすいです。"
                tags={["駅直結", "おむつ替え台", "授乳スペース"]}
                link="/spots/3200"
                tip="南口改札を出てすぐなので、乗り換えの合間にも使えます"
              />
              <SpotCard
                name="ニュウマン新宿（NEWoMan）"
                desc="新宿駅新南口直結。洗練された商業施設で、清潔な授乳室を完備。カフェが多いので授乳後にゆっくり休憩もできます。"
                tags={["駅直結", "清潔", "カフェ多数"]}
                link="/spots/3201"
                tip="新南口は比較的空いているので、混雑が苦手な方におすすめ"
              />
              <SpotCard
                name="小田急百貨店 新宿店"
                desc="新宿駅西口直結。ベビー休憩室が広く、デパ地下で離乳食の材料も購入できます。"
                tags={["駅直結", "広い休憩室", "デパ地下"]}
                link="/spots/3064"
                tip="西口方面ではここが最も使いやすい授乳室です"
              />

              <div className="bg-amber-50 rounded-xl p-3.5 mt-4">
                <p className="text-xs text-amber-700 font-bold mb-1">💡 ワンポイントアドバイス</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  週末の午後は伊勢丹の授乳室が混み合うことがあります。開店直後の10:30頃が最も空いています。急ぎの場合はタカシマヤ9Fかルミネ2の5Fが穴場です。
                </p>
              </div>
            </section>

            {/* 2. 公園・遊び場 */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                2. ベビーカーで行ける公園・無料の遊び場4選
              </h2>

              <SpotCard
                name="新宿御苑"
                desc="広大な芝生でピクニックに最適な都心のオアシス。エコハウス付近に授乳室を完備。園路は舗装されておりベビーカーでもスムーズに移動可能。入園料は一般500円ですが、未就学児は無料です。春は桜、秋は紅葉と四季を通じて楽しめます。"
                tags={["授乳室", "おむつ替え", "スロープ", "芝生広場"]}
                link="/spots/3029"
                tip="新宿門から入ると芝生広場が近く、ベビーカーでのアクセスが楽です"
              />
              <SpotCard
                name="新宿中央公園"
                desc="都庁の隣にある公園。ちびっこ広場には遊具があり、夏季は水の広場で水遊びもできます。24時間開放で入場無料。ベビーカー散歩に最適なフラットな園路が整備されています。"
                tags={["無料", "遊具あり", "水遊び（夏季）", "24時間"]}
                link="/spots/3204"
                tip="都庁展望室とセットで訪れると、室内＆屋外の両方を楽しめます"
              />
              <SpotCard
                name="都立明治公園"
                desc="2023年に開園した新しい公園。ウッドデッキや芝生が赤ちゃんに優しい設計で、インクルーシブ遊具も設置。国立競技場の近くにあり、散歩コースとしても人気です。"
                tags={["新設", "ウッドデッキ", "インクルーシブ遊具"]}
                link="/spots/3350"
                tip="新しい施設なので設備が非常にきれいです"
              />
              <SpotCard
                name="伊勢丹新宿店 本館屋上庭園"
                desc="意外と知られていない穴場。小さいですが遊べるスペースがあり、6Fの充実した授乳室と合わせて利用するのがおすすめ。デパ地下でお惣菜を買って屋上でランチ、というコースが最高です。"
                tags={["穴場", "屋上庭園", "授乳室近い"]}
                link="/spots/3339"
                tip="デパ地下→6F授乳室→屋上庭園の「伊勢丹ゴールデンルート」がおすすめ"
              />
            </section>

            {/* 3. レストラン */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                3. 子連れランチにおすすめのレストラン7選
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                新宿で赤ちゃん連れのランチは意外とハードルが高い…と思っていませんか？ ベビーカー入店OK・キッズメニューあり・個室や座敷席のあるレストランを厳選しました。
              </p>

              <RestCard
                name="KICHIRI MOLLIS 新宿通り"
                cuisine="ダイニング"
                price="1,500〜3,000円"
                desc="来店客の9割が子連れ！芝生風カーペット席やソファ席があり、赤ちゃんを寝かせながら食事OK。バーニャカウダ食べ放題ランチが人気。"
                tags={["座敷あり", "離乳食持ち込みOK", "授乳室近い"]}
                link="/spots/7101"
              />
              <RestCard
                name="chano-ma 伊勢丹新宿店"
                cuisine="カフェ"
                price="1,500〜2,500円"
                desc="伊勢丹6Fの人気カフェ。名物の小上がりマットレス席では赤ちゃんを寝かせながらゆっくり食事ができます。"
                tags={["マットレス席", "離乳食持ち込みOK", "授乳OK"]}
                link="/spots/7102"
              />
              <RestCard
                name="100本のスプーン LUMINE新宿"
                cuisine="洋食"
                price="1,500〜2,500円"
                desc="離乳食の無料提供あり！大人の料理のハーフサイズをキッズメニューとして提供する、子連れのためのレストラン。"
                tags={["離乳食無料", "キッズメニュー", "駅直結"]}
                link="/spots/7106"
              />
              <RestCard
                name="GARDEN HOUSE 新宿"
                cuisine="イタリアン"
                price="1,500〜3,000円"
                desc="NEWoMan新宿内。テラス席が広く、ベビーカーを横付けして食事可能。マグロ頬肉のラグーパスタが絶品。"
                tags={["テラス席", "離乳食持ち込みOK", "駅直結"]}
                link="/spots/7103"
              />
              <RestCard
                name="ロイヤルホスト 新宿三井ビル店"
                cuisine="ファミレス"
                price="1,000〜2,000円"
                desc="安定のファミレス。離乳食の温めサービスがあり、ベビーチェアも完備。西新宿エリアでの食事に便利。"
                tags={["離乳食温め可", "ベビーチェア", "キッズメニュー"]}
                link="/spots/7001"
              />
              <RestCard
                name="Fueki 神楽坂店"
                cuisine="フレンチ"
                price="4,000〜8,000円"
                desc="子連れ歓迎のフレンチ。半個室があり、年齢制限なし。特別な日のランチにもおすすめ。"
                tags={["個室あり", "年齢制限なし", "記念日にも"]}
                link="/spots/7023"
              />
              <RestCard
                name="スシロー 新宿大ガード店"
                cuisine="回転寿司"
                price="1,000〜2,500円"
                desc="タッチパネルで簡単注文。ベビーチェアあり。離乳食期でも白身魚やうどんが頼めて便利。"
                tags={["ベビーチェア", "タッチパネル注文", "キッズメニュー"]}
                link="/spots/7019"
              />
            </section>

            {/* 4. 百貨店ランキング */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                4. 新宿の百貨店 ベビー設備ランキング
              </h2>
              <div className="space-y-3">
                <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-100/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🥇</span>
                    <span className="text-sm font-bold">伊勢丹新宿店</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    6Fのベビー休憩室は新宿エリア最高峰。個室授乳室・ミルク用お湯・体重計・おむつ替え台完備。ベビーカー貸出あり。chano-maカフェも同フロア。屋上庭園も穴場。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🥈</span>
                    <span className="text-sm font-bold">新宿タカシマヤ</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    9Fベビー休憩室は静かで落ち着いた環境。13F SKY PLAZA IBASHOは展望スペースで気分転換にも。ベビーフード試食コーナーもあり。
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🥉</span>
                    <span className="text-sm font-bold">小田急百貨店</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    西口駅直結でアクセス抜群。ベビー休憩室が広く、デパ地下で離乳食材料も買える。西口方面では最も便利。
                  </p>
                </div>
              </div>
            </section>

            {/* 5. 室内スポット */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                5. 雨の日でも安心！室内おでかけスポット
              </h2>

              <SpotCard
                name="東京おもちゃ美術館（四谷）"
                desc="旧小学校を改装した体験型施設。0〜2歳専用の「赤ちゃん木育ひろば」があり、木のおもちゃで安全に遊べます。四谷三丁目駅から徒歩7分。"
                tags={["赤ちゃん専用エリア", "木のおもちゃ", "おもちゃ工房"]}
                link="/spots/3045"
                tip="赤ちゃん木育ひろばは0〜2歳限定なので、大きい子との接触を心配する必要がありません"
              />
              <SpotCard
                name="消防博物館（四谷三丁目）"
                desc="入館無料！四谷三丁目駅直結で雨でも濡れずにアクセス可能。消防車やヘリコプターの実物展示は赤ちゃんの視覚を刺激します。授乳室完備。"
                tags={["入館無料", "駅直結", "授乳室", "エレベーター"]}
                link="/spots/3095"
                tip="B1Fの消防車に乗れる展示（写真撮影用）は記念写真スポットとして人気です"
              />
              <SpotCard
                name="東京都庁 展望室"
                desc="無料で地上202mの絶景を楽しめる穴場スポット。授乳室やおむつ替えシートも完備。晴れた日は富士山が見えることも。赤ちゃんは高い場所からの景色に目を輝かせます。"
                tags={["無料", "展望台", "授乳室", "おむつ替え"]}
                link="/spots/3363"
                tip="北展望室と南展望室があり、南展望室のほうが空いています"
              />
              <SpotCard
                name="かぞくのアトリエ（代々木）"
                desc="渋谷区の子育て支援施設ですが、区外の方も利用可能。プレイルームでおもちゃを使って自由に遊べます。ワークショップ企画も豊富。新宿駅・代々木駅から徒歩圏。"
                tags={["無料", "ワークショップ", "区外OK"]}
                link="/spots/3331"
                tip="代々木駅から徒歩5分。新宿駅からも南口から歩けます"
              />
            </section>

            {/* 6. トイレMAP */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                6. 新宿エリアのバリアフリートイレMAP
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                新宿駅周辺のおむつ替え台付きバリアフリートイレの場所を把握しておくと、急なおむつ替えにも安心です。
              </p>
              <div className="space-y-2">
                <ToiletInfo name="新宿駅 南口改札外" desc="1F南口改札を出てすぐ。おむつ替え台あり" />
                <ToiletInfo name="新宿駅 西口地下通路" desc="京王百貨店側。広めの個室" />
                <ToiletInfo name="新宿御苑 新宿門付近" desc="ベビーチェアあり。入園後すぐ右手" />
                <ToiletInfo name="代々木公園 原宿門付近" desc="おむつ替え台完備。参宮橋門にもあり" />
                <ToiletInfo name="伊勢丹新宿店 各フロア" desc="6Fベビー休憩室内が最も充実" />
                <ToiletInfo name="ルミネ新宿 各フロア" desc="5Fベビー休憩室併設" />
              </div>
            </section>

            {/* モデルコース */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">
                📍 おすすめ半日コース
              </h2>

              <div className="space-y-3">
                <div className="bg-brand-50/30 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-brand-700 mb-2">☀️ 晴れの日コース（約3時間）</h3>
                  <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <p>10:30 伊勢丹6Fで授乳＆おむつ替え</p>
                    <p>11:00 chano-maでランチ（マットレス席予約推奨）</p>
                    <p>12:30 伊勢丹屋上庭園でお散歩</p>
                    <p>13:00 新宿御苑でピクニック（新宿門から入場）</p>
                    <p>14:30 帰宅前にルミネ5Fで最後のおむつ替え</p>
                  </div>
                </div>
                <div className="bg-blue-50/30 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-blue-700 mb-2">🌧️ 雨の日コース（約3時間）</h3>
                  <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <p>10:00 消防博物館で消防車見学（四谷三丁目駅直結）</p>
                    <p>11:00 東京おもちゃ美術館で木のおもちゃ遊び</p>
                    <p>12:30 KICHIRI MOLLIS 新宿通りでランチ</p>
                    <p>14:00 伊勢丹6Fでベビー用品チェック＆授乳</p>
                  </div>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                新宿エリアは、百貨店の充実したベビー設備、駅直結の利便性、緑豊かな公園が揃っており、ポイントさえ押さえれば赤ちゃん連れでも十分楽しめるエリアです。特に伊勢丹新宿店の6Fは「授乳・ランチ・買い物・屋上庭園」がすべて完結する最強スポット。初めての新宿おでかけは、まず伊勢丹を拠点にするのがおすすめです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                この記事の情報は2026年4月時点のものです。営業時間や設備は変更される場合がありますので、おでかけ前に公式サイトでの確認をお勧めします。
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビで新宿のスポットを探す</p>
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
                <Link href="/articles/stroller-guide" className="block text-xs text-brand-500 hover:underline">
                  → ベビーカーでのおでかけ完全ガイド
                </Link>
                <Link href="/articles/restaurant-tips" className="block text-xs text-brand-500 hover:underline">
                  → ベビーカーで入れるレストランの見分け方
                </Link>
                <Link href="/spots/region/東京" className="block text-xs text-brand-500 hover:underline">
                  → 東京のおすすめスポット一覧（{186}件）
                </Link>
              </div>
            </section>
          </article>
                  <ArticleAreaNav currentSlug="shinjuku-guide" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

// ─── Reusable components ───
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
      {tip && (
        <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>
      )}
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

function ToiletInfo({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5">
      <span className="text-sm">🚻</span>
      <div>
        <div className="text-xs font-bold text-purple-700">{name}</div>
        <div className="text-[11px] text-gray-500">{desc}</div>
      </div>
    </div>
  );
}
