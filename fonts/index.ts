import { Fraunces, Inter, Source_Sans_3 } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const publicDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-public-display",
});

export const publicBody = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-public-body",
});
