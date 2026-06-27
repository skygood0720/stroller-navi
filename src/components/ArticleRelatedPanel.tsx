"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ARTICLES_META } from "@/lib/articles-meta";

export default function ArticleRelatedPanel() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";

  // 現在の記事を除いた関連記事（同じタグ優先、なければ順番に）
  const current = ARTICLES_META.find((a) => a.slug === slug);
  let related = ARTICLES_META.filter((a) => a.slug !== slug);

  if (current) {
    related = related.sort((a, b) => {
      const scoreA = a.tags.filter((t) => current.tags.includes(t)).length
        + a.regions.filter((r) => current.regions.includes(r)).length * 2;
      const scoreB = b.tags.filter((t) => current.tags.includes(t)).length
        + b.regions.filter((r) => current.regions.includes(r)).length * 2;
      return scoreB - scoreA;
    });
  }

  const articles = related.slice(0, 4);
  if (articles.length === 0) return null;

  return (
    <div className="max-w-[640px] mx-auto px-5 pb-8">
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold mb-3">📖 この記事を読んだ人はこちらも</h2>
        <div className="space-y-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
            >
              <span className="text-xl shrink-0 w-9 h-9 flex items-center justify-center bg-brand-50 rounded-xl">
                {a.emoji}
              </span>
              <div className="min-w-0 flex-1">
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
      </div>
    </div>
  );
}
