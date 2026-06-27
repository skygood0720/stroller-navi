import ArticleRelatedPanel from "@/components/ArticleRelatedPanel";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ArticleRelatedPanel />
    </>
  );
}
