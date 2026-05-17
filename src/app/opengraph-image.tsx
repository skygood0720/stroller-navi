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
          background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 40%, #FFA726 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 背景の装飾円 */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
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
          }}
        >
          {/* アイコン */}
          <div style={{ fontSize: "80px", display: "flex" }}>🚼</div>

          {/* タイトル */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              display: "flex",
            }}
          >
            ベビーカーナビ
          </div>

          {/* サブタイトル */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              display: "flex",
            }}
          >
            全国470以上のベビーカー・子連れスポット情報
          </div>

          {/* タグ群 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {["授乳室", "おむつ替え", "バリアフリー", "子連れランチ"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.25)",
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "20px",
                  fontWeight: "700",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "18px",
            display: "flex",
          }}
        >
          stroller-navi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
