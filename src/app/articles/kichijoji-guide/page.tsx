import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】吉祥寺エリア 子連れおでかけ完全ガイド｜井の頭公園・ランチ・授乳室 | ベビーカーナビ",
  description: "吉祥寺の井の頭公園・ジブリ美術館・ハモニカ横丁周辺の子連れスポット、ベビーカーOKランチ、授乳室を完全網羅。半日モデルコース付き。",
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
          <h1 className="text-lg font-black leading-tight">【2026年最新】吉祥寺エリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">井の頭公園・カフェ・授乳室 / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに：吉祥寺は子連れに優しい街</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                吉祥寺は「住みたい街ランキング」の常連であると同時に、実は赤ちゃん連れにとっても居心地のいい街です。
                井の頭恩賜公園の広大な緑、駅直結の商業施設、おしゃれなカフェ、そして少し足を伸ばせばジブリ美術館——。
                自然と都市が程よく融合した吉祥寺ならではの子連れコースをご紹介します。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                吉祥寺エリアの最大の魅力は「歩ける範囲に何でも揃う」コンパクトさです。
                駅から公園まで徒歩5分、公園内に動物園があり、ランチはそのまま公園近くのカフェで——という
                移動の少ないコースが組めるため、ベビーカー移動の負担が少ないのも子連れに嬉しいポイントです。
              </p>
              <div className="bg-brand-50/50 rounded-xl p-4">
                <p className="text-xs font-bold text-brand-700 mb-1">📋 この記事でわかること</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• 吉祥寺エリアのおすすめスポット（公園・動物園・ジブリ美術館）</li>
                  <li>• ベビーカーOKのランチスポット4選</li>
                  <li>• 駅周辺の授乳室・おむつ替えスペースMAP</li>
                  <li>• 半日で回れる王道モデルコース</li>
                  <li>• 月齢別おすすめの過ごし方</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. 公園・自然スポット</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                吉祥寺といえばやはり井の頭恩賜公園が中心です。
                駅から徒歩5分で自然豊かな公園に着けるアクセスの良さが人気の理由の一つです。
              </p>

              <div className="space-y-4">
                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3027" className="text-sm font-bold text-brand-600 hover:underline">井の頭恩賜公園</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["芝生", "ボート", "授乳室近い", "無料"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    吉祥寺駅から徒歩5分。広大な公園で芝生広場やボート池があり、四季を通じてベビーカー散歩が楽しめます。
                    春は桜の名所としても有名で、ピンクのトンネルをベビーカーで通り抜ける経験は格別です。
                    園内の遊歩道はほぼ平坦で、ベビーカーでのお散歩も快適。
                    池のほとりのベンチで授乳休憩をとることもできますが、授乳ケープの持参をおすすめします。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 公園内のペパカフェフォレストでタイ料理ランチ→動物園のコースが人気。日曜午前が最も混雑します</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3327" className="text-sm font-bold text-brand-600 hover:underline">井の頭自然文化園</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "ベビーカー貸出", "動物ふれあい", "リーズナブル"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    井の頭公園内にある動物園で、リスザル・モルモットのふれあい体験が大人気です。
                    「リスの小径」ではリスが自由に走り回る様子が間近に見られ、特に1歳以上のお子さんは大興奮します。
                    0〜5歳は入場無料（大人400円）なのでお財布にも優しい。
                    授乳室は入口近くに設置されており、ミルク用お湯も完備されています。
                    ベビーカーは貸出もありますが、自分のものを持ち込みでも全エリア移動可能です。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 月曜・年末年始休園。モルモット抱っこは平日午後が空いています</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3117" className="text-sm font-bold text-brand-600 hover:underline">三鷹の森ジブリ美術館</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["予約制", "授乳室", "抱っこ紐推奨", "一休みスペースあり"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    吉祥寺駅からバスまたは徒歩15分の距離にあるジブリの世界観が体験できる美術館です。
                    ネコバスルームは子どもが大喜びするエリアで、柔らかいぬいぐるみのネコバスに乗れます（小学生以下のみ）。
                    ベビーカーは館内では使用できないため、入口でスタッフに預けて抱っこ紐に切り替えます。
                    授乳室は入口近くに個室が一つあります。
                    館内は撮影禁止ですが、屋上のロボット兵とのツーショットはOKです。
                    チケットは事前予約が必須で、ローソンチケットで毎月10日に翌月分が発売されます——即完売するので発売日の10時に購入できるよう準備が必要です。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 チケットはローソンで毎月10日10時に発売。すぐ売り切れるので発売日カレンダーに必ずメモを</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 子連れランチおすすめ4選</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                吉祥寺はカフェ・レストランが充実していますが、子連れ向きの条件（ベビーチェア・ゆったりした座席・静かな環境）で絞ると以下の4店が特におすすめです。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href="/spots/7171" className="text-sm font-bold text-brand-600 hover:underline">ペパカフェフォレスト 井の頭</Link>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">タイ料理</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 1,200〜2,000円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    井の頭公園内という最高のロケーションで、木々に囲まれたテラス席でランチが楽しめます。
                    タイ料理ですが辛さを調整してくれるため子どもに優しいメニューも多い。
                    ベビーチェア完備でキッズメニューもあります。
                    公園散歩の途中に立ち寄れる利便性が最大の魅力で、ベビーカーのままテラスに入れるのも好評です。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["テラス席", "公園内", "ベビーチェア"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href="/spots/7170" className="text-sm font-bold text-brand-600 hover:underline">吉祥ダイニング</Link>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">和食ブッフェ</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 1,500〜3,000円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    東急REIホテル内のブッフェレストランで、個室・ソファ席が完備されています。
                    お子様食器はすべて揃っており、離乳食の持ち込みもOK（電子レンジ加熱サービスあり）。
                    個室なら赤ちゃんが泣いても周りを気にせず食事できる安心感があります。
                    予約時に「個室」をリクエストするのがおすすめです。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["個室あり", "ソファ席", "離乳食持込OK"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href="/spots/7242" className="text-sm font-bold text-brand-600 hover:underline">むさしの森珈琲 吉祥寺南町店</Link>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">カフェ</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 800〜1,500円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    ふわとろパンケーキで有名なむさしの森珈琲の吉祥寺店です。
                    ゆったりしたソファ席が多く、ベビーカーを隣に置いたまま食事できます。
                    ベビーチェアも完備されており、子どもが少し大きくなってきたら一緒に食べられるメニューも揃っています。
                    日曜の昼は混雑するため、平日かオープン直後（10時台）の来店がおすすめです。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["ベビーチェア", "ソファ席", "パンケーキ"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href="/spots/7226" className="text-sm font-bold text-brand-600 hover:underline">サイゼリヤ 吉祥寺ダイヤ街店</Link>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">イタリアン</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 500〜1,200円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    コスパ最強の子連れ外食定番チェーン。キッズメニューは290円〜で、ミラノ風ドリア・スープ・ジュースのセットなど充実しています。
                    ファミレスタイプで通路が広く、ベビーカーでも入りやすい店内レイアウトです。
                    離乳食期の赤ちゃんを連れている場合は、パパ・ママが気軽に食べられるため重宝します。
                    駅近の立地で、おでかけ帰りにサッと立ち寄るのに最適です。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["リーズナブル", "キッズメニュー", "ベビーチェア"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 授乳室・おむつ替えMAP</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                吉祥寺駅周辺には複数の商業施設があり、授乳室・おむつ替えスペースの選択肢が豊富です。
                特にコピス吉祥寺A館5Fが設備・清潔感ともに最も充実しています。
              </p>
              <div className="space-y-2">
                {[
                  { name: "コピス吉祥寺 A館5F", desc: "授乳室・ミルク用お湯・電子レンジ・おむつ替え台完備。最も設備が充実", badge: "最も充実" },
                  { name: "吉祥寺アトレ", desc: "駅直結。ベビー休憩室あり。東急百貨店に近く、アクセスしやすい" },
                  { name: "吉祥寺パルコ", desc: "各フロアにおむつ替え台。授乳室は2F・4F（事前に場所を確認しておくと安心）" },
                  { name: "東急百貨店 吉祥寺店 7F", desc: "授乳室・おむつ替え台・ミルク用お湯。老舗百貨店らしい清潔感が好評" },
                  { name: "武蔵野市総合体育館", desc: "幼児室の近くにおむつ替え台。駅から少し離れているが穴場的スポット" },
                ].map(item => (
                  <div key={item.name} className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5">
                    <span className="text-sm">🍼</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-purple-700">{item.name}</span>
                        {item.badge && <span className="text-[9px] bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded font-bold">{item.badge}</span>}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 月齢別のおすすめの過ごし方</h2>
              <div className="space-y-3">
                <div className="bg-pink-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-pink-700 mb-1">🍼 0〜5ヶ月（ねんね期）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    ベビーカーで井の頭公園の遊歩道をゆっくり散歩するのがおすすめです。
                    緑の中の散歩は視覚的な刺激になり、昼間は適度な日光を浴びさせることもできます。
                    ランチはコピス吉祥寺の授乳室で授乳してからゆっくり。
                    ジブリ美術館はまだ早いですが、公園内動物園は外から動物を眺めるだけでも◎
                  </p>
                </div>
                <div className="bg-blue-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-blue-700 mb-1">🐾 6〜11ヶ月（お座り〜ハイハイ期）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    動物の動きを目で追えるようになるため、井の頭自然文化園の動物ふれあいがおすすめです。
                    公園の芝生でハイハイも楽しめる時期。暖かい季節はレジャーシートを持参して芝生で過ごすと喜びます。
                    離乳食期になるので、離乳食の持ち込みOKなカフェを選んでランチを。
                  </p>
                </div>
                <div className="bg-green-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-green-700 mb-1">🏃 1〜2歳（よちよち歩き期）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    リスが走り回る「リスの小径」や動物ふれあいコーナーで大喜びします。
                    公園の芝生で転び転び遊ぶのも楽しい時期。
                    ジブリ美術館のネコバスルームは小学生以下しか入れないので、この時期が楽しめる絶好のチャンスです。
                    ただしジブリ美術館はベビーカーNGで混雑もあるため、歩けるようになってから行くほうがスムーズです。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">📍 おすすめ半日コース</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                吉祥寺を初めて子連れで訪れる方に、定番かつ無理のない半日コースをご紹介します。
                すべて徒歩圏内に収まり、移動の少ない設計です。
              </p>
              <div className="bg-brand-50/30 rounded-xl p-4">
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">10:00</span>
                    <div>
                      <p className="font-bold">コピス吉祥寺 A館5Fで授乳・おむつ替え</p>
                      <p className="text-gray-500 mt-0.5">出発前に授乳を済ませておくと公園散歩がスムーズになります</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">10:30</span>
                    <div>
                      <p className="font-bold">井の頭公園をベビーカーでお散歩（約30分）</p>
                      <p className="text-gray-500 mt-0.5">池のほとり→芝生広場→子どもの森ルートが歩きやすい</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">11:30</span>
                    <div>
                      <p className="font-bold">ペパカフェフォレストでランチ</p>
                      <p className="text-gray-500 mt-0.5">公園内なので移動不要。テラス席なら開放感たっぷり</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">13:00</span>
                    <div>
                      <p className="font-bold">井の頭自然文化園で動物ふれあい</p>
                      <p className="text-gray-500 mt-0.5">リスの小径とモルモットがおすすめ。0〜5歳は無料入場</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">14:30</span>
                    <div>
                      <p className="font-bold">吉祥寺駅でおやつ＆休憩→帰宅</p>
                      <p className="text-gray-500 mt-0.5">疲れたらアトレのカフェで一息。授乳室もここで使えます</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                吉祥寺は自然とカフェが融合した、赤ちゃんとのお散歩に最適な街です。
                井の頭公園を拠点にすれば、動物園・ランチ・お散歩がすべて歩ける範囲で完結します。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                授乳室はコピス吉祥寺A館5Fが最も充実しているので、困ったらまずコピスへ。
                ミルク用お湯・電子レンジ・おむつ替え台がすべて揃っているため、長時間滞在でも安心です。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                ジブリ美術館は1歳を過ぎてから計画するのがおすすめです。ネコバスルームに入れる小学生以下のうちに、ぜひ体験させてあげてください。
              </p>
            </section>

            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">📍 吉祥寺周辺のスポットをもっと見る</p>
              <p className="text-xs text-gray-500 mb-3">ベビーカーナビで現在地から近い授乳室・子連れスポットを検索できます</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                アプリを開く
              </Link>
            </section>
          </article>
          <ArticleAreaNav currentSlug="kichijoji-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
