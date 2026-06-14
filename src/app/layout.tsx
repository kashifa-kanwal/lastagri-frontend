import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/contexts/AuthContext";
import { CartProvider } from "@/lib/contexts/CartContext";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { LayoutShell } from "@/app/components/LayoutShell";
import ChatbotWidget from "@/app/components/ChatbotWidget";
import { ToastProvider } from "@/lib/contexts/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-noto-nastaliq-urdu",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgriConnect",
  description: "AgriConnect - Agricultural BNPL Platform",
  icons: {
    icon: [
      { url: '/agriconnect_logo.png', type: 'image/png' },
      { url: '/agriconnect_logo.ico', sizes: 'any' },
    ],
    apple: '/agriconnect_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LayoutShell interVariable={inter.variable} urduVariable={notoNastaliqUrdu.variable}>
        <AuthProvider>
          <CartProvider>
            <ToastProvider>
              {children}
              <ChatbotWidget />
            </ToastProvider>
          </CartProvider>
        </AuthProvider>
      </LayoutShell>
    </LanguageProvider>
  );
}
