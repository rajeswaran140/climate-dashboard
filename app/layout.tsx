import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Climate Dashboard | Real-Time Environmental Data",
  description: "Monitor global temperature trends, CO2 levels, and climate metrics in real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
