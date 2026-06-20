import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "東京近郊 水族館 子連れ比較【2026年】アクセス・授乳室・料金・赤ちゃん向けランキング",
  description: "東京近郊の子連れ水族館を徹底比較。品川・サンシャイン・葛西・横浜・鴨川・すみだ水族館のアクセス・授乳室・ベビーカー情報・料金・赤ちゃん向け展示を解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/tokyo-aquarium-guide" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function TokyoAquariumGuide() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>東京近郊水族館比較</span>
          </nav>
          <div className="text-4xl mb-2">🐠</div>
          <h1 className="text-xl font-black leading-snug">
            東京近郊 水族館<br />子連れ比較【2026年】
          </h1>
          <p className="text-xs text-white/80 mt-2">品川・サンシャイン・葛西・横浜・すみだ｜赤ちゃん向けランキング</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-cyan-800 mb-1">🐠 水族館は赤ちゃんに最適なおでかけ先</p>
            <ul className="text-xs text-cyan-700 space-y-1">
              <li>✅ 屋内で天候に左右されない</li>
              <li>✅ 暗い空間・光の動きが赤ちゃんの視覚を刺激</li>
              <li>✅ 泣いても音が吸収されやすく他の客への気遣いが少ない</li>
              <li>✅ 0ヶ月から楽しめるスポット多数</li>
            </ul>
          </div>

          <S t="🏆 子連れ水族館 おすすめランキング">
            <div className="space-y-4">
              {[
                {
                  rank: "🥇", name: "すみだ水族館（スカイツリータウン）", area: "押上",
                  baby: "授乳室あり（入口近く）", stroller: "館内全域ベビーカーOK",
                  fee: "大人2,500円 / 幼児（3〜5歳）1,300円 / 2歳以下無料",
                  access: "東京スカイツリー駅すぐ", why: "館内が明るくクラゲ・ペンギンなど赤ちゃんが喜ぶ展示が豊富。スカイツリータウン内で食事・授乳施設も充実。",
                },
                {
                  rank: "🥈", name: "アクアパーク品川", area: "品川",
                  baby: "授乳室あり（館内）", stroller: "館内ほぼ全域OK・エレベーターあり",
                  fee: "大人2,300円 / 幼児（3〜5歳）1,000円 / 2歳以下無料",
                  access: "品川駅港南口から徒歩2分", why: "イルカショー・音と光の演出が豪華でテンションが上がる。電車でのアクセスが最高で都心からの日帰りに最適。",
                },
                {
                  rank: "🥉", name: "サンシャイン水族館（池袋）", area: "池袋",
                  baby: "授乳室あり（インフォメーション近く）", stroller: "館内ほぼ全域OK",
                  fee: "大人2,600円 / 幼児（3〜5歳）1,200円 / 2歳以下無料",
                  access: "池袋駅東口から徒歩5〜8分", why: "天空のパンギンを上から見られる屋外エリアが特徴的。池袋駅近くでショッピングとの組み合わせが便利。",
                },
                {
                  rank: "4位", name: "葛西臨海水族園", area: "葛西",
                  baby: "授乳室あり（管理棟）", stroller: "全エリアベビーカーOK",
                  fee: "大人700円 / 中学生250円 / 小学生以下・65歳以上無料",
                  access: "葛西臨海公園駅すぐ", why: "都立施設でコスパが圧倒的。マグロの大水槽が圧巻。隣接の海浜公園でのピクニックとの組み合わせが人気。",
                },
                {
                  rank: "5位", name: "横浜・八景島シーパラダイス", area: "金沢区",
                  baby: "授乳室あり（アクアミュージアム内）", stroller: "施設内ほぼOK",
                  fee: "入場無料（アトラクション別料金）/ アクアミュージアム大人3,200円〜",
                  access: "シーサイドライン「八景島駅」すぐ", why: "水族館＋テーマパーク＋ショッピングが一体化した大型リゾート。半日〜1日かけてゆっくり楽しめる。",
                },
              ].map((a) => (
                <div key={a.name} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{a.rank}</span>
                    <p className="text-sm font-bold">{a.name}</p>
                    <span className="text-[10px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full ml-auto shrink-0">{a.area}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-1.5">🚉 {a.access}</p>
                  <p className="text-xs text-gray-600 mb-0.5">🍼 {a.baby}</p>
                  <p className="text-xs text-gray-600 mb-0.5">🚼 {a.stroller}</p>
                  <p className="text-xs text-gray-600 mb-2">💰 {a.fee}</p>
                  <p className="text-[11px] text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg">🐠 {a.why}</p>
                </div>
              ))}
            </div>
          </S>

          <S t="🐣 0〜1歳の赤ちゃんにおすすめの水族館展示">
            <div className="space-y-2">
              {[
                { exhibit: "クラゲ（ジェリーフィッシュ）", reason: "ふわふわと動く光と動きが赤ちゃんの目を引きます。すみだ・アクアパーク品川が特に充実。" },
                { exhibit: "ペンギン", reason: "白黒のコントラストが赤ちゃんの視覚を刺激。よちよち歩く姿に笑顔が溢れます。" },
                { exhibit: "大型水槽（回遊魚）", reason: "大きな魚がぐるぐる泳ぐ大水槽。暗い部屋の中でキラキラ光る魚は赤ちゃんが見続けます。" },
                { exhibit: "タッチング水槽", reason: "ヒトデ・エビなどに触れられる体験型展示。1歳以降の子には特に大人気。" },
              ].map((e) => (
                <div key={e.exhibit} className="flex gap-3 bg-blue-50 rounded-xl p-3">
                  <span className="text-base shrink-0">🐟</span>
                  <div>
                    <p className="text-xs font-bold text-blue-900 mb-0.5">{e.exhibit}</p>
                    <p className="text-xs text-blue-700">{e.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="💡 水族館おでかけのコツ">
            {[
              { title: "開館直後（10時台）に入館", desc: "水族館は昼から激混みになります。開館直後が一番空いていて授乳室も使いやすい時間帯です。" },
              { title: "暗い展示エリアは授乳OKなことも", desc: "クラゲや大水槽エリアは暗くて周囲の目が気にならないため、授乳ケープ持参で館内授乳ができることも。" },
              { title: "ベビーカーは預けるのが正解な場合も", desc: "混雑時はベビーカーの移動が困難な場合があります。入口のコインロッカーに預けて抱っこ紐に切り替える選択肢も。" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-cyan-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <ArticleAreaNav currentSlug="tokyo-aquarium-guide" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
