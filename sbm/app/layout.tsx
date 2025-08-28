import { BookMarkedIcon, SquareLibraryIcon } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book & Mark",
  description: "Social BookMark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto h-screen flex flex-col justify-center">
          <header className="flex justify-between border-b-1">
            <Link
              href="/"
              className="flex text-3xl font-semibold tracking-tight text-green-500 items-center"
            >
              <BookMarkedIcon size={28} /> BookMark
            </Link>
            <div className="flex items-center gap-5">
              <Link
                href="/bookcase"
                className="border border-blue-300 rounded-full p-1 hover:
                ring-1 hover:ring-blue-500 active:scale-75 transition-all"
              >
                <SquareLibraryIcon />
              </Link>
              <Link href="/my" className="">
                My
              </Link>
              <Link href="/sign">Sign</Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="text-center text-green-500">
            &#169; 집에서 북마크 클론 코딩 @2025
          </footer>
        </div>
      </body>
    </html>
  );
}
