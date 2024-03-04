import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundaryWrapper from "./lib/providers/ErrorBoundaryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs To-Do Tracker",
  description: "A practicle To-Do application built using Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundaryWrapper errorFallbackType="screen">
      <html lang="en">
        <body className="bg-gray-900 text-white min-h-screen">
          <main>{children}</main>
          {children}
        </body>
      </html>
    </ErrorBoundaryWrapper>
  );
}
