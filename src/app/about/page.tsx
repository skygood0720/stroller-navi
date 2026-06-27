import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "運営者情報・ベビーカーナビについて | ベビーカーナビ",
  description: "ベビーカーナビの運営者情報、編集方針、サービス概要。子育て経験のある編集部が全国470以上のスポットをバリアフリー視点で調査・掲載しています。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>ベビーカーナビについて</span>
          </nav>
          <div className="text-3xl mb-2">🚼</div>
          <h1 className="text-xl font-black">ベビーカーナビについて</h1>
          <p className="text-xs text-white/70 mt-1">赤ちゃん連れのおでかけをもっと楽しく、もっと安心に</p>
        </header>

        <main className="p-5 space-y-5">

          {/* サービス概要 */}
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚼 ベビーカーナビとは</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ベビーカーナビは、赤ちゃん連れのパパ・ママが安心しておでかけできるよう、全国のバリアフリー情報をまとめたWebサービスです。
              「ここエレベーターどこ？」「授乳室あるかな？」「ベビーカーで入れる？」——そんな不安をなくすために、
              実際に子連れで訪れた経験をもとにスポット情報を調査・掲載しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              2024年にサービスを開始し、2026年現在では全国<strong>470以上のスポット</strong>を掲載。
              授乳室・おむつ替え台・エレベーター・スロープ・ベビーカー貸出などの設備情報に加え、
              赤ちゃんの月齢に合わせたおすすめポイントや、ママパパの口コミも提供しています。
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { num: "500+", label: "掲載スポット数" },
                { num: "52本", label: "お役立ち記事" },
                { num: "全国", label: "対応エリア" },
                { num: "2024年", label: "サービス開始" },
              ].map((s) => (
                <div key={s.label} className="bg-brand-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-black text-brand-600">{s.num}</p>
                  <p className="text-[10px] text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </article>

          {/* 運営者情報 */}
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">👤 運営者・編集部について</h2>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-2xl shrink-0">
                🍼
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">ベビーカーナビ編集部</p>
                <p className="text-xs text-gray-500">子育て経験者・Webエンジニア・ライターで構成</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ベビーカーナビは、乳幼児を育てる（または育てた）子育て経験者を中心に運営しています。
              「実際にベビーカーで行ってみたら不便だった」「授乳室の場所がわからなくて焦った」
              ——そんなリアルな経験から、このサービスを立ち上げました。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              掲載スポットは編集部メンバーが実地調査または公式情報・ユーザー投稿をもとに確認。
              情報の正確性を重視し、古い情報はすみやかに更新しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              記事コンテンツは子育て経験者・専門家監修のもとで執筆しており、
              読者の方が実際の外出でそのまま役立てられる情報を心がけています。
            </p>

            <div className="mt-4 bg-amber-50 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-700 mb-1">📬 お問い合わせ・情報修正依頼</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                情報の誤りの報告、掲載スポットの追加依頼、その他のお問い合わせは
                <Link href="/contact" className="text-brand-600 font-bold hover:underline mx-1">
                  お問い合わせページ
                </Link>
                よりご連絡ください。通常3〜5営業日以内にご返信いたします。
              </p>
            </div>
          </article>

          {/* 編集方針 */}
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">📝 コンテンツの編集方針</h2>
            <div className="space-y-4">
              {[
                {
                  icon: "🔍",
                  title: "正確な情報を最優先",
                  desc: "掲載情報は公式サイト・実地調査・ユーザー投稿の3つのソースを組み合わせて確認。営業時間や設備情報は変更される場合があるため、おでかけ前に公式サイトでの確認を推奨しています。",
                },
                {
                  icon: "💰",
                  title: "広告・アフィリエイトの透明な開示",
                  desc: "当サイトはAmazonアソシエイトプログラムに参加し、一部のリンクからアフィリエイト収入を得ています。ただし、掲載商品・スポットの選定に広告収益は一切影響しません。アフィリエイトリンクには必ずその旨を明記しています。",
                },
                {
                  icon: "📊",
                  title: "独自調査に基づく選定",
                  desc: "「人気だから掲載する」のではなく、「子連れで実際に行きやすいか」を基準にスポットを選定。エレベーターの動線、授乳室の品質、通路幅など、ベビーカーナビ独自の視点で評価しています。",
                },
                {
                  icon: "🔄",
                  title: "定期的な情報更新",
                  desc: "掲載情報は定期的に見直しを行っています。読者の方から誤りの報告を受けた場合は、確認のうえ速やかに修正します。",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 主な機能 */}
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">✨ 主なコンテンツ</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📍",
                  title: "全国スポット検索",
                  desc: "北海道〜沖縄まで500以上のスポットを地域別に検索。授乳室・おむつ替え・エレベーター情報付き。",
                },
                {
                  icon: "📖",
                  title: "おでかけお役立ち記事",
                  desc: "新宿・渋谷・大阪・京都など全国のエリアガイドと、授乳室の探し方・電車マナーなどのハウツー記事を計52本掲載。",
                },
                {
                  icon: "🛒",
                  title: "おすすめベビーグッズ",
                  desc: "ベビーカー・抱っこ紐・マザーズバッグ・知育おもちゃ・月齢別おすすめ絵本をカテゴリ別に紹介。",
                },
                {
                  icon: "🗺️",
                  title: "地域別スポット一覧",
                  desc: "東京・関西・九州など9地域のスポットを一覧表示。おでかけ先に合わせてチェックできます。",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 bg-gray-50 rounded-xl p-3.5">
                  <span className="text-xl mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{f.title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 掲載データについて */}
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">📊 掲載データについて</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              掲載している施設情報は、公式サイト・実地調査・ユーザー投稿を基に作成しています。
              営業時間や設備情報は変更される場合がありますので、おでかけ前に公式サイトでの確認をお勧めします。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              情報の誤りや追加のご要望は
              <Link href="/contact" className="text-brand-600 font-bold hover:underline mx-1">
                お問い合わせフォーム
              </Link>
              からお寄せください。すべての情報はスタッフが確認のうえ反映いたします。
            </p>
          </article>

          {/* リンク */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-500 text-white text-xs font-bold hover:bg-brand-600 transition"
            >
              ✉️ お問い合わせ
            </Link>
            <Link
              href="/privacy"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
            >
              🔒 プライバシーポリシー
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ スポットを探す
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
