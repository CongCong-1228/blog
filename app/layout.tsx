import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Header from "@/app/ui/header";
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "cyrillic", "greek"],
});

export const metadata: Metadata = {
  title: "Mitani",
  description: "Mitani's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="pt-12 my-0 mx-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
