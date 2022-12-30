import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 235, 236, 241;
  --dark-color: 13, 14, 18;
  --primary-color: 180, 129, 88;
  --primary-gradient-1: 253, 167, 76;
  --secondary-color: 31, 111, 235;
  --secondary-gradient-1: 109, 166, 253;
  --white-color: 255, 255, 255;
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
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
