import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"className="no-scrollbar">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
