import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import { amazonUrl, amazonSearchUrl } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "0歳赤ちゃんへのおすすめ絵本10選【月齢別・読み聞かせ方も解説】2026年版 | ベビーカーナビ",
  description: "新生児から読める絵本・0〜3ヶ月の視覚刺激絵本・4〜6ヶ月のリズム絵本・7〜12ヶ月の参加型絵本を月齢別に10冊厳選。Amazonで購入できるリンク付き。",
  keywords: ["0歳 絵本 おすすめ", "新生児 絵本", "赤ちゃん 絵本 0ヶ月", "読み聞かせ 0歳", "0歳 絵本 ランキング"],
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
  tags: string[];
}

const BOOKS: Book[] = [
  {
    rank: 1,
    asin: "4799321102",
    title: "もいもい",
    author: "開 一夫 / 市原 淳",
    publisher: "ブロンズ新社",
    ageTag: "0ヶ月〜",
    price: "1,100〜1,320円",
    desc: "東京大学の赤ちゃんラボの研究から生まれた絵本。シンプルな形と「もいもい」という謎の音が、赤ちゃんの視線を最も引きつけると科学的に実証されています。新生児でも目が止まると話題になり、SNSで大バズり。",
    point: "「生後1週間から見てくれた」という報告が続出。生まれて最初に買う絵本として最もおすすめです。",
    tags: ["新生児〜", "視覚刺激", "科学的根拠あり"],
  },
  {
    rank: 2,
    asin: "4052031113",
    title: "しましまぐるぐる",
    author: "柏原 晃夫",
    publisher: "学研プラス",
    ageTag: "0ヶ月〜",
    price: "880〜990円",
    desc: "白黒のしましまとぐるぐる模様が並ぶだけのシンプルな絵本ですが、全国100万部超えのベストセラー。生後0〜2ヶ月の赤ちゃんの視力は0.01〜0.05程度で、コントラストの強い白黒が一番見えやすい時期に最適。",
    point: "「何を見せたらいいか分からない」0〜2ヶ月の赤ちゃんに最初に試してほしい一冊。",
    tags: ["新生児〜", "白黒絵本", "視覚発達"],
  },
  {
    rank: 3,
    asin: "4580813952",
    title: "もこ もこもこ",
    author: "谷川 俊太郎 / 元永 定正",
    publisher: "文研出版",
    ageTag: "0ヶ月〜",
    price: "990〜1,100円",
    desc: "「もこ」「にょき」「ぱく」など不思議な擬音が続く詩人・谷川俊太郎の傑作。形が変わるたびに違う色になる抽象的な絵が赤ちゃんの感覚を刺激します。声に出して読むとリズムが楽しい。",
    point: "「もこ」と声に出すと赤ちゃんが反応する！寝かしつけのルーティンにも使えます。",
    tags: ["新生児〜", "擬音語", "リズム"],
  },
  {
    rank: 4,
    asin: "4494001015",
    title: "いないいないばあ",
    author: "松谷 みよ子 / 瀬川 康男",
    publisher: "童心社",
    ageTag: "4ヶ月〜",
    price: "880〜990円",
    desc: "1967年発行から累計700万部超、日本で最も売れた絵本。「いないいない…ばあ！」の繰り返しが楽しく、4〜5ヶ月頃から笑顔で反応するようになります。日本の絵本といえばこの一冊。",
    point: "読むたびに「ばあ！」で笑う赤ちゃんの顔が最高のご褒美。全家庭に1冊は置いてほしい定番中の定番。",
    tags: ["4ヶ月〜", "定番", "700万部超"],
  },
  {
    rank: 5,
    asin: "4031024401",
    title: "じゃあじゃあびりびり",
    author: "まついのりこ",
    publisher: "偕成社",
    ageTag: "4ヶ月〜",
    price: "660〜770円",
    desc: "水・紙・犬など身近なものの音を「じゃあじゃあ」「びりびり」と表した絵本。赤ちゃんが音と物を結びつける「音象徴」の発達を促します。ボード版で口に入れても安全。お値段も控えめでプレゼントにも◎",
    point: "音の響きが楽しくて赤ちゃんが声を出す！語彙発達の最初の一冊として定番中の定番。",
    tags: ["4ヶ月〜", "擬音語", "語彙発達"],
  },
  {
    rank: 6,
    asin: "4893094319",
    title: "だるまさんが",
    author: "かがくいひろし",
    publisher: "ブロンズ新社",
    ageTag: "4ヶ月〜",
    price: "880〜990円",
    desc: "「だるまさんが…どてっ！」など、だるまさんがころんだり伸びたりする絵本。予測と裏切りが赤ちゃんの笑いの仕組みを刺激します。だるまさん3部作（「が」「の」「と」）でさらに楽しい。",
    point: "「どてっ」で一緒に倒れるのが楽しい！親子で体を使いながら楽しめる絵本。シリーズ3冊揃えたくなります。",
    tags: ["4ヶ月〜", "シリーズ", "笑い"],
  },
  {
    rank: 7,
    asin: "4834008991",
    title: "きんぎょがにげた",
    author: "五味 太郎",
    publisher: "福音館書店",
    ageTag: "7ヶ月〜",
    price: "990〜1,100円",
    desc: "金魚鉢から逃げた金魚を「どこにいるかな？」と探しながら読む参加型絵本。色鮮やかな絵の中に隠れた金魚を指差して探す遊びが発達を促します。指差しが始まった赤ちゃんに最高のタイミング。",
    point: "「いた！」と指差しが始まった赤ちゃんに最高の絵本。コミュニケーションが爆発的に増えます！",
    tags: ["7ヶ月〜", "参加型", "指差し"],
  },
  {
    rank: 8,
    asin: "4033280103",
    title: "はらぺこあおむし",
    author: "エリック・カール",
    publisher: "偕成社",
    ageTag: "7ヶ月〜",
    price: "1,100〜1,430円",
    desc: "あおむしが食べながら大きくなる世界的名作絵本。鮮やかな色彩・穴あきの仕掛け・数と食べ物の学び・変態のストーリーと学びの要素が満載。世界55言語で翻訳、3,000万部超のベストセラー。",
    point: "知らない人はいない世界的名作。穴に指を入れる遊びが赤ちゃんに大人気！食育にもぴったり。",
    tags: ["7ヶ月〜", "世界的名作", "仕掛け"],
  },
  {
    rank: 9,
    asin: "4772100318",
    title: "しろくまちゃんのほっとけーき",
    author: "わかやまけん",
    publisher: "こぐま社",
    ageTag: "7ヶ月〜",
    price: "880〜990円",
    desc: "しろくまちゃんが一人でホットケーキを作る絵本。「ぽたあん」「じゅわじゅわ」など焼ける音の擬音が赤ちゃんを引きつけます。「子どもが一番好きな絵本」に常連のロングセラー。",
    point: "焼けていく様子のページで「食べたい！」という表情をする赤ちゃんが続出。食育にも◎",
    tags: ["7ヶ月〜", "食育", "擬音語"],
  },
  {
    rank: 10,
    asin: "4834006875",
    title: "おつきさまこんばんは",
    author: "林 明子",
    publisher: "福音館書店",
    ageTag: "4ヶ月〜",
    price: "880〜990円",
    desc: "夜空にお月様が昇り、雲に隠れ、また現れる…。シンプルなストーリーと温かみのある絵が赤ちゃんの感性を育てます。寝かしつけ前に読む絵本の定番として30年以上愛され続けている名作。",
    point: "寝る前のルーティンに最適。「こんばんは」と月に手を振るしぐさが愛らしい。",
    tags: ["4ヶ月〜", "寝かしつけ", "定番"],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <div className="text-3xl mb-2">📚</div>
          <h1 className="text-lg font-black leading-tight">0歳赤ちゃんへのおすすめ絵本10選<br />月齢別・読み聞かせ方も解説</h1>
          <p className="text-[11px] opacity-80 mt-2">新生児〜12ヶ月の発達に合わせた選び方 / 読了時間：約8分</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />

          {/* アフィリエイト開示 */}
          <div className="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              当サイトはAmazonアソシエイト・プログラムの参加者です。記事内のリンクからAmazonでお買い物いただくと、売上の一部がサイト運営費として還元されます（お客様の購入価格に変わりはありません）。
            </p>
          </div>

          <article className="space-y-5">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">0歳赤ちゃんに絵本は必要？いつから始める？</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「生まれたばかりなのに絵本を読んでも意味があるの？」と思うパパ・ママも多いですが、
                実は<strong>新生児期からの読み聞かせには大きな意味があります</strong>。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                生後0〜2ヶ月の赤ちゃんは視力がまだ0.01〜0.05程度。しかし聴覚はすでに発達しており、
                ママ・パパの声を聞き分けることができます。この時期に声を聞かせること、
                見やすい絵を見せることが視覚・聴覚・言語の発達を促します。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                また、読み聞かせはコミュニケーションの練習でもあります。
                声に反応して目を向ける、笑う、声を出す——これらが言語発達の最初の一歩です。
                「まだ内容は分からないから」ではなく、「声を聞かせる時間」として気軽に始めてみましょう。
              </p>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-xs font-bold text-purple-800 mb-1">📋 月齢別の選び方ポイント</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• <strong>0〜3ヶ月</strong>：白黒・シンプルな形・高コントラストの絵本</li>
                  <li>• <strong>4〜6ヶ月</strong>：色鮮やか・繰り返し・リズムのある絵本</li>
                  <li>• <strong>7〜12ヶ月</strong>：参加型・指差し・物の名前が出てくる絵本</li>
                </ul>
              </div>
            </section>

            {/* ランキング */}
            <section className="space-y-3">
              <h2 className="text-base font-bold px-1">おすすめ絵本ランキングTOP10</h2>
              {BOOKS.flatMap((book, idx) => {
                const href = book.asin ? amazonUrl(book.asin) : amazonSearchUrl(book.searchKeyword ?? book.title);
                const card = (
                  <div key={book.rank} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 pt-4 mb-2">
                      <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-black flex items-center justify-center shrink-0">
                        {book.rank}
                      </span>
                      <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{book.ageTag}</span>
                      {book.tags.slice(1).map(t => (
                        <span key={t} className="text-[9px] bg-violet-50 text-violet-600 px-1.5 py-0.5 rounded font-medium">{t}</span>
                      ))}
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="text-sm font-bold mb-0.5">『{book.title}』</h3>
                      <p className="text-[10px] text-gray-500 mb-2">{book.author}｜{book.publisher}</p>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">{book.desc}</p>
                      <div className="bg-orange-50 rounded-lg px-3 py-2 mb-3">
                        <p className="text-[10px] text-orange-800 leading-relaxed">
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
                    <div key="mid-cta" className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-5 text-white text-center">
                      <p className="text-lg font-black mb-1">📚 残り5冊をチェック！</p>
                      <p className="text-xs opacity-80 mb-4">月齢別おすすめ絵本50冊をまとめて見られます</p>
                      <Link href="/baby-goods/ehon" className="inline-block bg-white text-violet-700 font-bold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition">
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
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">0歳赤ちゃんへの読み聞かせのコツ</h2>
              <div className="space-y-3">
                {[
                  { icon: "🎵", title: "ゆっくり・はっきりと声を出す", desc: "大人向けの話し方より少しゆっくり、はっきりと読むのがコツ。高めのトーン（マザリーズ）が赤ちゃんの注意を引きやすいです。" },
                  { icon: "🔁", title: "同じ絵本を何度も読んでOK", desc: "「また同じ絵本？」と思わなくて大丈夫。繰り返しが言語発達を促します。赤ちゃんが飽きても、親が10回読んでも良い絵本を選ぶのがポイント。" },
                  { icon: "⏱️", title: "時間は短くていい", desc: "最初は3〜5分でも十分。赤ちゃんがよそ見をしたり動き出したりしたらやめてOK。楽しい・気持ちいい体験として積み上げることが大切。" },
                  { icon: "📱", title: "スマホはしまってから読む", desc: "読み聞かせ中はスマホをしまい、赤ちゃんの顔を見ながら読みましょう。アイコンタクトが子どもの感情発達を促します。" },
                ].map(tip => (
                  <div key={tip.icon} className="flex gap-3 bg-purple-50/50 rounded-xl p-3.5">
                    <span className="text-xl shrink-0">{tip.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800 mb-0.5">{tip.title}</p>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">月齢別おすすめ50冊はこちら</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さらに多くの絵本を月齢別に探したい方は、ベビーカーナビの絵本まとめページをご覧ください。0ヶ月〜3歳の月齢別に50冊を厳選しています。
              </p>
              <Link
                href="/baby-goods/ehon"
                className="flex items-center justify-between bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl px-4 py-3 transition"
              >
                <div>
                  <p className="text-sm font-bold text-violet-700">📚 月齢別おすすめ絵本50冊</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">0ヶ月〜3歳・テーマ別に厳選</p>
                </div>
                <span className="text-violet-400 text-lg">›</span>
              </Link>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">Amazonで絵本をまとめて探す</h2>
              <div className="space-y-2">
                {[
                  { label: "新生児〜3ヶ月向け絵本", keyword: "新生児 絵本 赤ちゃん 0ヶ月" },
                  { label: "4〜6ヶ月向け絵本", keyword: "赤ちゃん 絵本 4ヶ月 リズム" },
                  { label: "7〜12ヶ月向け絵本", keyword: "赤ちゃん 絵本 7ヶ月 参加型" },
                  { label: "0歳向け絵本ギフトセット", keyword: "赤ちゃん 絵本 ギフト 0歳 セット" },
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

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                0歳の絵本選びは「何が描いてあるか」より「赤ちゃんが反応しやすいか」が大切です。
                新生児期は白黒・シンプルな絵本から始めて、4ヶ月を過ぎたら色鮮やかでリズムのある絵本へ移行しましょう。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                最初の1冊に迷ったら「もいもい」か「いないいないばあ」、コスパを重視するなら「じゃあじゃあびりびり」がおすすめです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                絵本はプレゼントにも最適です。出産祝いに絵本を選ぶ際は月齢に合わせて選ぶか、あえて「いないいないばあ」「だるまさんが」のような定番作品を選ぶと確実に喜ばれます。
              </p>
            </section>

          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
