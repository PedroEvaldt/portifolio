import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className="min-h-screen bg-surface-base text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
