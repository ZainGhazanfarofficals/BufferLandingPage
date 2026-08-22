import { ImageResponse } from "next/og";

export const alt = "Buffer — Grow your audience without living on social media";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#fefefb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 600,
            color: "#213130",
          }}
        >
          buffer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: -1.5,
            color: "#213130",
            maxWidth: 900,
          }}
        >
          Grow your audience without living on social media
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#596664",
            maxWidth: 820,
          }}
        >
          Plan, create, publish, engage, and understand what works — all from
          one simple workspace.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: 999,
              backgroundColor: "#b0ec9c",
              color: "#213130",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Start for free
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
