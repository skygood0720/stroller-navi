// ============================================================
// Amazon アソシエイト設定
// アソシエイトIDをここだけ変更すれば全ページに反映されます
// ============================================================
export const AMAZON_ASSOCIATE_ID = "YOUR-ASSOCIATE-ID-22";

/** ASIN から Amazon商品ページのアフィリエイトURLを生成 */
export function amazonUrl(asin: string): string {
  return `https://www.amazon.co.jp/dp/${asin}?tag=${AMAZON_ASSOCIATE_ID}`;
}

/** キーワード検索のアフィリエイトURLを生成 */
export function amazonSearchUrl(keyword: string): string {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}&tag=${AMAZON_ASSOCIATE_ID}`;
}
