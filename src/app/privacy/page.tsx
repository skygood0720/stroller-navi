import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ベビーカーナビ",
  description: "ベビーカーナビのプライバシーポリシーについて。個人情報の取り扱い、Cookie、広告配信について説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">
            ← ベビーカーナビ トップへ
          </Link>
          <h1 className="text-xl font-black">プライバシーポリシー</h1>
        </header>

        <main className="p-5">
          <article className="bg-white rounded-2xl p-6 shadow-sm prose prose-sm max-w-none">
            <p className="text-gray-500 text-xs mb-6">最終更新日: 2026年4月</p>

            <h2 className="text-base font-bold mt-6 mb-2">1. はじめに</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ベビーカーナビ（以下「当サービス」）は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サービスにおける個人情報の取り扱いについて説明するものです。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">2. 収集する情報</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サービスでは、以下の情報を収集する場合があります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              <strong>アカウント情報：</strong>Googleアカウントまたはメールアドレスによるログイン時に、メールアドレスとお名前を取得します。これはユーザー認証、口コミの投稿者表示、お気に入り機能のために使用されます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              <strong>赤ちゃんの情報：</strong>お名前と生年月日を任意でご登録いただけます。これは月齢に合わせたおすすめスポットの表示に使用されます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              <strong>位置情報：</strong>現在地から近いスポットの表示や天気連動機能のために、ブラウザの位置情報APIを使用します。位置情報の提供は任意であり、ブラウザの設定でいつでも拒否できます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>口コミ・フィードバック：</strong>投稿された口コミや要望は、サービス改善のために保存されます。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">3. 情報の利用目的</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              収集した情報は以下の目的で利用します。サービスの提供・維持・改善、ユーザー体験のパーソナライズ（年齢に合ったスポット推薦など）、口コミ・レビュー機能の運営、お問い合わせへの対応、サービスの利用状況の分析。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">4. 第三者への情報提供</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サービスは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">5. 広告について</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サービスでは、Google AdSenseなどの第三者配信の広告サービスを利用する場合があります。これらの広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するために、Cookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることが可能です。詳しくはGoogleの広告ポリシーをご確認ください。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">6. アクセス解析ツール</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サービスでは、サービスの利用状況を把握するためにGoogle Analyticsなどのアクセス解析ツールを使用する場合があります。これらのツールはトラフィックデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">7. データの保管</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ユーザーの情報はSupabase（クラウドデータベース）に安全に保管されます。適切なセキュリティ対策を講じていますが、インターネット上の通信において完全な安全性を保証するものではありません。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">8. お子様のプライバシー</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              当サービスは保護者の方がお子様のためにご利用いただくことを想定しています。13歳未満のお子様が直接当サービスを利用することは想定しておりません。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">9. ポリシーの変更</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              本プライバシーポリシーは、必要に応じて変更される場合があります。重要な変更がある場合は、当サービス上でお知らせします。
            </p>

            <h2 className="text-base font-bold mt-6 mb-2">10. お問い合わせ</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              プライバシーポリシーに関するお問い合わせは、アプリ内の「💬 ご要望・ご意見」フォームよりお寄せください。
            </p>
          </article>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
