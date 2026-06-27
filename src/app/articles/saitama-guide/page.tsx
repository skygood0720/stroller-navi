import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "【2026年】さいたまエリア 子連れおでかけ完全ガイド｜大宮・与野・浦和の授乳室・ランチ情報 | ベビーカーナビ",
  description: "さいたま市（大宮・与野・浦和）でベビーカーで行けるスポット・授乳室・子連れランチを完全網羅。鉄道博物館・大宮公園・イオンレイクタウンのベビー設備を詳しく解説。",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <nav className="text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事</Link>
          </nav>
          <h1 className="text-lg font-black leading-tight">【2026年最新】さいたまエリア<br />子連れおでかけ完全ガイド</h1>
          <p className="text-[11px] opacity-80 mt-2">大宮・与野・浦和・レイクタウン / 読了時間：約8分</p>
        </header>

        <main className="p-5">
          <ArticleAuthor date="2026年6月" readTime="約8分" />
          <article className="space-y-6">

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">はじめに：さいたまは子育て世帯に嬉しいエリア</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さいたまエリアは東京から電車で20〜30分という近さながら、広い公園・本格的な鉄道博物館・子育て支援施設が充実した「子育てしやすい街」として知られています。
                大宮・浦和・与野の各エリアで異なる魅力があり、週末おでかけに飽きることがありません。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                特に「鉄道博物館」と「イオンレイクタウン」は、子連れ家族向けの設備が群を抜いており、
                ベビーカーでのアクセスのしやすさから東京近郊の子連れおでかけ先として常に人気の高いエリアです。
                この記事では、授乳室・おむつ替えスペース・ベビーカー対応を確認した上で、各スポットをご紹介します。
              </p>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-xs font-bold text-green-800 mb-1">📋 この記事でわかること</p>
                <ul className="text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>• さいたまエリアの子連れスポット5選（授乳室・ベビー設備情報付き）</li>
                  <li>• ベビーチェア完備の子連れランチ3選</li>
                  <li>• 大宮・与野・レイクタウン授乳室MAP</li>
                  <li>• 黄金コース「鉄道博物館→大宮公園→コクーンシティ」の回り方</li>
                  <li>• 東京からのアクセス方法まとめ</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">1. おすすめスポット5選</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                さいたまエリアの代表的な子連れスポットを設備情報とともにご紹介します。
                いずれも授乳室またはおむつ替えスペースが確認済みの施設です。
              </p>

              <div className="space-y-4">
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-600">鉄道博物館（大宮）</div>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室2か所", "ベビーカー貸出", "エレベーター", "3歳以下無料"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    日本最大規模の鉄道博物館で、本物の車両展示は赤ちゃんも釘付けになります。
                    授乳室は1Fと3Fの2か所に設置されており、おむつ替え台も館内複数か所に完備されています。
                    ベビーカー貸出（無料）もあり、自分のものを持ち込んだ場合も全フロアをスムーズに移動できます。
                    シミュレーターや運転台体験は身長制限があるものもありますが、本物の車両展示エリアは月齢問わず楽しめます。
                    広い館内は半日以上かけてゆっくり回れる充実のスポットです。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 平日は比較的空いています。3歳以下は入館料無料。大宮駅東口から徒歩10分またはシャトルバス利用</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-600">大宮公園・小動物園（大宮）</div>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["無料", "動物園無料", "芝生広場", "授乳スペースあり"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    大宮公園は広い芝生と複数の遊具が揃う無料公園で、地元ファミリーに長年愛されています。
                    隣接する大宮公園小動物園は入場無料で動物を見られる穴場スポットです。
                    ベビーカーで移動しやすいバリアフリーの遊歩道があり、芝生広場でレジャーシートを広げてゆっくり過ごせます。
                    授乳スペースは公園管理棟内に設けられています。
                    桜の時期（3〜4月）は花見客で混雑しますが、それ以外の季節は穴場の快適スポットです。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 大宮駅から徒歩15分またはバス利用。無料駐車場あり（混雑時は駐車待ちの場合も）</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-600">イオンレイクタウン（越谷市）</div>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["授乳室12か所以上", "ベビーカー貸出", "日本最大級", "個室授乳"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    日本最大級のショッピングモールで、子連れ設備の充実度は東日本トップクラスです。
                    授乳室は全館で12か所以上あり、すべて個室タイプで清潔です。おむつ替え台・ミルク用お湯・ウォーターサーバーが標準装備されています。
                    ベビーカー貸出も無料（要身分証）で、「kaze」「mori」の2館を1日かけてじっくり回れます。
                    近隣のレイクタウンアウトレットと組み合わせると、さらに買い物を楽しめます。
                    電車の場合は武蔵野線・越谷レイクタウン駅直結でアクセス抜群です。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 授乳室の混雑は11〜13時台のピーク時間帯。少し時間をずらすとスムーズ。個室は4〜6つある施設が多い</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-600">武蔵一宮 氷川神社（浦和）</div>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["参道広い", "お宮参り人気", "バリアフリー", "無料"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    全国に約280社ある氷川神社の総本社で、国内有数の格式ある神社です。
                    約2kmに及ぶ参道はベビーカーで歩きやすい整備された石畳で、木漏れ日の中を散歩するだけで清々しい気分になります。
                    七五三・お宮参りでも非常に人気が高く、お子さんの節目には多くのご家族が訪れます。
                    境内のベンチや木陰で授乳休憩をとることができますが、プライベートな授乳には近くのコクーンシティを利用するのが便利です。
                    大宮駅から徒歩15分、または東口のバスターミナルからも行けます。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 午前中の早い時間帯は参拝客が少なく、ゆっくり参拝できます。七五三シーズン（11月）は特に混雑</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-600">コクーンシティ（与野本町）</div>
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {["駅直結", "授乳室完備", "エレベーター", "子育て支援センター近隣"].map(t => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    与野本町駅直結の大型モールで、雨の日でも濡れずにアクセスできます。
                    授乳室は2か所完備で、おむつ替え台も各フロアに設置されています。
                    子ども向けアパレルや雑貨店が充実しており、出産祝い選びや赤ちゃん用品のまとめ買いにも便利です。
                    近隣には子育て支援センターもあり、地元のパパ・ママと交流する機会もあります。
                    与野本町駅はエレベーター完備で、ベビーカーのままスムーズにアクセスできます。
                  </p>
                  <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 駅直結で改札から雨に濡れずにアクセス可能。ベビーカー貸出あり（無料）</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">2. 子連れランチ3選</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                さいたまエリアでランチをするなら、以下の3つが設備・価格・アクセスのバランスが取れておすすめです。
              </p>

              <div className="space-y-3">
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-bold text-brand-600">大宮ルミネ レストランフロア</div>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">多国籍</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 1,000〜2,500円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    大宮駅直結のルミネ内にあるレストランフロアは、ベビーチェア完備の店舗が多数並んでいます。
                    授乳室も駅ビル内にあるため、食事の前後に授乳・おむつ替えができる安心の立地です。
                    和食・洋食・中華と選択肢が豊富で、パパとママで好みが違っても一緒に来やすいのがメリットです。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["駅直結", "ベビーチェア", "授乳室近い"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-bold text-brand-600">イオンレイクタウン フードコート</div>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">多国籍</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 700〜1,800円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    東日本最大級のフードコートで、150席以上のベビーチェアが設置されています。
                    出入り口のすぐ近くに授乳室があるため、赤ちゃんが泣き始めても素早く移動できる安心感があります。
                    ラーメン・カレー・寿司・ピザなど30店舗以上が集まり、家族全員の好みに対応できます。
                    混雑しがちですが、子連れ向けの広い通路設計になっているため、ベビーカーでも移動しやすいです。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["ベビーチェア多数", "授乳室直近", "安い"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-bold text-brand-600">コクーンシティ内 回転寿司チェーン</div>
                    <span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">寿司</span>
                    <span className="text-[10px] text-gray-400 ml-auto">💰 1,500〜2,500円</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    くら寿司やスシローなどの回転寿司チェーンは子連れ外食の定番です。
                    タッチパネルで注文でき、子どもが喜ぶビッくらポン（ガチャガチャ）もあるため、食事中のぐずり対策になります。
                    コクーンシティ内なので、食後にショッピングやおむつ替えもスムーズです。
                    個室・仕切り席を選ぶと、周りを気にせず食事できます。
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["個室あり", "子ども椅子", "タッチパネル注文"].map(t => <span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">3. 授乳室・おむつ替えMAP</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さいたまエリアの主要施設の授乳室・おむつ替えスペースをまとめました。
                特にイオンレイクタウンの授乳室12か所以上という数は東日本でも最高水準です。
              </p>
              <div className="space-y-2">
                {[
                  { name: "イオンレイクタウン 全館12か所以上", desc: "個室授乳室・おむつ替え台・ウォーターサーバー完備。東日本最高水準の設備", badge: "最充実" },
                  { name: "鉄道博物館 1F・3F", desc: "授乳室・おむつ替え台・ミルク用お湯。広くて清潔。スタッフが常駐" },
                  { name: "大宮ルミネ 3F育児室", desc: "授乳室・おむつ替え台完備。駅直結でアクセスが良い" },
                  { name: "コクーンシティ 2F", desc: "授乳室・おむつ替え台。与野本町駅直結施設" },
                  { name: "大宮公園 管理棟内", desc: "授乳スペース・おむつ替え台。公園内で無料利用可能" },
                ].map(item => (
                  <div key={item.name} className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5">
                    <span className="text-sm">🍼</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-purple-700">{item.name}</span>
                        {item.badge && <span className="text-[9px] bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded font-bold">{item.badge}</span>}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">4. 黄金コース：鉄道博物館→大宮公園→コクーンシティ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さいたまエリアを1日かけて楽しむなら、この3か所を組み合わせたコースが「黄金コース」と呼ばれています。
                電車移動と徒歩を組み合わせれば無理なく回れます。
              </p>
              <div className="bg-brand-50/30 rounded-xl p-4">
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">10:00</span>
                    <div>
                      <p className="font-bold">鉄道博物館（開館直後）</p>
                      <p className="text-gray-500 mt-0.5">開館直後は混雑が少ない。1F・3Fの授乳室を先に確認しておくと安心</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">12:00</span>
                    <div>
                      <p className="font-bold">鉄道博物館内のカフェで昼食</p>
                      <p className="text-gray-500 mt-0.5">新幹線の形をした弁当が子どもに人気。持ち込みもOK</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">13:30</span>
                    <div>
                      <p className="font-bold">大宮公園で芝生散歩</p>
                      <p className="text-gray-500 mt-0.5">ベビーカーで散歩後、小動物園で無料の動物見学（所要30〜60分）</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">15:30</span>
                    <div>
                      <p className="font-bold">コクーンシティでショッピング・授乳</p>
                      <p className="text-gray-500 mt-0.5">与野本町駅から電車で移動（約15分）。授乳・おやつ休憩を</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-600 font-bold shrink-0">17:00</span>
                    <div>
                      <p className="font-bold">帰宅</p>
                      <p className="text-gray-500 mt-0.5">大宮駅からは東京・新宿・池袋方面に直通で便利</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">5. 東京からのアクセス方法</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さいたまエリアは東京各地からのアクセスが非常に便利です。ベビーカーでの移動を考慮した経路をご紹介します。
              </p>
              <div className="space-y-2">
                {[
                  { from: "東京駅", to: "大宮駅", time: "約25分", line: "東北・上越新幹線 または JR京浜東北線" },
                  { from: "新宿駅", to: "大宮駅", time: "約30分", line: "JR埼京線・快速（直通）" },
                  { from: "池袋駅", to: "大宮駅", time: "約35分", line: "JR埼京線（直通）" },
                  { from: "秋葉原駅", to: "越谷レイクタウン駅", time: "約30分", line: "JR武蔵野線（直通）" },
                ].map(r => (
                  <div key={r.from} className="bg-blue-50/50 rounded-lg p-3 flex items-center gap-2">
                    <div className="text-xs">
                      <span className="font-bold text-blue-700">{r.from}</span>
                      <span className="text-gray-400 mx-1">→</span>
                      <span className="font-bold text-blue-700">{r.to}</span>
                      <span className="text-gray-500 ml-2">約{r.time}</span>
                    </div>
                    <div className="text-[10px] text-gray-500 ml-auto">{r.line}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                ※大宮駅はニューシャトルや東武野田線など多路線が乗り入れており、様々な方向からアクセスできます。エレベーターは全線対応済みです。
              </p>
            </section>

            <section className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">まとめ</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                さいたまエリアは「鉄道博物館→大宮公園→コクーンシティ」という黄金コースがあり、1日かけて充実した子連れおでかけができます。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                イオンレイクタウンは授乳室12か所以上という圧倒的な設備で、乳幼児連れでも長時間安心して過ごせます。
                さいたまを日帰りおでかけ先として計画する際の一番のおすすめスポットです。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                東京からのアクセスも良く、パパが仕事帰りに合流しやすいエリアでもあります。
                週末の行き先として、ぜひさいたまエリアを候補に入れてみてください。
              </p>
            </section>

            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <p className="text-sm font-bold text-brand-700 mb-2">📍 さいたまのスポットをもっと探す</p>
              <p className="text-xs text-gray-500 mb-3">ベビーカーナビでさいたまエリアの子連れスポットを検索</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">
                アプリでさいたまのスポットを探す
              </Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
