import Link from "next/link";
export const metadata = { title: "赤ちゃんの初めてのおでかけガイド | ベビーカーナビ" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
          <h1 className="text-lg font-black">赤ちゃんの初めてのおでかけガイド</h1>
        </header>
        <main className="p-5"><div className="bg-white rounded-2xl p-6 shadow-sm"><p className="text-sm text-gray-700 leading-relaxed">この記事は現在準備中です。近日公開予定ですのでお楽しみに。</p></div>
        <div className="mt-5 text-center"><Link href="/articles" className="text-sm text-brand-500 hover:underline">← 記事一覧に戻る</Link></div></main>
        <footer className="px-5 py-6 text-center border-t border-gray-100"><p className="text-[11px] text-gray-400">© 2026 ベビーカーナビ</p></footer>
      </div>
    </div>
  );
}
