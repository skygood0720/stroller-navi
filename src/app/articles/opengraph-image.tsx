import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "お役立ち記事 | ベビーカーナビ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #093637 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: "72px", display: "flex" }}>📖</div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "900",
              color: "white",
              textAlign: "center",
              display: "flex",
            }}
          >
            ベビーカーナビ お役立ち記事
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              display: "flex",
            }}
          >
            赤ちゃんとのおでかけに役立つ情報をお届け
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            {["地域ガイド", "電車マナー", "授乳室の使い方", "月齢別おでかけ"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
            display: "flex",
          }}
        >
          stroller-navi.vercel.app/articles
        </div>
      </div>
    ),
    { ...size }
  );
}
