import { Rubik, Questrial } from '@next/font/google'
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const rubik = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const questrial = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Fresh-Harvests",
  description: "Discover the freshest fruits and vegetables at unbeatable prices! Our online marketplace offers a wide variety of seasonal produce, handpicked for quality and freshness. Enjoy healthy, farm-fresh options delivered straight to your door. Shop now for the best deals on organic and locally sourced fruits and veggies!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${questrial.className}`}
      >
        <Header></Header>
        <div className="min-h-screen">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
