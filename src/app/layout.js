import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata = {
  title: "Digital Signatures: Cryptography presentation",
  description: "A flat 2D Neo-Brutalist slide-deck presentation explaining cryptographic digital signatures, hashes, keys, and document verification with humor and memes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#0D0E12] text-[#F8F9FA] font-sans overflow-hidden">
        {children}
      </body>
    </html>
  );
}
