import { amazonUrl, amazonSearchUrl } from "@/lib/amazon";

export interface AmazonProduct {
  asin?: string;          // ASINがある場合は直接リンク
  searchKeyword?: string; // ない場合はキーワード検索リンク
  name: string;
  description: string;
  priceRange: string;     // 例: "5,000〜12,000円"
  tags: string[];
  emoji: string;
  recommend?: string;     // 編集部コメント
  ageTag?: string;        // 例: "0ヶ月〜"
}

interface Props {
  product: AmazonProduct;
  compact?: boolean;
}

export default function AmazonProductCard({ product, compact = false }: Props) {
  const href = product.asin
    ? amazonUrl(product.asin)
    : amazonSearchUrl(product.searchKeyword ?? product.name);

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition border border-transparent hover:border-orange-200"
      >
        <span className="text-3xl shrink-0">{product.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold leading-snug truncate">{product.name}</p>
          <p className="text-[10px] text-gray-500 truncate">{product.description}</p>
          <p className="text-[10px] text-orange-600 font-bold mt-0.5">参考価格 {product.priceRange}</p>
        </div>
        <span className="text-[10px] bg-orange-500 text-white px-2 py-1 rounded font-bold shrink-0">Amazon</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-transparent hover:border-orange-200 group"
    >
      {/* ヘッダー */}
      <div className="flex items-start gap-3 mb-2">
        <span className="text-4xl shrink-0">{product.emoji}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {product.ageTag && (
              <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">
                {product.ageTag}
              </span>
            )}
            {product.tags.map((tag) => (
              <span key={tag} className="text-[9px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-bold leading-snug">{product.name}</h3>
        </div>
      </div>

      {/* 説明 */}
      <p className="text-xs text-gray-600 leading-relaxed mb-2">{product.description}</p>

      {/* 編集部コメント */}
      {product.recommend && (
        <div className="bg-orange-50 rounded-xl px-3 py-2 mb-3">
          <p className="text-[10px] text-orange-800 leading-relaxed">
            <span className="font-bold">編集部コメント：</span>{product.recommend}
          </p>
        </div>
      )}

      {/* フッター */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">参考価格：<strong className="text-orange-600">{product.priceRange}</strong></span>
        <span className="text-xs bg-orange-500 group-hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1">
          <span>🛒</span> Amazonで見る
        </span>
      </div>
    </a>
  );
}
