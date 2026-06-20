import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "離乳食中の赤ちゃんとおでかけ【2026年】外食・持ち物・ベビーフード活用術",
  description: "離乳食期の赤ちゃんとの外出で困らないための完全ガイド。ベビーフードの選び方・外食での注文の仕方・持ち物リスト・レトルト離乳食おすすめ商品を解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/baby-weaning-outing" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function BabyWeaningOuting() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>離乳食中のおでかけ</span>
          </nav>
          <div className="text-4xl mb-2">🥄</div>
          <h1 className="text-xl font-black leading-snug">
            離乳食中の赤ちゃんと<br />おでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">外食・ベビーフード・持ち物・レストランでの注文術を解説</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-yellow-800 mb-1">🥄 離乳食とおでかけのポイント</p>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>✅ レトルトのベビーフードを上手に活用すると外出が楽に</li>
              <li>✅ ショッピングモールのフードコートは電子レンジが借りられることも</li>
              <li>✅ 外食時は「薄味・無添加」を意識してメニューを選ぶ</li>
              <li>✅ 食事グッズ（スタイ・スプーン・おかわりボウル）を忘れずに</li>
            </ul>
          </div>

          <S t="📅 離乳食の段階別おでかけ難易度">
            <div className="space-y-2">
              {[
                { stage: "初期（5〜6ヶ月）", hard: "★★★☆☆", desc: "まだ少量しか食べない時期。ベビーフード（なめらかペースト）があれば外出先でも対応しやすい。授乳が主なのでおでかけは比較的楽。" },
                { stage: "中期（7〜8ヶ月）", hard: "★★★★☆", desc: "1日2回食になり、外出中の食事タイミング管理が必要に。つぶし粥・みじん切り野菜を清潔な容器に持参するか、レトルトを活用。" },
                { stage: "後期（9〜11ヶ月）", hard: "★★★★★", desc: "手づかみ食べを始める時期。食べ散らかしが増えるため、外食が一番大変。シリコンビブ・レジャーシートが必需品。" },
                { stage: "完了期（12〜18ヶ月）", hard: "★★★☆☆", desc: "大人の食事に近づき、外食でのメニュー選択の幅が広がる。薄味・柔らかめを意識すれば外食が楽に。" },
              ].map((s) => (
                <div key={s.stage} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold">{s.stage}</p>
                    <span className="text-xs text-yellow-500">{s.hard}</span>
                  </div>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </S>

          <S t="🍱 ベビーフード活用術（外出時）">
            {[
              { title: "アルミパウチタイプが外出に最適", desc: "和光堂・キユーピーのレトルトパウチは常温保存OK。外出時は2〜3個カバンに入れておくと安心。スプーンで袋からそのまま食べられるタイプが便利。" },
              { title: "電子レンジを借りる方法", desc: "ショッピングモールのフードコート・一部のファミレスは電子レンジを貸し出してくれる場合があります。インフォメーションカウンターで確認してみましょう。" },
              { title: "新幹線・飛行機でのベビーフード", desc: "新幹線は車内販売でお湯を提供してもらえる場合があります。飛行機は機内スタッフに依頼すれば温かいお湯を用意してくれることも。事前に確認しておくと安心。" },
              { title: "手づかみ食べ対応の食材を持参", desc: "スティック野菜（ゆで人参・きゅうり）・パン（細かく切る）・バナナは手づかみ食べに最適。汚れても大丈夫な環境を準備してから渡して。" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-yellow-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <S t="🍽️ 外食での賢いメニュー選び">
            <div className="space-y-2">
              <p className="text-xs text-gray-700 mb-2">離乳食中の赤ちゃんに外食でおすすめのメニュー：</p>
              {[
                { menu: "おかゆ・雑炊（和食レストラン）", good: "消化が良く塩分も調整しやすい。「薄味で」とリクエストすれば対応してくれる店も。", bad: "" },
                { menu: "うどん（汁を少なめに）", good: "やわらかくゆでて細かく切れば食べやすい。スープは塩分が高いため少量に。", bad: "" },
                { menu: "豆腐・白身魚（和定食）", good: "タンパク質がとれてやわらかい食材。アレルギーに注意しながら活用。", bad: "" },
                { menu: "離乳食メニューがあるお店", good: "最近は子連れ専門カフェ・ファミレスで離乳食対応メニューを提供する店が増えています。", bad: "" },
              ].map((m) => (
                <div key={m.menu} className="bg-green-50 rounded-xl p-3">
                  <p className="text-xs font-bold text-green-800 mb-0.5">✅ {m.menu}</p>
                  <p className="text-xs text-green-700">{m.good}</p>
                </div>
              ))}
            </div>
          </S>

          <S t="🎒 離乳食中のおでかけ 持ち物チェックリスト">
            <div className="grid grid-cols-2 gap-3">
              {[
                { cat: "食事グッズ", items: ["ベビーフード2〜3個", "スプーン（持参）", "シリコンビブ（汚れない）", "手口ふきウェットシート", "プラスチックボウル（蓋付き）", "ラップフィルム（食べかけ保存）"] },
                { cat: "後処理・汚れ対策", items: ["着替え2セット（必須）", "ビニール袋（汚れ物）", "レジャーシート（手づかみ食べ用）", "テーブル拭き用ウェットシート", "ゴミ袋（おむつ替えも）"] },
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

          <div className="grid grid-cols-2 gap-3">
            <Link href="/articles/nursing-room-tips" className="bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <div className="text-2xl mb-1">🍼</div>
              <p className="text-xs font-bold">授乳室の探し方</p>
            </Link>
            <Link href="/articles/restaurant-tips" className="bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <div className="text-2xl mb-1">🍽️</div>
              <p className="text-xs font-bold">子連れランチ攻略</p>
            </Link>
          </div>

          <ArticleAreaNav currentSlug="baby-weaning-outing" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
