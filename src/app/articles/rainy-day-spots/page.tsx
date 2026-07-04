import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "雨の日でも大丈夫！赤ちゃん・子連れ室内スポット11選【東京・関東】2026年版 | ベビーカーナビ",
  description: "雨の日・猛暑・真冬でも安心して楽しめる室内スポットを東京中心に11か所厳選。無料施設4選・水族館・科学館・屋内遊び場まで授乳室・ベビーカーOK情報付きで徹底解説。",
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
          <h1 className="text-lg font-black leading-tight">雨の日でも大丈夫！<br />赤ちゃん・子連れで楽しめる室内スポット特集</h1>
          <p className="text-[11px] opacity-80 mt-2">東京・関東の室内おでかけ先を目的別に厳選 / 読了時間：約9分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約9分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに：雨の日こそ質の高いおでかけを</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                梅雨の時期、猛暑の夏、凍える真冬——赤ちゃん連れにとって天気は大きな壁です。
                「雨だからおでかけは無理」と家に閉じこもっていると、赤ちゃんも刺激が少なくなり、
                パパ・ママの気分転換にもなりません。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                実は東京・関東エリアには、<strong>天候に左右されない充実した室内スポット</strong>がたくさんあります。
                しかも、区立・都立の施設を中心に無料で利用できる場所も多数あります。
                この記事では、授乳室・おむつ替え・ベビーカー対応を確認したうえで、
                目的別にスポットを厳選してご紹介します。
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-800 mb-1">💡 この記事のポイント</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• 無料で楽しめる施設から有料の体験型施設まで目的別に紹介</li>
                  <li>• 全スポット・授乳室またはおむつ替えスペースあり</li>
                  <li>• ベビーカーで入れるかどうかも確認済み</li>
                  <li>• 月齢別のおすすめ情報付き</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. 無料で楽しめる室内施設（東京都内）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                東京都内には区や都が運営する無料の子育て施設が充実しています。
                費用をかけずに安心して時間を過ごせる場所ばかりです。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3328" className="text-sm font-bold text-brand-600 hover:underline">景丘の家（恵比寿）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "おむつ替え", "無料"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    渋谷区が運営する子育て支援施設。4Fが0〜2歳専用フロアになっており、木のおもちゃやハイハイスペースが充実しています。
                    3Fでは離乳食の電子レンジ加熱もOK。スタッフが常駐しているため初めてでも安心です。
                    恵比寿駅から徒歩10分ほどで、アクセスもしやすい立地です。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 平日10〜16時が空いていて快適。週末は混雑しがちなので予約推奨</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3329" className="text-sm font-bold text-brand-600 hover:underline">co渋谷（渋谷区子育て施設）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "カフェ併設", "無料"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    無印良品監修のスタイリッシュな子育て広場。シンプルな木製おもちゃで遊べ、カフェスペースでは離乳食の注文もできます。
                    パパ・ママがゆったりコーヒーを飲みながら子どもを見守れる珍しい施設です。
                    渋谷駅直結のビル内にあるため、雨の日も濡れずにアクセスできます。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 カフェはベビーフードメニューあり。おやつタイム（14〜16時）に訪れるパパ・ママが多い</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3095" className="text-sm font-bold text-brand-600 hover:underline">消防博物館（四谷三丁目）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["エレベーター", "無料", "バリアフリー"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    四谷三丁目駅直結で雨の日も濡れずに入れる消防博物館は、入館無料にもかかわらず本物の消防車・ヘリコプターが展示されています。
                    エレベーターで全フロア移動可能で、ベビーカーでもスムーズです。
                    幼児から楽しめますが、0〜1歳でも広い館内をベビーカーで過ごすだけで刺激になります。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 駅直結なので雨に濡れずにアクセス可能。月曜・年末年始休館</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3094" className="text-sm font-bold text-brand-600 hover:underline">東京都水の科学館（有明）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "おむつ替え", "無料", "バリアフリー"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    お台場エリアにある東京都水道局の施設で、入場無料で水の不思議を体験できます。
                    ベビーカーのまま入れる広い通路と、授乳室・おむつ替えスペースが完備されています。
                    展示は体験型が多く、水が流れる音や光る展示に赤ちゃんも釘付けになります。
                    近くのダイバーシティ東京と組み合わせたコースがおすすめです。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 火曜定休。東京テレポート駅から徒歩5分。駐車場は近隣の有料駐車場をご利用</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 水族館・科学館（有料・体験型）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                赤ちゃんは暗い空間の中で動く生き物に強い関心を示します。
                水族館は視覚的な刺激が豊富で、月齢の低い赤ちゃんでも十分楽しめる場所です。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3016" className="text-sm font-bold text-brand-600 hover:underline">サンシャイン水族館（池袋）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "おむつ替え", "エレベーター"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    池袋サンシャインシティの屋上に位置する水族館で、「空飛ぶペンギン」の展示が名物です。
                    館内は授乳室・おむつ替えスペースが完備されており、長時間の滞在にも対応しています。
                    屋外の「天空の旅」エリアは大きな空間なので、赤ちゃんが解放感を感じられます。
                    雨の日でも屋内の展示エリアは快適に過ごせます。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 平日は比較的空いています。開館直後（10時）の入場が混雑回避のコツ</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3046" className="text-sm font-bold text-brand-600 hover:underline">すみだ水族館（スカイツリー内）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "おむつ替え", "ベビーカーOK", "バリアフリー"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    東京スカイツリータウン内にある水族館で、駅から直結のため雨の日でも濡れずにアクセスできます。
                    完全バリアフリー設計で、ベビーカーでも全展示を快適に見学できます。
                    おむつ替え室が広く清潔で使いやすいと好評です。
                    金魚の展示など視覚的に美しいエリアは赤ちゃんも興味を示します。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 東京スカイツリー駅直結で雨でも安心。ソラマチの授乳室と組み合わせて利用するのが便利</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3047" className="text-sm font-bold text-brand-600 hover:underline">日本科学未来館（お台場）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "おむつ替え", "エレベーター", "ベビーカーOK"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    お台場にある国立の科学博物館で、「おやっ？っこ」という0〜4歳対象の親子スペースが充実しています。
                    ドームシアターやロボット展示など、様々な体験ができます。
                    授乳室・おむつ替えスペースが複数フロアに設置されており、長時間の訪問にも対応しています。
                    プラネタリウム（追加料金）は幻想的な雰囲気が赤ちゃんにも人気です。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 mt-2">💡 火曜定休（祝日の場合は翌日）。未就学児は常設展示無料</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 1日過ごせるショッピングモール</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                雨の日の最強の味方はショッピングモールです。
                授乳室・フードコート・遊び場がすべて一か所に揃い、1日中過ごせます。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3008" className="text-sm font-bold text-brand-600 hover:underline">ららぽーと豊洲</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "ベビーカー貸出", "おむつ替え", "エレベーター"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    各フロアに授乳室・おむつ替えスペースが設置されており、乳幼児連れでも安心の定番モールです。
                    「100本のスプーン」では離乳食を無料提供（ドリンクオーダーで）しており、離乳食期のお子さん連れにも好評です。
                    キッザニア東京は小さい子どもには早いですが、ショッピングモール内を散歩するだけでも十分楽しめます。
                    豊洲駅から徒歩数分でアクセスでき、雨の日でも快適です。
                  </p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <Link href="/spots/3016" className="text-sm font-bold text-brand-600 hover:underline">サンシャインシティ（池袋）</Link>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室", "ベビーカー貸出", "エレベーター", "キッズスペース"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    水族館・ナンジャタウン・プラネタリウムが館内に揃うテーマパーク型モールです。
                    地下道で池袋駅と直結しているため、雨の日でも濡れずにアクセスできます。
                    各フロアに授乳室があり、ベビーカー貸出も無料で利用できます。
                    1日中過ごせるボリュームがあり、子どもの成長に合わせて何度でも楽しめる施設です。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 有料の室内遊び場（月齢別）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                少し費用はかかりますが、月齢に合わせた専用の遊び場は赤ちゃんへの刺激が豊富です。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-700">🍼 0〜2歳向け</span>
                  </div>
                  <Link href="/spots/3389" className="text-sm font-bold text-brand-600 hover:underline">アソボ〜ノ！（水道橋）</Link>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    0〜2歳専用の「ハイハイガーデン」がある巨大屋内遊び場。
                    転んでも安全な柔らかい床材で、ハイハイ期の赤ちゃんが思いきり動き回れます。
                    月齢別のエリア分けがされており、小さい赤ちゃんが大きな子に踏まれる心配がありません。
                  </p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-700">🏃 1〜3歳向け</span>
                  </div>
                  <Link href="/spots/3390" className="text-sm font-bold text-brand-600 hover:underline">レゴランド・ディスカバリー・センター東京（お台場）</Link>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    2歳以上のお子様から楽しめるレゴの屋内施設。
                    「デュプロ・ビレッジ」は2〜5歳向けで、大きなブロックでのびのび遊べます。
                    雨の日の定番スポットで、事前にオンラインチケットを購入すると割引になります。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. 雨の日のおでかけ準備チェックリスト</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                雨の日のおでかけは、通常の持ち物に加えて以下のアイテムを準備しておくと安心です。
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="space-y-2 text-xs text-gray-700">
                  <div>
                    <p className="font-bold text-blue-800 mb-1">🌂 雨対策グッズ</p>
                    <p className="leading-relaxed">レインカバー（ベビーカー用）、レインポンチョ or カッパ（大人用）、タオル2〜3枚（ベビーカーや荷物が濡れた際に）、ビニール袋（濡れた荷物や衣類を入れる）</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800 mb-1">👶 赤ちゃん必需品</p>
                    <p className="leading-relaxed">おむつ（いつもより1〜2枚多め）、着替え一式（濡れた場合に備えて2セット）、授乳グッズ、おしりふき、ガーゼハンカチ</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800 mb-1">🏥 安心グッズ</p>
                    <p className="leading-relaxed">母子手帳・保険証、体温計（施設によっては検温が必要）、常備薬（必要な場合）</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                ※レインカバーは常にベビーカーの下部袋に入れておくと、急な雨でもすぐに対応できます
              </p>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                雨の日こそ、平日の無料施設や平時は混雑している人気スポットをゆっくり楽しむチャンスです。
                東京都内には無料で楽しめる子育て支援施設が豊富にあるので、
                特に0〜1歳のお子さんがいるご家庭は区立・都立施設を積極的に活用しましょう。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                週末は「授乳室付き大型ショッピングモール」、平日は「区立の無料施設」という使い分けが賢いパターンです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                ベビーカーナビでは天気連動おすすめ機能を使うと、現在の天気に合わせて自動的に室内・屋外スポットをおすすめしてくれます。
                ぜひ活用してみてください。
              </p>
            </section>

            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">🌂 天気に合わせておすすめを見る</p>
              <p className="text-xs text-gray-500 mb-3">ベビーカーナビなら今日の天気に合わせて室内・屋外スポットを自動でおすすめ</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                アプリを開く
              </Link>
            </section>
          </article>
          <ShareButtons title="雨の日でも大丈夫！子連れ室内スポット11選" url="/articles/rainy-day-spots" />
          <ArticleAreaNav currentSlug="rainy-day-spots" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
