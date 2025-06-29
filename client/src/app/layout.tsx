import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import { loadGlobalData } from "@/services/globalService";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['300','400','500','600','700'],
  style: ["normal", "italic"]
})

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await loadGlobalData();
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    }
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { header, footer } = await loadGlobalData();
  const isAuth = true;

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="wrapper">
          <Header data={header} isAuth={isAuth}/>
          <main className="main">
            {children}
          </main>
          <Footer data={footer}/>
        </div>
      </body>
    </html>
  );
}
