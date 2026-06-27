import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "利用規約 | ベビーカーナビ",
  description: "ベビーカーナビの利用規約。サービスのご利用にあたってのルールと注意事項をご確認ください。",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <span>利用規約</span>
          </nav>
          <div className="text-3xl mb-2">📋</div>
          <h1 className="text-xl font-black">利用規約</h1>
          <p className="text-xs text-white/70 mt-1">最終更新日: 2026年6月1日</p>
        </header>

        <main className="p-5">
          <article className="bg-white rounded-2xl p-6 shadow-sm space-y-6">

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第1条（適用）</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                本利用規約（以下「本規約」）は、ベビーカーナビ（以下「当サービス」）の利用条件を定めるものです。
                登録ユーザーの皆様（以下「ユーザー」）には、本規約に従って当サービスをご利用いただきます。
                当サービスにアクセスした時点で、本規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第2条（サービスの内容）</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="leading-relaxed">
                  当サービスは、赤ちゃん・乳幼児連れの保護者の方が安心しておでかけできるよう、
                  全国のバリアフリー情報（授乳室・おむつ替えスペース・エレベーター・ベビーカー対応情報など）を提供するWebサービスです。
                  主な機能は以下のとおりです。
                </p>
                <ul className="space-y-1 pl-4">
                  <li>・全国のベビーカー対応スポット検索・閲覧</li>
                  <li>・授乳室・多目的トイレ・バリアフリー設備情報の提供</li>
                  <li>・お役立ち記事（育児・おでかけ情報）の提供</li>
                  <li>・離乳食チェッカー機能</li>
                  <li>・ベビーグッズのご紹介（Amazonアフィリエイトリンクを含む）</li>
                  <li>・おすすめスポットの口コミ・投稿機能</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第3条（禁止事項）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ユーザーは、当サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・法令または公序良俗に違反する行為</li>
                <li>・犯罪行為に関連する行為</li>
                <li>・当サービスのサーバーまたはネットワークの機能を破壊・妨害する行為</li>
                <li>・当サービスの運営を妨害するおそれのある行為</li>
                <li>・他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>・他のユーザーに成りすます行為</li>
                <li>・当サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>・虚偽の情報や、他者を誹謗中傷する口コミ・レビューの投稿</li>
                <li>・当サービスのコンテンツ（テキスト・画像・データ）の無断転載・複製・販売</li>
                <li>・その他、当サービス運営者が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第4条（コンテンツの正確性について）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                当サービスに掲載している施設情報（授乳室の有無・営業時間・設備情報など）は、
                公式サイト・実地調査・ユーザー投稿をもとに作成しています。
                ただし、施設の都合により予告なく変更される場合があります。
              </p>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-800 mb-1">⚠️ おでかけ前のご確認をお願いします</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  実際にお出かけになる前に、施設の公式サイトまたはお電話にて最新情報をご確認ください。
                  当サービスに掲載された情報の正確性について、当サービスは保証しません。
                  掲載情報をもとにしたおでかけの結果について、当サービスは一切の責任を負いません。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第5条（広告・アフィリエイトについて）</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="leading-relaxed">
                  当サービスでは、サービスの維持・運営のために以下の広告・アフィリエイトプログラムを利用しています。
                </p>
                <div className="bg-orange-50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-orange-800 mb-1">Google AdSense</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Google AdSenseによるディスプレイ広告を掲載しています。
                    Googleはユーザーの閲覧履歴に基づいてパーソナライズされた広告を表示します。
                    広告の管理・オプトアウトは
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline mx-1">
                      Google 広告設定
                    </a>
                    から行えます。
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3.5">
                  <p className="text-xs font-bold text-amber-800 mb-1">Amazonアソシエイト・プログラム</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    当サービスはAmazon.co.jpのアソシエイトとして、商品紹介ページ等でアフィリエイトリンクを使用しています（アソシエイトID: babynabi-22）。
                    対象リンクからAmazon.co.jpで商品をご購入いただいた場合、売上の一部が当サービスの運営費として還元されますが、
                    ご購入者様の負担額は変わりません。掲載商品の選定にアフィリエイト収益は影響しません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第6条（投稿コンテンツについて）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ユーザーが口コミ・スポット情報などを投稿した場合、当サービスはその投稿コンテンツを
                サービスの提供・改善・プロモーションのために無償で利用できるものとします。
                投稿コンテンツは、他のユーザーによる利用可能な状態での公開を前提としています。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                虚偽の情報、特定の個人・施設を誹謗中傷する内容、広告宣伝目的の投稿は、
                事前の通告なく削除する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第7条（免責事項）</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                当サービスは、当サービスに起因してユーザーに生じたあらゆる損害について、
                当サービス運営者の故意または重大な過失による場合を除き、一切の責任を負いません。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスは事前の予告なく、サービスの内容変更・停止・終了を行う場合があります。
                これによってユーザーに生じた損害についても、当サービスは一切責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第8条（著作権）</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスに掲載されているコンテンツ（テキスト・画像・データ・デザインなど）の著作権は、
                当サービス運営者または正当な権利を有する第三者に帰属します。
                ユーザーは、私的利用の範囲を超えてコンテンツを無断で複製・転載・加工・販売することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第9条（プライバシーポリシー）</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスにおける個人情報・Cookieの取り扱いについては、
                <Link href="/privacy" className="text-brand-600 hover:underline mx-1">
                  プライバシーポリシー
                </Link>
                をご参照ください。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第10条（規約の変更）</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                当サービスは、必要と判断した場合には、ユーザーへの事前通知なく、本規約を変更することができます。
                変更後の規約は、当サービスのウェブサイトに掲載された時点から効力を有します。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">第11条（準拠法・管轄裁判所）</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。
                当サービスに関して紛争が生じた場合には、当サービスの所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <p className="text-xs text-gray-400 text-right pt-2">制定日：2024年1月1日　最終更新：2026年6月1日</p>
          </article>

          <div className="flex gap-3 mt-5">
            <Link href="/privacy" className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition">
              プライバシーポリシー →
            </Link>
            <Link href="/contact" className="flex-1 text-center py-3 rounded-xl border border-brand-300 text-brand-600 text-xs font-bold hover:bg-brand-50 transition">
              お問い合わせ →
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
