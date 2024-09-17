import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "いいかねPalette大同窓会",
  // description: "いいかねPalette大同窓会",
  openGraph: {
    url: "https://palette-reunion.vercel.app",
    title: "いいかねPalette大同窓会",
    // description: "サイト全体の説明",
    images: [
      {
        url: "/pallete_channel_logo.jpg",
        width: 800,
        height: 600,
        alt: "画像の説明",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
