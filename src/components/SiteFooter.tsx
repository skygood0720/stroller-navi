import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="px-5 py-6 text-center border-t border-gray-100 bg-[#FAF7F2]">
      <p className="text-[11px] text-gray-400">© 2026 ベビーカーナビ</p>
      <div className="flex justify-center gap-4 mt-2 flex-wrap">
        <Link href="/" className="text-[11px] text-brand-500 hover:underline">トップ</Link>
        <Link href="/privacy" className="text-[11px] text-brand-500 hover:underline">プライバシーポリシー</Link>
        <Link href="/spots" className="text-[11px] text-brand-500 hover:underline">スポット一覧</Link>
        <Link href="/articles" className="text-[11px] text-brand-500 hover:underline">お役立ち記事</Link>
      </div>
    </footer>
  );
}
