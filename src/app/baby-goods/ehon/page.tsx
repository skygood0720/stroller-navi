import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { amazonUrl, amazonSearchUrl, AMAZON_ASSOCIATE_ID } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "赤ちゃん・子ども向けおすすめ絵本【月齢別】50冊 | ベビーカーナビ",
  description: "0ヶ月〜3歳の赤ちゃん・子どもへのおすすめ絵本を月齢別に50冊厳選。新生児から読める絵本・1歳向け定番・2歳からの絵本まで、発達に合わせた選び方も解説。",
  keywords: ["赤ちゃん 絵本 おすすめ", "0歳 絵本 月齢", "1歳 絵本 おすすめ", "2歳 絵本 ランキング", "新生児 絵本", "ベビー 絵本 選び方"],
  openGraph: {
    title: "赤ちゃん・子ども向けおすすめ絵本【月齢別50冊】",
    description: "0ヶ月〜3歳の月齢別おすすめ絵本50冊を厳選。発達に合わせた絵本選びのポイントも解説。",
    url: "https://stroller-navi.vercel.app/baby-goods/ehon",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "website",
  },
};

interface Book {
  asin?: string;
  searchKeyword?: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
  point: string; // 編集部ひとことポイント
  priceRange: string;
}

// ──────────────────────────────────────────
// 月齢別おすすめ絵本データ
// ──────────────────────────────────────────

const BOOKS_0_3: Book[] = [
  {
    asin: "4062199777",
    title: "もいもい",
    author: "開 一夫 / 市原 淳",
    publisher: "ブロンズ新社",
    description: "東京大学の赤ちゃん研究から生まれた絵本。赤ちゃんが最も注目しやすいシンプルな形と「もいもい」という音が特徴。新生児でも目が止まると話題。",
    point: "SNSで話題の「赤ちゃんが本当に見る絵本」。生後すぐから反応が出るのが驚き！",
    priceRange: "1,100〜1,320円",
  },
  {
    asin: "4893209388",
    title: "しましまぐるぐる",
    author: "柏原 晃夫",
    publisher: "学研プラス",
    description: "白黒のシンプルなしましまとぐるぐる模様が並ぶ絵本。赤ちゃんの視覚はまだ未発達なため、コントラストの強い白黒が一番見えやすい。全国で100万部超のベストセラー。",
    point: "「何を見せたらいいか分からない」0〜2ヶ月の赤ちゃんにまず試してほしい1冊。",
    priceRange: "880〜990円",
  },
  {
    asin: "4834004392",
    title: "もこ もこもこ",
    author: "谷川 俊太郎 / 元永 定正",
    publisher: "文研出版",
    description: "「もこ」「にょき」「ぱく」など不思議な擬音が続く不思議な絵本。色の変化と音の響きが赤ちゃんの感覚を刺激する。詩人・谷川俊太郎の傑作。",
    point: "声に出して読むとリズムが楽しい。寝かしつけのルーティンにも使える一冊。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4834009793",
    title: "ごぶごぶ ごぼごぼ",
    author: "駒形 克己",
    publisher: "福音館書店",
    description: "泡のような丸い形がゆっくり動き、気泡の音を表す擬音語が続く絵本。赤ちゃんが目で追いやすいシンプルな動きで視覚を刺激する。",
    point: "「じっと見つめてくれた」という声が多い。0〜3ヶ月の視覚刺激に最適。",
    priceRange: "770〜880円",
  },
  {
    searchKeyword: "あかあかくろくろ 絵本 新生児",
    title: "あかあかくろくろ",
    author: "柳原 良平",
    publisher: "偕成社",
    description: "真っ赤な表紙が目を引く白黒の絵本。シンプルな図形・動物・乗り物が白黒で描かれ、赤ちゃんの視覚発達を促す。0ヶ月からの視覚刺激絵本の定番。",
    point: "じっと見る力（視覚追跡）が育つ時期にぴったり。読み聞かせというより「見せる」絵本。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "かおかお どんなかお 絵本 赤ちゃん",
    title: "かおかお どんなかお",
    author: "柳原 良平",
    publisher: "こぐま社",
    description: "うれしい顔・かなしい顔・おこった顔など様々な表情を描いた絵本。赤ちゃんは生まれながらに「顔」に注目する。感情認識の最初の一歩に。",
    point: "赤ちゃんが顔の絵に食いついてくれる！感情や表情を覚えるきっかけになります。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "がたん ごとん がたん ごとん 絵本",
    title: "がたん ごとん がたん ごとん",
    author: "安西 水丸",
    publisher: "福音館書店",
    description: "電車が「がたん ごとん」と走りながら乗客を拾っていく絵本。シンプルな白黒イラストとリズムのある言葉が赤ちゃんの聴覚・視覚を同時に刺激。",
    point: "同じフレーズの繰り返しがリズム感を育てる。乗り物好きの赤ちゃんに特におすすめ。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "おめめぱちくり あかちゃん絵本",
    title: "おめめぱちくり",
    author: "木村 裕一",
    publisher: "偕成社",
    description: "大きな目がぱちくりまばたきするシンプルな絵本。赤ちゃんが「目」に強く反応することを利用した視覚刺激絵本。「あ〜」と声を出して反応してくれる。",
    point: "初めて絵本を見た赤ちゃんが「声を出した！」という報告多数。親子の反応が楽しい一冊。",
    priceRange: "770〜880円",
  },
  {
    searchKeyword: "くっついた 絵本 赤ちゃん 三浦太郎",
    title: "くっついた",
    author: "三浦 太郎",
    publisher: "こぐま社",
    description: "魚・象・鳥などの動物がおでこをくっつける絵本。最後に「ぼくも くっついた！」で赤ちゃんのほっぺにチューができる仕掛け絵本。スキンシップに最適。",
    point: "読み終わりに赤ちゃんとほっぺをくっつけるのが最高のひととき。愛情表現の練習にも。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "ばあ 絵本 新生児 赤ちゃん 顔",
    title: "ばあ！",
    author: "きむら ゆういち",
    publisher: "偕成社",
    description: "様々な動物が「ばあ！」と顔を出す仕掛け絵本。いないいないばあの原型のような絵本で、赤ちゃんが大好きな「顔」の出現に毎回大喜び。",
    point: "読むたびに「ばあ！」で笑ってくれる赤ちゃんの笑顔が最高。親も癒やされる一冊。",
    priceRange: "880〜990円",
  },
];

