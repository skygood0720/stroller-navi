import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import { amazonUrl, amazonSearchUrl } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "言葉を育てるおすすめ絵本10選｜発語を促す読み聞かせ方も解説【2026年版】 | ベビーカーナビ",
  description: "「まんま」「ばあ」など赤ちゃんの最初の言葉を引き出すおすすめ絵本10選。言語発達の専門知識をもとに、月齢別の選び方と読み聞かせのコツを解説。Amazon購入リンク付き。",
  keywords: ["発語 絵本 おすすめ", "言葉 遅い 絵本", "1歳 言葉 増やす 絵本", "語彙 絵本 赤ちゃん", "発語促す 絵本"],
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
  langEffect: string;
}

const BOOKS: Book[] = [
  {
    rank: 1,
    asin: "4031024401",
    title: "じゃあじゃあびりびり",
    author: "まついのりこ",
    publisher: "偕成社",
    ageTag: "4ヶ月〜",
    price: "660〜770円",
    desc: "水・紙・犬など身近なものを「じゃあじゃあ」「びりびり」「ぶーぶー」という擬音で表した絵本。赤ちゃんが音と物を結びつける「音象徴」という言語発達の最初の段階を自然に促します。言語聴覚士もすすめる定番作品。",
    point: "「これ何？」「じゃあじゃあ！」というやりとりが自然に生まれる。語彙の最初の一冊として最もおすすめ。",
    langEffect: "🗣️🗣️🗣️🗣️🗣️",
  },
  {
    rank: 2,
    searchKeyword: "かおかお どんなかお 絵本 こぐま社",
    title: "かおかお どんなかお",
    author: "柳原 良平",
    publisher: "こぐま社",
    ageTag: "4ヶ月〜",
    price: "880〜990円",
    desc: "うれしい顔・かなしい顔・おこった顔など様々な表情を描いた絵本。赤ちゃんは生まれながらに「顔」に最も注目します。感情を表す語彙（嬉しい・悲しい・怒り）を早期から学べる。",
    point: "「これはどんなかお？」と問いかけると4ヶ月から反応が出る！感情語彙を育てる最初の一冊。",
    langEffect: "🗣️🗣️🗣️🗣️🗣️",
  },
  {
    rank: 3,
    asin: "4834008991",
    title: "きんぎょがにげた",
    author: "五味 太郎",
    publisher: "福音館書店",
    ageTag: "8ヶ月〜",
    price: "990〜1,100円",
    desc: "「どこ？」「いた！」という問いかけと発見の繰り返しが、指差しと言葉の発達を同時に促す参加型絵本。「金魚はどこにいるかな？」という問いかけに答えようとする行動が言語理解の第一歩。",
    point: "「どこ？」「あ！」と声を出すきっかけになる絵本。指差しが始まった赤ちゃんに最高のタイミング。",
    langEffect: "🗣️🗣️🗣️🗣️🗣️",
  },
  {
    rank: 4,
    asin: "4033280103",
    title: "はらぺこあおむし",
    author: "エリック・カール",
    publisher: "偕成社",
    ageTag: "8ヶ月〜",
    price: "1,100〜1,430円",
    desc: "月曜・りんご・火曜・なし…と曜日と食べ物が連動する構成が、数・色・食べ物の名前を自然に繰り返して覚えさせます。「りんご！」「なし！」など単語を声に出す練習に最適。世界で最も読まれた絵本。",
    point: "「りんご！」「なし！」と食べ物の名前を言えるようになる絵本として定評あり。語彙拡充に効果的。",
    langEffect: "🗣️🗣️🗣️🗣️☆",
  },
  {
    rank: 5,
    searchKeyword: "どうぞのいす 絵本 香山美子",
    title: "どうぞのいす",
    author: "香山 美子 / 柿本 幸造",
    publisher: "ひさかたチャイルド",
    ageTag: "2歳〜",
    price: "990〜1,100円",
    desc: "「どうぞ」という言葉をテーマにした絵本。「どうぞ」「ありがとう」「ごめんなさい」などの基本的なコミュニケーション語彙を物語の中で自然に覚えられます。思いやりの心も同時に育ちます。",
    point: "「どうぞ」が言えるようになった！という親からの報告が多い。社会性語彙の発達に特に効果的な名作。",
    langEffect: "🗣️🗣️🗣️🗣️🗣️",
  },
  {
    rank: 6,
    searchKeyword: "たまごのあかちゃん かんざわとしこ 絵本",
    title: "たまごのあかちゃん",
    author: "かんざわとしこ / やぎゅうげんいちろう",
    publisher: "福音館書店",
    ageTag: "8ヶ月〜",
    price: "990〜1,100円",
    desc: "「たまごの あかちゃん だあれ？」「ぴよぴよ、ひよこさん！」という問いかけと答えの形式で楽しめる絵本。Q&A形式が自然に「答えを言う」練習になり、発語を引き出しやすい構造になっています。",
    point: "問いかけに答えようとする真剣な表情が可愛い。「だあれ？」に対して声を出そうとする姿に発語への意欲が見える。",
    langEffect: "🗣️🗣️🗣️🗣️🗣️",
  },
  {
    rank: 7,
    searchKeyword: "くだもの 絵本 平山和子 福音館",
    title: "くだもの",
    author: "平山 和子",
    publisher: "福音館書店",
    ageTag: "7ヶ月〜",
    price: "990〜1,100円",
    desc: "りんご・ぶどう・もも…果物がリアルに描かれた絵本。「どうぞ」と赤ちゃんに食べさせるまねができる参加型の仕掛けが含まれており、果物の名前を繰り返し見聞きすることで語彙が増えます。",
    point: "「りんご」「みかん」と果物の名前を最初に覚えた！という報告が多い。語彙発達の食育絵本として定番。",
    langEffect: "🗣️🗣️🗣️🗣️☆",
  },
  {
    rank: 8,
    searchKeyword: "しぜんに タッチ 絵本 赤ちゃん 擬音語",
    title: "ぴょーん",
    author: "まつおか たつひで",
    publisher: "ポプラ社",
    ageTag: "9ヶ月〜",
    price: "990〜1,100円",
    desc: "かえる・ばった・うさぎなど様々な動物が「ぴょーん！」とジャンプする絵本。同じ動作を様々な主語でやることで、動詞と主語の組み合わせを自然に理解し始めます。体を動かしながら読める点も◎",
    point: "「ぴょーん！」と一緒に言えた瞬間の喜びが忘れられない。動詞語彙（とぶ、はしる）の発達に効果的。",
    langEffect: "🗣️🗣️🗣️🗣️☆",
  },
  {
    rank: 9,
    asin: "4834000826",
    title: "ぐりとぐら",
    author: "中川 李枝子 / 大村 百合子",
    publisher: "福音館書店",
    ageTag: "2歳〜",
    price: "990〜1,100円",
    desc: "野ねずみのぐりとぐらが大きな卵でカステラを作る物語。日本語として美しい文章と豊かな語彙が詰まった名作。2歳以上には少し文章が長くなりますが、繰り返し読むことで文章表現の語彙が増えます。",
    point: "「ぐりとぐら！」と繰り返しながら楽しめる定番。日本語の美しさを感じる文章が語彙力の土台を作ります。",
    langEffect: "🗣️🗣️🗣️🗣️☆",
  },
  {
    rank: 10,
    searchKeyword: "ノンタン おひさまぎらぎら 絵本 語彙",
    title: "ノンタン おひさまぎらぎら",
    author: "キヨノ サチコ",
    publisher: "偕成社",
    ageTag: "1歳〜",
    price: "660〜770円",
    desc: "友達との会話・感情表現が豊かに描かれているノンタンシリーズ。「かして」「いや」「いっしょに」など社会的なコミュニケーション語彙が自然に学べます。シリーズ多数で飽きずに語彙拡充ができる。",
    point: "「かして！」「いっしょに！」という言葉を絵本から学んだ子が多い。日常会話語彙の発達に効果大。",
    langEffect: "🗣️🗣️🗣️🗣️☆",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-green-600 via-teal-500 to-emerald-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <div className="text-3xl mb-2">🗣️</div>
          <h1 className="text-lg font-black leading-tight">言葉を育てるおすすめ絵本10選<br />発語を促す読み聞かせ方も解説</h1>
          <p className="text-[11px] opacity-80 mt-2">4ヶ月〜2歳・語彙発達に効く絵本を厳選 / 読了時間：約8分</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />

          <div className="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              当サイトはAmazonアソシエイト・プログラムの参加者です。記事内のリンクからAmazonでお買い物いただくと、売上の一部がサイト運営費として還元されます（お客様の購入価格に変わりはありません）。
            </p>
          </div>

          <article className="space-y-5">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">絵本が言葉の発達に効く理由</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「うちの子、まだ言葉が出ない……」「もっと話しかけてあげたほうがいい？」——1歳前後になると言葉の発達が気になり始めるパパ・ママが多いです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                言語聴覚士や発達の専門家が口をそろえて言うのが「読み聞かせは最良の言語刺激のひとつ」という事実です。
                なぜなら絵本には以下の言語発達に有効な要素がすべて含まれているからです。
              </p>
              <div className="space-y-2">
                {[
                  { icon: "🔁", title: "繰り返しと予測", desc: "「いないいないばあ」「じゃあじゃあびりびり」など繰り返しのパターンが、言語の規則性を感じる力を育てます" },
                  { icon: "👁️", title: "絵と言葉の対応", desc: "「りんご」と言いながら絵のりんごを指すことで、物と言葉が結びつきます（これが最初の語彙形成）" },
                  { icon: "💬", title: "双方向のやりとり", desc: "「これは何？」「あ！」のような反応を引き出す読み方が、会話の基礎を育てます" },
                  { icon: "🎵", title: "音とリズム", desc: "擬音語・リズムが豊かな文章が音韻意識（音と文字を結びつける力）を育てます" },
                ].map(tip => (
                  <div key={tip.icon} className="flex gap-3 bg-green-50/50 rounded-xl p-3.5">
                    <span className="text-xl shrink-0">{tip.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800 mb-0.5">{tip.title}</p>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-bold px-1">言葉を育てるおすすめ絵本TOP10</h2>
              <p className="text-xs text-gray-500 px-1">🗣️の数は語彙発達効果の目安（編集部独自評価）</p>
              {BOOKS.map((book) => {
                const href = book.asin ? amazonUrl(book.asin) : amazonSearchUrl(book.searchKeyword ?? book.title);
                return (
                  <div key={book.rank} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 pt-4 mb-2">
                      <span className="w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs font-black flex items-center justify-center shrink-0">
                        {book.rank}
                      </span>
                      <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{book.ageTag}</span>
                      <span className="text-[10px] ml-auto">{book.langEffect}</span>
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="text-sm font-bold mb-0.5">『{book.title}』</h3>
                      <p className="text-[10px] text-gray-500 mb-2">{book.author}｜{book.publisher}</p>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">{book.desc}</p>
                      <div className="bg-green-50 rounded-lg px-3 py-2 mb-3">
                        <p className="text-[10px] text-green-800 leading-relaxed">
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
              })}
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">発語を引き出す読み聞かせのコツ5つ</h2>
              <div className="space-y-3">
                {[
                  { num: "1", title: "絵を指差しながら言葉を言う", desc: "「りんご」と言いながら絵のりんごを指す。このセットが「物と名前の結びつき」を作り、最初の語彙形成に直結します。" },
                  { num: "2", title: "問いかける読み方をする", desc: "「これは何かな？」「次は誰が出てくると思う？」など問いかけを入れながら読む。答えを言おうとする行動が発語の練習になります。" },
                  { num: "3", title: "赤ちゃんが声を出したら必ず反応する", desc: "「あ！」と声を出したら「そうだね、りんごだね！」とすかさず言葉にして返す。この「言語化→肯定」のループが発語意欲を育てます。" },
                  { num: "4", title: "擬音語・擬態語を大げさに読む", desc: "「じゃあじゃあ！」「ぴょーん！」など擬音語は大げさなくらいはっきり読む。音の面白さが言葉への興味を引き出します。" },
                  { num: "5", title: "同じ絵本を毎日繰り返す", desc: "「また同じ絵本？」でOK。同じ言葉を繰り返し聞くことで語彙として定着します。20回以上繰り返した言葉が最初に出ることが多いです。" },
                ].map(s => (
                  <div key={s.num} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-black flex items-center justify-center">{s.num}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800 mb-0.5">{s.title}</p>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">「言葉が遅い」と感じたら</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                1歳を過ぎても「まんま」「ばあ」など意味のある言葉が出ない場合、まずは以下を確認してみましょう。
              </p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="bg-amber-50 rounded-xl p-3 leading-relaxed">
                  <p className="font-bold text-amber-800 mb-1">チェックポイント</p>
                  <ul className="space-y-1">
                    <li>• 親の声かけに反応して振り向くか</li>
                    <li>• 「ちょうだい」などの簡単な指示がわかるか（理解言語）</li>
                    <li>• 指差しをするか（コミュニケーション意欲のサイン）</li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  指差し・理解語がある場合は、表出言語（しゃべる）の発達が少し遅いだけで様子を見てOKな場合が多いです。
                  不安な場合は1歳6ヶ月健診の際に小児科・保健師に相談しましょう。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">Amazonで語彙発達絵本を探す</h2>
              <div className="space-y-2">
                {[
                  { label: "発語促す 赤ちゃん絵本", keyword: "発語 促す 赤ちゃん 絵本 おすすめ" },
                  { label: "擬音語・擬態語が豊かな絵本", keyword: "擬音語 絵本 赤ちゃん 語彙" },
                  { label: "言葉遅い 赤ちゃん 絵本", keyword: "言葉 遅い 赤ちゃん 絵本 おすすめ" },
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
