import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "3歳のおでかけ完全ガイド【2026年】どこ行く？持ち物・おすすめスポット・トイレ対策",
  description: "3歳の子どもとのおでかけを徹底解説。おすすめスポット10選・持ち物チェックリスト・トイレトレーニング中の外出対策・プレ幼稚園後のおでかけアイデアまで。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/3year-old-outing" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function ThreeYearOldOuting() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>3歳のおでかけ</span>
          </nav>
          <div className="text-4xl mb-2">🌟</div>
          <h1 className="text-xl font-black leading-snug">
            3歳のおでかけ完全ガイド<br />【2026年版】
          </h1>
          <p className="text-xs text-white/80 mt-2">どこ行く？持ち物・おすすめスポット・トイレ対策を徹底解説</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-yellow-800 mb-2">🌟 3歳おでかけの特徴</p>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>✅ 自分の意志・好奇心が爆発する時期 → 本人が「行きたい！」場所を尊重</li>
              <li>✅ トイレトレーニング中はトイレの場所を事前確認</li>
              <li>✅ 歩ける距離が増えるが疲れたら「抱っこ！」も多い</li>
              <li>✅ ベビーカーはサブで持参 or 折りたたみ式が便利</li>
            </ul>
          </div>

          <S t="🗺️ 3歳のおでかけ おすすめスポット10選">
            <div className="space-y-2">
              {[
                { rank: 1, name: "動物園・水族館", reason: "動物の名前を覚えている3歳は本物を見て大興奮！「あ！ゾウ！」の感動は格別。", tags: ["ベビーカー貸出", "授乳室"] },
                { rank: 2, name: "屋内キッズスペース（ボーネルンドなど）", reason: "体を動かしながら遊べる室内施設。ボルダリング・砂場・滑り台など3歳に最適の遊具が揃う。", tags: ["雨の日OK", "体を動かす"] },
                { rank: 3, name: "大型公園（砂場・広い芝生）", reason: "砂場・広場での自由遊びは3歳の創造力を伸ばす。弁当を持参してのんびりピクニックが◎", tags: ["無料", "外遊び"] },
                { rank: 4, name: "科学館・プラネタリウム", reason: "「なぜ？」「どうして？」の質問が爆発する3歳に科学の不思議を。プラネタリウムは大喜びすることが多い。", tags: ["知育", "屋内"] },
                { rank: 5, name: "鉄道博物館・電車テーマ施設", reason: "電車好きな3歳には夢の場所。実物の電車を見ながら「あの電車乗ったことある！」と大盛り上がり。", tags: ["電車好きに◎", "屋内"] },
                { rank: 6, name: "牧場（動物ふれあい）", reason: "羊・山羊・ウサギへのえさやり体験は3歳の「優しさ」を育てる大切な経験。", tags: ["ふれあい", "屋外"] },
                { rank: 7, name: "ショッピングモール（キッズエリア）", reason: "雨の日でも広いキッズスペースで遊べる。ゲームコーナーではなくボールプールや積み木エリアがおすすめ。", tags: ["雨の日OK", "食事充実"] },
                { rank: 8, name: "テーマパーク（小規模）", reason: "大型テーマパークより地域の小さな遊園地が3歳には怖くなく楽しい。待ち時間が少ない施設を選ぼう。", tags: ["乗り物", "3歳〜"] },
                { rank: 9, name: "図書館（読み聞かせイベント）", reason: "無料で参加できる読み聞かせイベントは3歳の語彙・集中力を育てる。静かな空間で絵本を楽しむ習慣を。", tags: ["無料", "雨の日OK", "語彙発達"] },
                { rank: 10, name: "海・川遊び（夏）", reason: "夏の水遊びは3歳には大きな刺激。幼い今しかない「はじめての海」の思い出を作ろう。", tags: ["季節限定", "夏"] },
              ].map((s) => (
                <div key={s.rank} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-lg font-black text-brand-500 shrink-0 w-7 text-center">#{s.rank}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5">{s.name}</p>
                    <p className="text-xs text-gray-600 mb-1">{s.reason}</p>
                    <div className="flex flex-wrap gap-1">
                      {s.tags.map((t) => <span key={t} className="text-[9px] bg-white border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="🚽 トイレトレーニング中のおでかけ対策">
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-xs font-bold text-blue-800 mb-1">✅ 出発前にやること</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 目的地のトイレ場所を事前に調べておく</li>
                  <li>• 出発直前にトイレに行かせる</li>
                  <li>• 念のため着替え2〜3セットを持参</li>
                  <li>• ポータブルおまる or 補助便座シートを持参</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-3">
                <p className="text-xs font-bold text-green-800 mb-1">✅ おでかけ先でやること</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 到着後すぐにトイレの場所を確認</li>
                  <li>• 1〜2時間おきにトイレに誘う</li>
                  <li>• 「トイレに行きたい！」の前兆（もじもじ・急に静かになる）を観察</li>
                  <li>• 失敗しても怒らず「次は間に合ったね！」と声がけ</li>
                </ul>
              </div>
            </div>
          </S>

          <S t="🎒 3歳のおでかけ 持ち物チェックリスト">
            <div className="grid grid-cols-2 gap-3">
              {[
                { cat: "衛生・トイレ", items: ["着替え2セット", "おむつorパンツ多め", "携帯おしりふき", "ビニール袋", "補助便座シート"] },
                { cat: "食事", items: ["水筒・飲み物", "おやつ（腹持ちよい物）", "スプーン・フォーク", "エプロン", "ウェットティッシュ"] },
                { cat: "外遊び", items: ["帽子（UVカット）", "日焼け止め", "虫除け", "長袖カーディガン", "砂場用スコップ"] },
                { cat: "移動", items: ["ベビーカー（折りたたみ）", "抱っこ紐", "スニーカー（脱ぎ履きしやすい）", "連絡先カードを子どもの服に"] },
              ].map((c) => (
                <div key={c.cat} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-700 mb-1.5">{c.cat}</p>
                  {c.items.map((i) => (
                    <label key={i} className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-1">
                      <span className="text-brand-400">☐</span>{i}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </S>

          <S t="💡 3歳おでかけの注意点・コツ">
            {[
              { title: "「行きたくない！」は事前対話で予防", desc: "前日に「明日○○に行こうか？」と相談する形で伝えると、当日の拒否が減ります。" },
              { title: "帰宅時間を事前告知", desc: "「長い針が12になったら帰ろうね」と具体的な時刻イメージを伝えると「もう帰るの！」がスムーズに。" },
              { title: "昼寝のタイミングを考慮", desc: "まだ昼寝が必要な子は午前中の外出 + 昼食後帰宅がおすすめ。眠い状態でのおでかけはぐずりの原因に。" },
              { title: "迷子対策は必須", desc: "迷子になった時のために、子どもの服に名前・電話番号のタグを付ける。スマートタグ（AirTagなど）の活用も◎" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-brand-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <div className="flex gap-3">
            <Link href="/articles/2year-old-outing" className="flex-1 bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <div className="text-2xl mb-1">🦁</div>
              <p className="text-xs font-bold">2歳のおでかけ</p>
            </Link>
            <Link href="/articles/1year-old-outing" className="flex-1 bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <div className="text-2xl mb-1">👶</div>
              <p className="text-xs font-bold">1歳のおでかけ</p>
            </Link>
            <Link href="/articles/zero-age-outing" className="flex-1 bg-white rounded-2xl p-4 shadow-sm text-center hover:shadow-md transition">
              <div className="text-2xl mb-1">🌱</div>
              <p className="text-xs font-bold">0歳のおでかけ</p>
            </Link>
          </div>

          <ArticleAreaNav currentSlug="3year-old-outing" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
