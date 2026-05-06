import { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
export const metadata: Metadata = { title: "赤ちゃんの初めてのおでかけ｜月齢別おすすめスポットと注意点 | ベビーカーナビ", description: "0〜3ヶ月の初外出から3歳までの月齢別おすすめスポット、持ち物チェックリスト、よくある不安への回答を完全ガイド。" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]"><div className="max-w-[640px] mx-auto">
      <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
        <nav className="text-xs text-white/70 mb-2"><Link href="/" className="hover:text-white">トップ</Link><span className="mx-1.5">›</span><Link href="/articles" className="hover:text-white">記事</Link></nav>
        <h1 className="text-lg font-black leading-tight">赤ちゃんの初めてのおでかけ<br />月齢別ガイド</h1>
        <p className="text-[11px] opacity-80 mt-2">0ヶ月〜3歳まで完全対応 / 読了時間：約8分</p>
      </header>
      <main className="p-5"><article className="space-y-6">
        <S t="はじめに"><p className="text-sm text-gray-700 leading-relaxed">赤ちゃんが生まれてからの初外出は、嬉しさと不安が入り混じる特別な瞬間です。「いつから外出していいの？」「何を持っていけばいいの？」「どこなら安心？」この記事では、月齢ごとのおすすめスポットと注意点、持ち物チェックリストを完全ガイドします。</p></S>

        <S t="1. 月齢別おすすめスポット">
          <div className="space-y-4">
            <div className="bg-pink-50/50 rounded-xl p-4 border border-pink-100/50">
              <h3 className="text-sm font-bold text-pink-700 mb-2">👶 0〜3ヶ月（ねんね期）</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">生後1ヶ月健診後から少しずつ。まずは家の周りのお散歩から。15〜30分の短い外出が目安です。</p>
              <p className="text-xs text-gray-700 font-bold mb-1">おすすめスポット：</p>
              <p className="text-xs text-gray-600">近所の公園（芝生で外気浴）、百貨店（授乳室が充実で安心）、ショッピングモール（空調が効いて快適）。この時期は「赤ちゃんを外の空気に慣れさせる」のが目的なので、無理をしないことが大切です。</p>
            </div>
            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
              <h3 className="text-sm font-bold text-blue-700 mb-2">🍼 4〜6ヶ月（首すわり〜寝返り期）</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">首が座ったらベビーカーでの移動が楽になります。1〜2時間の外出が可能に。</p>
              <p className="text-xs text-gray-700 font-bold mb-1">おすすめスポット：</p>
              <p className="text-xs text-gray-600">新宿御苑や代々木公園（芝生で寝転がれる）、水族館（暗い空間で赤ちゃんが落ち着く）、子育て支援施設（景丘の家、co渋谷など）。授乳間隔が安定してくるので、おでかけの計画が立てやすくなります。</p>
            </div>
            <div className="bg-green-50/50 rounded-xl p-4 border border-green-100/50">
              <h3 className="text-sm font-bold text-green-700 mb-2">🚼 7〜12ヶ月（おすわり〜ハイハイ期）</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">おすわりやハイハイができるようになると、室内遊び場がより楽しめます。離乳食が始まるのでレストラン選びも重要に。</p>
              <p className="text-xs text-gray-700 font-bold mb-1">おすすめスポット：</p>
              <p className="text-xs text-gray-600">子育てひろばBUTTER（ハイハイに最適）、パパママ☆すぽっと（木のおもちゃ）、100本のスプーン（離乳食無料提供）、京王あそびの森HUGHUG（はいはいパーク）。</p>
            </div>
            <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100/50">
              <h3 className="text-sm font-bold text-amber-700 mb-2">🏃 1〜2歳（あんよ〜走り始め）</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">歩き始めると行動範囲が一気に広がります。「走り回れる場所」と「安全に歩ける場所」がポイント。</p>
              <p className="text-xs text-gray-700 font-bold mb-1">おすすめスポット：</p>
              <p className="text-xs text-gray-600">南池袋公園（芝生で安全に歩ける）、アトレ恵比寿屋上庭園（芝生で転んでも安心）、動物園（上野動物園、井の頭自然文化園）、アソボ〜ノ！（巨大屋内パーク）。</p>
            </div>
            <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100/50">
              <h3 className="text-sm font-bold text-purple-700 mb-2">🎨 2〜3歳（おしゃべり・興味の広がり）</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">言葉が増えて好奇心が爆発する時期。「体験型」のスポットが楽しめます。</p>
              <p className="text-xs text-gray-700 font-bold mb-1">おすすめスポット：</p>
              <p className="text-xs text-gray-600">レゴランド・ディスカバリー・センター、リトルプラネット（デジタル体験）、サンリオピューロランド、東京おもちゃ美術館、昭和記念公園こどもの森。</p>
            </div>
          </div>
        </S>

        <S t="2. 初外出の持ち物チェックリスト">
          <div className="bg-brand-50/50 rounded-xl p-4 mb-3 space-y-2">
            <p className="text-xs font-bold text-brand-700">必須アイテム</p>
            <p className="text-xs text-gray-700 leading-relaxed">おむつ（5〜6枚）、おしりふき、着替え一式、授乳グッズ（母乳パッド or 哺乳瓶＋ミルク＋お湯）、ガーゼハンカチ、抱っこ紐（ベビーカーに乗れない場所用）、母子手帳・保険証、ゴミ袋。</p>
            <p className="text-xs font-bold text-brand-700 mt-2">あると便利</p>
            <p className="text-xs text-gray-700 leading-relaxed">授乳ケープ、おくるみ/ブランケット、おもちゃ（音の出ないもの）、日焼け止め（夏）、レインカバー、チェアベルト（外食用）。</p>
          </div>
        </S>

        <S t="3. よくある不安Q&A">
          <div className="space-y-3">
            <div><p className="text-xs font-bold text-gray-800">Q. 電車にベビーカーで乗って大丈夫？</p><p className="text-xs text-gray-600 leading-relaxed mt-1">平日10時〜14時の間なら比較的空いています。車両の端にベビーカー・車椅子スペースがある電車を選びましょう。各鉄道会社のアプリでエレベーターの位置も確認できます。</p></div>
            <div><p className="text-xs font-bold text-gray-800">Q. 赤ちゃんが泣いたらどうすれば？</p><p className="text-xs text-gray-600 leading-relaxed mt-1">泣くのは当たり前のこと。周りのほとんどの人は理解してくれます。どうしても気になる場合は、個室のある授乳室に移動しましょう。カラオケ個室（べるべるパークなど）も避難先として覚えておくと便利です。</p></div>
            <div><p className="text-xs font-bold text-gray-800">Q. 外出時間はどれくらいが目安？</p><p className="text-xs text-gray-600 leading-relaxed mt-1">0〜3ヶ月は30分〜1時間、4〜6ヶ月は1〜2時間、7ヶ月以降は2〜3時間が目安です。赤ちゃんの体調と機嫌を見ながら、無理をしないのが一番大切です。</p></div>
            <div><p className="text-xs font-bold text-gray-800">Q. 真夏・真冬のおでかけは？</p><p className="text-xs text-gray-600 leading-relaxed mt-1">真夏は10時前か16時以降の涼しい時間帯に。室内スポット（ショッピングモール、水族館）を拠点にすると安心。真冬はブランケットと防寒カバーで、室内スポット中心のプランがおすすめです。</p></div>
          </div>
        </S>

        <S t="まとめ"><p className="text-sm text-gray-700 leading-relaxed">赤ちゃんとの初外出は不安がつきものですが、月齢に合ったスポットを選び、持ち物をしっかり準備すれば、きっと楽しい思い出になります。ベビーカーナビでは赤ちゃんの月齢を登録すると、年齢に合ったおすすめポイントが表示されるので、ぜひ活用してみてください。</p></S>
        <section className="bg-gradient-to-r from-brand-50 to-orange-50 rounded-2xl p-5 text-center"><Link href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-bold hover:opacity-90 transition">月齢に合ったスポットを探す</Link></section>
      </article></main>
      <SiteFooter />
    </div></div>
  );
}
function S({ t, children }: any) { return (<section className="bg-white rounded-2xl p-5 shadow-sm"><h2 className="text-base font-bold border-b border-gray-100 pb-2 mb-3">{t}</h2>{children}</section>); }
