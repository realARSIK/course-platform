import type { Metadata } from "next";
import 'antd/dist/reset.css';
import "./globals.css";
import AppLayout from "@/components/AppLayout/AppLayout";

export const metadata: Metadata = {
  title: "Coures Platform",
  description: "Online Coures Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
