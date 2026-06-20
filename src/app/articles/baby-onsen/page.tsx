import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAreaNav from "@/components/ArticleAreaNav";

export const metadata: Metadata = {
  title: "赤ちゃんと温泉旅行 完全ガイド【2026年】何ヶ月から？おすすめ宿・持ち物チェックリスト",
  description: "赤ちゃんと温泉旅行に行くための完全ガイド。何ヶ月から温泉に入れる？子連れ歓迎の温泉宿の選び方・持ち物リスト・赤ちゃんが泣いたときの対処法まで徹底解説。",
  alternates: { canonical: "https://stroller-navi.vercel.app/articles/baby-onsen" },
};

function S({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="text-base font-black mb-3">{t}</h2>
      {children}
    </section>
  );
}

export default function BabyOnsen() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-5 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 text-white">
          <nav className="text-xs text-white/70 mb-3">
            <Link href="/" className="hover:text-white">トップ</Link>
            <span className="mx-1.5">›</span>
            <Link href="/articles" className="hover:text-white">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span>赤ちゃんと温泉</span>
          </nav>
          <div className="text-4xl mb-2">♨️</div>
          <h1 className="text-xl font-black leading-snug">
            赤ちゃんと温泉旅行<br />完全ガイド【2026年】
          </h1>
          <p className="text-xs text-white/80 mt-2">何ヶ月から入れる？宿選び・持ち物・入浴のコツを徹底解説</p>
          <p className="text-[10px] text-white/60 mt-1">2026年5月更新 | ベビーカーナビ編集部</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
            <p className="text-sm font-bold text-orange-800 mb-2">♨️ 赤ちゃんと温泉 基本ポイント</p>
            <ul className="text-xs text-orange-700 space-y-1">
              <li>✅ 一般的に<strong>3〜4ヶ月</strong>が温泉デビューの目安（首がすわってから）</li>
              <li>✅ 温度は<strong>38〜40℃</strong>のぬるめが赤ちゃんに最適</li>
              <li>✅ 「子連れ歓迎」の宿を選ぶことが最重要</li>
              <li>✅ 入浴は<strong>5〜10分以内</strong>。長湯は脱水・のぼせの原因に</li>
            </ul>
          </div>

          <S t="📅 何ヶ月から温泉に入れる？">
            <div className="space-y-2">
              {[
                { month: "〜生後2ヶ月", ok: false, desc: "首がすわっておらず、長時間の移動も大変。温泉旅行は控えるのが無難。" },
                { month: "生後3〜5ヶ月", ok: true, desc: "首がすわりはじめる時期。貸切風呂や家族風呂があればデビューに最適。共用風呂はまだ控えめに。" },
                { month: "生後6〜11ヶ月", ok: true, desc: "腰がすわりはじめ、湯舟でのサポートがしやすくなる。ぬるめの温泉で短時間の入浴から始めよう。" },
                { month: "1歳〜", ok: true, desc: "自分で座れるようになり、温泉を楽しみやすくなる。一緒に入れる一般浴も増えてくる時期。" },
              ].map((a) => (
                <div key={a.month} className={`flex gap-3 rounded-xl p-3 ${a.ok ? "bg-green-50" : "bg-red-50"}`}>
                  <span className="text-base shrink-0">{a.ok ? "✅" : "❌"}</span>
                  <div>
                    <p className="text-xs font-bold">{a.month}</p>
                    <p className="text-xs text-gray-600">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </S>

          <S t="🏨 赤ちゃん歓迎の宿 選び方5つのポイント">
            {[
              { num: "1", title: "ベビー設備の充実度", desc: "ベビーベッド貸出・おむつ替え台・電子レンジ（ミルク温め用）の有無を事前に確認。ベビーバスが借りられると入浴がラクです。" },
              { num: "2", title: "貸切風呂・家族風呂の有無", desc: "赤ちゃんとの入浴は他の宿泊客に気を使わない貸切風呂が理想的。事前予約が必要なことも多いため早めに連絡を。" },
              { num: "3", title: "食事会場の子連れ対応", desc: "授乳室・ベビーチェアの有無・子ども向けメニューがあると安心。個室食事処があれば赤ちゃんが泣いても他の客に迷惑がかかりにくい。" },
              { num: "4", title: "部屋の広さと和室", desc: "和室の部屋は床でのおむつ替え・授乳がしやすい。赤ちゃんをハイハイさせるスペースも確保できる。" },
              { num: "5", title: "アクセスの良さ", desc: "赤ちゃん連れは移動だけで疲れる。都市から2〜3時間以内のアクセスが良い宿を選ぼう。SAでの授乳・おむつ替えの有無も確認を。" },
            ].map((t) => (
              <div key={t.num} className="flex gap-3 mb-3">
                <span className="text-base font-black text-brand-500 bg-brand-50 w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm">{t.num}</span>
                <div>
                  <p className="text-sm font-bold mb-0.5">{t.title}</p>
                  <p className="text-xs text-gray-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </S>

          <S t="🎒 温泉旅行の持ち物チェックリスト">
            <div className="grid grid-cols-2 gap-3">
              {[
                { cat: "お風呂グッズ", items: ["ベビー用ボディーソープ", "ベビーシャンプー", "バスタオル（大判）", "スポンジ・ガーゼ", "おむつ替えシート", "浴衣の下のロンパース"] },
                { cat: "就寝・授乳", items: ["ベビーモニター（持参も◎）", "抱っこ紐（ぐずり対応）", "お気に入りぬいぐるみ", "授乳ケープ", "哺乳瓶洗い（コンパクト型）", "液体ミルク（備え）"] },
                { cat: "移動中", items: ["おむつ多め（旅行用）", "ウェットティッシュ", "ビニール袋多め", "着替え3セット以上", "携帯おしゃぶり", "おやつ・ベビーフード"] },
                { cat: "安全対策", items: ["ベビーサークル（宿確認）", "コンセントカバー", "転倒防止コーナーガード", "赤ちゃんの常備薬", "かかりつけ医の電話番号", "保険証・母子手帳"] },
              ].map((c) => (
                <div key={c.cat} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-[11px] font-bold text-gray-700 mb-1.5">{c.cat}</p>
                  {c.items.map((i) => (
                    <label key={i} className="flex items-center gap-1 text-[10px] text-gray-600 mb-0.5">
                      <span className="text-brand-400">☐</span>{i}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </S>

          <S t="💡 温泉入浴のコツ（0〜1歳）">
            {[
              { title: "入浴前に白湯・母乳を少量", desc: "脱水を防ぐために、入浴前に水分補給。入浴後も母乳・ミルクで水分補給を忘れずに。" },
              { title: "ぬるめ（38〜40℃）で短時間（5〜10分）", desc: "大人が「少しぬるい」と感じるくらいの温度が赤ちゃんには最適。時計を持参して入浴時間を管理しましょう。" },
              { title: "ひとりが赤ちゃん専任", desc: "ふたり以上で入浴し、ひとりが赤ちゃんを支える役に専念すると安全。脱衣所でのおむつ替えもスムーズ。" },
              { title: "肌トラブルは湯上り後すぐに保湿", desc: "温泉の成分は赤ちゃんの肌には刺激になることも。湯上り後はすぐに低刺激の保湿クリームを塗りましょう。" },
            ].map((t) => (
              <div key={t.title} className="border-l-2 border-orange-400 pl-3 mb-3">
                <p className="text-sm font-bold mb-0.5">{t.title}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </S>

          <S t="🗾 赤ちゃん歓迎の温泉地おすすめ">
            <div className="space-y-2">
              {[
                { place: "箱根（神奈川）", desc: "東京から1.5〜2時間。家族・子連れ対応の宿が充実。温泉博物館・彫刻の森美術館など子連れでも楽しめるスポット多数。" },
                { place: "熱海（静岡）", desc: "東京から新幹線で約45分。アクセス抜群で宿の子連れ対応が進んでいる。海も近く夏は海水浴との組み合わせも。" },
                { place: "那須（栃木）", desc: "東京から車で約2時間。那須どうぶつ王国・那須サファリパークなどの施設と温泉をセットで楽しめる。" },
                { place: "草津（群馬）", desc: "日本有数の名湯。pH1.7の強酸性なので赤ちゃんの入浴は「西の河原露天風呂」など弱めの泉質エリアを選んで。" },
                { place: "指宿（鹿児島）", desc: "砂むし温泉で有名。赤ちゃんは砂むしは控えて普通の温泉を。指宿いわさきホテルは子連れサービスが充実。" },
              ].map((o) => (
                <div key={o.place} className="border border-gray-100 rounded-xl p-3">
                  <p className="text-sm font-bold mb-0.5">♨️ {o.place}</p>
                  <p className="text-xs text-gray-600">{o.desc}</p>
                </div>
              ))}
            </div>
          </S>

          <ArticleAreaNav currentSlug="baby-onsen" />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
