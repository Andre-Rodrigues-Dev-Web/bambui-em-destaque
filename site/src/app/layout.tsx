import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Bambuí em Destaque - Notícias, Turismo e História",
  description: "O portal mais completo de Bambuí. Encontre notícias, guia de turismo, história da cidade, horários de ônibus e muito mais.",
  keywords: ["Bambuí", "notícias Bambuí", "turismo Bambuí", "história de Bambuí", "empresas Bambuí", "eventos Bambuí"],
  openGraph: {
    type: "website",
    url: "https://www.bambuiemdestaque.com.br/",
    title: "Bambuí em Destaque - Notícias, Turismo e História",
    description: "O portal mais completo de Bambuí. Encontre notícias, guia de turismo, história da cidade, horários de ônibus e muito mais.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambuí em Destaque - Notícias, Turismo e História",
    description: "O portal mais completo de Bambuí. Encontre notícias, guia de turismo, história da cidade, horários de ônibus e muito mais.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
