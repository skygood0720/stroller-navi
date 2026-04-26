import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報・ベビーカーナビについて | ベビーカーナビ",
  description: "ベビーカーナビの運営者情報、サービスの目的、機能紹介。一級建築士が監修するバリアフリー情報アプリです。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <Link href="/" className="text-xs text-white/70 hover:text-white mb-2 inline-block">
            ← ベビーカーナビ トップへ
          </Link>
          <h1 className="text-xl font-black">ベビーカーナビについて</h1>
        </header>

        <main className="p-5 space-y-5">
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚼 ベビーカーナビとは</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ベビーカーナビは、赤ちゃん連れのパパ・ママが安心しておでかけできるよう、全国のバリアフリー情報をまとめたWebアプリケーションです。一級建築士の視点から、建物の動線設計やバリアフリー設備の質にも着目し、本当に「ベビーカーで行きやすい」スポットを厳選して掲載しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              2026年現在、全国298以上のスポットと70以上のベビーカーOKレストランを掲載。授乳室・おむつ替え台・エレベーター・スロープ・ベビーカー貸出などの設備情報に加え、赤ちゃんの月齢に合わせたおすすめポイントも提供しています。
            </p>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">✨ 主な機能</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-bold text-brand-600">📍 全国スポット検索</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  北海道から沖縄まで、全国298以上のスポットを地域別に検索できます。ショッピングモール、公園、動物園、水族館、博物館、遊園地など多彩なジャンルをカバー。各スポットには授乳室・おむつ替え・エレベーターなどの設備情報と、0〜3歳の月齢別おすすめポイントが付いています。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-600">☀️ 天気連動おでかけ提案</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  Open-Meteo APIと連携し、現在地の天気に合わせて最適なスポットを自動おすすめ。雨の日は室内スポット、晴れの日は公園や動物園など、天候を気にせずおでかけ先を決められます。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-600">🗓️ おでかけプラン自動生成</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  エリアと所要時間（半日/1日/たっぷり）を選ぶだけで、室内と屋外をバランスよく組み合わせたモデルコースを自動生成。Google マップ連携でルート確認やSNSシェアも可能です。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-600">🍽️ ベビーカーOKレストラン</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  東京都内を中心に70以上のベビーカー入店可・キッズメニューありのレストランを掲載。現在地から近い順に表示でき、料理ジャンル・価格帯・設備情報（個室、座敷、ベビーチェア、離乳食持ち込みOKなど）で絞り込めます。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-600">📍 現在地から近いスポット</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  GPS位置情報を活用して、今いる場所から近い順にスポットを表示。急なおでかけにも対応できます。距離はメートル/キロメートルで表示されます。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-600">💬 口コミ・写真投稿</h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  実際に訪れたパパ・ママの口コミと写真を投稿・閲覧できます。赤ちゃんの月齢付きの口コミなので、同じ月齢の赤ちゃんを持つ家族の参考になります。
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">👤 運営者について</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ベビーカーナビは、一級建築士の資格を持つ運営者が開発・運営しています。建築の専門知識を活かし、施設のバリアフリー設計の質や動線の使いやすさにも着目した情報を提供しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              「赤ちゃんとのおでかけをもっと楽しく、もっと安心に」をモットーに、実際の利用者の声を反映しながらサービスを日々改善しています。
            </p>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold mb-3">📊 掲載データについて</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              掲載している施設情報は、公式サイト・実地調査・ユーザー投稿を基に作成しています。営業時間や設備情報は変更される場合がありますので、おでかけ前に公式サイトでの確認をお勧めします。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              情報の誤りや追加のご要望は、アプリ内の「💬 ご要望・ご意見」フォームからお寄せください。すべての情報は管理者の確認を経て反映されます。
            </p>
          </article>

          <div className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビを使ってみよう</p>
            <Link href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition mt-2">
              アプリを開く
            </Link>
          </div>
        </main>

        <footer className="px-5 py-6 text-center border-t border-gray-100">
          <p className="text-[11px] text-gray-400">© 2026 ベビーカーナビ</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/" className="text-[11px] text-brand-500 hover:underline">トップ</Link>
            <Link href="/privacy" className="text-[11px] text-brand-500 hover:underline">プライバシーポリシー</Link>
            <Link href="/spots" className="text-[11px] text-brand-500 hover:underline">スポット一覧</Link>
            <Link href="/articles" className="text-[11px] text-brand-500 hover:underline">お役立ち記事</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