const BOOKS_4_6: Book[] = [
  {
    asin: "4032060304",
    title: "いないいないばあ",
    author: "松谷 みよ子 / 瀬川 康男",
    publisher: "童心社",
    description: "「いないいない…ばあ！」の繰り返しが楽しい日本で最も売れた絵本。1967年発行から累計700万部超。くまやきつねが顔を隠したり出したりする単純な構成が赤ちゃんを喜ばせる。",
    point: "日本一の定番絵本。読むたびに「ばあ！」で笑う赤ちゃんの顔が最高のご褒美。",
    priceRange: "880〜990円",
  },
  {
    asin: "4893209140",
    title: "じゃあじゃあびりびり",
    author: "まついのりこ",
    publisher: "偕成社",
    description: "水・紙・犬など身近なものの音を「じゃあじゃあ」「びりびり」と表した絵本。赤ちゃんが音と物を結びつける「音象徴」の発達を促す。ボード版で口に入れても安心。",
    point: "音の響きが楽しくて赤ちゃんが声を出す！語彙発達の最初の一冊として定番中の定番。",
    priceRange: "660〜770円",
  },
  {
    asin: "4893095536",
    title: "だるまさんが",
    author: "かがくいひろし",
    publisher: "ブロンズ新社",
    description: "「だるまさんが…どてっ！」など、だるまさんがころんだり伸びたりする絵本。予測と裏切りが赤ちゃんの笑いの仕組みを刺激。シリーズ3冊でさらに楽しい。",
    point: "「どてっ」で一緒に倒れるのが楽しい！親子で体を使いながら楽しめる絵本。",
    priceRange: "880〜990円",
  },
  {
    asin: "4893095560",
    title: "だるまさんの",
    author: "かがくいひろし",
    publisher: "ブロンズ新社",
    description: "「だるまさんの…め！」「は！」など体のパーツを覚える絵本。読みながら赤ちゃんの体を触ってあげると言葉と感覚が結びつく。",
    point: "「め・は・て」を読みながら赤ちゃんの体を触ると大喜び。体認識の発達に効果的。",
    priceRange: "880〜990円",
  },
  {
    asin: "4893095579",
    title: "だるまさんと",
    author: "かがくいひろし",
    publisher: "ブロンズ新社",
    description: "だるまさんといちごやバナナが「ばいば〜い！」とハイタッチしたり抱きあったりする絵本。あいさつや感情表現を楽しく学べる。",
    point: "「ぎゅ〜」で赤ちゃんを抱きしめると喜んでくれる！スキンシップが自然に増える一冊。",
    priceRange: "880〜990円",
  },
  {
    asin: "4032030308",
    title: "おつきさまこんばんは",
    author: "林 明子",
    publisher: "福音館書店",
    description: "夜空にお月様が昇り、雲に隠れ、また現れる…。シンプルなストーリーと温かみのある絵が赤ちゃんの感性を育てる。寝かしつけ前に読む絵本の定番。",
    point: "寝る前のルーティンに。「こんばんは」と月に手を振るしぐさが愛らしい。",
    priceRange: "880〜990円",
  },
  {
    asin: "4032240108",
    title: "くだもの",
    author: "平山 和子",
    publisher: "福音館書店",
    description: "りんご・ぶどう・もも…リアルに描かれた果物がおいしそうに並ぶ絵本。「どうぞ」で赤ちゃんに食べさせるまねができる。食育の最初の一歩に。",
    point: "絵がリアルでおいしそう！「どうぞ」と差し出すと赤ちゃんが「ぱくっ」のしぐさをしてくれる。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4834005615",
    title: "ねないこだれだ",
    author: "せなけいこ",
    publisher: "福音館書店",
    description: "夜中に起きていると「おばけ」に連れていかれる…という寝かしつけ絵本。怖いようで可愛いおばけのデザインが長年愛され続けている定番作品。",
    point: "「おばけになっちゃうよ」が寝かしつけの魔法の言葉に。1歳頃から効果大！",
    priceRange: "770〜880円",
  },
  {
    searchKeyword: "あかちゃん絵本 まるまるまるのほん tupera",
    title: "まるまるまるのほん",
    author: "tupera tupera",
    publisher: "学研プラス",
    description: "赤・青・黄など色の丸が並び、最後に動物の顔が浮かび上がる仕掛け絵本。赤ちゃんが色と形の認識を楽しめる。シンプルで視覚的なインパクトが強い。",
    point: "「あ！」と声を出して指差しを始める赤ちゃんが続出。色の認識発達にぴったり。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "おはよう おやすみ 赤ちゃん絵本 生活習慣",
    title: "おはよう",
    author: "いわさき ちひろ",
    publisher: "至光社",
    description: "朝起きて夜眠るまでの一日を描いたいわさきちひろの絵本。水彩の柔らかい絵と「おはよう」「おやすみ」など挨拶が自然に身につく。",
    point: "いわさきちひろの美しい絵が親も癒やしてくれる。生活リズムを絵本で楽しく覚えられる。",
    priceRange: "880〜990円",
  },
];

