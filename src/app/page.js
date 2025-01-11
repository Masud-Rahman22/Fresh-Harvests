import Products from "../components/ui/Products.jsx";
import Header from "../components/shared/Header.jsx";
import AboutUs from "../components/ui/AboutUs.jsx";
import FruitBundle from "../components/ui/FruitBundle.jsx";
import Testimonial from "../components/ui/Testimonial.jsx";
import OurBlog from "../components/ui/OurBlog.jsx";


export default function Home() {
  return (
    <div className="bg-white">
   <Header/>
   <Products/>
   <AboutUs/>
   <FruitBundle/>
   <Testimonial/>
   <OurBlog/>
    </div>
  );
}