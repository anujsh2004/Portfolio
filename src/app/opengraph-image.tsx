import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#FFFFFF",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6366F1", fontWeight: 600 }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#6B6B6B" }}>
          {site.seo.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
