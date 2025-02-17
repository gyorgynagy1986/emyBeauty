import { Libre_Bodoni, Jost, Figtree } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layouts/nav/Nav";
import Footer from "@/components/layouts/footer/Footer";

const libre = Libre_Bodoni({
  variable: "--font-libre",
  style: ['normal', 'italic'],
  weight:["400", "500", "600"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  weight:["400", "500", "600"],
  subsets: ["latin"],
});


const fig = Figtree({
  variable: "--font-fig",
  weight:["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={`${jost.variable} ${fig.variable} ${libre.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
