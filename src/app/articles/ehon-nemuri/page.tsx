import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import { amazonUrl, amazonSearchUrl } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "【2026年】寝かしつけに効く絵本10選｜赤ちゃんが眠くなるおすすめ絵本ランキング | ベビーカーナビ",
  description: "「読んだら眠くなった」と評判の寝かしつけ絵本を厳選10冊。0歳〜2歳の月齢別おすすめと、読み聞かせを寝かしつけルーティンにする方法も解説。Amazon購入リンク付き。",
  keywords: ["寝かしつけ 絵本 おすすめ", "赤ちゃん 眠くなる 絵本", "寝かしつけ 読み聞かせ", "0歳 寝かしつけ 絵本", "寝かしつけ ルーティン"],
};

interface Book {
  rank: number;
  asin?: string;
  searchKeyword?: string;
  title: string;
  author: string;
  publisher: string;
  ageTag: string;
  price: string;
  desc: string;
  point: string;
  sleepEffect: string;
}

const BOOKS: Book[] = [
  {
    rank: 1,
    asin: "4002001916",
    title: "おやすみなさいおつきさま",
    author: "マーガレット・ワイズ・ブラウン / クレメント・ハード",
    publisher: "評論社",
    ageTag: "6ヶ月〜",
    price: "1,210〜1,430円",
    desc: "「おやすみなさい、おつきさま。おやすみなさい、こうしのえ」——部屋の中のものひとつひとつに「おやすみ」を言っていく絵本。落ち着いた緑・青の配色と単調なリズムが自然と眠気を誘います。アメリカで60年以上読まれ続ける寝かしつけ絵本の王様。",
    point: "読むにつれて言葉がゆっくりになっていく構成が絶妙。「おやすみなさい」を読むころには赤ちゃんがうとうとしています。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 2,
    asin: "4834002187",
    title: "ねないこだれだ",
    author: "せなけいこ",
    publisher: "福音館書店",
    ageTag: "1歳〜",
    price: "770〜880円",
    desc: "夜中に起きていると「おばけ」に連れていかれる——という寝かしつけ絵本。怖そうで実は可愛いおばけのデザインが長年愛され続けています。1969年から変わらず読まれ続ける日本の寝かしつけ絵本の定番。",
    point: "「おばけになっちゃうよ」が魔法の言葉に。1歳頃から「寝なきゃ！」と自分で布団に入るようになった子続出。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 3,
    asin: "4834006875",
    title: "おつきさまこんばんは",
    author: "林 明子",
    publisher: "福音館書店",
    ageTag: "4ヶ月〜",
    price: "880〜990円",
    desc: "夜空にお月様が昇り、雲に隠れ、また現れる…。シンプルなストーリーと温かみのある林明子の絵が赤ちゃんの感性を育てます。「こんばんは」→「おやすみ」の流れが自然と夜の雰囲気を作り出す一冊。",
    point: "絵本の後に「おつきさまに挨拶したから寝ようね」と言うだけで寝る準備ができる。月に手を振るしぐさが愛らしい。",
    sleepEffect: "★★★★☆",
  },
  {
    rank: 4,
    searchKeyword: "おふとんかけたら 絵本 かがくいひろし",
    title: "おふとんかけたら",
    author: "かがくいひろし",
    publisher: "ブロンズ新社",
    ageTag: "6ヶ月〜",
    price: "990〜1,100円",
    desc: "「だるまさん」シリーズのかがくいひろしによる寝かしつけ絵本。動物たちにふとんをかけていく優しい絵本で、読んでいるうちに自然と眠くなります。繰り返しのリズムとほっこりする絵が人気。",
    point: "「かけてあげたくなる」優しさが眠気を誘う。「次は誰にかけるの？」という優しい流れが子どもをリラックスさせます。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 5,
    searchKeyword: "よるくま 絵本 酒井駒子",
    title: "よるくま",
    author: "酒井 駒子",
    publisher: "偕成社",
    ageTag: "2歳〜",
    price: "1,100〜1,320円",
    desc: "夜中に目が覚めたくまの子が「お母さんを探しに行く」お話。柔らかい水彩の絵と静かな夜の雰囲気が、親子の絆と安心感を伝えます。酒井駒子の代表作で大人も感動する名作。",
    point: "「お母さんいるよ」と抱きしめながら読むと子どもが安心して眠れる。読後に感動で涙が出るほど良い絵本。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 6,
    searchKeyword: "くまのこうちゃん おやすみなさい 絵本",
    title: "くまのこうちゃん おやすみなさい",
    author: "ドン・フリーマン",
    publisher: "偕成社",
    ageTag: "1歳〜",
    price: "1,100〜1,320円",
    desc: "くまのぬいぐるみ・コーデュロイが眠るまでのお話。ふわふわのくまとベッドの温かみのある絵が、眠る前の安心感を演出します。ぬいぐるみを一緒に持ちながら読むと効果倍増。",
    point: "「コーデュロイみたいに寝ようね」で子どもがぬいぐるみを抱いて目を閉じます。寝かしつけルーティンに最強の絵本。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 7,
    searchKeyword: "ぐーぐーぐー 絵本 赤ちゃん",
    title: "ぐーぐーぐー",
    author: "おおたか なおこ",
    publisher: "偕成社",
    ageTag: "4ヶ月〜",
    price: "990〜1,100円",
    desc: "動物たちが色々な寝方で「ぐーぐー」眠る絵本。シンプルでリズミカルな言葉と温かみのある絵が眠くなる雰囲気を作り出します。「ぐーぐー」の繰り返しが自然と眠気を誘います。",
    point: "読んでいると赤ちゃんと一緒に眠くなってくる不思議な絵本。声をだんだん小さくしながら読むのがコツ。",
    sleepEffect: "★★★★☆",
  },
  {
    rank: 8,
    searchKeyword: "もうねんね 絵本 松谷みよ子",
    title: "もうねんね",
    author: "松谷 みよ子 / 瀬川 康男",
    publisher: "童心社",
    ageTag: "0ヶ月〜",
    price: "880〜990円",
    desc: "「いないいないばあ」の松谷みよ子と瀬川康男コンビによる寝かしつけ絵本。「ねんね、ねんね」とリズムよく繰り返す言葉が子守唄のように眠気を誘います。新生児から使えるのも魅力。",
    point: "声に出すと子守唄のようになる。「ねんね、ねんね」と繰り返しながら赤ちゃんを揺らすと相乗効果で眠ります。",
    sleepEffect: "★★★★☆",
  },
  {
    rank: 9,
    searchKeyword: "おやすみロジャー 絵本 魔法のぐっすり絵本",
    title: "おやすみ、ロジャー 魔法のぐっすり絵本",
    author: "カール=ヨハン・エリーン",
    publisher: "飛鳥新社",
    ageTag: "1歳〜",
    price: "1,100〜1,320円",
    desc: "「読むと子どもが眠る」として話題になった北欧発の絵本。睡眠科学・神経言語プログラミング（NLP）の研究をもとに作られており、ゆっくり読むだけで眠気が誘発されるよう設計されています。",
    point: "本当に眠くなる！ゆっくり単調に読むのがコツ。「読んで5分で眠った」という親が続出の話題書。",
    sleepEffect: "★★★★★",
  },
  {
    rank: 10,
    asin: "4580813952",
    title: "もこ もこもこ",
    author: "谷川 俊太郎 / 元永 定正",
    publisher: "文研出版",
    ageTag: "0ヶ月〜",
    price: "990〜1,100円",
    desc: "「もこ」「にょき」「ぱく」などのリズミカルな言葉が続く谷川俊太郎の傑作。内容はシュールですが、声に出すとリズムが心地よく、新生児期からの寝かしつけに使えます。",
    point: "だんだんゆっくり読んでいくと自然と眠くなる。同じ絵本を毎日読み続けることでルーティンになります。",
    sleepEffect: "★★★★☆",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <div className="text-3xl mb-2">🌙</div>
          <h1 className="text-lg font-black leading-tight">寝かしつけに効く絵本10選<br />赤ちゃんが眠くなるおすすめランキング</h1>
          <p className="text-[11px] opacity-80 mt-2">0歳〜2歳対応・ルーティン化のコツも解説 / 読了時間：約7分</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年6月" readTime="約7分" />

          <div className="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              当サイトはAmazonアソシエイト・プログラムの参加者です。記事内のリンクからAmazonでお買い物いただくと、売上の一部がサイト運営費として還元されます（お客様の購入価格に変わりはありません）。
            </p>
          </div>

          <article className="space-y-5">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">なぜ読み聞かせが寝かしつけに効くのか</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「毎日寝かしつけに1時間以上かかる」「抱っこじゃないと眠らない」——子育て中のパパ・ママの悩みの定番です。
                そんなときに「絵本での読み聞かせ」が効果的な理由があります。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <strong>ルーティンの力：</strong>赤ちゃんは繰り返しの習慣に安心感を覚えます。
                「お風呂→絵本→おやすみ」という流れが定着すると、絵本を開くだけで「寝る時間だ」と脳が判断し始めます。
                これを「睡眠の合図（スリープキュー）」といい、2〜4週間続けると効果が出てきます。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <strong>声のトーンと眠気：</strong>親が穏やかな声でゆっくり読むと、赤ちゃんの交感神経が落ち着いて副交感神経が優位になります。
                さらに抱っこしながら読むと体温と安心感が加わって、相乗効果で眠気が増します。
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-800 mb-1">💡 寝かしつけ絵本を選ぶポイント</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• 色合いが落ち着いている（暖色や深めの青・緑）</li>
                  <li>• ページ数が少ない（10〜20ページが理想）</li>
                  <li>• 繰り返しの言葉・ゆっくりしたリズム</li>
                  <li>• 「夜・お月様・おやすみ」などのキーワードが含まれる</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-bold px-1">寝かしつけ絵本ランキングTOP10</h2>
              <p className="text-xs text-gray-500 px-1">★の数は寝かしつけ効果の目安（編集部独自評価）</p>
              {BOOKS.flatMap((book, idx) => {
                const href = book.asin ? amazonUrl(book.asin) : amazonSearchUrl(book.searchKeyword ?? book.title);
                const card = (
                  <div key={book.rank} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 pt-4 mb-2">
                      <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0">
                        {book.rank}
                      </span>
                      <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{book.ageTag}</span>
                      <span className="text-[10px] text-yellow-500 ml-auto">{book.sleepEffect}</span>
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="text-sm font-bold mb-0.5">『{book.title}』</h3>
                      <p className="text-[10px] text-gray-500 mb-2">{book.author}｜{book.publisher}</p>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">{book.desc}</p>
                      <div className="bg-indigo-50 rounded-lg px-3 py-2 mb-3">
                        <p className="text-[10px] text-indigo-800 leading-relaxed">
                          <span className="font-bold">編集部：</span>{book.point}
                        </p>
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2.5 transition"
                      >
                        <span className="text-xs font-bold">🛒 Amazonで見る</span>
                        <span className="text-[10px] opacity-80">参考価格 {book.price}</span>
                      </a>
                    </div>
                  </div>
                );
                if (idx === 5) {
                  return [
                    <div key="mid-cta" className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-5 text-white text-center">
                      <p className="text-lg font-black mb-1">🌙 寝かしつけ絵本をもっと探す</p>
                      <p className="text-xs opacity-80 mb-4">0〜3歳の月齢別おすすめ絵本50冊を一覧でチェック</p>
                      <Link href="/baby-goods/ehon" className="inline-block bg-white text-indigo-700 font-bold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition">
                        月齢別おすすめ絵本50冊を見る →
                      </Link>
                    </div>,
                    card,
                  ];
                }
                return [card];
              })}
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">読み聞かせを寝かしつけルーティンにする方法</h2>
              <div className="space-y-3">
                {[
                  { step: "STEP 1", title: "毎日同じ時間・同じ場所で読む", desc: "時間・場所・手順を固定することがルーティン化の鍵。「お風呂→パジャマ→絵本→おやすみ」の順番を2週間続けましょう。" },
                  { step: "STEP 2", title: "部屋の明かりを暗くしてから読む", desc: "メラトニン（眠りホルモン）は暗くなると分泌されます。読む前に部屋の照明を間接照明や薄暗い状態にするだけで効果的。" },
                  { step: "STEP 3", title: "読む本は1〜2冊に固定する", desc: "毎日同じ絵本を読むことで「この絵本=眠る時間」という条件反射が生まれます。最初の2週間は同じ絵本だけで試して。" },
                  { step: "STEP 4", title: "声をだんだん小さく・ゆっくりにする", desc: "読み始めは普通のペースで、終わりに近づくほどゆっくり・小さく・単調に読むのがコツ。これだけで寝かしつけ時間が短縮されます。" },
                ].map(s => (
                  <div key={s.step} className="flex gap-3">
                    <span className="shrink-0 text-[10px] font-black text-white bg-indigo-500 px-2 py-1 rounded-lg h-fit">{s.step}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800 mb-0.5">{s.title}</p>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">Amazonで寝かしつけ絵本を探す</h2>
              <div className="space-y-2">
                {[
                  { label: "寝かしつけ絵本 0歳〜1歳向け", keyword: "寝かしつけ 絵本 0歳 おすすめ" },
                  { label: "おやすみ・夜がテーマの絵本", keyword: "おやすみ 夜 絵本 赤ちゃん" },
                  { label: "寝かしつけ絵本ギフトセット", keyword: "寝かしつけ 絵本 ギフト セット" },
                ].map(item => (
                  <a
                    key={item.keyword}
                    href={amazonSearchUrl(item.keyword)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 rounded-xl px-4 py-2.5 transition border border-orange-100"
                  >
                    <span className="text-xs font-bold text-orange-700">🔍 {item.label}</span>
                    <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded font-bold">Amazon</span>
                  </a>
                ))}
              </div>
            </section>

            <Link
              href="/baby-goods/ehon"
              className="flex items-center justify-between bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-2xl px-5 py-4 transition"
            >
              <div>
                <p className="text-sm font-bold text-violet-700">📚 月齢別おすすめ絵本50冊を見る</p>
                <p className="text-[10px] text-gray-500 mt-0.5">0ヶ月〜3歳・テーマ別に厳選掲載</p>
              </div>
              <span className="text-violet-400 text-lg">›</span>
            </Link>

          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
