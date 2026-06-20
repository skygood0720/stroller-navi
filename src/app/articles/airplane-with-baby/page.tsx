import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "赤ちゃんと飛行機 完全ガイド【2026年】持ち物・座席・ぐずり対策まで徹底解説",
  description: "赤ちゃんと飛行機に乗るときの完全ガイド。何ヶ月から乗れる？持ち物リスト・座席選び・ぐずり対策・搭乗前準備・航空会社のサービスまで徹底解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/airplane-with-baby" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function AirplaneWithBaby() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>赤ちゃんと飛行機</span>
          </nav>
          <div className="text-4xl mb-2">✈️</div>
          <h1 className="text-xl font-black leading-snug">
            赤ちゃんと飛行機<br />完全ガイド【2026年】
          </h1>
          <p className="text-xs text-white/80 mt-2">何ヶ月から乗れる？座席選び・持ち物・ぐずり対策まで徹底解説</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-sky-800 mb-2">✈️ 赤ちゃんと飛行機 基本ルール</p>
            <div className="space-y-1.5 text-xs text-sky-700">
              <p>• <strong>生後8日以上</strong>から国内線搭乗可能（航空会社による）</p>
              <p>• <strong>2歳未満</strong>は膝上に乗せる場合は無料（国内線・多くの国際線）</p>
              <p>• <strong>ベビーカー</strong>は搭乗口で預け、到着時に返却（多くの場合）</p>
              <p>• <strong>バシネット席</strong>（揺りかご付き）は事前リクエスト必須</p>
            </div>
          </div>

          <S t="📅 何ヶ月から飛行機に乗れる？">
            <div className="space-y-2">
              {[
                { age: "生後8日〜", rule: "ANAは生後8日から搭乗可。JALは生後8日から。ただし航空会社により異なるため要確認。", care: "医師の診断書が必要な場合あり" },
                { age: "生後1ヶ月〜", rule: "1ヶ月健診後から。比較的安定してきた時期。国内の帰省などでの初搭乗に向いている。", care: "授乳・ミルクのタイミングを離着陸に合わせる" },
                { age: "生後3ヶ月〜", rule: "首がすわりはじめ、飛行機での移動がやや楽に。沖縄・北海道などの国内旅行が現実的に。", care: "おしゃぶり・授乳で耳抜きサポート" },
                { age: "生後6ヶ月〜", rule: "離乳食が始まる時期。機内食のベビーミールをリクエスト可（国際線）。足元が狭い国内線は膝上で頑張る。", care: "離乳食の持ち込み確認を事前に" },
                { age: "1歳〜2歳", rule: "最も大変な時期。座席を動き回りたがる。自分の席（子ども料金）を購入した方が精神的に楽な場合も。", care: "お気に入りおもちゃ・タブレットを活用" },
              ].map((a) => (
                <div key={a.age} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex gap-2 items-start">
                    <span className="text-[10px] font-black bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full shrink-0">{a.age}</span>
                    <div>
                      <p className="text-xs text-gray-700">{a.rule}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">💡 {a.care}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="💺 座席選びのポイント">
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-3">
                <p className="text-xs font-bold text-green-800 mb-1">✅ おすすめの席</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• <strong>バシネット対応席（最前列）</strong>：揺りかご設置可。足元スペースも広い。要事前リクエスト。</li>
                  <li>• <strong>通路側</strong>：立ち上がりやすい。トイレ・おむつ替えへの移動がラク。</li>
                  <li>• <strong>後方の席</strong>：エンジン音でぐずり声が響きにくい。CA（客室乗務員）にも近い。</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-3">
                <p className="text-xs font-bold text-red-800 mb-1">❌ 避けたい席</p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• <strong>非常口付近</strong>：ベビーカー・子連れは着席不可のことが多い</li>
                  <li>• <strong>窓側のみ</strong>：トイレに行くたびに隣の人に断りを入れる必要あり</li>
                </ul>
              </div>
            </div>
          </S>

          <S t="🎒 飛行機の持ち物チェックリスト">
            <div className="grid grid-cols-2 gap-3">
              {[
                { cat: "機内持ち込み（必須）", items: ["おむつ多め（通常の2倍）", "おしりふき", "着替え2セット", "ビニール袋", "ミルク・哺乳瓶", "離乳食（ベビーフード）", "おしゃぶり（耳抜き用）"] },
                { cat: "ぐずり対策", items: ["お気に入りのおもちゃ", "歯固め", "シール帳", "小さな絵本", "タブレット（動画）", "おやつ（手づかみ食べ）"] },
                { cat: "機内の快適グッズ", items: ["授乳ケープ", "おくるみ・ブランケット", "ベビーシート用ベルト", "抱っこ紐（スリング）", "耳栓（保護者用）"] },
                { cat: "手荷物に入れない（預け荷物）", items: ["ベビーバス・沐浴グッズ", "大型おもちゃ", "ミルク缶（大）", "日焼け止め（大容量）"] },
              ].map((c) => (
                <div key={c.cat} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-[11px] font-bold text-gray-700 mb-1.5">{c.cat}</p>
                  {c.items.map((i) => (
                    <label key={i} className="flex items-center gap-1 text-[10px] text-gray-600 mb-0.5">
                      <span className="text-brand-400">☐</span>{i}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </S>

          <S t="😢 ぐずり対策 実践テクニック">
            {[
              { title: "耳の痛みは離着陸時の授乳で解決", desc: "気圧変化による耳の痛みは、ゴクゴク飲むことで軽減。離着陸のタイミングに合わせて授乳・ミルク・ジュース飲みを。おしゃぶりも有効。" },
              { title: "通路を歩かせる（歩ける子）", desc: "1〜2歳は座っていられないことが多い。CA（客室乗務員）に一言断って通路を少し歩かせると落ち着くことも。" },
              { title: "新しいおもちゃ・シールで気を引く", desc: "普段と違うおもちゃは新鮮で集中時間が長くなる。100円ショップのシール帳・はじめて見るミニカーなどが効果的。" },
              { title: "スマートフォン・タブレットを最終兵器に", desc: "いつも見ないYouTubeや録り溜めたアニメを解禁する「飛行機だけの特別」ルールにすると効果絶大。ダウンロード版で通信不要に。" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-sky-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <S t="✈️ 主要航空会社の赤ちゃんサービス比較">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left font-bold">航空会社</th>
                    <th className="p-2 text-center font-bold">搭乗可能月齢</th>
                    <th className="p-2 text-center font-bold">バシネット</th>
                    <th className="p-2 text-center font-bold">ベビーカー返却</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { airline: "ANA", age: "生後8日〜", bassinet: "○（要事前申請）", stroller: "搭乗口で返却" },
                    { airline: "JAL", age: "生後8日〜", bassinet: "○（要事前申請）", stroller: "搭乗口で返却" },
                    { airline: "スカイマーク", age: "生後8日〜", bassinet: "×", stroller: "到着口で受取" },
                    { airline: "ジェットスター", age: "生後8日〜", bassinet: "×", stroller: "到着口で受取" },
                    { airline: "ピーチ", age: "生後8日〜", bassinet: "×", stroller: "到着口で受取" },
                  ].map((r) => (
                    <tr key={r.airline} className="border-t border-gray-100">
                      <td className="p-2 font-bold">{r.airline}</td>
                      <td className="p-2 text-center">{r.age}</td>
                      <td className="p-2 text-center">{r.bassinet}</td>
                      <td className="p-2 text-center">{r.stroller}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 mt-2">※各航空会社の最新情報は公式サイトでご確認ください</p>
          </S>

          <ArticleAreaNav currentSlug="airplane-with-baby" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
