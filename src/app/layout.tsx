import type { Metadata } from "next";
import "./globals.css";

const title = "Predictive Sports — Read the game. Make the call.";
const description =
  "Predictive Sports builds apps that help players and coaches make smarter calls in the moments that decide a game — using real game data. Makers of PitchIQ.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://predictivesports.io"),
  openGraph: {
    title,
    description,
    siteName: "Predictive Sports",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
