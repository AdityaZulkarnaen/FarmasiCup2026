import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farmasi Cup 2026",
  description: "Farmasi Cup: Kompetisi futsal nasional dan event musik tahunan bergengsi di rumpun medika dari Farmasi UGM. Ikuti keseruannya dan daftar sekarang!",
  icons: {
    icon: [{ url: "/webp/logo.webp", type: "image/webp" }],
  },
  openGraph: {
    title: "Farmasi Cup 2026",
    description: "Farmasi Cup: Kompetisi futsal nasional dan event musik tahunan bergengsi di rumpun medika dari Farmasi UGM. Ikuti keseruannya dan daftar sekarang!",
    type: "website",
    images: [{ url: "/webp/metadata.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmasi Cup 2026",
    description: "Farmasi Cup: Kompetisi futsal nasional dan event musik tahunan bergengsi di rumpun medika dari Farmasi UGM. Ikuti keseruannya dan daftar sekarang!",
    images: ["/webp/metadata.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
