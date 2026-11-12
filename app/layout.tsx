import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { site } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/motion/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    type: "website",
    locale: site.locale,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

/**
 * Runs before paint: applies the saved or system theme and marks JS as
 * available, so there is no flash of the wrong theme or of hidden content.
 * Also skips the intro curtain after the first page view in a session.
 */
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t;if(sessionStorage.getItem('intro')){d.classList.add('intro-seen')}else{sessionStorage.setItem('intro','1')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh bg-background text-foreground">
        <div className="intro" aria-hidden>
          <div className="w-56">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bulut_face.png"
              alt=""
              width={56}
              height={56}
              className="intro-name mb-5 size-14 rounded-full"
            />
            <p className="intro-name text-xl font-medium tracking-[-0.02em]">{site.name}</p>
            <div className="mt-4 h-px bg-line">
              <div className="intro-bar h-px bg-foreground" />
            </div>
          </div>
        </div>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-full bg-foreground px-4 py-2 font-mono text-xs uppercase text-background focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
