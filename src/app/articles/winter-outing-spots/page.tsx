import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "冬の赤ちゃん連れおでかけスポット特集【2026年】室内・イルミネーション・防寒対策 | ベビーカーナビ",
  description: "寒い冬でも安心！赤ちゃん連れにおすすめの室内スポット・イルミネーション見学・防寒対策を徹底解説。授乳室完備の温かい屋内施設から、ベビーカーで楽しめるイルミネーション情報まで。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">冬の赤ちゃん連れおでかけ<br />スポット特集【2026年】</h1>
          <p className="text-[11px] opacity-80 mt-2">室内遊び・イルミネーション・防寒対策を完全解説 / 読了時間：約7分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年11月" readTime="約7分" />
          <article className="space-y-6">
            <S t="冬のおでかけで気を付けること">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-1.5">
                <p className="text-xs font-bold text-blue-800">❄️ 冬のおでかけ注意点</p>
                <p className="text-xs text-gray-700">• 感染症（RSウイルス・インフルエンザ）流行期は人混みを避ける</p>
                <p className="text-xs text-gray-700">• 外気温0〜5℃以下では赤ちゃんのおでかけは短時間が原則</p>
                <p className="text-xs text-gray-700">• ベビーカーの寒さ対策：フットマフ＋ブランケットで万全に</p>
                <p className="text-xs text-gray-700">• イルミネーション見学は暗くなった後=冷え込む時間帯。防寒必須</p>
                <p className="text-xs text-gray-700">• 空気が乾燥するため保湿クリーム・加湿を意識して</p>
              </div>
            </S>

            <S t="【室内】冬の定番スポット">
              {[
                { name: "水族館（全般）", desc: "冬でも快適に楽しめる屋内スポットの筆頭。池袋サンシャイン水族館・お台場アクアパーク品川は授乳室充実。夏より空いていてゆっくり見られる。", tags: ["屋内", "授乳室", "冬に空く"] },
                { name: "ショッピングモール（全般）", desc: "授乳室・暖房完備の最強スポット。ベビーカー貸出が多く、買い物＋食事＋休憩を一箇所で完結できる。子どもが飽きたら館内をぐるぐるするだけでも◎。", tags: ["暖かい", "授乳室", "ベビーカー貸出"] },
                { name: "科学館・博物館（全般）", desc: "国立科学博物館・日本科学未来館など展示を見ながらゆっくり過ごせる。雨・雪・寒い日の定番。未就学児入館無料のところも。", tags: ["知育", "授乳室", "一部無料"] },
                { name: "東京おもちゃ美術館（新宿）", desc: "木のおもちゃに触れながら子どもが夢中になれる施設。0歳向け「赤ちゃん木育ひろば」が大人気。予約推奨。授乳室あり。", tags: ["0歳向け", "予約推奨", "授乳室"] },
                { name: "キッズプラザ大阪（大阪）", desc: "関西随一の子ども向け体験型施設。冬の室内おでかけに最適。授乳室・おむつ替え台完備。3歳以下はすごく使いやすい施設。", tags: ["関西", "体験型", "授乳室"] },
              ].map((item) => (<SC key={item.name} name={item.name} desc={item.desc} tags={item.tags} />))}
            </S>

            <S t="【屋外】ベビーカーで行けるイルミネーション">
              {[
                { name: "東京ミッドタウン MIDTOWN CHRISTMAS", desc: "六本木の人気イルミネーション。敷地内はベビーカーOK。17〜18時台が混みすぎず見やすい。防寒して出かけよう。", tags: ["都内", "ベビーカーOK"] },
                { name: "よみうりランド JEWEL ILLUMINATION", desc: "国内最大級のイルミネーション。ベビーカーでの移動ルートが整備されている。防寒必須。", tags: ["国内最大級", "ベビーカールートあり"] },
                { name: "横浜赤レンガ倉庫 クリスマスマーケット", desc: "ヨーロッパ風のクリスマスマーケット。横浜の夜景とイルミネーションが絵になる。広場はベビーカーOK。温かいグリューワインも。", tags: ["横浜", "ベビーカーOK", "クリスマスマーケット"] },
              ].map((item) => (<SC key={item.name} name={item.name} desc={item.desc} tags={item.tags} />))}
            </S>

            <S t="ベビーカー防寒グッズ チェックリスト">
              <div className="grid grid-cols-2 gap-2">
                {["フットマフ（ベビーカー用毛布）", "ブランケット（大判）", "帽子（耳まで覆えるもの）", "手袋・ミトン", "ネックウォーマー", "ベビーカー用レインカバー（防風にも）", "使い捨てカイロ（大人用）", "保湿クリーム"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-blue-50 rounded-lg px-2.5 py-2">
                    <span className="text-blue-400 text-sm">✓</span>
                    <span className="text-[11px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">冬のおでかけは「室内メイン＋イルミネーションはサブ」のプランが安心です。授乳室完備の水族館・ショッピングモール・博物館を活用して暖かく過ごしましょう。イルミネーションは防寒をしっかりして短時間で楽しむのがコツ。赤ちゃんと一緒に冬の特別な景色を見に出かけてみてください！</p>
            </S>
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:opacity-90 transition">アプリで室内スポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="text-sm font-bold text-brand-600">{name}</div><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
