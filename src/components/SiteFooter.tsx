import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "エリアから探す",
    links: [
      { href: "/articles/shinjuku-guide", label: "新宿" },
      { href: "/articles/shibuya-guide", label: "渋谷" },
      { href: "/articles/ikebukuro-guide", label: "池袋" },
      { href: "/articles/yokohama-guide", label: "横浜" },
      { href: "/articles/osaka-guide", label: "大阪" },
      { href: "/articles/kyoto-guide", label: "京都" },
      { href: "/articles/sapporo-guide", label: "札幌" },
      { href: "/articles/fukuoka-guide", label: "福岡" },
      { href: "/articles/sendai-guide", label: "仙台" },
      { href: "/articles/hiroshima-guide", label: "広島" },
      { href: "/articles/okinawa-guide", label: "沖縄" },
      { href: "/articles/saitama-guide", label: "さいたま" },
    ],
  },
  {
    heading: "テーマで探す",
    links: [
      { href: "/articles/water-play-spots", label: "水遊びスポット" },
      { href: "/articles/spring-outing-spots", label: "春のおでかけ" },
      { href: "/articles/summer-indoor-spots", label: "夏の室内スポット" },
      { href: "/articles/autumn-outing-spots", label: "秋のおでかけ" },
      { href: "/articles/winter-outing-spots", label: "冬のイルミネーション" },
      { href: "/articles/rainy-day-spots", label: "雨の日スポット" },
      { href: "/articles/free-kids-spots-tokyo", label: "東京の無料スポット" },
      { href: "/articles/disney-stroller", label: "ディズニー子連れガイド" },
    ],
  },
  {
    heading: "ハウツー・ガイド",
    links: [
      { href: "/articles/train-stroller-manner", label: "ベビーカーで電車に乗るコツ" },
      { href: "/articles/stroller-choosing-guide", label: "ベビーカーの選び方" },
      { href: "/articles/zero-age-outing", label: "0歳のおでかけ" },
      { href: "/articles/1year-old-outing", label: "1歳のおでかけ" },
      { href: "/articles/2year-old-outing", label: "2歳のおでかけ" },
      { href: "/articles/nursing-room-tips", label: "授乳室の探し方" },
      { href: "/articles/restaurant-tips", label: "子連れランチの選び方" },
      { href: "/faq", label: "よくある質問（FAQ）" },
      { href: "/weaning-tracker", label: "離乳食チェッカー" },
      { href: "/diary",           label: "おでかけ日記" },
    ],
  },
  {
    heading: "サービス",
    links: [
      { href: "/", label: "トップ" },
      { href: "/spots", label: "スポット一覧" },
      { href: "/articles", label: "お役立ち記事" },
      { href: "/baby-goods", label: "おすすめ商品" },
      { href: "/about", label: "運営者情報" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms",   label: "利用規約" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-[#FAF7F2] pt-6 pb-8 px-5">
      {/* Link grid */}
      <div className="grid grid-cols-2 gap-5 mb-6">
        {FOOTER_LINKS.map((section) => (
          <div key={section.heading}>
            <p className="text-[11px] font-black text-gray-500 mb-2">{section.heading}</p>
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-brand-500 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100 pt-4 text-center space-y-1.5">
        <p className="text-[11px] font-bold text-gray-600">ベビーカーナビ</p>
        <p className="text-[10px] text-gray-400 leading-relaxed">
          赤ちゃん・子連れおでかけをもっと安心に。全国500以上のスポットを無料検索。
        </p>
        <p className="text-[10px] text-gray-300 leading-relaxed">
          当サイトはAmazonアソシエイト・プログラムの参加者です。
        </p>
        <p className="text-[10px] text-gray-300">© 2026 ベビーカーナビ</p>
      </div>
    </footer>
  );
}
