import { Questrial, Rubik } from "@next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

const questrial = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const rubik = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Fresh Harvests - Premium Fresh Fruits & Vegetables Online",
  description: "Discover the finest selection of fresh fruits and vegetables at Fresh Harvests. Experience farm-fresh quality, unbeatable prices, and fast delivery. Shop now for a healthier lifestyle!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${rubik.className} ${questrial.className}`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