const BOOKS_7_12: Book[] = [
  {
    asin: "4834009777",
    title: "きんぎょがにげた",
    author: "五味 太郎",
    publisher: "福音館書店",
    description: "金魚鉢から逃げた金魚を「どこにいるかな？」と探しながら読む参加型絵本。色鮮やかな絵の中に隠れた金魚を指差して探す遊びが発達を促す。",
    point: "「いた！」と指差しが始まった赤ちゃんに最高の絵本。コミュニケーションが増える！",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4033280103",
    title: "はらぺこあおむし",
    author: "エリック・カール",
    publisher: "偕成社",
    description: "あおむしが食べながら大きくなる名作絵本。鮮やかな色彩・穴あきの仕掛け・数と食べ物の学び・変態のストーリーと学びの要素が満載。世界55言語で翻訳。",
    point: "知らない人はいない世界的名作。仕掛けの穴に指を入れる遊びが赤ちゃんに大人気！",
    priceRange: "1,100〜1,430円",
  },
  {
    asin: "4032080100",
    title: "しろくまちゃんのほっとけーき",
    author: "わかやまけん",
    publisher: "こぐま社",
    description: "しろくまちゃんが一人でホットケーキを作る絵本。「ぽたあん」「じゅわじゅわ」などの擬音と共に焼けていく様子が赤ちゃんを引きつける。「子どもが一番好きな絵本」常連。",
    point: "焼けていく様子のページで「食べたい！」という表情をする赤ちゃんが続出。食育にも◎",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "ぴょーん まつおかたつひで 絵本",
    title: "ぴょーん",
    author: "まつおか たつひで",
    publisher: "ポプラ社",
    description: "かえる・ばった・うさぎなど色々な動物が「ぴょーん！」とジャンプする絵本。ページをめくるたびに驚きがある仕掛けと、リズムのある言葉が赤ちゃんを楽しませる。",
    point: "「ぴょーん！」で一緒にジャンプするのが楽しい。体を動かしながら楽しめる絵本。",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "どんどこ ももんちゃん とよたかずひこ 絵本",
    title: "どんどこ ももんちゃん",
    author: "とよたかずひこ",
    publisher: "童心社",
    description: "ももんちゃんがどんどこ走ってお母さんのところへ！「ぎゅー！」と抱き合う結末が愛らしい。子どもがお母さんへの愛情を感じられる温かい絵本。",
    point: "読み終わりに「ぎゅー！」と赤ちゃんを抱きしめると大喜び。親子の絆が深まる一冊。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "たまごのあかちゃん かんざわとしこ 絵本",
    title: "たまごのあかちゃん",
    author: "かんざわとしこ / やぎゅうげんいちろう",
    publisher: "福音館書店",
    description: "卵から色々な生き物の赤ちゃんが生まれる絵本。「たまごの あかちゃん だあれ？」「ぴよぴよ、ひよこさん！」という問いかけと答えの形式で楽しく読める。",
    point: "問いかけに答えようとする赤ちゃんの真剣な表情が可愛い。言葉の発達を促します。",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "のせてのせて 松谷みよ子 絵本",
    title: "のせてのせて",
    author: "松谷 みよ子 / 東 君平",
    publisher: "童心社",
    description: "動物が次々と車に「のせてのせて！」と乗り込む絵本。繰り返しの言葉と乗り物への興味が合わさった0〜1歳向けの定番作品。",
    point: "乗り物好きな赤ちゃんに特に人気。「のせてのせて！」を真似しようとする姿が微笑ましい。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "がんばれ ぐーぐー 赤ちゃん絵本 1歳",
    title: "ぐーぐーぐー",
    author: "おおたか なおこ",
    publisher: "偕成社",
    description: "動物たちが色々な寝方で「ぐーぐー」眠る絵本。シンプルでリズミカルな言葉と温かみのある絵が眠くなる雰囲気を作り出す。寝かしつけに最適。",
    point: "読んでいると赤ちゃんと一緒に眠くなってくる不思議な絵本。寝かしつけルーティンに◎",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "おふろでちゃぷちゃぷ 松谷みよ子 絵本",
    title: "おふろでちゃぷちゃぷ",
    author: "松谷 みよ子 / 上野 紀子",
    publisher: "童心社",
    description: "赤ちゃんがお風呂で楽しく遊ぶ絵本。「ちゃぷちゃぷ」「ぶくぶく」など水の擬音が楽しく、お風呂嫌いの赤ちゃんにも効果があると評判。",
    point: "お風呂前に読むとスムーズに入ってくれることがある！生活習慣を楽しく習慣化できます。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "バスにのって 絵本 赤ちゃん 乗り物",
    title: "バスにのって",
    author: "とよたかずひこ",
    publisher: "アリス館",
    description: "バスに動物たちが次々乗り込み、みんなで「ぶーぶーぶー！」と走る絵本。乗り物好きの赤ちゃんに絶大な人気。繰り返し読んでも飽きないリズムが魅力。",
    point: "「ぶーぶー！」と声を出したり手を振ったり、体で参加できる絵本。",
    priceRange: "990〜1,100円",
  },
];

