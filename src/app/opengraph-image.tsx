import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ベビーカーナビ | バリアフリールート検索";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #FF8A65 0%, #FF7043 45%, #E64A19 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景の装飾円 */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
          }}
        />

        {/* メインコンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
            padding: "0 60px",
          }}
        >
          {/* ロゴ行 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontSize: "80px", display: "flex" }}>🚼</div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "900",
                color: "white",
                display: "flex",
                letterSpacing: "-1px",
              }}
            >
              ベビーカーナビ
            </div>
          </div>

          {/* キャッチコピー */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              display: "flex",
              lineHeight: "1.4",
            }}
          >
            赤ちゃんとのおでかけを、もっと安心・もっと楽しく
          </div>

          {/* 特徴バッジ */}
          <div style={{ display: "flex", gap: "14px", marginTop: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              "🏥 授乳室530＋件",
              "🛗 エレベーター対応",
              "👶 おむつ替え台",
              "🗾 全国9地域",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.22)",
                  color: "white",
                  padding: "10px 22px",
                  borderRadius: "50px",
                  fontSize: "21px",
                  fontWeight: "700",
                  display: "flex",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "18px",
            display: "flex",
            letterSpacing: "0.5px",
          }}
        >
          stroller-navi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
