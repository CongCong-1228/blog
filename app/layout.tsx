import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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
    <html lang="zh" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {/* <main className="px-4 h-[calc(100vh - var(--header-height))] sm:px-6 lg:px-8">
            {children}
          </main> */}
          <main className="px-4 h-full sm:px-6 lg:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
