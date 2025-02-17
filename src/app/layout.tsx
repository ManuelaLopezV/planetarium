import { Metadata } from "next";

import StarryBackground from "@/components/StarryBackground";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planetarium",
  description:
    "Una aplicación moderna con un hermoso fondo animado de estrellas y los plnetas del sistema solar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/MachineryScript_PERSONAL_USE_ONLY.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StarryBackground />
        <Header />
        <main className="flex flex-col min-h-[100vh] justify-center items-center py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
