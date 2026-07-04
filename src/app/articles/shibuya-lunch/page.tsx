import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "渋谷・代官山・恵比寿 子連れランチ10選【個室・授乳室情報付き】2026年版 | ベビーカーナビ",
  description: "赤ちゃん連れでも安心の渋谷エリア子連れランチを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店を地図エリア別に解説。ベビーカーのまま入れるお店もご紹介。",
  keywords: ["渋谷 子連れランチ", "渋谷 ベビーカー レストラン", "代官山 子連れカフェ", "恵比寿 子連れランチ 個室", "渋谷 赤ちゃん 授乳室"],
  openGraph: {
    title: "渋谷・代官山・恵比寿 子連れランチ10選【個室・授乳室情報付き】2026年版",
    description: "赤ちゃん連れでも安心の渋谷エリア子連れランチを10店厳選。個室あり・ベビーチェアあり・授乳室近くのお店を紹介。",
    url: "https://stroller-navi.vercel.app/articles/shibuya-lunch",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const RESTAURANTS = [
  {
    name: "渋谷ヒカリエ 8F ダイニング",
    area: "渋谷駅直結",
    genre: "多ジャンル",
    price: "1,200〜2,500円",
    features: ["個室あり", "授乳室近く", "ベビーチェアあり", "ベビーカー入店可"],
    good: "渋谷駅直結で雨の日も安心。8Fに授乳室があり、食後すぐ利用可能。イタリアン・和食・カフェとジャンルも豊富。",
    tip: "週末は11時前の早め入店がおすすめ。エレベーターはB3FとB2Fから直通。",
    badge: "駅直結 ◎",
  },
  {
    name: "渋谷スクランブルスクエア 12F〜14F レストランフロア",
    area: "渋谷駅直結",
    genre: "各国料理",
    price: "1,500〜3,000円",
    features: ["半個室あり", "ベビーチェアあり", "ベビーカー預かり可"],
    good: "12〜14Fに30店舗以上が集まる大型フロア。2F・11Fにベビー休憩室あり。スカイビューが子供に人気。",
    tip: "ベビーカーはB1Fのベビーカー置き場に預けてからレストランへ。エレベーターは西側が使いやすい。",
    badge: "景色◎",
  },
  {
    name: "渋谷マークシティ 4F レストラン街",
    area: "渋谷駅直結",
    genre: "和食・定食",
    price: "900〜1,800円",
    features: ["座敷席あり", "ベビーチェアあり", "ベビーカー入店可"],
    good: "座敷席（ちゃぶ台タイプ）のある和食店が多く、ハイハイや歩き始めの赤ちゃんでも安心して過ごせる。",
    tip: "平日ランチは比較的空いている。11:30〜12:00が狙い目。",
    badge: "座敷あり",
  },
  {
    name: "代官山 LOG ROAD DAIKANYAMA エリア",
    area: "代官山駅徒歩3分",
    genre: "カフェ・カジュアル",
    price: "1,000〜2,000円",
    features: ["テラス席あり", "ベビーカー入店可", "広い通路"],
    good: "緑豊かなウッドデッキエリアに複数のカフェ・レストランが集まる。テラス席はベビーカーのまま着席でき、開放的な雰囲気が赤ちゃんにも過ごしやすい。",
    tip: "晴れた日のランチに最適。日差しが強い日はパラソル席を指定すると◎。",
    badge: "テラス◎",
  },
  {
    name: "代官山 T-SITE 周辺カフェ",
    area: "代官山駅徒歩5分",
    genre: "カフェ・ブランチ",
    price: "1,200〜2,200円",
    features: ["ベビーカー入店可", "子供メニューあり", "広いスペース"],
    good: "おしゃれなブランチカフェが集まる代官山T-SITEエリア。ベビーチェア完備の店舗も多く、ゆったりした空間で食事できる。",
    tip: "週末の11〜13時は混雑。平日ブランチが狙い目。近くに代官山公園があり、食後に遊ばせられる。",
    badge: "おしゃれ◎",
  },
  {
    name: "恵比寿ガーデンプレイス レストラン街",
    area: "恵比寿駅徒歩5分",
    genre: "フレンチ・イタリアン",
    price: "1,500〜3,500円",
    features: ["個室あり", "ベビーチェアあり", "授乳スペース近く"],
    good: "広い敷地内に高級感のあるレストランからカジュアルな店まで揃う。ガーデンテラスでベビーカーのまま食事できる店舗もある。",
    tip: "センター広場は子供の遊びスペースになっており、食前後に活用できる。授乳室はガーデンプレイス内のトイレに設置。",
    badge: "緑豊か◎",
  },
  {
    name: "恵比寿アトレ レストランフロア",
    area: "恵比寿駅直結",
    genre: "多ジャンル",
    price: "1,000〜2,500円",
    features: ["授乳室直近", "ベビーチェアあり", "ベビーカー入店可"],
    good: "恵比寿駅直結のアトレ4〜5Fはレストランが充実。館内に授乳室・おむつ替え台あり。雨の日・暑い日でも安心。",
    tip: "アトレ2号館とのエレベーター移動がスムーズ。授乳室は5F女性トイレ横。",
    badge: "駅直結◎",
  },
  {
    name: "渋谷 東急フードショー（渋谷ヒカリエ B2F）",
    area: "渋谷駅直結",
    genre: "イートイン・テイクアウト",
    price: "800〜1,500円",
    features: ["ベビーカー入店可", "ゆったりイートイン", "授乳室近く"],
    good: "デパ地下グルメをイートインで楽しめる。ベビーフードの温め対応コーナーあり。混雑時は地下2Fからエレベーターで8F授乳室へアクセス。",
    tip: "テイクアウトして近くの宮下公園で食べるのもおすすめ。",
    badge: "コスパ◎",
  },
  {
    name: "渋谷 宮下公園 RAYARD MIYASHITA PARK 2〜3F",
    area: "渋谷駅徒歩3分",
    genre: "カジュアル・ハンバーガー・ラーメン",
    price: "1,000〜2,200円",
    features: ["テラス席あり", "ベビーチェアあり", "公園隣接"],
    good: "2〜3Fに飲食店が並ぶ。4F屋上公園との行き来がしやすく、食後に子供を遊ばせられる。明るい開放的な空間でベビーカーも余裕で通れる広さ。",
    tip: "4F公園にはベンチが多く、テイクアウトのピクニックスタイルも◎。",
    badge: "公園隣接◎",
  },
  {
    name: "渋谷 セルリアンタワー東急ホテル ロビーラウンジ",
    area: "渋谷駅徒歩5分",
    genre: "ランチビュッフェ・アフタヌーンティー",
    price: "2,500〜4,000円",
    features: ["個室相談可", "ベビーチェアあり", "ゆったり空間"],
    good: "ホテルラウンジのため静かでゆったりとした環境。週末ランチビュッフェは離乳食持ち込み可（要確認）。授乳室はホテル内に完備。特別な日の子連れランチに。",
    tip: "予約必須。子連れ可か事前確認推奨。ベビーカーはホテルマンが預かってくれる場合も。",
    badge: "特別な日◎",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>渋谷・子連れランチ</span>
          </nav>
          <div className="text-3xl mb-2">🍽️</div>
          <h1 className="text-lg font-black leading-tight">渋谷・代官山・恵比寿<br />子連れランチ10選</h1>
          <p className="text-[11px] opacity-80 mt-2">個室・授乳室・ベビーチェア情報付き / 2026年版</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年7月" readTime="約6分" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">渋谷エリアが子連れランチに向いている理由</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              渋谷・代官山・恵比寿エリアは、駅直結の大型商業施設が多く<strong>授乳室・おむつ替え台が充実</strong>しているのが特徴です。
              渋谷ヒカリエ・スクランブルスクエア・マークシティなど駅ビルが複数あり、雨の日でも濡れずに食事できるのが親にとって大きなメリット。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              代官山・恵比寿エリアは少し落ち着いた雰囲気で、ベビーカーで歩きやすい広い歩道と緑豊かな公園が点在します。
              食後に公園で遊ばせるプランが組みやすいのも嬉しいポイントです。
            </p>
            <div className="bg-teal-50 rounded-xl p-4">
              <p className="text-xs font-bold text-teal-800 mb-2">📋 渋谷エリアの子連れランチ 3つのポイント</p>
              <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>• <strong>駅直結施設</strong>：渋谷ヒカリエ・スクランブルスクエア・マークシティなど授乳室完備</li>
                <li>• <strong>代官山・恵比寿</strong>：テラス席・公園隣接でベビーカーOKの店多数</li>
                <li>• <strong>週末の混雑回避</strong>：11時前の入店か14時以降が比較的空いている</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold px-1">🗺️ エリア別おすすめランチ10選</h2>
            {RESTAURANTS.map((r, i) => (
              <div key={r.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="px-4 pt-4 pb-1 flex items-start gap-2">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-teal-100 text-teal-700 text-xs font-black flex items-center justify-center">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold">{r.name}</h3>
                      <span className="text-[9px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded font-bold">{r.badge}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">📍 {r.area}｜{r.genre}｜{r.price}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex flex-wrap gap-1.5 mb-2 mt-2">
                    {r.features.map(f => (
                      <span key={f} className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded font-medium">{f}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{r.good}</p>
                  <div className="bg-amber-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-amber-800"><span className="font-bold">💡 Tip：</span>{r.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">✅ 子連れランチのお店選び チェックポイント</h2>
            <div className="space-y-3">
              {[
                { icon: "🪑", title: "ベビーチェア・ハイチェアの有無", desc: "「ベビーチェアありますか？」と予約時か入店前に確認。対面式の抱っこで食事できるかも確認しておくと安心。" },
                { icon: "🚼", title: "ベビーカーの置き場所", desc: "テーブル横に置けるか、クローク預かりか確認。折りたたみが必要な店では抱っこひもの準備を。" },
                { icon: "🍼", title: "授乳・おむつ替えスペース", desc: "館内施設の授乳室の場所を食事前に把握しておくと慌てずに対応できる。" },
                { icon: "🎵", title: "店内の雰囲気・音量", desc: "静かすぎる高級レストランより、ある程度にぎやかなカジュアル店の方が赤ちゃん連れには気が楽。BGMがある店を選ぼう。" },
                { icon: "⏰", title: "提供時間の速さ", desc: "赤ちゃんが機嫌よい時間は短い。料理の提供が速い店を選ぶか、前菜から頼まずメインを早めに注文するのがコツ。" },
              ].map(c => (
                <div key={c.icon} className="flex gap-3">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{c.title}</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🗓️ 渋谷エリアの授乳室・おむつ替えスポット</h2>
            <div className="space-y-2">
              {[
                { place: "渋谷ヒカリエ", floor: "8F 授乳室", note: "個室型授乳ブース2室・おむつ替え台完備" },
                { place: "渋谷スクランブルスクエア", floor: "2F・11F 赤ちゃん休憩室", note: "授乳スペース・授乳クッションあり" },
                { place: "渋谷マークシティ", floor: "2F インフォメーション横", note: "おむつ替え台・お湯対応" },
                { place: "渋谷ストリーム", floor: "2F 多目的トイレ内", note: "授乳スペース・ベビーベッドあり" },
                { place: "恵比寿アトレ", floor: "5F 女性トイレ横", note: "個室授乳スペース・おむつ替え台" },
              ].map(s => (
                <div key={s.place} className="flex gap-3 bg-blue-50 rounded-xl p-3">
                  <span className="text-xl shrink-0">🍼</span>
                  <div>
                    <p className="text-xs font-bold text-blue-800">{s.place} — {s.floor}</p>
                    <p className="text-[10px] text-gray-600">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-3">※授乳室の情報は変更になる場合があります。事前に施設HPでご確認ください。</p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🚼 ベビーカーでのアクセスのコツ</h2>
            <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <p>渋谷駅はエレベーターが整備されています。JR・東急は渋谷ヒカリエとスクランブルスクエアのエレベーターが便利。地下鉄利用の場合は地下通路でヒカリエB3Fへ直結できます。</p>
              <p>代官山駅は東急東横線のこじんまりとした駅ですが、エレベーターがあります。改札からログロードや蔦屋書店エリアへのルートは平坦で歩きやすい。</p>
              <p>恵比寿駅はJR・東京メトロ共にエレベーター完備。アトレ恵比寿と直結しており、ガーデンプレイスまでは動く歩道「恵比寿スカイウォーク」が利用可能です。</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100">
            <h3 className="text-sm font-bold text-teal-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/shibuya-guide", title: "渋谷エリア 子連れおでかけ完全ガイド", emoji: "🌿" },
                { href: "/articles/restaurant-tips", title: "子連れランチの選び方｜失敗しない5つのチェックポイント", emoji: "🍽️" },
                { href: "/articles/rainy-day-spots", title: "雨の日でも安心！室内スポット11選", emoji: "☔" },
                { href: "/articles/ikebukuro-lunch", title: "池袋 子連れランチ10選【個室あり】", emoji: "🍜" },
                { href: "/articles/yokohama-lunch", title: "横浜・みなとみらい 子連れランチ10選", emoji: "⚓" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-teal-700 hover:text-teal-900 hover:underline">
                  <span>{l.emoji}</span><span>{l.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="渋谷・代官山・恵比寿 子連れランチ10選" url="/articles/shibuya-lunch" />

          <div className="text-center pt-2">
            <Link href="/spots/region/%E6%9D%B1%E4%BA%AC" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-bold hover:opacity-90 transition">
              🗺️ 渋谷周辺のスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
