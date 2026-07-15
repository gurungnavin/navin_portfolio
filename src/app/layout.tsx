import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/content/site";
import { ColorProvider } from "@/components/theme/color-provider";
import { Preloader } from "@/components/layout/preloader";
import { BootProvider } from "@/components/layout/boot-provider";
import { MenuProvider } from "@/components/layout/menu-provider";
import { MenuPanel } from "@/components/layout/menu-panel";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <BootProvider>
          <Preloader />

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ColorProvider>
              <SmoothScroll>
                <MenuProvider>
                  <Navbar />
                  <MenuPanel />
                  {children}
                </MenuProvider>
              </SmoothScroll>
            </ColorProvider>
          </ThemeProvider>
        </BootProvider>
      </body>
    </html>
  );
}
