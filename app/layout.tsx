import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/themeProvider";
import Footer from "@/components/footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Fiaschi",
  description: "My blog-portfolio-resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}>{children}</body> */}
      <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="prose-xl mx-auto my-20 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
            <Header/>
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
