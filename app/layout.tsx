import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhaya Simkhada | Civil Engineering Technology Portfolio",
  description: "Civil Engineering Technology portfolio focused on GIS-based infrastructure planning, transport networks, stormwater analysis and local government infrastructure.",
  openGraph: {
    title: "Abhaya Simkhada | Civil Engineering Technology Portfolio",
    description: "Civil Engineering Technology portfolio focused on GIS-based infrastructure planning, transport networks, stormwater analysis and local government infrastructure.",
    url: "https://abhayasimkhada.com",
    siteName: "Abhaya Simkhada Portfolio",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