const BOOKS_1_2: Book[] = [
  {
    asin: "4834000826",
    title: "ぐりとぐら",
    author: "中川 李枝子 / 大村 百合子",
    publisher: "福音館書店",
    description: "野ねずみのぐりとぐらが大きな卵で大きなカステラを作る物語。日本で最も長く愛された絵本の一つで累計500万部超。共同作業・分かち合いの大切さを伝える。",
    point: "カステラのページで「食べたい！」と目をキラキラさせる子ども続出。食育にも最適な一冊。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4834000109",
    title: "おおきなかぶ",
    author: "A・トルストイ / 内田 莉莎子",
    publisher: "福音館書店",
    description: "「うんとこしょ、どっこいしょ」でお馴染みのロシア民話。繰り返しの言葉と仲間が増えていく展開が子どもを引きつける。協力することの大切さを楽しく学べる。",
    point: "「うんとこしょ！」と一緒に言うのが楽しい。体を使いながら楽しめる読み聞かせの定番。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4834001091",
    title: "てぶくろ",
    author: "ウクライナ民話 / ラチョフ 絵",
    publisher: "福音館書店",
    description: "雪の中に落ちた手袋に動物が次々入っていくウクライナ民話。温かみのある美しい絵と、どんどん増えていく動物の楽しさが1歳から楽しめる定番絵本。",
    point: "「まだ入るの？」というワクワク感が止まらない。繰り返しの構成が子どもの予測力を育てる。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4032190100",
    title: "はじめてのおつかい",
    author: "筒井 頼子 / 林 明子",
    publisher: "福音館書店",
    description: "5歳の女の子・みいちゃんが初めて一人でおつかいに行くお話。ドキドキしながらも頑張る主人公に子どもが感情移入しやすい。林明子の絵が秀逸。",
    point: "「がんばれ！」と思わず応援したくなる。自立心が芽生え始める1歳後半〜の子に特におすすめ。",
    priceRange: "990〜1,100円",
  },
  {
    asin: "4032060606",
    title: "からすのパンやさん",
    author: "かこさとし",
    publisher: "偕成社",
    description: "からすのパン屋さんが様々な形のパンを焼く絵本。2ページにびっしり描かれた「おもしろいかたちのパン」のページが大人気。探す・見つける楽しさがある。",
    point: "「このパン食べたい！」のページで盛り上がること必至。食への興味が爆発する1〜2歳に最適。",
    priceRange: "1,100〜1,320円",
  },
  {
    searchKeyword: "ノンタン おひさまぎらぎら 絵本",
    title: "ノンタン おひさまぎらぎら",
    author: "キヨノ サチコ",
    publisher: "偕成社",
    description: "おなじみのねこ・ノンタンシリーズ。水遊びや友達との関わりを描いた1〜2歳向けの定番絵本。自我が芽生えてくる時期の子どもが共感しやすいエピソード。",
    point: "「ノンタンみたいにしちゃだめ！」というやりとりで社会性の芽生えが育まれる。",
    priceRange: "660〜770円",
  },
  {
    searchKeyword: "おさるのジョージ はじめての絵本",
    title: "おさるのジョージ",
    author: "H・A・レイ",
    publisher: "岩波書店",
    description: "好奇心旺盛なおさる・ジョージが引き起こす騒動と解決の物語。子どもが自分を投影しやすいキャラクターで、探究心・問題解決の思考が育まれる。",
    point: "「ジョージみたいに！」と好奇心が刺激される。男の子に特に人気の絵本。",
    priceRange: "1,320〜1,650円",
  },
  {
    searchKeyword: "ぐるんぱのようちえん 絵本 1歳",
    title: "ぐるんぱのようちえん",
    author: "西内 ミナミ / 堀内 誠一",
    publisher: "福音館書店",
    description: "一人ぼっちのぞうのぐるんぱが様々なことに挑戦して、最後に幼稚園を開く物語。挑戦と失敗・再挑戦の繰り返しが子どもの根気を育てる名作。",
    point: "「大きいねー！」と大きなぞうの体とスケールに驚く子どもが続出。スケール感を体感できる絵本。",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "バムとケロのそらのたび 絵本",
    title: "バムとケロのそらのたび",
    author: "島田 ゆか",
    publisher: "文溪堂",
    description: "犬のバムとカエルのケロちゃんが飛行機で冒険する絵本。細部まで描き込まれたイラストに大人も楽しめるポイントが満載。何度読んでも新しい発見がある。",
    point: "細かい絵を「あ！これ見つけた！」と一緒に探す楽しみが続く。長く楽しめる絵本。",
    priceRange: "1,430〜1,650円",
  },
  {
    searchKeyword: "ねずみくんのチョッキ 絵本 1歳",
    title: "ねずみくんのチョッキ",
    author: "なかえよしを / 上野 紀子",
    publisher: "ポプラ社",
    description: "お母さんが編んでくれたチョッキを「ちょっとだけ」と色々な動物が着て伸びきってしまう絵本。繰り返しのユーモアと「どうなるの？」という期待感が楽しい。",
    point: "「また伸びた！」という笑いが止まらない。ユーモアの感覚が育つ1歳後半〜2歳に最適。",
    priceRange: "880〜990円",
  },
];

