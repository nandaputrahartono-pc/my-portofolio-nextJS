import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel-heading",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nanda Putra — Pixel Art Portfolio",
  description:
    "Welcome to my pixel art portfolio! I'm a passionate developer crafting digital experiences with pixels and code.",
  keywords: ["developer", "portfolio", "pixel art", "web developer", "frontend", "fullstack"],
  authors: [{ name: "Nanda Putra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${pressStart2P.variable} ${vt323.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <ThemeProvider>
          <div className="global-grid-bg" aria-hidden="true" />
          <Navbar />
          <main style={{ paddingTop: '100px', flex: 1 }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
