import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import { mockGlobalSettings } from "@/mocks";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['300','400','500','600','700'],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "Coures Platform",
  description: "Online Coures Platform",
};

export function loader() {
  return mockGlobalSettings 
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { header, footer } = loader()
  const auth = true

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="wrapper">
          <Header data={header} isAuth={auth}/>
          <main className="main">
            {children}
          </main>
          <Footer data={footer}/>
        </div>
      </body>
    </html>
  );
}
