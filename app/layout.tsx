import type { Metadata } from "next";
import "./globals.css";
import { Cinzel,Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: "--font-cinzel",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
export const metadata = {
  title: {
    default: "Author Pembroke | Luxury Concierge & Chauffeur Services London",
    template: "%s | Author Pembroke",
  },
  description:
    "Author Pembroke is a London-based luxury concierge and chauffeur firm providing discreet, bespoke transport, corporate concierge, private events coordination, and same-day courier services for private and corporate clients.",
  keywords: [
    "Luxury Concierge London",
    "Private Chauffeur London",
    "Corporate Concierge Services",
    "Executive Chauffeur Service",
    "Bespoke Travel London",
    "Same Day Courier UK",
    "Discreet Chauffeur London",
    "Luxury Transport London",
  ],
  openGraph: {
    title: "Author Pembroke | Luxury Concierge & Chauffeur Services London",
    description:
      "Discreet, bespoke chauffeur, concierge and same-day courier services for private and corporate clients in London and across the UK.",
    url: "https://yourdomain.com",
    siteName: "Author Pembroke",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${cinzel.variable} ${playfair.variable} h-full antialiased`}
    >
          <Analytics />
      <body  className={` min-h-full flex flex-col w-screen overflow-x-hidden`}>{children}</body>
    </html>
  );
}
