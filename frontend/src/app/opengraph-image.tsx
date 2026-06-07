import { ImageResponse } from "next/og";

export const alt = "SchoolManager - All-in-One School Management Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #4F46E5 0%, #2563EB 50%, #10B981 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.9,
            marginBottom: 16,
          }}
        >
          SchoolManager
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 800,
          }}
        >
          Manage Your Entire School From One Powerful Platform
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.85 }}>
          Trusted by 500+ schools worldwide
        </div>
      </div>
    ),
    { ...size },
  );
}
