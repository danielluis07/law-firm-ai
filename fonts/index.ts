import { Lora, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const publicDisplay = Lora({
  subsets: ["latin"],
  variable: "--font-public-display",
  weight: ["600", "700"],
});
