import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import type { Metadata } from "next";
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from '@/components/Navbar/NavBar';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS 13.5 - Image Gallery",
  description: "Project Designed by Muhammad Mairaj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className="py-4">{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
