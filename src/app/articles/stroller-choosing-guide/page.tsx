import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ArticleAuthor from "@/components/ArticleAuthor";

export const metadata: Metadata = {
  title: "ベビーカーの選び方完全ガイド【2026年】A型・B型・バギーの違いと選ぶポイント | ベビーカーナビ",
  description: "ベビーカーの種類（A型・B型・バギー）の違い、選ぶ際の6つのポイント、電車・バス移動でのおすすめモデルを徹底解説。初めての育児に役立つベビーカー選び完全ガイド。",
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
          <h1 className="text-lg font-black leading-tight">ベビーカーの選び方<br />完全ガイド【2026年版】</h1>
          <p className="text-[11px] opacity-80 mt-2">A型・B型・バギーの違いから選ぶポイントまで / 読了時間：約10分</p>
        </header>
        <main className="p-5">
          <ArticleAuthor date="2026年5月" readTime="約10分" />
          <article className="space-y-6">
            <S t="はじめに">
              <p className="text-sm text-gray-700 leading-relaxed">ベビーカーは出産前に準備する育児グッズの中でも最も迷いやすいアイテムのひとつ。価格帯も1万円台から10万円超まで幅広く、種類も多種多様。この記事では「何を基準に選べばいいか」を分かりやすく解説します。</p>
            </S>

            <S t="ベビーカーの種類を理解する">
              <div className="space-y-3">
                <div className="border-l-4 border-brand-400 pl-4">
                  <div className="text-sm font-bold">🚼 A型ベビーカー</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed"><span className="font-bold">使用開始：</span>生後1ヶ月〜48ヶ月（4歳）ごろまで</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">特徴：</span>リクライニングが大きく倒れるため新生児から使用可能。シートが広めで安全性が高い。ただし重く（5〜8kg）・大きく・折り畳みがかさばる。</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">向いている人：</span>車移動中心・マンションにエレベーターあり・0ヶ月から使いたい</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <div className="text-sm font-bold">🌿 B型ベビーカー（軽量タイプ）</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed"><span className="font-bold">使用開始：</span>生後7ヶ月〜36ヶ月ごろまで</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">特徴：</span>軽量（3〜5kg）でコンパクトに折り畳める。電車・バス利用が多い都市部では最もメジャー。ただし倒れ角度が浅いため首すわり前には使えない。</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">向いている人：</span>電車・バス中心・階段の多い環境・軽さ重視</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <div className="text-sm font-bold">☀️ バギー（軽量折り畳み）</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed"><span className="font-bold">使用開始：</span>1歳ごろ〜</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">特徴：</span>とにかく軽量（2〜3kg）でカバンのように持ち運べる。旅行・海外・電車ひんぱんな人に最適。機能は最低限だが価格も安め。</p>
                  <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold">向いている人：</span>海外旅行・旅行好き・サブカーが欲しい人</p>
                </div>
              </div>
            </S>

            <S t="選ぶ際の6つのポイント">
              {[
                { num: "01", title: "移動手段・住環境", desc: "電車・バスが多いなら軽いB型が正解。マイカー移動中心なら重くても高機能なA型でも◎。自宅に階段が多い場合は軽さが命。" },
                { num: "02", title: "使い始める月齢", desc: "生後1〜2ヶ月から使いたいならA型必須。首がすわった6ヶ月以降から始めるならB型で十分。" },
                { num: "03", title: "重さと折り畳みやすさ", desc: "毎日電車を使うなら5kg以下を推奨。折り畳みがワンアクションか両手必要かも確認。車のトランクに入るサイズかも重要。" },
                { num: "04", title: "前向き・後向き切り替え", desc: "後向き（親と対面）は子どもの表情が確認しやすく安心感が高い。前向きは外の景色を楽しめる。両方できる「両対面式」がベター。" },
                { num: "05", title: "タイヤ・走行性能", desc: "石畳・砂利道・段差が多い地域はエアタイヤかサスペンション付きを選ぶ。都市の舗装路だけならウレタンタイヤで十分。" },
                { num: "06", title: "予算感", desc: "メインカーは3〜6万円が品質と価格のバランスが良い。旅行用サブカーは1〜2万円のバギーで十分。高級モデル（8万円以上）は必須ではない。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 border border-gray-100 rounded-xl p-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500 text-white text-xs font-black flex items-center justify-center shrink-0">{item.num}</div>
                  <div>
                    <div className="text-sm font-bold mb-1">{item.title}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </S>

            <S t="電車移動が多い都市部向けおすすめ選び方">
              <div className="bg-brand-50/30 rounded-xl p-4">
                <p className="text-xs text-gray-700 leading-relaxed mb-3">東京・大阪など電車移動が中心の場合、以下の条件を満たすモデルを選ぶと日常使いがグッと楽になります。</p>
                <div className="space-y-2">
                  {["重さ5kg以下（できれば4kg台）", "片手で折り畳みできる", "電車ドアの幅（80cm程度）に入るコンパクトサイズ", "しっかりした荷物カゴ付き（買い物対応）", "ハンドル高さ調整可能（パパ・ママ兼用）"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-brand-500 text-base">✓</span>{c}
                    </div>
                  ))}
                </div>
              </div>
            </S>

            <S t="まとめ：迷ったらコレを選ぼう">
              <div className="space-y-2">
                <div className="bg-orange-50 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-orange-800">🏙️ 都市部・電車移動が多い → B型軽量タイプ（5kg以下）</div>
                </div>
                <div className="bg-green-50 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-green-800">🚗 郊外・車移動中心 → A型 両対面式フルリクライニング</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-blue-800">✈️ 旅行・海外によく行く → バギー（2〜3kg）をサブカーに</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-purple-800">👶 新生児から使いたい → A型 OR A型に変換できるB型</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">迷ったら実際にお店で試乗するのが一番。折り畳みの操作感・押しやすさは実際に触れないと分かりません。赤ちゃんグッズ専門店のスタッフに相談するのも有効です。</p>
            </S>
            <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center">
              <Link href="/baby-goods" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">おすすめベビーカーをチェック →</Link>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
