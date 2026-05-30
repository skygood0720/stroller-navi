import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ベビーカーナビ",
  description: "ベビーカーナビのプライバシーポリシー。個人情報の取り扱い、Cookie・広告（Google AdSense）・アフィリエイトについて詳しく説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>プライバシーポリシー</span>
          </nav>
          <div className="text-3xl mb-2">🔒</div>
          <h1 className="text-xl font-black">プライバシーポリシー</h1>
        </header>

        <main className="p-5">
          <article className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
            <p className="text-gray-500 text-xs">最終更新日: 2026年5月30日</p>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. はじめに</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                ベビーカーナビ（以下「当サービス」）は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めます。
                本プライバシーポリシーは、当サービスにおける個人情報・Cookieの取り扱いについて説明するものです。
                当サービスを利用することで、本ポリシーに同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 運営者情報</h2>
              <dl className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-3">
                  <dt className="font-bold w-24 shrink-0">サービス名</dt>
                  <dd>ベビーカーナビ（Stroller Navi）</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold w-24 shrink-0">URL</dt>
                  <dd>https://stroller-navi.vercel.app</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold w-24 shrink-0">連絡先</dt>
                  <dd>
                    <Link href="/contact" className="text-brand-600 hover:underline">
                      お問い合わせページ
                    </Link>
                    （または info@stroller-navi.com）
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 収集する情報</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold mb-1">位置情報</p>
                  <p className="leading-relaxed">
                    現在地から近いスポットの表示のために、ブラウザの位置情報APIを使用する場合があります。
                    位置情報の提供は任意であり、ブラウザの設定でいつでも拒否できます。位置情報はサーバーに保存しません。
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-1">アクセスログ</p>
                  <p className="leading-relaxed">
                    サービス改善のため、IPアドレス・ブラウザの種類・アクセス日時・参照元URLなどのアクセスログを収集する場合があります。
                    これらの情報は個人を特定するものではありません。
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-1">お問い合わせ情報</p>
                  <p className="leading-relaxed">
                    お問い合わせフォームからご連絡いただいた場合、メールアドレスおよびお問い合わせ内容を返信目的のみに使用します。
                    第三者への提供・マーケティング利用は一切行いません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. Cookieの使用について</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                当サービスでは、以下の目的でCookieおよび類似の技術を使用しています。
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-gray-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs text-gray-800 mb-1">サービス機能に必要なCookie</p>
                  <p className="text-xs leading-relaxed text-gray-600">
                    ページの表示設定・言語設定などを記憶するために使用します。これらはサービスの基本機能に必要なため、無効にするとサービスが正常に動作しない場合があります。
                  </p>
                </div>
                <div className="bg-orange-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs text-orange-800 mb-1">Google AdSense（広告Cookie）</p>
                  <p className="text-xs leading-relaxed text-gray-600">
                    当サービスはGoogle AdSenseを使用した広告を掲載しています。Google AdSenseはCookieを使用して、ユーザーの過去のサイト訪問履歴に基づいた広告を表示します。
                    Googleが広告Cookieを使用することにより、Google のパートナーと Google のウェブサイトやアプリにアクセスした際の情報に基づいて、Google および Google のパートナーが広告を配信できるようになります。
                    広告のパーソナライズを無効にするには
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-1">
                      Google 広告設定
                    </a>
                    からオプトアウトできます。
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3.5">
                  <p className="font-bold text-xs text-blue-800 mb-1">Google Analytics（解析Cookie）</p>
                  <p className="text-xs leading-relaxed text-gray-600">
                    サービスの利用状況を把握するためにGoogle Analyticsを使用する場合があります。
                    このツールはトラフィックデータ収集のためにCookieを使用しますが、データは匿名で収集されており個人を特定するものではありません。
                    オプトアウトは
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-1">
                      Google Analytics オプトアウトアドオン
                    </a>
                    から行えます。
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                ブラウザの設定からCookieを無効にすることができますが、一部機能が制限される場合があります。
                Cookie設定の変更方法は、ご使用のブラウザのヘルプページをご参照ください。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. アフィリエイトプログラムについて</h2>
              <div className="bg-amber-50 rounded-xl p-4 mb-3">
                <p className="text-xs font-bold text-amber-800 mb-2">⚠️ アフィリエイト・広告収益の開示（景品表示法・ASAガイドライン準拠）</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  当サービスは<strong>Amazonアソシエイト・プログラム</strong>の参加者です。
                  おすすめ商品ページ内のAmazonへのリンクは、アフィリエイトリンクです。
                  当該リンクを経由してAmazonでお買い物いただくと、売上の一部がサイト運営費として還元されますが、
                  <strong>お客様の購入価格に変わりはありません</strong>。
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                アフィリエイト収益は、当サービスの維持・改善・スポット調査費用に充てています。
                掲載商品・スポットの選定に、アフィリエイト収益・広告費は一切影響しません。
                当編集部が独自の基準で選定しています。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">6. 第三者への情報提供</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>・法令に基づく場合</li>
                <li>・人の生命・身体・財産の保護のために必要な場合</li>
                <li>・ユーザーの同意がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">7. 外部サービスへのリンク</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスには外部サイトへのリンクが含まれます。
                外部サイトのプライバシーポリシーについては各サービスの規約をご確認ください。
                外部サイトにおけるお客様の情報について当サービスは責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">8. お子様のプライバシー</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスは保護者の方がお子様のためにご利用いただくことを想定しています。
                13歳未満のお子様から意図的に個人情報を収集することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">9. プライバシーポリシーの変更</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                本プライバシーポリシーは、法令の変更やサービス内容の変更に伴い更新される場合があります。
                重要な変更がある場合は、当サービスのトップページでお知らせします。
                変更後も引き続き当サービスを利用された場合、変更後のポリシーに同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">10. お問い合わせ</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                プライバシーポリシーに関するお問い合わせ・個人情報の開示・訂正・削除のご要望は、
                <Link href="/contact" className="text-brand-600 hover:underline mx-1">
                  お問い合わせページ
                </Link>
                よりご連絡ください。
              </p>
            </section>
          </article>

          <div className="flex gap-3 mt-5">
            <Link
              href="/about"
              className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
            >
              運営者情報 →
            </Link>
            <Link
              href="/contact"
              className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition"
            >
              お問い合わせ →
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
