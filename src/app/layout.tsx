import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";
import ChatbotEmbed from "./components/ChatbotEmbed";

import ScrollToTop from "./components/scroll-to-top";
import Aoscompo from "@/utils/aos";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kenetheboss Proposal",
    template: "%s | Kenetheboss",
  },
  description:
    "A proposal directed towards Kenetheboss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Aoscompo>
             
              <NextTopLoader />
              {children}
            
            </Aoscompo>

            {/* ✅ Global Chatbot */}
            <ChatbotEmbed />
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
