import { ImageResponse } from "next/og";

import { profile } from "@/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const highlights = [
  "React · Next.js",
  "React Native · Expo",
  "Node.js · Prisma · PostgreSQL",
];

/**
 * Social preview card, rendered at build time.
 *
 * Deliberately uses no remote fonts: Satori's built-in face is perfectly
 * legible here, and fetching a webfont would make the build depend on a
 * third-party host being up.
 */
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
          backgroundColor: "#0a0a0b",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Accent glow, mirroring the hero backdrop. */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 300,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "rgba(240, 174, 60, 0.14)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1px solid #2c2c33",
              backgroundColor: "#121214",
              color: "#f0ae3c",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            PP
          </div>
          <div
            style={{
              display: "flex",
              color: "#6f6a62",
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            {profile.location.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#f6f3ee",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              color: "#f0ae3c",
              fontSize: 40,
              letterSpacing: -0.5,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 900,
              color: "#a09a90",
              fontSize: 27,
              lineHeight: 1.45,
            }}
          >
            Production web and mobile products in TypeScript — 3 apps live on
            the App Store and Google Play.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderTop: "1px solid #24242a",
            paddingTop: 30,
          }}
        >
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                border: "1px solid #24242a",
                backgroundColor: "#121214",
                borderRadius: 9999,
                padding: "10px 22px",
                color: "#a09a90",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
