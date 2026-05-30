import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="px-5 py-6 text-center border-t border-gray-100 bg-[#FAF7F2]">
      <p className="text-[11px] text-gray-400">© 2026 ベビーカーナビ</p>
      <div className="flex justify-center gap-4 mt-2 flex-wrap">
        <Link href="/" className="text-[11px] text-brand-500 hover:underline">トップ</Link>
        <Link href="/spots" className="text-[11px] text-brand-500 hover:underline">スポット一覧</Link>
        <Link href="/articles" className="text-[11px] text-brand-500 hover:underline">お役立ち記事</Link>
        <Link href="/baby-goods" className="text-[11px] text-brand-500 hover:underline">おすすめ商品</Link>
        <Link href="/about" className="text-[11px] text-brand-500 hover:underline">運営者情報</Link>
        <Link href="/contact" className="text-[11px] text-brand-500 hover:underline">お問い合わせ</Link>
        <Link href="/privacy" className="text-[11px] text-brand-500 hover:underline">プライバシーポリシー</Link>
      </div>
      <p className="text-[10px] text-gray-300 mt-3 leading-relaxed">
        当サイトはAmazonアソシエイト・プログラムの参加者です。
      </p>
    </footer>
  );
}