const BOOKS_2_3: Book[] = [
  {
    asin: "4834000030",
    title: "スイミー",
    author: "レオ・レオーニ",
    publisher: "好学社",
    description: "一匹だけ黒い魚・スイミーが仲間と力を合わせて大きな魚に立ち向かう名作。協力・創意工夫の大切さと、個性が強みになることを伝えるメッセージが感動的。",
    point: "「みんなで力を合わせる」というテーマが子どもの心に響く。読後に話し合いたくなる絵本。",
    priceRange: "1,430〜1,650円",
  },
  {
    asin: "4572000670",
    title: "かいじゅうたちのいるところ",
    author: "モーリス・センダック",
    publisher: "冨山房",
    description: "いたずら坊主のマックスが怪獣の国を訪れ、怪獣の王様になる夢の物語。子どもの内なる感情（怒り・反抗心）を肯定的に描いた世界的名作。",
    point: "「怒っちゃダメ」ではなく怒りを認める絵本。感情コントロールの第一歩を踏み出す2歳〜に◎",
    priceRange: "1,760〜2,200円",
  },
  {
    searchKeyword: "わたしのワンピース 絵本 にしまきかやこ",
    title: "わたしのワンピース",
    author: "にしまきかやこ",
    publisher: "こぐま社",
    description: "うさぎが白いワンピースを作り、草原・花畑・雨の中と場所によってワンピースの模様が変わっていく絵本。色と模様の変化が視覚的に美しく、子どもの創造性を刺激する。",
    point: "「次は何の模様になるかな？」という予測が楽しい。おしゃれや服への興味が出てくる2歳〜に。",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "3匹のこぶた 絵本 福音館",
    title: "3びきのこぶた",
    author: "イギリス昔話 / 山田 三郎",
    publisher: "福音館書店",
    description: "おなじみのイギリス昔話。藁・木・レンガの家と、狼との知恵比べ。「頑張って丈夫なものを作ることの大切さ」というメッセージを繰り返しの構成で楽しく伝える。",
    point: "「ふー！」と一緒に吹くのが楽しい定番昔話。善悪と努力の大切さを自然に学べる。",
    priceRange: "880〜990円",
  },
  {
    searchKeyword: "ぞうのエルマー デビッドマッキー 絵本",
    title: "ぞうのエルマー",
    author: "デビッド・マッキー",
    publisher: "BL出版",
    description: "カラフルな模様のぞう・エルマーが「みんなと同じになりたい」と思うが、最後に自分の個性を大切にすることを学ぶ物語。個性・多様性を伝える世界的名作。",
    point: "「自分らしさが一番！」というメッセージが2歳頃の自我の確立時期にぴったり。",
    priceRange: "1,430〜1,650円",
  },
  {
    searchKeyword: "もりのなか マリーホールエッツ 絵本",
    title: "もりのなか",
    author: "マリー・ホール・エッツ",
    publisher: "福音館書店",
    description: "男の子が森を歩くと動物たちがついてきて、最後にお父さんが迎えに来る絵本。鉛筆のみで描かれた繊細なモノクロイラストに温かみがある不思議な傑作。",
    point: "シンプルなモノクロイラストが想像力を刺激する。何度読んでも味わい深い絵本。",
    priceRange: "990〜1,100円",
  },
  {
    searchKeyword: "ちいさなきかんしゃ 絵本 電車好き",
    title: "いたずら きかんしゃ ちゅうちゅう",
    author: "バージニア・リー・バートン",
    publisher: "福音館書店",
    description: "一人で勝手に走り出した小さな機関車ちゅうちゅうの冒険と反省の物語。乗り物好きの子どもに絶大な人気。繰り返しの言葉とリズムが楽しい。",
    point: "電車・機関車好きの子には最高の一冊。「もうしません」の場面で一緒に反省できる。",
    priceRange: "1,210〜1,430円",
  },
  {
    searchKeyword: "パパおつきさまとって エリックカール 絵本",
    title: "パパ、お月さまとって！",
    author: "エリック・カール",
    publisher: "偕成社",
    description: "月をとってほしいというモニカのお願いにパパが奮闘する仕掛け絵本。ページが縦・横に大きく開く特大仕掛けが楽しく、月の満ち欠けを自然に学べる。",
    point: "大きく開くページに「わー！」と驚く子どもの反応が最高。親子で楽しめる仕掛けが秀逸。",
    priceRange: "1,430〜1,650円",
  },
  {
    searchKeyword: "11ぴきのねこ 馬場のぼる 絵本",
    title: "11ぴきのねこ",
    author: "馬場 のぼる",
    publisher: "こぐま社",
    description: "11匹のねこがチームで大きな魚を捕まえようと奮闘する絵本。ユーモアのある展開と可愛らしいネコのキャラクターが2歳以上の子どもに大人気のシリーズ。",
    point: "ねこたちのズッコケぶりに大笑い！友達と力を合わせることを楽しく学べる名作シリーズ。",
    priceRange: "1,100〜1,320円",
  },
  {
    searchKeyword: "どろんこハリー 絵本 犬 2歳",
    title: "どろんこハリー",
    author: "ジーン・ジオン / マーガレット・ブロイ・グレアム",
    publisher: "福音館書店",
    description: "お風呂嫌いの白い犬・ハリーがどろんこになって家族に認識されなくなる冒険の物語。お風呂嫌いの子どもにお風呂の大切さを楽しく伝えられる定番絵本。",
    point: "お風呂嫌いの子に効く絵本として有名。「ハリーみたいになっちゃうよ！」が合言葉に。",
    priceRange: "1,210〜1,430円",
  },
];

