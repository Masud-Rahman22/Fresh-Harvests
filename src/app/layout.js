import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fresh Harvests - Premium Fresh Fruits & Vegetables Online",
  description: "Discover the finest selection of fresh fruits and vegetables at Fresh Harvests. Experience farm-fresh quality, unbeatable prices, and fast delivery. Shop now for a healthier lifestyle!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber/>
         <div className="min-h-screen">{children}</div>
         <Footer/>
      </body>
    </html>
  );
}