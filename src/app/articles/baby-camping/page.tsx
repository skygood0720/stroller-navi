import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "赤ちゃん連れキャンプ 入門ガイド【2026年】何ヶ月から？必需品・おすすめキャンプ場",
  description: "赤ちゃん・子連れキャンプの完全入門ガイド。何ヶ月から行ける？必需品リスト・虫刺され対策・おすすめコテージ・グランピング施設まで徹底解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/baby-camping" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function BabyCamping() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>赤ちゃんとキャンプ</span>
          </nav>
          <div className="text-4xl mb-2">⛺</div>
          <h1 className="text-xl font-black leading-snug">
            赤ちゃん連れキャンプ<br />入門ガイド【2026年】
          </h1>
          <p className="text-xs text-white/80 mt-2">何ヶ月から？必需品・虫対策・おすすめグランピング施設</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-green-800 mb-2">⛺ 赤ちゃんキャンプ 基本ポイント</p>
            <ul className="text-xs text-green-700 space-y-1">
              <li>✅ 生後<strong>6ヶ月以降</strong>がキャンプデビューの目安</li>
              <li>✅ テントよりも<strong>コテージ・グランピング</strong>がはじめに最適</li>
              <li>✅ 標高が高い場所は夏でも冷える → 防寒グッズ必須</li>
              <li>✅ 虫刺され・日焼け対策は大人以上にしっかりと</li>
            </ul>
          </div>

          <S t="📅 何ヶ月から赤ちゃんとキャンプできる？">
            <div className="space-y-2">
              {[
                { age: "〜生後5ヶ月", ok: false, desc: "首がすわっていない・外気温への適応が不十分。キャンプは時期尚早。近場の日帰りお出かけから始めよう。" },
                { age: "生後6ヶ月〜", ok: true, desc: "首がすわり、離乳食も始まる時期。コテージ・グランピング施設（お風呂・トイレ完備）からデビューがおすすめ。" },
                { age: "1歳〜", ok: true, desc: "テントキャンプも現実的に。ただし夜中の授乳・寒暖差・虫など課題も多い。ファミリーキャンプ場を選ぼう。" },
                { age: "2歳〜", ok: true, desc: "「キャンプが楽しい！」と自分で感じられるようになる。焚き火・川遊び・虫取りなど体験の幅が広がる。" },
              ].map((a) => (
                <div key={a.age} className={`flex gap-3 rounded-xl p-3 ${a.ok ? "bg-green-50" : "bg-red-50"}`}>
                  <span className="text-base shrink-0">{a.ok ? "✅" : "❌"}</span>
                  <div>
                    <p className="text-xs font-bold">{a.age}</p>
                    <p className="text-xs text-gray-600">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="🏕️ キャンプ場の選び方（赤ちゃん連れ）">
            {[
              { title: "コテージ・グランピング施設を選ぶ", desc: "テントの設営・撤収をしながら赤ちゃんの世話は初心者には至難の業。まずはベッド・電気・お風呂付きの施設からスタート。" },
              { title: "トイレ・シャワーが清潔な施設", desc: "おむつ替えができる多目的トイレがあるか確認。男性トイレしかないキャンプ場は授乳に困ることも。" },
              { title: "医療機関・コンビニが近い", desc: "突然の発熱・けがに備えて、最寄りのコンビニ・小児科・救急病院の場所を事前に確認しておく。" },
              { title: "標高・気温を確認", desc: "標高が高いキャンプ場は夏でも朝晩は10℃以下になることも。赤ちゃんが体温調節しやすいよう厚手のウェアを用意。" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-green-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <S t="🎒 赤ちゃん連れキャンプ 必需品リスト">
            <div className="grid grid-cols-2 gap-3">
              {[
                { cat: "寝具・就寝", items: ["ベビー用寝袋（コンパクト型）", "おくるみ・ブランケット", "ベビーベッド（折りたたみ）", "モスキートネット（蚊帳）", "ナイトライト（暗闇対策）"] },
                { cat: "虫刺され対策", items: ["ベビー用虫除けスプレー", "虫除けシール（0歳〜）", "かゆみ止めクリーム", "長袖・長ズボン（涼しい素材）", "テント用防虫スプレー"] },
                { cat: "衛生・おむつ", items: ["おむつ多め（通常の3倍）", "おしりふき（大量）", "おむつ替えシート（防水）", "ビニール袋（大量）", "消毒液・綿棒", "着替え（多め）"] },
                { cat: "食事・授乳", items: ["保冷ボックス（大型）", "離乳食（レトルト）", "哺乳瓶洗い・消毒グッズ", "電子レンジ確認", "ベビーチェア（折りたたみ）", "スタイ多め"] },
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

          <S t="🌿 おすすめのグランピング・コテージ施設（関東）">
            <div className="space-y-2">
              {[
                { name: "星のや富士（山梨）", desc: "富士山を望むグランピングリゾート。子連れプランあり。設備が充実しておりはじめてのアウトドア体験に最適。", price: "30,000円〜/泊" },
                { name: "THE GLAMPING（栃木・那須）", desc: "那須高原のグランピング施設。コテージにベビーベッド持ち込み可。那須どうぶつ王国への日帰りもおすすめ。", price: "15,000円〜/泊" },
                { name: "オートキャンプ場・成田（千葉）", desc: "コテージ・AC電源サイトが充実したファミリー向けキャンプ場。成田空港近くでアクセスも便利。", price: "8,000円〜/泊" },
              ].map((p) => (
                <div key={p.name} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold">⛺ {p.name}</p>
                    <span className="text-[10px] text-gray-500">{p.price}</span>
                  </div>
                  <p className="text-xs text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </S>

          <ArticleAreaNav currentSlug="baby-camping" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
