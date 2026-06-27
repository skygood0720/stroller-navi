import Link from "next/link";
import { getRelatedArticles, ARTICLES_META, type ArticleMeta } from "@/lib/articles-meta";

interface Props {
  region?: string;
  tags?: string[];
  currentSlug?: string;   // 現在の記事を除外する
  title?: string;
}

export default function RelatedArticles({ region, tags, currentSlug, title = "📖 関連記事" }: Props) {
  let articles: ArticleMeta[];

  if (region || tags) {
    articles = getRelatedArticles(region, tags, 4).filter((a) => a.slug !== currentSlug);
  } else {
    // currentSlugのみ渡された場合：ランダムで4件（先頭から）
    articles = ARTICLES_META.filter((a) => a.slug !== currentSlug).slice(0, 4);
  }

  if (articles.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-bold mb-3">{title}</h2>
      <div className="space-y-2">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
          >
            <span className="text-2xl shrink-0 w-9 h-9 flex items-center justify-center bg-brand-50 rounded-xl">
              {a.emoji}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-800 leading-snug group-hover:text-brand-600 transition line-clamp-2">
                {a.title}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{a.description}</p>
            </div>
            <span className="text-gray-300 text-xs shrink-0 self-center">›</span>
          </Link>
        ))}
      </div>
      <Link
        href="/articles"
        className="mt-3 block text-center text-xs text-brand-500 font-bold hover:underline"
      >
        記事一覧を見る →
      </Link>
    </section>
  );
}
