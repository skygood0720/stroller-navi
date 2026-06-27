import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "ベビーカーで入れるレストランの見分け方｜子連れランチ攻略法 2026年版 | ベビーカーナビ",
  description: "入店前にチェックすべき5つのポイント、予約のコツ、月齢別メニュー選び、東京都内おすすめ子連れチェーン店7選、持ち物リストを完全解説。",
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
          <h1 className="text-lg font-black leading-tight">ベビーカーで入れるレストランの見分け方<br />子連れランチ完全攻略法</h1>
          <p className="text-[11px] opacity-80 mt-2">読了時間：約8分 / 予約のコツ・月齢別メニュー選びまで解説</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに：子連れ外食は「お店選び8割」</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                赤ちゃんと一緒の外食は「入れるかな…」「迷惑にならないかな…」と不安になりがち。
                でも、実際には子連れ外食の成否の8割はお店選びで決まります。
                適切なお店を選べば、パパもママもリラックスして食事を楽しめます。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                この記事では、「ベビーカーで入れるか」を事前に見極める5つのチェックポイントから、
                予約のコツ、月齢別のメニュー選び、全国チェーン別の子連れ適性ランキング、
                忘れずに持っていきたいアイテムまで、実際の経験をもとに詳しく解説します。
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-bold text-orange-800 mb-1">🍽️ この記事でわかること</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• 入店前にチェックすべき5つのポイント</li>
                  <li>• 子連れ外食を成功させる予約・来店のコツ</li>
                  <li>• 0〜1歳の月齢別メニューの選び方</li>
                  <li>• ベビーカーOKのおすすめチェーン店7選</li>
                  <li>• 子連れランチで持っていると便利なもの</li>
                  <li>• よくある失敗と防ぐ方法</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. 入店前にチェックすべき5つのポイント</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                事前にこの5点を確認するだけで、「ベビーカーが入らなかった」「授乳スペースがなかった」という失敗を大幅に減らせます。
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-brand-400 pl-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">① 入口の幅と段差</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    ベビーカーの幅は一般的に50〜55cm程度です。入口がこれより狭いと入店できません。
                    段差がある場合、スロープがあるかどうかも重要なポイントです。
                    Googleマップのストリートビューで外観を事前に確認するのが最も手軽な方法です。
                    ビルの中にある飲食店の場合、そのビルのエレベーターがあるかどうかも確認してください。
                  </p>
                </div>

                <div className="border-l-4 border-brand-400 pl-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">② 店内の通路幅と座席配置</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    入口が通れてもテーブル間の通路が狭ければ、ベビーカーを収める場所に困ります。
                    ファミレスやホテルレストラン、ショッピングモール内の飲食店は通路が広い傾向にあります。
                    個人経営のカフェやレストランはSNSや食べログの写真で店内の雰囲気を確認してから行くと安心です。
                    テーブル配置がゆったりしているかどうかが、子連れ向きの重要な指標になります。
                  </p>
                </div>

                <div className="border-l-4 border-brand-400 pl-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">③ キッズチェア・ベビーチェアの有無</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    お座りができる時期（生後6〜7ヶ月）以降はベビーチェアの有無が特に重要になります。
                    食べログやGoogleの口コミで「ベビーチェア」「子ども椅子」と検索すると情報が見つかりやすいです。
                    なければチェアベルト（持参可能なベルト型補助具）で代用できますが、テーブルが合わない場合もあります。
                    ベビーチェアがない場合は、膝の上で食べさせるか、ベビーカーのまま食べさせることになります。
                  </p>
                </div>

                <div className="border-l-4 border-brand-400 pl-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">④ おむつ替えスペースの有無</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    お店のトイレにおむつ替え台がない場合は多いです。
                    食事中におむつ替えが必要になることはよくあるので、近くのショッピングモールや公共施設のおむつ替え台の場所を事前に把握しておくのがベストです。
                    ベビーカーナビのアプリなら、現在地付近のおむつ替えスペースをマップで確認できます。
                  </p>
                </div>

                <div className="border-l-4 border-brand-400 pl-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">⑤ 座席タイプ（ソファ・座敷・個室）</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    それぞれの座席タイプには子連れ向きのメリットがあります。
                    <strong>ソファ席</strong>は赤ちゃんを隣に寝かせながら食事できます。
                    <strong>座敷席（お座敷）</strong>はハイハイ期の赤ちゃんに最適で、動き回っても安全。
                    <strong>個室</strong>は赤ちゃんが泣いても周りへの配慮が最小限で済み、最もリラックスできます。
                    予約時に「ベビーカーを持参します」「子連れです」と一言伝えると、スタッフが配慮した席に案内してくれることが多いです。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 予約と来店のコツ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                子連れ外食は「いつ行くか」「どう予約するか」で快適さが大きく変わります。
                以下のポイントを実践するだけで、ストレスが大幅に減ります。
              </p>

              <div className="bg-brand-50/50 rounded-xl p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-brand-700 mb-1">🕐 来店タイミング</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• <strong>開店直後（11〜11:30）</strong>がベスト。待ち時間なく入れ、店内も空いている</li>
                    <li>• 週末より平日のほうが格段に入りやすい</li>
                    <li>• ランチピーク（12〜13時）は混雑するため、この時間帯は避けるのが無難</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-700 mb-1">📞 予約時のリクエスト</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• 「ベビーカーで伺います」と伝えると、広い席・出入りしやすい席に案内してもらえる</li>
                    <li>• 「個室」または「ソファ席」を希望として伝える</li>
                    <li>• 「赤ちゃんがいます」と伝えると離乳食の持ち込みOKか確認してくれる店もある</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-700 mb-1">🔍 事前調査のコツ</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• 食べログの「子連れOK」フィルターを活用</li>
                    <li>• ホットペッパーグルメの「ベビーカーOK」絞り込み機能を使う</li>
                    <li>• Googleマップの口コミで「ベビーカー」「授乳」を検索</li>
                    <li>• SNSで「店名 + 子連れ」で実際の来店写真を確認</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 月齢別メニューの選び方</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                お子さんの月齢によって、外食で何を食べさせるかは大きく変わります。
                月齢に合わせたメニュー選びができると、外食がより楽になります。
              </p>
              <div className="space-y-3">
                <div className="bg-pink-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-pink-700 mb-1">🍼 0〜5ヶ月（離乳食前）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    赤ちゃんは授乳のみ。パパとママの食事がメインになります。
                    外食先を選ぶ際は「授乳室が近くにあること」を優先条件にしましょう。
                    ショッピングモール内の飲食店は授乳室への移動が楽なのでおすすめです。
                    授乳ケープがあればカフェでの授乳も可能なので、選択肢が広がります。
                  </p>
                </div>
                <div className="bg-blue-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-blue-700 mb-1">🥣 5〜8ヶ月（離乳食初期〜中期）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    離乳食を持ち込むのが基本です。「離乳食の持ち込み・電子レンジ加熱OKか」を必ず確認してください。
                    ロイヤルホスト・デニーズなど一部のファミレスは離乳食の温めサービスを実施しています。
                    「100本のスプーン」（全国複数店舗）は離乳食を無料提供しており、この時期の親子に特に人気です。
                    外食中に離乳食のミルクを作る場合は、お店のお湯が使えるか事前に確認を。
                  </p>
                </div>
                <div className="bg-green-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-green-700 mb-1">🍜 9〜12ヶ月（離乳食後期）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    大人メニューから取り分けができるようになってくる時期です。
                    うどん（柔らかめに頼む）・豆腐・白身魚・お粥・柔らかい野菜が取り分けしやすいです。
                    丸亀製麺の釜揚げうどんは柔らかくて取り分けしやすく子連れに人気。
                    麺は一口大に切ってから与えると食べやすいです。この時期はベビーチェアがあると食べさせやすくなります。
                  </p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-amber-700 mb-1">🍱 1歳〜（完了期以降）</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    キッズメニューが食べられるようになります。
                    ファミレスのキッズプレートは290〜500円程度で提供されており、おもちゃ付きのセットも多いです。
                    サイゼリヤは290円からキッズメニューがあり、コスパ重視の子連れに人気です。
                    まだ硬いものや辛いものは注意が必要で、「薄味で」と頼む習慣をつけると便利です。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. ベビーカーOK おすすめチェーン店7選</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                全国チェーンの中でも特に子連れ向けの設備・対応が優れているお店を厳選しました。
                どこにでもある定番チェーンばかりなので、外出先でも見つけやすいです。
              </p>
              <div className="space-y-2.5">
                {[
                  {
                    name: "100本のスプーン",
                    tag: "離乳食無料",
                    desc: "子連れのために設計されたレストランチェーン。離乳食の無料提供（ドリンクオーダーで）が最大の特徴で、5〜8ヶ月の赤ちゃんを連れた親子に特に人気。新宿・池袋・豊洲・二子玉川など都市部に展開。",
                  },
                  {
                    name: "ロイヤルホスト",
                    tag: "離乳食温め可",
                    desc: "ファミレスの中でも「離乳食温めサービス」を実施しており、持参した離乳食を温めてもらえる。ベビーチェア完備。座席が広くゆったりしており、長時間でも過ごしやすい。全国チェーン。",
                  },
                  {
                    name: "サイゼリヤ",
                    tag: "コスパ◎",
                    desc: "キッズメニューが290円〜と業界最安水準。ミラノ風ドリア・スープ・ジュースのセットが人気。通路が比較的広くベビーカーで入りやすい店舗が多い。「外食費を抑えたいけど子連れOKな店がいい」という家庭の定番。",
                  },
                  {
                    name: "ガスト・ジョナサン",
                    tag: "おもちゃ付き",
                    desc: "キッズプレートにおもちゃが付属しており、食事中の子どもを飽きさせない工夫が嬉しい。ドリンクバーで大人もゆっくり過ごせる。全国に多数店舗があり、旅行先でも見つけやすい。",
                  },
                  {
                    name: "くら寿司・スシロー",
                    tag: "回転寿司",
                    desc: "タッチパネル注文なので、赤ちゃんが騒いでも注文に集中する必要がない。子どもが喜ぶビッくらポン（ガチャガチャ）が食事中の楽しみになる。個室・仕切り席を選ぶと周囲を気にせず食事できる。",
                  },
                  {
                    name: "木曽路",
                    tag: "個室座敷",
                    desc: "和食しゃぶしゃぶの木曽路は個室座敷が充実しており、赤ちゃんを横に寝かせながら食事できる環境が魅力。お食い初め・七五三など節目の外食に多くのご家族が利用。少し高めだが特別な日に最適。",
                  },
                  {
                    name: "焼肉きんぐ",
                    tag: "小学生未満無料",
                    desc: "食べ放題で小学生未満が無料になるプランがあり、ファミリーのコスパが非常に高い。座席はテーブル席で比較的広く、ベビーカーも置けることが多い。2歳前後〜のお子さんが一緒に食べられるようになったタイミングに特におすすめ。",
                  },
                ].map(r => (
                  <div key={r.name} className="flex gap-3 bg-gray-50 rounded-xl p-3.5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-gray-800">{r.name}</p>
                        <span className="text-[9px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold shrink-0">{r.tag}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. 子連れランチで持っていくと便利なもの</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                外食に備えて「子連れ外食ポーチ」を事前に作っておくと、毎回準備する手間が省けます。
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50/50 rounded-xl p-4">
                  <p className="text-xs font-bold text-blue-700 mb-2">👶 子ども用グッズ（必須）</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• <strong>食事用エプロン</strong>（シリコン製ポケット付きが食べこぼしを受けてくれる）</li>
                    <li>• <strong>チェアベルト</strong>（ベビーチェアがない店で普通の椅子に装着できる）</li>
                    <li>• <strong>ウェットティッシュ</strong>（お手拭き・テーブルの拭き取りに複数枚）</li>
                    <li>• <strong>着替え一式</strong>（食べこぼしで汚れたときに備えて）</li>
                    <li>• <strong>お気に入りのおもちゃ（小さいもの）</strong>（食事の待ち時間・飽きたときの対策）</li>
                  </ul>
                </div>
                <div className="bg-pink-50/50 rounded-xl p-4">
                  <p className="text-xs font-bold text-pink-700 mb-2">🍼 授乳・食事グッズ</p>
                  <ul className="text-xs text-gray-600 space-y-1 leading-relaxed">
                    <li>• 授乳ケープ（個室・授乳室がない場合に備えて）</li>
                    <li>• 離乳食（持参の場合）・ベビースプーン</li>
                    <li>• ジップロック（食べ残した離乳食の持ち帰り用）</li>
                    <li>• おむつ一式（外食中に替えることが多い）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">6. よくある子連れ外食の失敗と防ぎ方</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                子連れ外食の経験者が「やってしまった」と感じるよくある失敗をまとめました。事前に知っておくだけで防げます。
              </p>
              <div className="space-y-3">
                {[
                  {
                    fail: "ベビーカーが入口の段差を越えられなかった",
                    fix: "Googleマップのストリートビューで事前に外観確認。または電話で「段差はありますか」と問い合わせる",
                  },
                  {
                    fail: "食事中に大泣きして他のお客様に申し訳なかった",
                    fix: "個室・座敷席を予約。週末のランチピーク（12〜13時）を避ける。お気に入りのおもちゃを持参",
                  },
                  {
                    fail: "おむつ替え台がなくて困った",
                    fix: "事前にベビーカーナビで近くのおむつ替えスペースを確認しておく。ショッピングモール内の飲食店を選ぶ",
                  },
                  {
                    fail: "混雑で長時間待つことになり、赤ちゃんがぐずった",
                    fix: "開店直後（11時台）に来店、または事前予約で待ち時間をゼロにする",
                  },
                  {
                    fail: "離乳食を電子レンジで温められなかった",
                    fix: "事前に「離乳食の温めはできますか」と確認。ロイヤルホスト・デニーズなど対応チェーンを選ぶ",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                    <div className="bg-red-50 px-4 py-2">
                      <p className="text-xs font-bold text-red-700">❌ {item.fail}</p>
                    </div>
                    <div className="bg-green-50 px-4 py-2">
                      <p className="text-xs text-green-700">✅ {item.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                子連れ外食は事前のお店選びと準備が8割です。
                「ベビーカーで入れるか」「授乳室・おむつ替えスペースが近くにあるか」「座席タイプが子連れ向きか」の3点を軸にお店を選ぶだけで、外食のストレスが大幅に減ります。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                初めての子連れ外食は「100本のスプーン」のような専用設計のレストランか、
                ガスト・ロイヤルホストのようなファミレス系チェーンが最も入りやすいです。
                慣れてきたら個人店のカフェや居酒屋風レストランなど、少しずつ範囲を広げていきましょう。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                ベビーカーナビのスポット検索では、「ベビーカーOK」「授乳室あり」などの条件で近くのランチスポットを絞り込めます。おでかけの計画に活用してみてください。
              </p>
            </section>

            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">🍽️ 子連れランチスポットを探す</p>
              <p className="text-xs text-gray-500 mb-3">ベビーカーナビで現在地から近いベビーカーOKレストランを検索</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                子連れレストランを探す
              </Link>
            </section>
          </article>
          <ArticleAreaNav currentSlug="restaurant-tips" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
