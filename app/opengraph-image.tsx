import { ImageResponse } from "next/og";
import { profileData } from "@/data/portfolioData";

export const alt = "Rakensa Dwifa — Web Developer & Engineering Physics Student";
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
          justifyContent: "space-between",
          backgroundColor: "#faf8f2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0d9488",
              border: "5px solid #0f172a",
              borderRadius: 16,
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#0f172a" }}>
              {profileData.name}
            </span>
            <span style={{ fontSize: 20, color: "#0d9488", fontWeight: 700 }}>
              Portfolio
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: 66, fontWeight: 900, color: "#0f172a", lineHeight: 1.05 }}>
            Web Developer &
          </span>
          <span style={{ fontSize: 66, fontWeight: 900, color: "#0d9488", lineHeight: 1.05 }}>
            Engineering Physics Student
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "5px solid #0f172a",
            paddingTop: "28px",
            fontSize: 22,
            color: "#334155",
          }}
        >
          <span>{profileData.education}</span>
          <span>{profileData.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
