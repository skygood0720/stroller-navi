import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "【2026年】大阪 子連れおでかけ完全ガイド｜授乳室・ベビーカー・ランチまとめ | ベビーカーナビ",
  description: "大阪の子連れおでかけスポットを完全網羅。海遊館・USJ・天王寺動物園の授乳室情報、ベビーカーOKランチ10選、梅田・難波・天王寺エリア別ガイドを掲載。0歳から3歳の赤ちゃん連れに。",
  keywords: ["大阪 子連れ おでかけ", "大阪 授乳室", "大阪 ベビーカー", "大阪 赤ちゃん", "海遊館 授乳室", "USJ ベビーカー", "大阪 0歳"],
  openGraph: {
    title: "【2026年】大阪 子連れおでかけ完全ガイド",
    description: "大阪の子連れおでかけスポット完全版。海遊館・USJ・授乳室情報・ベビーカーOKランチをエリア別に紹介。",
    url: "https://stroller-navi.vercel.app/articles/osaka-guide",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
};

export default function OsakaGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】大阪 子連れおでかけ完全ガイド｜授乳室・ベビーカー・ランチまとめ",
    "description": "大阪の子連れおでかけスポットを完全網羅。",
    "url": "https://stroller-navi.vercel.app/articles/osaka-guide",
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-17",
    "author": { "@type": "Organization", "name": "ベビーカーナビ編集部" },
    "publisher": { "@type": "Organization", "name": "ベビーカーナビ" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "大阪で授乳室がある子連れスポットは？",
        "acceptedAnswer": { "@type": "Answer", "text": "海遊館（1F）、グランフロント大阪（各フロア）、あべのハルカス近鉄本店（10F）、天王寺動物園（正門近く）、ららぽーとEXPOCITYなどに授乳室があります。" },
      },
      {
        "@type": "Question",
        "name": "USJはベビーカーで入れますか？",
        "acceptedAnswer": { "@type": "Answer", "text": "はい。USJはベビーカー持ち込み可能で、ベビーカー預かりサービス・授乳室・おむつ替え台が複数設置されています。ユニバーサルワンダーランドは0歳から楽しめます。" },
      },
      {
        "@type": "Question",
        "name": "大阪で0歳の赤ちゃんでも楽しめるスポットは？",
        "acceptedAnswer": { "@type": "Answer", "text": "海遊館（暗めで落ち着く）、ATCあそびマーレ（赤ちゃんコーナーあり）、グランフロント大阪（キッズスペース）、万博記念公園（芝生でのんびり）などがおすすめです。" },
      },
      {
        "@type": "Question",
        "name": "大阪の子連れ向けランチにおすすめのお店は？",
        "acceptedAnswer": { "@type": "Answer", "text": "グランフロント大阪の100本のスプーン（離乳食無料）、阪急三番街のロイヤルホスト（キッズメニュー充実）、551蓬莱（テイクアウト可）、スシロー（ビッくらポン）などがおすすめです。" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>大阪子連れガイド</span>
          </nav>
          <div className="text-4xl mb-3">🎡</div>
          <h1 className="text-xl font-black leading-snug">
            【2026年】大阪 子連れおでかけ完全ガイド
          </h1>
          <p className="text-xs text-white/80 mt-2">授乳室・ベビーカー・ランチまとめ｜エリア別に完全網羅</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-6">
          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              大阪は子連れに優しい施設が充実した、関西随一のファミリーおでかけ都市です。
              海遊館・USJ・キッズプラザ大阪・天王寺動物園など、赤ちゃんから楽しめるスポットが揃っています。
              このガイドでは<strong>授乳室・おむつ替え台・ベビーカーOK</strong>の情報を中心に、
              梅田・難波・天王寺エリアをまとめて紹介します。
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ["🏛️", "スポット", "36件掲載"],
                ["🍼", "授乳室", "各所完備"],
                ["🍽️", "ランチ", "10選紹介"],
              ].map(([e, t, d]) => (
                <div key={t} className="bg-orange-50 rounded-xl p-3">
                  <div className="text-2xl">{e}</div>
                  <div className="text-xs font-bold text-orange-700 mt-1">{t}</div>
                  <div className="text-[10px] text-gray-500">{d}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">📍 梅田・グランフロントエリア</h2>
            <p className="text-xs text-gray-500 mb-4">大阪駅すぐ｜授乳室・ベビーカー貸出あり</p>
            <div className="space-y-3">
              <ArticleSpotCard
                name="グランフロント大阪"
                badge="授乳室各フロア"
                desc="各フロアに授乳室完備。ナレッジキャピタルにはキッズスペースも。100本のスプーンでは離乳食を無料提供。"
                tags={["授乳室", "ベビーカー貸出", "キッズスペース"]}
                tips="北館3Fの授乳室が広くておすすめ。ベビーカー貸出も無料。"
                href="/spots/5001"
              />
              <ArticleSpotCard
                name="あべのハルカス近鉄本店"
                badge="日本一の高さ"
                desc="ウイング館10Fに授乳室・おむつ替え台・体重計が揃ったベビー休憩室あり。エレベーターで全フロアアクセス可。"
                tags={["授乳室", "エレベーター", "おむつ替え"]}
                tips="10F授乳室はミルク用お湯も完備。"
                href="/spots/5002"
              />
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">🦁 天王寺・動物園エリア</h2>
            <p className="text-xs text-gray-500 mb-4">動物園・公園が充実｜ベビーカー散歩に最適</p>
            <div className="space-y-3">
              <ArticleSpotCard
                name="天王寺動物園"
                badge="ベビーカー貸出無料"
                desc="大阪市立の動物園。ベビーカー貸出無料。授乳室は正門・西門近くに設置。ゾウ・ホッキョクグマに会える。"
                tags={["授乳室", "おむつ替え", "ベビーカー貸出"]}
                tips="月曜休園。年間パスポートがコスパ抜群。"
                href="/spots/5006"
              />
              <ArticleSpotCard
                name="ATCあそびマーレ"
                badge="0歳から楽しめる"
                desc="大阪南港の屋内遊び場。赤ちゃんコーナーがあり0歳から楽しめる。室内で雪遊び体験（冬季）も。"
                tags={["授乳室", "おむつ替え", "赤ちゃんコーナー"]}
                tips="平日は比較的空いていてゆっくり遊べる。"
                href="/spots/5018"
              />
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-1">🐋 天保山・海遊館エリア</h2>
            <p className="text-xs text-gray-500 mb-4">ジンベエザメと世界最大級の水族館</p>
            <div className="space-y-3">
              <ArticleSpotCard
                name="海遊館"
                badge="授乳室完備"
                desc="世界最大級の水族館。暗めの館内は赤ちゃんも落ち着く。1F授乳室・おむつ替え台完備。エレベーター完備。"
                tags={["授乳室", "エレベーター", "おむつ替え"]}
                tips="混雑しやすいので平日午前中がおすすめ。ベビーカーは館内OK。"
                href="/spots/5005"
              />
              <ArticleSpotCard
                name="天保山マーケットプレース"
                badge="レゴランドも"
                desc="海遊館隣接の複合商業施設。レゴランド・ディスカバリーセンター大阪があり、2歳以上から楽しめる。"
                tags={["授乳室", "エレベーター", "おむつ替え"]}
                tips="海遊館との共通駐車場が便利。"
                href="/spots/5025"
              />
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍼 大阪の授乳室まとめ</h2>
            <div className="space-y-2">
              {[
                { place: "グランフロント大阪", floor: "各フロア", detail: "ミルク用お湯・体重計あり" },
                { place: "あべのハルカス近鉄本店", floor: "ウイング館10F", detail: "調乳器・電子レンジ完備" },
                { place: "海遊館", floor: "1F", detail: "おむつ替え台・授乳ソファ" },
                { place: "ららぽーとEXPOCITY", floor: "各フロア", detail: "ミルク用お湯・電子レンジ" },
                { place: "天王寺動物園", floor: "正門・西門近く", detail: "授乳室・おむつ替え台" },
                { place: "グランフロント大阪 授乳室", floor: "南館3F", detail: "ミルク用お湯・授乳個室" },
              ].map((r) => (
                <div key={r.place} className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                  <span className="text-green-500 text-lg">🍼</span>
                  <div>
                    <div className="text-xs font-bold">{r.place}</div>
                    <div className="text-[10px] text-gray-500">{r.floor} ／ {r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-3">🍽️ 子連れランチ おすすめ10選</h2>
            <div className="space-y-2">
              {[
                { name: "100本のスプーン グランフロント大阪", feat: "離乳食無料提供・ベビーカーOK", area: "梅田" },
                { name: "ロイヤルホスト 梅田阪急三番街店", feat: "キッズメニュー充実・离乳食温め可", area: "梅田" },
                { name: "551蓬莱 本店", feat: "テイクアウト◎・子ども用いす", area: "難波" },
                { name: "スシロー 大阪なんば店", feat: "キッズメニュー・ベビーチェア", area: "難波" },
                { name: "ガスト 梅田店", feat: "ドリンクバー・広い席", area: "梅田" },
                { name: "バーミヤン 天王寺店", feat: "座敷あり・お子様ランチ", area: "天王寺" },
              ].map((r) => (
                <div key={r.name} className="flex items-start gap-2 bg-orange-50 rounded-xl p-3">
                  <span className="text-orange-400 mt-0.5 text-lg">🍽️</span>
                  <div>
                    <div className="text-xs font-bold">{r.name}</div>
                    <div className="text-[10px] text-gray-500">{r.area} ／ {r.feat}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-black mb-4">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "大阪で授乳室がある子連れスポットは？",
                  a: "海遊館（1F）、グランフロント大阪（各フロア）、あべのハルカス近鉄本店（10F）、天王寺動物園（正門近く）などに授乳室があります。",
                },
                {
                  q: "USJはベビーカーで入れますか？",
                  a: "はい、ベビーカー持ち込み可能です。ベビーカー預かりサービス・授乳室・おむつ替え台も設置されています。ユニバーサルワンダーランドは0歳から楽しめます。",
                },
                {
                  q: "大阪で0歳の赤ちゃんでも楽しめるスポットは？",
                  a: "海遊館（暗めで落ち着く）、ATCあそびマーレ（赤ちゃんコーナーあり）、グランフロント大阪（キッズスペース）、万博記念公園（芝生でのんびり）がおすすめです。",
                },
                {
                  q: "大阪の子連れおでかけで雨の日はどこがいい？",
                  a: "海遊館、ATCあそびマーレ、ニフレル、キッズプラザ大阪、ららぽーとEXPOCITYなどの室内施設がおすすめです。",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1">Q. {item.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold mb-3">関連ガイド</h3>
            <div className="space-y-2">
              <Link href="/articles/kyoto-guide" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">⛩️</span>
                <div>
                  <div className="text-xs font-bold">京都 子連れおでかけガイド</div>
                  <div className="text-[10px] text-gray-500">嵐山・金閣寺・水族館・授乳室まとめ</div>
                </div>
              </Link>
              <Link href="/spots/region/%E8%BF%91%E7%95%BF" className="flex items-center gap-2 bg-gray-50 hover:bg-brand-50 rounded-xl p-3 transition">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-xs font-bold">近畿エリアの全スポット一覧</div>
                  <div className="text-[10px] text-gray-500">大阪・京都・神戸・奈良・滋賀のスポット36件</div>
                </div>
              </Link>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold hover:opacity-90 transition"
            >
              🗺️ 大阪のスポットを地図で見る
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

function ArticleSpotCard({
  name, badge, desc, tags, tips, href,
}: {
  name: string; badge: string; desc: string; tags: string[]; tips: string; href: string;
}) {
  return (
    <Link href={href} className="block bg-gray-50 hover:bg-orange-50 rounded-xl p-3.5 transition">
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className="text-sm font-bold">{name}</span>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 whitespace-nowrap">{badge}</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed mb-2">{desc}</p>
      <div className="flex flex-wrap gap-1 mb-1.5">
        {tags.map((t) => (
          <span key={t} className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{t}</span>
        ))}
      </div>
      <p className="text-[10px] text-green-600">💡 {tips}</p>
    </Link>
  );
}
