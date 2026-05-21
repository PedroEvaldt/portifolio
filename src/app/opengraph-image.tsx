import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.person.name} — ${portfolio.person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070a12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#22c55e",
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          {portfolio.person.location}
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#f8fafc",
            lineHeight: 1.1,
          }}
        >
          {portfolio.person.name}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            maxWidth: "880px",
            lineHeight: 1.4,
          }}
        >
          {portfolio.hero.headline}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#475569",
          }}
        >
          {portfolio.site.deploymentUrl ?? portfolio.site.repositoryUrl}
        </div>
      </div>
    ),
    { ...size }
  );
}
