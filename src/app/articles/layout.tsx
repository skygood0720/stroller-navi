import ArticleRelatedPanel from "@/components/ArticleRelatedPanel";
import AdUnit from "@/components/AdUnit";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-[640px] mx-auto px-4 pb-2">
        <AdUnit format="auto" className="my-4" />
      </div>
      <ArticleRelatedPanel />
    </>
  );
}