const AGE_GROUPS = [
  {
    id: "0-3",
    label: "0〜3ヶ月",
    title: "新生児〜3ヶ月のおすすめ絵本",
    subtitle: "視覚発達を促す高コントラスト・シンプルな絵本",
    description: "生まれたばかりの赤ちゃんの視力はまだ0.01〜0.05程度。白黒のコントラストの強い絵や、シンプルな丸・しましまなど視覚刺激になる絵本を選びましょう。「読み聞かせ」というより「見せる」ことを意識して。",
    emoji: "🌙",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    books: BOOKS_0_3,
  },
  {
    id: "4-6",
    label: "4〜6ヶ月",
    title: "4〜6ヶ月のおすすめ絵本",
    subtitle: "繰り返し・リズム・いないいないばあが大好きな時期",
    description: "声への反応が増え、「いないいないばあ」や「じゃあじゃあびりびり」など繰り返しのリズムを楽しめるようになります。同じ絵本を何度も読んでも大丈夫。繰り返しが言語発達を促します。",
    emoji: "🌈",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    books: BOOKS_4_6,
  },
  {
    id: "7-12",
    label: "7〜12ヶ月",
    title: "7〜12ヶ月のおすすめ絵本",
    subtitle: "指差し・参加型・物の名前を学ぶ絵本",
    description: "指差しが始まり、「あ！あ！」と声を出して反応する時期。きんぎょを探したり、動物を指差したりできる「参加型」の絵本がぴったり。食べ物・乗り物など好きなテーマの絵本を選ぶと食いつきが違います。",
    emoji: "⭐",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    tagColor: "bg-green-100 text-green-700",
    books: BOOKS_7_12,
  },
  {
    id: "1-2",
    label: "1〜2歳",
    title: "1〜2歳のおすすめ絵本",
    subtitle: "物語・感情・生活習慣を楽しく学ぶ絵本",
    description: "歩き始め・言葉が増えてくる時期。簡単なストーリーを楽しめるようになります。主人公に感情移入したり、「一緒にやってみる」ことが好きな時期なので、体を使えたり言葉を一緒に言えたりする絵本が◎",
    emoji: "🌟",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    tagColor: "bg-yellow-100 text-yellow-700",
    books: BOOKS_1_2,
  },
  {
    id: "2-3",
    label: "2〜3歳",
    title: "2〜3歳のおすすめ絵本",
    subtitle: "個性・冒険・感情表現の豊かな名作絵本",
    description: "自我が強くなり「自分でやりたい！」「イヤ！」が増える時期。自己表現・個性・仲間との協力などのテーマを扱った物語絵本が心に響きます。少し長い物語も楽しめるようになってきます。",
    emoji: "🚀",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
    books: BOOKS_2_3,
  },
];

