import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "2歳のおでかけ完全ガイド【2026年】行き先・持ち物・イヤイヤ期対策を解説 | ベビーカーナビ",
  description: "2歳（24〜35ヶ月）の子どもとのおでかけを徹底解説。月齢別おすすめスポット、必須の持ち物リスト、イヤイヤ期の外出対策、ベビーカーvsだっこひもの選び方まで。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-pink-500 via-rose-500 to-red-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">2歳のおでかけ完全ガイド<br />【2026年版】</h1>
          <p className="text-[11px] opacity-80 mt-2">イヤイヤ期も楽しく外出！場所選び・持ち物・コツ / 読了時間：約8分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />
          <article className="space-y-6">
            <S t="2歳のおでかけ事情">
              <p className="text-sm text-gray-700 leading-relaxed">2歳は「魔の2歳」「イヤイヤ期」と言われる時期。歩けるようになった喜びで動き回りたい反面、思い通りにならないと大泣き……という場面も。でも、正しい場所と準備さえあれば、2歳こそおでかけが一番楽しい年齢かもしれません。好奇心旺盛でいろいろなことに反応してくれる2歳との外出を攻略しましょう。</p>
            </S>

            <S t="2歳向け おすすめスポット5タイプ">
              <div className="space-y-3">
                {[
                  { emoji: "🐘", type: "動物園・水族館", reason: "動物に大興奮！名前を覚えて指差しする姿が可愛い。長くいられる＆授乳室完備が多い。", spots: ["上野動物園", "東武動物公園", "池袋サンシャイン水族館"] },
                  { emoji: "🌳", type: "広い公園", reason: "走り回りたい2歳に最適。砂場・ブランコ・滑り台があれば1〜2時間はもつ。", spots: ["代々木公園", "光が丘公園", "井の頭公園"] },
                  { emoji: "🎨", type: "キッズカフェ・屋内遊び場", reason: "雨の日の定番。ボールプール・積み木・おままごとなどで安心して遊べる。", spots: ["ボーネルンド", "キドキド", "東京おもちゃ美術館"] },
                  { emoji: "🚃", type: "電車・乗り物テーマ", reason: "電車好きには電車に乗るだけで大イベント！路面電車・モノレールがおすすめ。", spots: ["地下鉄博物館", "電車とバスの博物館", "シーサイドライン"] },
                  { emoji: "🌊", type: "水遊びスポット（夏）", reason: "水が大好きな2歳。噴水広場・ジャブジャブ池で大満足。水着持参で夏の定番コースに。", spots: ["お台場潮風公園", "昭和記念公園 レインボープール", "砧公園"] },
                ].map((item) => (
                  <div key={item.type} className="border border-gray-100 rounded-xl p-4">
                    <div className="text-sm font-bold text-brand-600 mb-1">{item.emoji} {item.type}</div>
                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">{item.reason}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.spots.map((s) => (<span key={s} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{s}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </S>

            <S t="イヤイヤ期のおでかけ攻略法">
              <div className="space-y-2">
                {[
                  { tip: "「行くよ」より「どっちにする？」", desc: "「公園行くよ」より「滑り台とブランコ、どっちから行く？」と選択肢を与えると反発しにくい" },
                  { tip: "帰る時間を事前に予告する", desc: "「長い針が6になったら帰ろうね」と見通しを示す。突然の終わりは大泣きの元" },
                  { tip: "お腹が空く前にスケジュール調整", desc: "2歳は空腹でテンションが急落する。12時前後にランチを挟む計画を" },
                  { tip: "「今日の目玉」を1つ決める", desc: "欲張りすぎず、動物園のゾウを見るだけでOK、という目標設定で満足度アップ" },
                  { tip: "撤退の勇気を持つ", desc: "グズりが始まったら無理せず切り上げる。「また来ようね」と次を楽しみにさせる" },
                ].map((item) => (
                  <div key={item.tip} className="bg-rose-50/40 rounded-xl p-3.5">
                    <div className="text-xs font-bold text-rose-700 mb-1">✓ {item.tip}</div>
                    <p className="text-[11px] text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </S>

            <S t="2歳のおでかけ 必須持ち物チェックリスト">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "おむつ・おしりふき（予備多めに）", "着替え2セット以上", "水筒・飲み物（こぼしにくいもの）", "おやつ（ぐずり防止の切り札）",
                  "日焼け止め・帽子", "小さなおもちゃ・絵本", "ビニール袋数枚", "除菌シート・ウェットティッシュ",
                  "ばんそうこう・常備薬", "抱っこ紐（ベビーカーとの併用）",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-2">
                    <span className="text-green-500 text-sm">✓</span>
                    <span className="text-[11px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </S>

            <S t="ベビーカー？抱っこ紐？2歳の移動手段">
              <div className="space-y-3">
                <div className="border-l-4 border-brand-400 pl-4">
                  <div className="text-sm font-bold text-brand-700">🚼 ベビーカーがおすすめな場面</div>
                  <p className="text-xs text-gray-600 mt-1">動物園・テーマパークなど長時間外出 / 荷物が多いとき / 子どもが昼寝する可能性がある / 平坦な道が多いショッピングモール</p>
                </div>
                <div className="border-l-4 border-rose-400 pl-4">
                  <div className="text-sm font-bold text-rose-700">🤱 抱っこ紐がおすすめな場面</div>
                  <p className="text-xs text-gray-600 mt-1">電車や混雑する場所での移動 / 石畳や坂道が多い観光地 / 「歩く！」「抱っこ！」を繰り返す場面 / 短時間の外出</p>
                </div>
                <p className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">💡 2歳は「歩く！」と言い張る割にすぐ「だっこ〜」になることも。ベビーカーと抱っこ紐の両方を携帯するか、ベビーカーにキャリアをかけて持ち歩くのがベストです。</p>
              </div>
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">2歳はイヤイヤ期と言われますが、おでかけの楽しさを一番吸収できる時期でもあります。動物の名前を覚えたり、電車を見て大興奮したり、砂場で集中して遊んだり——その表情ひとつひとつが親の宝物になります。無理のないスケジュールで、2歳ならではのおでかけを満喫しましょう！</p>
            </S>
            <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white text-sm font-bold hover:opacity-90 transition">2歳向けスポットをアプリで探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
