import type { Metadata } from "next";
import { Inter, Kanit, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/navigator";
import { useRouter } from "next/navigation";
import Head from "next/head";

// const kanit = Roboto({ subsets: "thai", width: "400" ,display: 'swap'});
const kanit = Kanit({
  weight: "400",
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darunporn Porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
