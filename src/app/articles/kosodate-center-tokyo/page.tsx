import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "東京の子育て支援センター・地域子育て支援拠点を活用する方法【2026年版】 | ベビーカーナビ",
  description: "赤ちゃんと無料で遊べる子育て支援センターを東京23区・各区別に解説。利用方法・対象年齢・予約の要否・持ち物リストを網羅。孤独な育児から抜け出すきっかけにも。",
  keywords: ["子育て支援センター 東京", "地域子育て支援拠点 東京", "赤ちゃん 無料 遊び場 東京", "育児支援 東京 無料", "子育て 相談 東京"],
  openGraph: {
    title: "東京の子育て支援センター・地域子育て支援拠点を活用する方法【2026年版】",
    description: "赤ちゃんと無料で遊べる子育て支援センターを東京23区別に解説。利用方法・持ち物リストを網羅。",
    url: "https://stroller-navi.vercel.app/articles/kosodate-center-tokyo",
    siteName: "ベビーカーナビ",
    locale: "ja_JP",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const WARD_CENTERS = [
  { ward: "新宿区", name: "新宿区立子育てひろば", note: "区内10か所以上設置。牛込柳町・落合・四谷など駅近に多数。" },
  { ward: "渋谷区", name: "渋谷区子育てネウボラ", note: "渋谷・恵比寿・代官山エリアに設置。保健師への育児相談も可能。" },
  { ward: "豊島区", name: "としまキッズパーク（池袋）", note: "ハレザ池袋内。0〜6歳対象の有料（一部無料）室内遊び場。" },
  { ward: "世田谷区", name: "世田谷区 地域子育て支援センター", note: "二子玉川・三軒茶屋・下北沢などに展開。定員制で事前予約推奨。" },
  { ward: "杉並区", name: "杉並区 子育て支援センター", note: "荻窪・高円寺・阿佐ヶ谷などに設置。区民なら無料で利用可能。" },
  { ward: "練馬区", name: "練馬区 地域子育て支援センター", note: "石神井・大泉学園・光が丘などに展開。広い遊び場と相談室を完備。" },
  { ward: "江東区", name: "江東区 子育て支援センター", note: "豊洲・亀戸・砂町エリアに設置。おもちゃ図書館を併設する施設も。" },
  { ward: "品川区", name: "品川区 地域子育て支援センター", note: "武蔵小山・大井・戸越など各エリアに分散。一時保育も可能な施設あり。" },
];

const BENEFITS = [
  { icon: "💰", title: "無料で利用できる", desc: "地域子育て支援センターは基本的に無料（一部有料の講座あり）。お金をかけずに毎日でも通えるのが最大のメリット。" },
  { icon: "👶", title: "赤ちゃん向けのおもちゃ・設備が充実", desc: "月齢に合ったおもちゃ・マット・絵本が揃っており、赤ちゃんが安全に遊べる空間。自宅にはない遊具が楽しめる。" },
  { icon: "👩‍👩‍👦", title: "同じ月齢の子どもを持つ親との交流", desc: "孤独になりがちな育児を支える場所。育児の悩みや経験を共有できる「育友」が生まれることも多い。" },
  { icon: "👩‍⚕️", title: "保健師・支援員への相談ができる", desc: "育児の疑問・離乳食・発達について専門家に気軽に相談できる。「こんなこと聞いていいの？」という不安も大丈夫。" },
  { icon: "📚", title: "育児講座・イベントに参加できる", desc: "絵本読み聞かせ・ベビーマッサージ・離乳食講座など無料のイベントが定期開催されることが多い。" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
            <span className="mx-1.5">›</span>
            <span>子育て支援センター東京</span>
          </nav>
          <div className="text-3xl mb-2">🌱</div>
          <h1 className="text-lg font-black leading-tight">東京の子育て支援センター<br />完全活用ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">無料で遊べる・育児相談できる・友達ができる / 2026年版</p>
        </header>

        <main className="p-5 space-y-5">
          <ArticleAuthor date="2026年7月" readTime="約7分" />

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">子育て支援センターとは？</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <strong>地域子育て支援センター（子育てひろば）</strong>とは、市区町村が運営する乳幼児と保護者が自由に遊べる無料の施設です。
              0〜3歳（就学前）の子どもを持つ保護者なら誰でも利用でき、東京都内には各区に複数か所設置されています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              「赤ちゃんを連れてどこへ行けばいいかわからない」「育児が孤独で不安」という気持ちを持つ親御さんにとって、
              子育て支援センターは<strong>最も気軽に利用できる最初のおでかけ先</strong>です。
              予約なしで当日参加できる施設も多く、天気が悪い日のお出かけにも重宝します。
            </p>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-xs font-bold text-green-800 mb-2">📋 利用できる方の目安</p>
              <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>• 0歳〜就学前（6歳未満）の子どもを持つ保護者</li>
                <li>• 基本的に<strong>居住区に関係なく</strong>利用できる施設が多い</li>
                <li>• 保護者の同伴が必要（預け型の保育ではない）</li>
                <li>• 予約不要の施設も多い（要確認）</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold px-1">✨ 子育て支援センターを利用する5つのメリット</h2>
            {BENEFITS.map(b => (
              <div key={b.icon} className="bg-white rounded-2xl p-4 shadow-sm flex gap-3">
                <span className="text-2xl shrink-0">{b.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{b.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🗺️ 東京23区 主な子育て支援センター</h2>
            <div className="space-y-2">
              {WARD_CENTERS.map(w => (
                <div key={w.ward} className="bg-lime-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black bg-lime-200 text-lime-800 px-2 py-0.5 rounded">{w.ward}</span>
                    <span className="text-xs font-bold text-gray-800">{w.name}</span>
                  </div>
                  <p className="text-[10px] text-gray-600">{w.note}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-3">※各区の公式HPで最新の施設一覧・開館情報を確認してください。</p>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">📋 初めての利用 持ち物チェックリスト</h2>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                "おむつ（多めに）", "おしりふき", "着替え一式", "授乳グッズ（ケープ等）",
                "飲み物・おやつ", "おもちゃ（お気に入り）", "レジャーシート（施設によっては不要）",
                "母子手帳（相談時に便利）", "スリッパ（施設内用）", "ビニール袋（汚れもの入れ）",
              ].map(item => (
                <div key={item} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-2">
                  <span className="w-3.5 h-3.5 border border-gray-300 rounded shrink-0" />
                  <span className="text-[11px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">❓ よくある質問</h2>
            <div className="space-y-4">
              {[
                {
                  q: "住んでいる区以外の子育て支援センターも利用できますか？",
                  a: "多くの施設では居住区に関係なく利用できます。ただし一部の講座・イベントは住民優先のことも。施設に直接確認するのが確実です。",
                },
                {
                  q: "パパだけで連れて行っても大丈夫ですか？",
                  a: "もちろんOKです。最近はパパ向けの「パパの日」や「パパ向け講座」を設けているセンターも増えています。",
                },
                {
                  q: "何ヶ月から利用できますか？",
                  a: "生後1ヶ月を過ぎてからが一般的ですが、施設によっては新生児から利用可能なところも。まず電話で確認してみましょう。",
                },
                {
                  q: "予約が必要ですか？",
                  a: "自由来館できる施設が多いですが、人気の講座・イベントは予約制の場合も。施設のHP・SNSで確認を。",
                },
              ].map(item => (
                <div key={item.q} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-gray-800 mb-1">Q. {item.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold mb-3">🔍 子育て支援センターの探し方</h2>
            <div className="space-y-3">
              {[
                { method: "各区の公式HP", desc: "「（区名）子育て支援センター」で検索すると公式一覧が出てくる。開館日・時間・イベント情報もここで確認。" },
                { method: "子育てアプリ「母子モ」", desc: "お住まいの地域の子育て情報がまとまったアプリ。自治体との連携で公式情報が届く。" },
                { method: "保健師への相談時に聞く", desc: "1ヶ月健診や区の健診時に保健師に「近くの子育て支援センターはどこですか？」と聞くのが一番確実。" },
                { method: "ベビーカーナビで探す", desc: "ベビーカーナビでは「キッズスペース」タグで子供向け施設を検索できます。", isLink: true },
              ].map(m => (
                <div key={m.method} className="flex gap-3 bg-green-50/50 rounded-xl p-3">
                  <span className="text-xl shrink-0">🔍</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{m.method}</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{m.desc}</p>
                    {m.isLink && (
                      <Link href="/spots/tag/%E3%82%AD%E3%83%83%E3%82%BA%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9" className="text-[11px] text-brand-600 font-bold hover:underline mt-1 block">
                        キッズスペースのあるスポットを探す →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl p-5 border border-lime-100">
            <h3 className="text-sm font-bold text-green-800 mb-3">📖 あわせて読みたい記事</h3>
            <div className="space-y-2">
              {[
                { href: "/articles/free-kids-spots-tokyo", title: "東京の無料子連れスポット15選", emoji: "🆓" },
                { href: "/articles/zero-age-outing", title: "0歳のおでかけ完全ガイド｜いつから外出OK？", emoji: "👶" },
                { href: "/articles/rainy-day-spots", title: "雨の日でも安心！室内スポット11選", emoji: "☔" },
                { href: "/articles/nursing-room-tips", title: "授乳室の見つけ方と上手な使い方", emoji: "🍼" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-green-700 hover:text-green-900 hover:underline">
                  <span>{l.emoji}</span><span>{l.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <ShareButtons title="東京の子育て支援センター完全活用ガイド" url="/articles/kosodate-center-tokyo" />

          <div className="text-center pt-2">
            <Link href="/spots/tag/%E3%82%AD%E3%83%83%E3%82%BA%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-green-600 text-white text-sm font-bold hover:opacity-90 transition">
              🗺️ キッズスペースのあるスポットを探す
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
