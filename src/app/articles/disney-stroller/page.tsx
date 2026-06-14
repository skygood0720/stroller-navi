import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "ディズニーリゾートのベビーカー完全ガイド【2026年】授乳室・赤ちゃん向けアトラクション情報 | ベビーカーナビ",
  description: "東京ディズニーランド・ディズニーシーへ赤ちゃんとベビーカーで行く際の完全ガイド。ベビーカー置き場・授乳室の場所・0〜2歳向けアトラクション・混雑を避けるコツを解説。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">ディズニーリゾート<br />ベビーカー完全ガイド【2026年】</h1>
          <p className="text-[11px] opacity-80 mt-2">授乳室・置き場所・赤ちゃん向けアトラクション完全解説 / 読了時間：約9分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約9分" />
          <article className="space-y-6">
            <S t="赤ちゃん連れディズニーの基本知識">
              <div className="space-y-2">
                {[
                  { q: "何歳から入園できる？", a: "年齢制限なし。0歳から入園OK（3歳以下はチケット不要）" },
                  { q: "ベビーカーは入れる？", a: "持ち込みOK。サイズ制限あり（幅92cm×長さ127cm以下）。双子用の大型ベビーカーも基本OK" },
                  { q: "ベビーカー貸出はある？", a: "1日¥1,000でレンタル可能（数に限りあり。土日は早めに確保を）" },
                  { q: "授乳室はある？", a: "TDL・TDS両パークにベビーセンターがあり、授乳・おむつ替え・ミルク調乳が可能" },
                ].map((item) => (
                  <div key={item.q} className="bg-indigo-50/40 rounded-xl p-3.5">
                    <div className="text-xs font-bold text-indigo-800">Q. {item.q}</div>
                    <div className="text-xs text-gray-700 mt-1">A. {item.a}</div>
                  </div>
                ))}
              </div>
            </S>

            <S t="授乳室・ベビーセンターの場所">
              <div className="space-y-3">
                <div className="border border-indigo-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-indigo-700 mb-2">🏰 東京ディズニーランド</div>
                  <p className="text-xs text-gray-600 leading-relaxed">ワールドバザールの正面入口近く「ベビーセンター」に設置。授乳室（個室）・おむつ替え台・ミルク調乳用のお湯・電子レンジが揃う。ベビー用品の販売もあり。営業時間は開園〜閉園まで。</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["個室授乳室", "調乳用お湯", "電子レンジ", "ベビー用品販売"].map((t) => (<span key={t} className="text-[9px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}
                  </div>
                </div>
                <div className="border border-purple-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-purple-700 mb-2">⚓ 東京ディズニーシー</div>
                  <p className="text-xs text-gray-600 leading-relaxed">メディテレーニアンハーバー入口近く「ベビーセンター」に設置。設備はTDLと同様に充実。パーク内にもおむつ替え可能な多機能トイレが複数あり。</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["個室授乳室", "調乳用お湯", "多機能トイレ複数"].map((t) => (<span key={t} className="text-[9px] bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}
                  </div>
                </div>
              </div>
            </S>

            <S t="ベビーカー置き場のルール">
              <div className="space-y-2">
                <p className="text-xs text-gray-700 leading-relaxed">アトラクションごとにベビーカー置き場があります。乗り物に乗る際はベビーカーを置いて子どもを抱っこして乗ります（抱っこしたままでは乗れないアトラクションもあります）。</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 space-y-1">
                  <p className="text-xs font-bold text-amber-800">知っておきたいポイント</p>
                  <p className="text-xs text-gray-700">• ベビーカー置き場に屋根はないため、晴天日は日よけカバーが必要</p>
                  <p className="text-xs text-gray-700">• 貴重品はベビーカーに置かない（盗難リスク）</p>
                  <p className="text-xs text-gray-700">• パレード・ショー時間帯は置き場が変わることがある</p>
                  <p className="text-xs text-gray-700">• ベビーカーを閉じてコインロッカーに預けることも可能</p>
                </div>
              </div>
            </S>

            <S t="0〜2歳で楽しめるアトラクション">
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-500 mb-1">🏰 ディズニーランド</div>
                {[
                  { name: "イッツ・ア・スモール・ワールド", desc: "身長制限なし。ゆっくり進む船に乗って世界の子どもたちの人形と出会う。0歳でも安心して乗れる定番。" },
                  { name: "ウエスタンリバー鉄道", desc: "汽車に乗って西部の景色を楽しむ。揺れが少なく赤ちゃんにも安心。日陰になることも多く暑い日にも◎。" },
                  { name: "プーさんのハニーハント", desc: "ファンタジーランドの人気アトラクション。身長制限なし。プーさんの世界をのんびり楽しめる。" },
                ].map((item) => (
                  <div key={item.name} className="border border-gray-100 rounded-xl p-3.5">
                    <div className="text-xs font-bold text-brand-600">{item.name}</div>
                    <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
                <div className="text-xs font-bold text-gray-500 mb-1 mt-3">⚓ ディズニーシー</div>
                {[
                  { name: "マーメイドラグーンシアター", desc: "アリエルのショー。屋内で涼しく、0歳から楽しめる。混雑日でもショー時間を狙えば入りやすい。" },
                  { name: "フィッシュ・コースター（マーメイドラグーン）", desc: "緩やかなジェットコースター。1歳以上。ゆっくりした速度で赤ちゃんでも楽しめる。" },
                  { name: "ゴンドラ（ヴェネツィアン・ゴンドラ）", desc: "ゆったり水上を進む。景色がきれいで子どもが喜ぶ。混雑時間を避ければ比較的待ちが少ない。" },
                ].map((item) => (
                  <div key={item.name} className="border border-gray-100 rounded-xl p-3.5">
                    <div className="text-xs font-bold text-brand-600">{item.name}</div>
                    <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </S>

            <S t="赤ちゃん連れディズニー 混雑回避のコツ">
              {[
                { tip: "開園直後（8〜9時台）に人気アトラクションへ", desc: "赤ちゃんが乗れるアトラクションは込んでいても30分以内がほとんど" },
                { tip: "授乳・昼食は10〜11時台に前倒し", desc: "正午〜14時はレストラン・ベビーセンターが最も混む" },
                { tip: "平日＋オフシーズンを狙う", desc: "GW・夏休み・年末年始は避け、1〜2月の平日がベスト。入園チケットも安い" },
                { tip: "15〜16時に一度ホテルへ撤退", desc: "ベビーは休憩が必要。夕方リフレッシュしてナイトパレードを楽しむ計画が◎" },
              ].map((item) => (
                <div key={item.tip} className="bg-indigo-50/30 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-indigo-700 mb-1">✓ {item.tip}</div>
                  <p className="text-[11px] text-gray-600">{item.desc}</p>
                </div>
              ))}
            </S>

            <S t="まとめ">
              <p className="text-sm text-gray-700 leading-relaxed">ディズニーリゾートは赤ちゃん連れのことを本当によく考えられている施設です。ベビーセンターの設備は他の施設と比べても群を抜いており、スタッフの対応も親切。はじめてのディズニーは赤ちゃんにとって刺激的な体験になります。混雑を避け、無理のないスケジュールで「家族の夢の国」を楽しんでください！</p>
            </S>
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 text-center">
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold hover:opacity-90 transition">アプリで周辺スポットを探す</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
