import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { QueryProvider } from "@/components/query-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AstroColab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto container px-4 sm:px-6 lg:px-8 flex flex-col min-h-schreen justify-between">
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
