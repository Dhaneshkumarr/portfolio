import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dhanesh's Portfolio",
  description: "I’m Dhanesh, a Full Stack Developer offering freelance services and open to full-time opportunities. I build fast, scalable and user-friendly web applications.",
  openGraph: {
    url: "https://codebydhanesh.vercel.app/",
    siteName: "Dhanesh Portfolio",
    images: [
      {
        url: "/og-img.webp",
        width: 1200,
        height: 630,
        alt: "Dhanesh Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
