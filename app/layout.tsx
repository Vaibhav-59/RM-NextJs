import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resource Manager",
  description: "Manage learning resources like articles, videos, and tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        
        {/* Toast Notifications */}
        <Toaster position="top-right" />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
