import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "お問い合わせ | ベビーカーナビ",
  description: "ベビーカーナビへのお問い合わせはこちらから。掲載情報の誤り報告・ご意見・ご要望をお受けしています。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>お問い合わせ</span>
          </nav>
          <div className="text-3xl mb-2">✉️</div>
          <h1 className="text-xl font-black">お問い合わせ</h1>
          <p className="text-xs text-white/70 mt-1">ご質問・情報の誤り報告・ご意見をお気軽にどうぞ</p>
        </header>

        <main className="p-5 space-y-5">
          {/* 問い合わせ種別 */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">📬 お問い合わせ内容</h2>
            <div className="space-y-3">
              {[
                { emoji: "📍", title: "掲載情報の誤り・更新依頼", desc: "スポット情報（住所・設備・営業時間）の修正や更新をご報告いただけます" },
                { emoji: "➕", title: "スポット・記事の追加要望", desc: "「このスポットを掲載してほしい」「この記事を書いてほしい」などのリクエスト" },
                { emoji: "💡", title: "サイト改善のご提案", desc: "機能改善・使いやすさに関するご意見・ご提案" },
                { emoji: "🤝", title: "取材・コラボレーション", desc: "メディア取材、施設様からのご掲載依頼、ブランドとのタイアップについて" },
                { emoji: "⚖️", title: "著作権・法的なお問い合わせ", desc: "掲載コンテンツに関する権利や法的事項についてのご連絡" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-gray-50 rounded-xl p-3.5">
                  <span className="text-xl mt-0.5">{item.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{item.title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 連絡方法 */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">📨 ご連絡方法</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              下記のメールアドレスまでご連絡ください。内容を確認のうえ、通常3〜5営業日以内にご返信いたします。
              お急ぎの場合はその旨をメール本文にご記載ください。
            </p>
            <div className="bg-brand-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">メールアドレス</p>
              <a
                href="mailto:info@stroller-navi.com"
                className="text-base font-bold text-brand-600 hover:text-brand-700 hover:underline"
              >
                info@stroller-navi.com
              </a>
            </div>
            <p className="text-[11px] text-gray-400 mt-3 text-center">
              ※スパム防止のため、件名に「ベビーカーナビ お問い合わせ」とご記入ください
            </p>
          </section>

          {/* よくある質問 */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-4">❓ よくあるご質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "掲載情報が古い・間違っていました",
                  a: "施設の営業時間・設備情報は変更される場合があります。誤りを発見された場合は、施設名・修正内容をメールでお知らせください。確認のうえ速やかに修正いたします。",
                },
                {
                  q: "自分の施設を掲載してほしい",
                  a: "掲載基準（バリアフリー設備・子連れ対応）を満たす施設を随時募集しています。施設名・所在地・設備情報・担当者様の連絡先をメールでお送りください。",
                },
                {
                  q: "広告・アフィリエイトリンクについて",
                  a: "当サイトはAmazonアソシエイトプログラムおよびGoogle AdSenseに参加しています。広告収益はサービスの維持・改善に使用しています。掲載商品・スポットの選定に広告費は影響しません。",
                },
                {
                  q: "返信が来ない場合は？",
                  a: "迷惑メールフォルダをご確認いただくか、件名を変えて再送いただければ幸いです。5営業日以上経過しても返信がない場合はお手数ですが再度ご連絡ください。",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1.5">Q. {faq.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 運営情報 */}
          <section className="bg-gray-50 rounded-2xl p-5">
            <h3 className="text-xs font-bold text-gray-600 mb-3">🏢 運営者情報</h3>
            <dl className="space-y-2 text-xs text-gray-600">
              <div className="flex gap-3">
                <dt className="font-bold w-20 shrink-0">サービス名</dt>
                <dd>ベビーカーナビ（Stroller Navi）</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-bold w-20 shrink-0">URL</dt>
                <dd>https://stroller-navi.vercel.app</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-bold w-20 shrink-0">連絡先</dt>
                <dd>info@stroller-navi.com</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-bold w-20 shrink-0">対応言語</dt>
                <dd>日本語</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-bold w-20 shrink-0">対応時間</dt>
                <dd>平日 10:00〜18:00（土日祝・年末年始除く）</dd>
              </div>
            </dl>
          </section>

          {/* リンク */}
          <div className="flex gap-3">
            <Link
              href="/about"
              className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
            >
              運営者情報 →
            </Link>
            <Link
              href="/privacy"
              className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
            >
              プライバシーポリシー →
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
