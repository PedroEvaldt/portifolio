import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = `${portfolio.person.name} | ${portfolio.person.role}`;
const description =
  "Portfolio of Pedro Evaldt, a Computer Science student at UFRGS focused on backend, systems and practical tools.";
const siteUrl = portfolio.site.deploymentUrl ?? portfolio.site.repositoryUrl;
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: `${portfolio.person.name} Portfolio`,
  authors: [{ name: portfolio.person.name }],
  creator: portfolio.person.name,
  keywords: [
    "Pedro Evaldt",
    "Software Developer",
    "Backend",
    "Systems",
    "Go",
    "Python",
    "PostgreSQL",
    "Docker",
    "Linux",
    "UFRGS",
  ],
  openGraph: {
    title,
    description: portfolio.hero.subheadline,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: `${portfolio.person.name} Portfolio`,
    images: portfolio.site.ogImagePath
      ? [
          {
            url: portfolio.site.ogImagePath,
            width: 1200,
            height: 630,
            alt: `${portfolio.person.name} portfolio preview`,
          },
        ]
      : undefined,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary",
    title,
    description: portfolio.hero.subheadline,
    images: portfolio.site.ogImagePath ? [portfolio.site.ogImagePath] : undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.person.name,
  jobTitle: portfolio.person.role,
  url: siteUrl,
  sameAs: [
    portfolio.contact.links.github.href,
    portfolio.contact.links.linkedin.href,
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      lang="en"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
