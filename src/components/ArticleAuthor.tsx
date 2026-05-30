import Link from "next/link";

interface Props {
  /** 記事の公開日または更新日（例: "2026年5月"） */
  date?: string;
  /** 読了時間（例: "約8分"） */
  readTime?: string;
  /** カテゴリ（例: "エリアガイド", "ハウツー"） */
  category?: string;
}

/**
 * 記事ページに挿入する著者・編集情報コンポーネント
 * E-E-A-T（経験・専門性・権威性・信頼性）強化のために使用
 */
export default function ArticleAuthor({ date, readTime, category }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
      <div className="flex items-center gap-3">
        {/* 著者アバター */}
        <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center text-xl shrink-0">
          🍼
        </div>
        {/* 著者情報 */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-800">ベビーカーナビ編集部</p>
          <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
            子育て経験者・バリアフリー調査スタッフが執筆・監修
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
            {date && (
              <span className="text-[10px] text-gray-400">📅 {date}更新</span>
            )}
            {readTime && (
              <span className="text-[10px] text-gray-400">⏱ 読了{readTime}</span>
            )}
            {category && (
              <span className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full font-medium">
                {category}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* 信頼性メッセージ */}
      <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
        <span className="text-xs text-gray-400 leading-snug">
          当サイトの記事は実際に子連れでおでかけした経験をもとに作成しています。
          情報の誤りを見つけた場合は
          <Link href="/contact" className="text-brand-500 hover:underline mx-0.5 font-medium">
            こちら
          </Link>
          からご報告ください。
        </span>
      </div>
    </div>
  );
}
