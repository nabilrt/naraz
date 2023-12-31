import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naraz Shopping",
  description: "A Client Side Shopping Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
