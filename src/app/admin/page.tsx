"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [pendingSpots, setPendingSpots] = useState<any[]>([]);
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [tab, setTab] = useState<"spots" | "feedback" | "xpost">("spots");
  const [loading, setLoading] = useState(false);
  const [xPostText, setXPostText] = useState("");
  const [xPosting, setXPosting] = useState(false);
  const [xResult, setXResult] = useState<string | null>(null);

  // Simple password check (set ADMIN_PASSWORD in env)
  const ADMIN_PASS = "babynavi2026";

  const handleLogin = () => {
    if (password === ADMIN_PASS) {
      setAuthenticated(true);
      fetchData();
    } else {
      alert("パスワードが違います");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [spotsRes, feedbackRes] = await Promise.all([
        fetch("/api/user-spots?status=pending"),
        fetch("/api/feedback"),
      ]);
      const spotsData = await spotsRes.json();
      const feedbackData = await feedbackRes.json();
      setPendingSpots(spotsData.spots || []);
      setFeedbackList(feedbackData.feedback || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (spotId: string, action: "approved" | "rejected") => {
    try {
      await fetch("/api/user-spots", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spot_id: spotId, action }),
      });
      setPendingSpots((prev) => prev.filter((s) => s.id !== spotId));
    } catch {
      alert("エラーが発生しました");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm">
          <h1 className="text-lg font-bold mb-4 text-center">🔒 管理者ログイン</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="パスワード"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm mb-3 focus:border-brand-500 focus:outline-none"
          />
          <button onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-brand-500 text-white font-bold hover:opacity-90 transition">
            ログイン
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[640px] mx-auto">
        <header className="px-5 pt-5 pb-4 bg-gradient-to-br from-gray-700 to-gray-900 text-white">
          <h1 className="text-xl font-black">🔧 ベビーカーナビ 管理画面</h1>
          <p className="text-[11px] opacity-70 mt-1">
            承認待ち: {pendingSpots.length}件 / フィードバック: {feedbackList.length}件
          </p>
        </header>

        {/* Tabs */}
        <div className="flex bg-white border-b">
          <button onClick={() => setTab("spots")}
            className={`flex-1 py-3 text-sm font-bold transition border-b-2
              ${tab === "spots" ? "border-brand-500 text-brand-700" : "border-transparent text-gray-400"}`}>
            📍 承認待ちスポット ({pendingSpots.length})
          </button>
          <button onClick={() => setTab("feedback")}
            className={`flex-1 py-3 text-sm font-bold transition border-b-2
              ${tab === "feedback" ? "border-brand-500 text-brand-700" : "border-transparent text-gray-400"}`}>
            💬 要望 ({feedbackList.length})
          </button>
          <button onClick={() => setTab("xpost")}
            className={`flex-1 py-3 text-sm font-bold transition border-b-2
              ${tab === "xpost" ? "border-brand-500 text-brand-700" : "border-transparent text-gray-400"}`}>
            𝕏 投稿
          </button>
        </div>

        <main className="p-4 space-y-3">
          {loading && <p className="text-center text-gray-400 py-8">読み込み中...</p>}

          {/* Pending spots */}
          {tab === "spots" && !loading && (
            <>
              {pendingSpots.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-sm font-bold">承認待ちのスポットはありません</p>
                </div>
              )}
              {pendingSpots.map((spot) => (
                <div key={spot.id} className="bg-white rounded-2xl p-4 shadow">
                  <h3 className="text-sm font-bold mb-1">{spot.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{spot.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {(spot.tags || []).map((t: string) => (
                      <span key={t} className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-400 mb-3">
                    投稿者: {spot.submitted_by_name} / {new Date(spot.created_at).toLocaleDateString("ja-JP")}
                    <br />座標: {spot.lat?.toFixed(4)}, {spot.lng?.toFixed(4)}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleAction(spot.id, "approved")}
                      className="flex-1 py-2.5 rounded-xl bg-green-500 text-white text-sm font-bold hover:opacity-90 transition">
                      ✅ 承認
                    </button>
                    <button onClick={() => handleAction(spot.id, "rejected")}
                      className="flex-1 py-2.5 rounded-xl bg-red-400 text-white text-sm font-bold hover:opacity-90 transition">
                      ❌ 却下
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Feedback */}
          {tab === "feedback" && !loading && (
            <>
              {feedbackList.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-3xl mb-2">📭</div>
                  <p className="text-sm font-bold">フィードバックはまだありません</p>
                </div>
              )}
              {feedbackList.map((f: any) => (
                <div key={f.id} className="bg-white rounded-2xl p-4 shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">
                      {f.category}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(f.created_at).toLocaleDateString("ja-JP")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.text}</p>
                  {f.user_email && (
                    <p className="text-[10px] text-gray-400 mt-2">📧 {f.user_email}</p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* X Auto Post */}
          {tab === "xpost" && (
            <>
              <div className="bg-white rounded-2xl p-4 shadow">
                <h3 className="text-sm font-bold mb-3">𝕏 に投稿する</h3>

                {/* Quick templates */}
                <div className="mb-3">
                  <label className="text-xs font-bold text-gray-500 block mb-1.5">テンプレート</label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: "🍼 スポット紹介", text: "🚼 ベビーカーで行ける全国のおすすめスポットをご紹介！\n\n授乳室・おむつ替え・エレベーター情報付きで安心♪\n天気に合わせたおすすめ機能も✨\n\n👇アプリを使ってみてね\nhttps://stroller-navi.vercel.app\n\n#ベビーカーナビ #子連れおでかけ #授乳室 #育児" },
                      { label: "🍽️ レストラン", text: "🍽️ ベビーカーOKなレストランを東京都内で70件以上掲載中！\n\nキッズメニュー・ベビーチェア・個室情報もチェックできます🍼\n\n👇現在地から近い順で探せます\nhttps://stroller-navi.vercel.app\n\n#ベビーカーナビ #子連れランチ #東京ランチ #育児" },
                      { label: "☀️ 天気連動", text: "☁️ 今日の天気に合わせて、おでかけ先を自動おすすめ！\n\n雨の日→室内スポット🏠\n晴れの日→屋外スポット🌳\n\n赤ちゃんとの外出がもっと楽しくなる✨\n\n👇ベビーカーナビ\nhttps://stroller-navi.vercel.app\n\n#ベビーカーナビ #子連れおでかけ #育児" },
                      { label: "📍 東京特集", text: "📍 東京のベビーカーおすすめスポット116件掲載中！\n\n新宿・渋谷・池袋・お台場・吉祥寺...エリア別に探せます🗺️\n\n公園・水族館・ショッピングモール・科学館など🍼\n\nhttps://stroller-navi.vercel.app/spots/region/東京\n\n#ベビーカーナビ #東京子連れ #育児" },
                    ].map((t) => (
                      <button key={t.label} onClick={() => setXPostText(t.text)}
                        className="px-2.5 py-1.5 bg-gray-100 hover:bg-brand-50 rounded-lg text-[11px] font-semibold transition">
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  value={xPostText}
                  onChange={(e) => setXPostText(e.target.value)}
                  placeholder="Xに投稿する内容を入力..."
                  rows={6}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-500 focus:outline-none bg-gray-50 resize-y mb-2"
                />
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[11px] ${xPostText.length > 280 ? "text-red-500 font-bold" : "text-gray-400"}`}>
                    {xPostText.length}/280文字
                  </span>
                  {xResult && (
                    <span className={`text-[11px] font-bold ${xResult.startsWith("✅") ? "text-green-600" : "text-red-500"}`}>
                      {xResult}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      // Open X Web Intent (no API needed)
                      const encoded = encodeURIComponent(xPostText);
                      window.open(`https://x.com/intent/post?text=${encoded}`, "_blank", "width=550,height=420");
                    }}
                    disabled={!xPostText}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition
                      ${xPostText ? "bg-gray-800 text-white hover:opacity-90" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    𝕏 で投稿画面を開く
                  </button>
                  <button
                    onClick={async () => {
                      if (!xPostText) return;
                      setXPosting(true);
                      setXResult(null);
                      try {
                        const res = await fetch("/api/x-post", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ text: xPostText }),
                        });
                        const data = await res.json();
                        if (data.success) {
                          setXResult("✅ 投稿完了！");
                          setXPostText("");
                        } else {
                          setXResult(`❌ ${data.error}`);
                        }
                      } catch {
                        setXResult("❌ エラーが発生しました");
                      } finally {
                        setXPosting(false);
                      }
                    }}
                    disabled={!xPostText || xPosting || xPostText.length > 280}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition
                      ${xPostText && !xPosting && xPostText.length <= 280
                        ? "bg-blue-500 text-white hover:opacity-90"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    {xPosting ? "投稿中..." : "🤖 API で自動投稿"}
                  </button>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                <h4 className="text-xs font-bold text-amber-700 mb-2">💡 X API 設定方法</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  「𝕏 で投稿画面を開く」はAPI不要でそのまま使えます。<br /><br />
                  「API で自動投稿」を使うには .env.local に以下を設定：<br />
                  <code className="text-[10px] bg-white px-1.5 py-0.5 rounded mt-1 inline-block">
                    X_API_KEY=xxx<br />
                    X_API_SECRET=xxx<br />
                    X_ACCESS_TOKEN=xxx<br />
                    X_ACCESS_TOKEN_SECRET=xxx
                  </code><br /><br />
                  developer.x.com でアプリ作成後、Pay-Per-Use（最低$5）で利用可能です。
                </p>
              </div>
            </>
          )}

          <button onClick={fetchData}
            className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50 transition mt-4">
            🔄 データを再読み込み
          </button>
        </main>
      </div>
    </div>
  );
}
