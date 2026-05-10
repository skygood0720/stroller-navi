import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
export const metadata: Metadata = { title: "【2026年】上野エリア 子連れおでかけ完全ガイド｜動物園・博物館・ランチまとめ | ベビーカーナビ", description: "上野動物園・国立科学博物館・アメ横周辺の子連れスポット、ベビーカーOKランチ、授乳室を完全網羅。パンダに会えるモデルコースも。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">【2026年最新】上野エリア<br />子連れおでかけ完全ガイド</h1>
        <p className="text-[11px] opacity-80 mt-2">動物園・博物館・公園を完全攻略 / 読了時間：約8分</p>
      </header>
      <main className="p-5"><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">上野エリアは「文化のデパート」。上野動物園、国立科学博物館、東京都美術館、国立西洋美術館、東京国立博物館…日本を代表する文化施設が徒歩圏内に集中しています。しかも上野恩賜公園は広くてフラットで、ベビーカーでの移動がスムーズ。パンダに会って、恐竜の骨格標本を見て、噴水広場でのんびり。赤ちゃんの知的好奇心を育てる最高のエリアです。</p></S>

        <S t="1. おすすめスポット">
          <SC name="上野動物園" desc="日本最古の動物園。パンダ「シャオシャオ」「レイレイ」に会える！ベビーカー貸出あり（300円）。園内はスロープ整備が進んでおり、西園〜東園のモノレール（休止中の場合はいそっぷ橋で移動）もベビーカーOK。授乳室は東園の総合案内所横と西園の子ども動物園横にあります。" tags={["授乳室", "ベビーカー貸出", "スロープ"]} link="/spots/3009" tip="平日10時台が最も空いています。まず東園のパンダを見て、西園でふれあい動物コーナーへ" />
          <SC name="国立科学博物館" desc="恐竜の骨格標本は赤ちゃんも見上げて大興奮。「コンパス」（要予約）は親子で楽しめる体験型展示。日本館B1Fと地球館2Fに授乳室。ベビーカーのまま見学OK。入館料630円（高校生以下無料）。" tags={["授乳室", "おむつ替え", "エレベーター"]} link="/spots/3010" tip="コンパスは大人気で予約必須。当日の朝にWebで空き状況を確認" />
          <SC name="上野恩賜公園" desc="動物園・博物館を結ぶ広い公園。噴水広場周辺はベンチが多くベビーカー休憩に最適。桜の季節は混雑しますが、それ以外の時期はゆったり散歩できます。スターバックス上野恩賜公園店はテラス席あり。" tags={["芝生", "噴水", "テラスカフェ"]} link="/spots/3377" tip="上野駅公園口から出ると階段なし。JRの公園改札口が最も便利" />
          <SC name="国際子ども図書館" desc="国立国会図書館の子ども版。「こどものへや」には赤ちゃん向け絵本が充実。美しいレンガ造りの建物は重要文化財。入館無料。読み聞かせイベントも定期開催。" tags={["無料", "絵本", "授乳室"]} link="/spots/3365" tip="上野動物園の帰りに立ち寄るのがおすすめ。静かで落ち着ける空間" />
          <SC name="東京都美術館" desc="上野公園内。ベビーカーでの入館OK。B1Fに授乳室。企画展はベビーカーのまま鑑賞可能（混雑時は抱っこ紐推奨）。託児サービスのある展覧会も。" tags={["授乳室", "ベビーカーOK", "託児あり"]} link="/spots/3377" tip="毎月第3土・日は「ファミリープログラム」を開催していることが多い" />
        </S>

        <S t="2. 子連れランチ">
          <RC name="ハードロックカフェ 上野駅東京" cuisine="アメリカン" price="1,500〜3,000円" desc="アトレ上野1F。駅直結。キッズメニュー充実。動物園帰りに便利。" tags={["駅直結", "キッズメニュー"]} link="/spots/7180" />
          <div className="border border-gray-100 rounded-xl p-4 mb-3">
            <div className="text-sm font-bold text-brand-600">上野マルイ レストランフロア</div>
            <p className="text-xs text-gray-600 mt-1 mb-2">9Fにソファ席が多いレストランが複数。ベビーカーOK。上野駅から徒歩1分。</p>
            <div className="flex flex-wrap gap-1"><span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">ソファ席</span><span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">ベビーカーOK</span></div>
          </div>
          <div className="border border-gray-100 rounded-xl p-4 mb-3">
            <div className="text-sm font-bold text-brand-600">スターバックス 上野恩賜公園店</div>
            <p className="text-xs text-gray-600 mt-1 mb-2">公園内のテラス席でゆっくり。離乳食持ち込みOK。授乳は近くの公園トイレで。</p>
            <div className="flex flex-wrap gap-1"><span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">テラス席</span><span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">離乳食持ち込みOK</span></div>
          </div>
        </S>

        <S t="3. 授乳室・おむつ替えMAP">
          <div className="space-y-2">
            <TI name="上野動物園 東園（総合案内所横）" desc="授乳室・おむつ替え台・ミルク用お湯" />
            <TI name="上野動物園 西園（子ども動物園横）" desc="授乳室・おむつ替え台" />
            <TI name="国立科学博物館 日本館B1F・地球館2F" desc="授乳室・ミルク用お湯・おむつ替え台" />
            <TI name="アトレ上野 3F" desc="授乳室・おむつ替え台・ベビーチェア" />
            <TI name="上野駅 公園口改札外" desc="多機能トイレ。おむつ替え台あり" />
            <TI name="上野恩賜公園 噴水広場付近" desc="多機能トイレ。おむつ替え台" />
          </div>
        </S>

        <S t="📍 おすすめ半日コース">
          <div className="bg-brand-50/30 rounded-xl p-4 mb-3">
            <h3 className="text-sm font-bold text-brand-700 mb-2">🐼 パンダ＆科学館コース</h3>
            <div className="text-xs text-gray-600 leading-relaxed space-y-1">
              <p>9:30 上野動物園 開園と同時に入園（パンダ列回避）</p>
              <p>10:30 西園ふれあいコーナーで動物と触れ合い</p>
              <p>11:30 動物園を出てハードロックカフェでランチ</p>
              <p>13:00 国立科学博物館で恐竜を見る</p>
              <p>14:00 噴水広場でのんびり＆帰宅</p>
            </div>
          </div>
          <div className="bg-green-50/30 rounded-xl p-4">
            <h3 className="text-sm font-bold text-green-700 mb-2">📚 のんびり絵本コース</h3>
            <div className="text-xs text-gray-600 leading-relaxed space-y-1">
              <p>10:00 国際子ども図書館で絵本タイム</p>
              <p>11:00 上野公園をベビーカーでお散歩</p>
              <p>11:30 スターバックス公園店でブランチ</p>
              <p>13:00 東京都美術館でアート鑑賞</p>
            </div>
          </div>
        </S>

        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">上野エリアは「パンダ＋博物館＋公園」という最強の組み合わせが徒歩圏内に揃っています。上野駅の公園口から出れば階段なしでアクセス可能。動物園→ランチ→科学博物館の黄金コースは、0歳から3歳まで幅広い月齢で楽しめます。授乳室は動物園内とアトレ上野が充実しているので、困ったときはこの2か所を覚えておけば安心です。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">アプリを開く</Link></section>
      </article></main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
function SC({ name, desc, tags, link, tip }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><p className="text-xs text-gray-600 leading-relaxed mt-1.5 mb-2">{desc}</p><div className="flex flex-wrap gap-1 mb-2">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div>{tip && <p className="text-[11px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5">💡 {tip}</p>}</div>); }
function RC({ name, cuisine, price, desc, tags, link }: any) { return (<div className="border border-gray-100 rounded-xl p-4 mb-3"><div className="flex items-center gap-2 mb-1"><Link href={link} className="text-sm font-bold text-brand-600 hover:underline">{name}</Link><span className="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">{cuisine}</span><span className="text-[10px] text-gray-400 ml-auto">💰 {price}</span></div><p className="text-xs text-gray-600 mt-1 mb-2">{desc}</p><div className="flex flex-wrap gap-1">{tags.map((t: string) => (<span key={t} className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-medium">{t}</span>))}</div></div>); }
function TI({ name, desc }: any) { return (<div className="flex gap-2 items-start bg-purple-50/50 rounded-lg p-2.5"><span className="text-sm">🍼</span><div><div className="text-xs font-bold text-purple-700">{name}</div><div className="text-[11px] text-gray-500">{desc}</div></div></div>); }
