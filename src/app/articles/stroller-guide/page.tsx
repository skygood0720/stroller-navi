import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "ベビーカーでのおでかけ完全ガイド | ベビーカーナビ",
  description: "ベビーカーでの外出を快適にするための準備・ルート選び・施設選びのポイントを詳しく解説。エレベーター、スロープ、通路幅など建築的視点からのアドバイス。",
};

export default function StrollerGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">お役立ち記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">ベビーカーでのおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">2026年4月15日 / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <article className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                赤ちゃんが生まれて初めてのおでかけ。嬉しさと不安が入り混じる瞬間ですよね。実際にベビーカーで多くの施設を訪れてみると、「ベビーカーでの動線」を意識して設計されている施設とそうでない施設には、驚くほどの差があることに気づきます。この記事では、実体験をもとに、ベビーカーでの外出を快適にするためのポイントを詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. おでかけ前の準備チェックリスト</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ベビーカーでのおでかけを成功させる秘訣は、事前準備にあります。特に初めての外出では、以下のアイテムを確認しておくと安心です。
              </p>
              <div className="bg-brand-50/50 rounded-xl p-4 mb-3">
                <h3 className="text-xs font-bold text-brand-700 mb-2">必須アイテム</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  おむつ（予備含め5〜6枚）、おしりふき、着替え一式、授乳グッズ（哺乳瓶、粉ミルク、お湯を入れた水筒）、ガーゼハンカチ、抱っこ紐（ベビーカーに乗れない場所用）、母子手帳・保険証、ゴミ袋（使用済みおむつ用）。
                </p>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-4 mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2">季節別の追加アイテム</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  夏は日よけカバー・保冷シート・こまめな水分補給グッズ。冬はブランケット・防寒カバー・レインカバー。梅雨時期はレインカバーが必須です。特にベビーカーのレインカバーは、突然の雨でも赤ちゃんを守れるので、常にベビーカーに付けておくのがおすすめです。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 建築士の視点で見る「良い施設」の見分け方</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ベビーカーで訪れる施設を選ぶとき、建築的な視点から以下のポイントをチェックすると、快適さが格段に変わります。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">エレベーターの位置と数</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                良い施設は、メインエントランスからエレベーターまでの動線が短く、わかりやすいです。2010年以降に建てられた大型商業施設では、バリアフリー法に基づいた設計が義務付けられているため、比較的安心。逆に、古い建物では後付けのエレベーターが建物の端にあることが多く、遠回りが必要になることも。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">通路幅の目安</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ベビーカーの幅は一般的に50〜55cm程度。すれ違うためには通路幅120cm以上が理想です。バリアフリー法では公共施設の廊下幅を120cm以上と定めていますが、商業施設内の店舗間通路は必ずしも対象外。事前にGoogleマップのストリートビューで通路の雰囲気を確認するのも有効な手段です。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">段差とスロープ</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                わずか2cmの段差でも、ベビーカーの前輪は引っかかります。良い施設ではすべての段差にスロープが設置されていますが、建物の出入口に段差があるケースは意外と多いもの。特に昔ながらの商店街や路面店は要注意です。バリアフリーマップを公開している自治体も増えているので、おでかけ前にチェックしてみてください。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 公共交通機関のベビーカー攻略法</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                電車やバスでの移動は、ベビーカー連れにとって最もハードルが高い場面の一つです。以下のテクニックを知っておくと、格段に楽になります。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">電車の乗車位置</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                車両の端（先頭車両や最後尾車両）は車椅子・ベビーカースペースが設置されていることが多いです。乗車前に電車の編成表を確認し、スペースのある車両に乗るようにしましょう。また、各鉄道会社のアプリでエレベーターの位置を確認できます。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">混雑を避ける時間帯</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                平日のおでかけなら10時〜14時が最も快適です。通勤ラッシュ（7〜9時、17〜19時）は極力避けましょう。休日は午前中の早い時間がおすすめ。デパートやモールの開店直後が最も空いていて、授乳室も混まずに使えます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. おすすめのおでかけ先タイプ別ガイド</h2>

              <h3 className="text-sm font-bold text-gray-800 mb-2">初めてのおでかけに最適：大型ショッピングモール</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                ららぽーとやイオンモールなどの大型SCは、授乳室・おむつ替え室・エレベーターが充実しており、初めてのおでかけに最適です。空調が効いているので季節を問わず快適で、フードコートにキッズメニューがあるのも安心ポイント。ベビーカーの貸し出しサービスを行っている施設も多いので、手ぶらで行けるのも魅力です。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">自然を感じる：都市公園</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                新宿御苑、代々木公園、昭和記念公園など、都市公園は広い芝生でベビーカーも走りやすく、赤ちゃんの外気浴にぴったりです。ただし、園路の舗装状態はまちまち。砂利道はベビーカーの前輪が取られやすいので、できるだけアスファルト舗装の園路を選びましょう。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">知的好奇心を刺激：博物館・美術館</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                国立科学博物館や東京都現代美術館など、ベビーカー入館OKの施設は意外と多いです。暗い展示室では赤ちゃんが寝てくれることもあり、パパ・ママがゆっくり鑑賞できるメリットもあります。ベビーカー貸し出しを行っている美術館も増えています。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. 困ったときの対処法</h2>

              <h3 className="text-sm font-bold text-gray-800 mb-2">エレベーターが見つからない</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                インフォメーションカウンターに声をかけましょう。多くの施設にはスタッフ用のエレベーターがあり、案内してもらえることがあります。また、商業施設の公式アプリやフロアガイドPDFにエレベーターの位置が記載されています。
              </p>

              <h3 className="text-sm font-bold text-gray-800 mb-2">授乳室が満室</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                大型施設では複数フロアに授乳室が設置されていることが多いので、別フロアを試してみましょう。また、百貨店の授乳室は比較的空いていることが多いです。授乳ケープを持っておくと、カフェのソファ席などで応急的に対応できます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                ベビーカーでのおでかけは、最初は不安がつきものですが、事前準備と施設選びのコツを知っておけば格段に楽しくなります。建築的な視点を持つと、「なぜこの施設は使いやすいのか」「なぜあの施設は不便なのか」が理解でき、自分で最適な場所を見つけられるようになります。ベビーカーナビでは、こうした専門的な視点を活かしたスポット情報を提供しています。ぜひ活用してみてください。
              </p>
            </section>
          </article>

          <div className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center mt-5">
            <p className="text-sm font-bold text-brand-700 mb-2">🚼 ベビーカーナビでスポットを探す</p>
            <Link href="/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition mt-2">
              アプリを開く
            </Link>
          </div>
                  <ArticleAreaNav currentSlug="stroller-guide" />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
