import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Data Skate",
  description: "Read & process your files online",
  openGraph: {
    title: "Data Skate",
    description: "Read & process your files online",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
