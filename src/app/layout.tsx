import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/schema";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milkmancompany.com"),
  title: {
    default:
      "Milk Man Toner Company | Copier & Printer Solutions in Northern California",
    template: "%s | Milk Man Toner Company",
  },
  description:
    "Milk Man Toner Company provides copier rental, leasing, toner delivery, and printer repair across Sacramento, Bay Area, and Northern California. Call (916) 253-9804.",
  openGraph: {
    type: "website",
    siteName: "Milk Man Toner Company",
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
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="font-body text-brand-black bg-white antialiased">
        <JsonLd data={buildLocalBusinessSchema()} />
        <JsonLd data={buildOrganizationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
