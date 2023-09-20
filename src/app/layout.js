import "./globals.css";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Scart from "@/store/ShowCart/Scart";
import { Providers } from "@/store/provider";

export const metadata = {
  title: "Responsive watches website",
  description: "Created by Lipeunim",
  referrer: "origin-when-cross-origin",
  themeColor: "#FFB556",
  category: "e-commerce",
  applicationName: "Rolex Wrist Watches",
  authors: [
    { name: "Standard Success Edu-Tech Hub" },
    { name: "Standard Success Edu-Tech Hub", url: "https://ssetechub.com" },
  ],
  generator: "Lipeunim",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google",
    yahoo: "yahoo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Rolex - Wrist Watch",
    description: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design",
    url: "https://rolex-lipeunim.vercel.app/",
    siteName: "Lipeunim",
    images: [
      {
        url: "https://rolex-lipeunim.vercel.app/home.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://rolex-lipeunim.vercel.app/home.png",
        width: 300,
        height: 300,
      },
      {
        url: "https://rolex-lipeunim.vercel.app/home.png",
        width: 1800,
        height: 1600,
        alt: "Rolex Image",
      },
    ],
    email: "lipeunimcodes@gmail.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </head>
      <body>
        <Providers>
          <Navbar/>
          <Scart />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
