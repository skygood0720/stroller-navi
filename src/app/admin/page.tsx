"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [pendingSpots, setPendingSpots] = useState<any[]>([]);
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [tab, setTab] = useState<"spots" | "feedback">("spots");
  const [loading, setLoading] = useState(false);

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
            💬 要望・意見 ({feedbackList.length})
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

          <button onClick={fetchData}
            className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50 transition mt-4">
            🔄 データを再読み込み
          </button>
        </main>
      </div>
    </div>
  );
}
