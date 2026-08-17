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
  title: "Dhanesh Kumar | Software Developer | Hire Full Stack Engineer",
  description: "Software Developer specializing in building high-performance, scalable web applications. Expertise in Next.js, Node.js, Spring Boot, React, and cloud architecture. Available for full-time roles and freelance projects. Get your project built today.",
  keywords: [
    "Dhanesh Kumar",
    "Dhanesh Kumar software developer",
    "Dhanesh Kumar portfolio",
    "codebydhanesh",

    // ===== ROLE-BASED =====
    "Software Developer",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Spring Boot Developer",
    "React Developer",
    "Backend Engineer",
    "Frontend Developer",
    "Freelance Web Developer",
    "Freelance Full Stack Developer",

    // ===== INTENT-BASED (LEADS) =====
    "hire software developer",
    "hire full stack developer",
    "freelance web developer for hire",
    "web developer for hire",
    "outsource software development",
    "build my website",
    "custom software development",
    "web application development",
    "scalable backend",
    "develop custom app",
    "custom web application development",
    "build online course platform",
    "healthcare website development",
    "payment gateway integration expert",
    "API integration specialist",
    "scalable backend development",
    "dating app source code",
    "online game website source code",

    // ===== LOCATION-BASED =====
    "software developer Jaipur",
    "full stack developer Delhi NCR",
    "web developer Gurugram",
    "freelance developer Noida",
    "software engineer Rajasthan",
    "full stack engineer India",

    // ===== TECH STACK =====
    "Next.js",
    "React",
    "Node.js",
    "Spring Boot",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "REST APIs",
    "GraphQL",
    "Web Development",
    "Cloud Architecture",

    "SaaS developer",
    "e-commerce developer",
    "EdTech developer",
    "startup tech partner",
    "fintech developer",
    "healthcare tech partner",
    "travel portal developer",
    "travel website development",
    "flight booking website design",
    "websites for ppc",
    "web developer for ppc",
    "web developer travel websites",
    "web designer",

  ],
  authors: [{ name: "Dhanesh Kumar" }],
  creator: "Dhanesh Kumar",

  openGraph: {
    title: "Dhanesh Kumar | Software Developer | Hire Full Stack Engineer",
    description: "Building high-performance, scalable web applications for SaaS, e-commerce, and startups. Expertise in Next.js, Node.js, Spring Boot, and cloud. Available for hire.",
    url: "https://codebydhanesh.vercel.app/",
    siteName: "Dhanesh Kumar",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Dhanesh Kumar - Hire Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dhanesh Kumar | Software Developer | Hire Full Stack Engineer",
    description: "Building high-performance, scalable web applications. Available for full-time roles and freelance projects. Explore my work.",
    images: ["/og.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ===== ADD THIS NEW SECTION =====
  verification: {
    google: "DoESEVWI8frfdL5xTYudsgIuPB-EYMYycQwd0VKoQZM",
  },

  alternates: {
    canonical: "https://codebydhanesh.vercel.app/",
  },

  // ===== EXTRA META (For better SEO) =====
  other: {
    "geo.region": "IN",
    "geo.placename": "Rajasthan",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Dhanesh Kumar Portfolio",
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
