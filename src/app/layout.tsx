import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NowPlaying from "@/components/Shared/NowPlaying";
import gradientImg from "../../public/images/background/gradient.webp"
import { ThemeProvider } from "@/components/Shared/theme-provider";
import Image from "next/image";
import Header from "@/components/Header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murunwa Maphiri - Software Developer",
  description: "Welcome to my personal corner of the internet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[572px] mx-auto flex flex-col px-0.5 py-5 min-h-screen">
            <div className="flex-1 w-full">
                <Header />
                {children}
            </div>
            <Image
              className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
              src={gradientImg}
              alt="Gradient Background"
              priority
            />
          </div>
        </ThemeProvider>
      </body>
      <div className="max-w-[572px] mx-auto flex flex-col px-4 py-5">
        <NowPlaying />
      </div>
    </html>
  );
}
