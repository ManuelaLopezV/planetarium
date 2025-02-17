import { Metadata } from "next";
import { Poppins } from "next/font/google";

import StarryBackground from "@/components/StarryBackground";
import { Header } from "../components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Planetarium",
  description:
    "Aplicación moderna para explorar los planetas del sistema solar",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
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
        <main className="flex flex-col justify-center items-center py-20 gap-8 2xl:min-h-[100vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
