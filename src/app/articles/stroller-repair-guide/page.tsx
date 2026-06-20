import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "ベビーカーのたたみ方・お手入れ・修理ガイド【2026年】長持ちさせる方法",
  description: "ベビーカーのたたみ方のコツ・日常メンテナンス・タイヤ空気入れ・フレーム錆び対策・メーカー修理の流れまで解説。大切なベビーカーを長持ちさせる完全ガイド。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/stroller-repair-guide" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function StrollerRepairGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-gray-600 via-slate-700 to-gray-800 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>ベビーカーお手入れガイド</span>
          </nav>
          <div className="text-4xl mb-2">🔧</div>
          <h1 className="text-xl font-black leading-snug">
            ベビーカーのたたみ方・<br />お手入れ・修理ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">日常メンテナンスから修理依頼まで、長持ちさせる方法を解説</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-gray-700 mb-1">🔧 ベビーカーメンテナンスの重要性</p>
            <p className="text-xs text-gray-600">ベビーカーは毎日使う育児の必需品。適切なお手入れをすることで安全性が保たれ、兄弟での2人目使用や売却時の価値維持にもつながります。</p>
          </div>

          <S t="📁 たたみ方（ワンタッチ折りたたみのコツ）">
            <div className="space-y-3">
              {[
                { step: "1", title: "シートを確認・物を取り出す", desc: "折りたたみ前に座面・荷物かごに荷物が残っていないか確認。特に硬いものが挟まると折り目が変形する原因になります。" },
                { step: "2", title: "対面/背面の切り替えを戻す", desc: "対面ポジションにしたまま折りたたもうとするとロック機構が壊れることも。必ず背面（前向き）の状態に戻してから折りたたみます。" },
                { step: "3", title: "ロック解除ボタンを押しながら折りたたむ", desc: "機種により手順が異なります。取扱説明書を確認し、無理に折ろうとしないことが大切。" },
                { step: "4", title: "ロックがかかったことを確認", desc: "折りたたみ後はロックレバーが正しくかかっているか確認。電車の改札通過時に急に開くと危険です。" },
              ].map((s) => (
                <div key={s.step} className="flex gap-3">
                  <span className="text-sm font-black text-white bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center shrink-0">{s.step}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5">{s.title}</p>
                    <p className="text-xs text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="🧹 日常のお手入れ方法">
            <div className="space-y-3">
              {[
                { freq: "毎回使用後", items: ["シートの食べこぼし・汚れを乾いた布で拭き取る", "フレーム・タイヤに砂・泥が付いていたら落とす", "荷物かごを空にして湿気を逃がす"] },
                { freq: "週1回", items: ["シートカバーを外して手洗い（洗濯表示確認）", "フレームを固く絞った濡れ雑巾で拭く", "タイヤの溝に砂・小石が詰まっていたら除去"] },
                { freq: "月1回", items: ["車軸にシリコンスプレーを少量吹き付けて滑りをよくする", "ハンドルの握り部分を中性洗剤で拭く", "ジョイント部分・ねじの緩みを確認"] },
                { freq: "半年〜1年に1回", items: ["メーカー推奨の定期点検（有料の場合あり）", "タイヤの空気圧チェック（エアタイヤの場合）", "フレームの錆び確認・防錆スプレー塗布"] },
              ].map((f) => (
                <div key={f.freq}>
                  <p className="text-xs font-bold text-gray-500 mb-1.5">{f.freq}</p>
                  <ul className="space-y-1">
                    {f.items.map((i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600">
                        <span className="text-brand-400 shrink-0">✓</span>{i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </S>

          <S t="⚠️ よくあるトラブルと対処法">
            {[
              { problem: "タイヤがすり減ってガタガタする", fix: "エアタイヤなら空気を入れる。ノーパンクタイヤのすり減りは交換が必要。メーカーに部品を注文できる場合が多い。" },
              { problem: "折りたたみロックがかからない", fix: "折りたたみ部分に砂やゴミが詰まっている可能性。清掃後も改善しない場合はメーカー修理へ。" },
              { problem: "車輪がぐらぐらして直進しない", fix: "車軸のねじの緩みが原因のことが多い。ドライバーで締め直して改善するか確認。改善しない場合は修理依頼を。" },
              { problem: "シートが臭う", fix: "カバーを外して手洗い（中性洗剤・ぬるま湯）。フレームも拭き取り、日陰で十分乾かす。カビが生えている場合は重曹水で拭く。" },
              { problem: "ベルトが汚れてファスナーが動かない", fix: "ファスナーはろうそくを軽く当てるとスムーズになる。ベルトは中性洗剤で手洗い後、十分乾燥させる。" },
            ].map((t) => (
              <div key={t.problem} className="border border-red-100 rounded-xl p-3 mb-2">
                <p className="text-xs font-bold text-red-700 mb-1">⚠️ {t.problem}</p>
                <p className="text-xs text-gray-600">→ {t.fix}</p>
              </div>
            ))}
          </S>

          <S t="🏭 メーカー修理の流れ（コンビ・アップリカ）">
            <div className="space-y-3">
              {[
                { step: "1", title: "メーカーに問い合わせ", desc: "電話・メールで症状を伝え、修理可能かどうか確認。保証期間内かどうかも聞いておく。" },
                { step: "2", title: "送付か持ち込みか選択", desc: "メーカーに直接持ち込むか、宅配便で送付。折りたたんでダンボールに入れて送る方法が一般的。" },
                { step: "3", title: "見積もり確認", desc: "修理費用の見積もりが届く。高額な場合は買い替えとどちらがいいか検討する。" },
                { step: "4", title: "修理完了・受取", desc: "修理後は返送または引き取り。修理後の動作確認を必ず行う。" },
              ].map((s) => (
                <div key={s.step} className="flex gap-3">
                  <span className="text-sm font-black text-white bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center shrink-0">{s.step}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5">{s.title}</p>
                    <p className="text-xs text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <div className="bg-brand-50 rounded-2xl p-4 text-center">
            <p className="text-sm font-bold mb-2">🛒 新しいベビーカーを探すなら</p>
            <Link href="/articles/stroller-choosing-guide" className="text-xs text-brand-600 font-bold hover:underline">→ ベビーカーの選び方完全ガイドを見る</Link>
          </div>

          <ArticleAreaNav currentSlug="stroller-repair-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
