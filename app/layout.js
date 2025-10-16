import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TenantProvider } from "../contexts/TenantContext";
import config from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.appName,
  description: config.appDescription,
  keywords: "POS, punto de venta, restaurantes, cafeterías, bares, retail, analytics, IA",
  authors: [{ name: "Klara POS Team" }],
  openGraph: {
    title: config.appName,
    description: config.appDescription,
    url: config.domainName,
    siteName: config.appName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.appName,
    description: config.appDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme={config.colors.theme}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={config.colors.main} />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{})})}`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <TenantProvider>
              {children}
            </TenantProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}