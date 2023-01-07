import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Suspense } from "react";
import Loading from "../components/Loading";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 235, 236, 241;
  --dark-color: 13, 14, 18;
  --primary-color: 180, 129, 88;
  --primary-text-color: 233, 196, 151;
  --secondary-color: 86, 60, 40;
  --white-color: 255, 255, 255;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-inter, sans-serif);
  outline: none;
}
body {
  background: rgba(var(--dark-color), 1);
  color: rgba(var(--light-color), 1);
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: all 0.15s ease;
}
.container {
  margin-inline: auto;
  width: min(90%, 70rem);
}
.App {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
::-webkit-scrollbar {
  width: 0.25em;
}
::-webkit-scrollbar-track {
  background: transparent;
  transition: all 0.15s ease;
}
::-webkit-scrollbar-track:hover {
  background: rgba(var(--dark-color), 0.01);
}
::-webkit-scrollbar-thumb {
  background: rgba(var(--light-color), 0.25);
  border-radius: 0.5rem;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <Head>
        <title>Next Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Next-Academy by Subid using next.js which is a simple website offers courses for learning programming."
        />
        <meta
          name="google-site-verification"
          content="aUOx7BZBGMEAbtDsLf9bN1BvycMZwahF4zDqu0EtQCw"
        />
        <link rel="canonical" href="https://nextacademy.vercel.app/" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Developer",
            "@id": "https://nextacademy.vercel.app/",
            "name": "itsme-Subid | Subid Das",
            "url": "https://nextacademy.vercel.app/",
            "sameAs": [
              "https://www.instagram.com/itsme_subid/",
              "https://twitter.com/ItsmeSubid"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": "https://nextacademy.vercel.app/",
              "inLanguage": "en-US",
              "url": "https://raw.githubusercontent.com/itsme-Subid/Next-Academy/main/preview.webp",
              "contentUrl": "https://raw.githubusercontent.com/itsme-Subid/Next-Academy/main/preview.webp",
              "width": 782,
              "height": 782,
              "caption": "itsme-Subid"
            },
            "image": { "@id": "https://nextacademy.vercel.app/" }
          },
          {
            "@type": "WebPage",
            "@id": "https://nextacademy.vercel.app/",
            "url": "https://nextacademy.vercel.app/",
            "name": "Next-Academy | itsme-Subid",
            "isPartOf": {
              "@id": "https://nextacademy.vercel.app/"
            },
            "about": { "@id": "https://nextacademy.vercel.app/" },
            "description": "Next-Academy by Subid using next.js",
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next-Academy" />
        <meta property="og:url" content="https://nextacademy.vercel.app/" />
        <meta property="og:title" content="Next-Academy by itsme-Subid" />
        <meta
          property="og:description"
          content="Next-Academy by Subid using next.js which is a simple website offers courses for learning programming."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/itsme-Subid/Next-Academy/main/preview.webp"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nextacademy.vercel.app/"
        />
        <meta property="twitter:title" content="Next-Academy | itsme-Subid" />
        <meta
          property="twitter:description"
          content="Next-Academy by Subid using next.js"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/itsme-Subid/Next-Academy/main/preview.webp"
        />
        <meta name="twitter:site" content="@itsme-Subid" />
        <meta name="twitter:creator" content="@itsme-Subid" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="next-head-count" content="26" />
      </Head>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Header />
        <Component {...pageProps} />
      </Suspense>
      <Footer />
    </div>
  );
}
