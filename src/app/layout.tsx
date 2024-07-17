import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NewHeader from "@/Components/NewHeader/NewHeader";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERN stack developer",
  description: "freelance mern stack / full stack developer",
  verification: {google: "Wc5NCpOS4cY9o2ADxOKc4Ev1d48v-P-G9ztwmEys9I8"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewHeader />
        <div className="pt-[80px] min-h-[102vh] max-w-[1100px] m-auto px-2">
          {children}
        </div>
      </body>
    </html>
  );
}