export default function EhonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "赤ちゃん・子ども向けおすすめ絵本【月齢別50冊】",
    "description": "0ヶ月〜3歳の月齢別おすすめ絵本50冊を厳選紹介。",
    "url": "https://stroller-navi.vercel.app/baby-goods/ehon",
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        {/* ヘッダー */}
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/baby-goods" className="hover:text-white">おすすめ商品</Link>
            <span className="mx-1.5">›</span>
            <span>月齢別おすすめ絵本</span>
          </nav>
          <div className="text-4xl mb-3">📚</div>
          <h1 className="text-xl font-black leading-snug">
            赤ちゃん・子どもへのおすすめ絵本<br />月齢別50冊【2026年版】
          </h1>
          <p className="text-xs text-white/80 mt-2">0ヶ月〜3歳の発達に合わせた選び方と厳選ラインナップ</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-8">
          {/* アフィリエイト開示 */}
          <div className="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              当サイトはAmazonアソシエイト・プログラムの参加者です。当ページ内のリンクからAmazonでお買い物いただくと、
              売上の一部がサイト運営費として還元されます（お客様の購入価格に変わりはありません）。
            </p>
          </div>

          {/* 絵本選びのコツ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-black mb-3">📖 月齢別 絵本選びの3つのポイント</h2>
            <div className="space-y-2 text-xs">
              {[
                { icon: "👁️", text: "視覚発達に合わせる：0〜3ヶ月は白黒・シンプルな形。4ヶ月以降は色鮮やかな絵へ" },
                { icon: "👂", text: "音とリズムを重視：繰り返しのフレーズ・擬音語が赤ちゃんの言語発達を促す" },
                { icon: "🖐️", text: "参加できる絵本を：指差し・体を動かす・一緒に声を出せる絵本が発達によい" },
              ].map((tip) => (
                <div key={tip.icon} className="flex gap-2 bg-purple-50 rounded-xl p-3">
                  <span>{tip.icon}</span>
                  <span className="text-gray-700">{tip.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 月齢ナビ */}
          <nav className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-gray-500 mb-3">月齢から探す</p>
            <div className="flex flex-wrap gap-2">
              {AGE_GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border ${g.borderColor} ${g.bgColor} hover:opacity-80 transition`}
                >
                  {g.emoji} {g.label}（10冊）
                </a>
              ))}
            </div>
          </nav>

          {/* 各月齢グループ */}
          {AGE_GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-4 space-y-4">
              {/* グループヘッダー */}
              <div className={`${group.bgColor} border ${group.borderColor} rounded-2xl p-4`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{group.emoji}</span>
                  <h2 className="text-base font-black">{group.title}</h2>
                </div>
                <p className="text-[11px] text-gray-600 font-bold mb-2">{group.subtitle}</p>
                <p className="text-[10px] text-gray-600 leading-relaxed">{group.description}</p>
              </div>

              {/* 書籍リスト */}
              <div className="space-y-3">
                {group.books.map((book, i) => {
                  const href = book.asin
                    ? amazonUrl(book.asin)
                    : amazonSearchUrl(book.searchKeyword ?? book.title);
                  return (
                    <a
                      key={book.title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-transparent hover:border-orange-200 group"
                    >
                      <div className="flex items-start gap-3">
                        {/* 番号 */}
                        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${group.tagColor}`}>
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          {/* タイトル */}
                          <h3 className="text-sm font-bold leading-snug mb-0.5">『{book.title}』</h3>
                          <p className="text-[10px] text-gray-500 mb-2">{book.author}｜{book.publisher}</p>
                          {/* 説明 */}
                          <p className="text-xs text-gray-600 leading-relaxed mb-2">{book.description}</p>
                          {/* 編集部コメント */}
                          <div className="bg-orange-50 rounded-lg px-3 py-2 mb-2">
                            <p className="text-[10px] text-orange-800 leading-relaxed">
                              <span className="font-bold">編集部：</span>{book.point}
                            </p>
                          </div>
                          {/* 価格とボタン */}
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-500">
                              参考価格：<strong className="text-orange-600">{book.priceRange}</strong>
                            </span>
                            <span className="text-[10px] bg-orange-500 group-hover:bg-orange-600 text-white px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1">
                              🛒 Amazonで見る
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* 月齢カテゴリ Amazon検索リンク */}
              <a
                href={amazonSearchUrl(`赤ちゃん 絵本 ${group.label}`)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`flex items-center justify-center gap-2 border ${group.borderColor} ${group.bgColor} rounded-xl py-3 text-xs font-bold hover:opacity-80 transition`}
              >
                <span>🔍</span>
                <span>{group.label}向け絵本をAmazonでもっと見る →</span>
              </a>
            </section>
          ))}

          {/* 関連ページ */}
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">🛒 他のおすすめグッズも見る</h3>
            <div className="space-y-2">
              <Link href="/baby-goods" className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 rounded-xl p-3 transition">
                <span className="text-2xl">🛒</span>
                <div>
                  <p className="text-xs font-bold">ベビーカー・お出かけグッズ一覧</p>
                  <p className="text-[10px] text-gray-500">ベビーカー・抱っこ紐・チャイルドシートほか</p>
                </div>
              </Link>
              <Link href="/articles/zero-age-outing" className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 rounded-xl p-3 transition">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="text-xs font-bold">0歳の赤ちゃんはいつから外出できる？</p>
                  <p className="text-[10px] text-gray-500">月齢別おでかけ完全ガイド</p>
                </div>
              </Link>
              <Link href="/articles/stroller-guide" className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 rounded-xl p-3 transition">
                <span className="text-2xl">🚼</span>
                <div>
                  <p className="text-xs font-bold">ベビーカーでのおでかけ完全ガイド</p>
                  <p className="text-[10px] text-gray-500">準備・ルート選び・施設選びのポイント</p>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pb-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 近くのおでかけスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
