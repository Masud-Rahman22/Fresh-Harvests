import Image from "next/image";
import footerPicture1 from "../../assets/Logo (1).png"
import footerPicture2 from "../../assets/Frame 12.png"
import footerPicture3 from "../../assets/Quick links 1.png"
import footerPicture4 from "../../assets/Quick links 2.png"
import footerPicture6 from "../../assets/Contact us.png"
import footerPicture5 from "../../assets/Social.png"

const Footer = () => {
    return (
        <div>
           <footer className="footer bg-base-200 text-base-content p-10">
       <div>
       <Image
        src={footerPicture1}
        alt="slide picture"
      className="h-[100px] md:h-[100px] lg:ml-2  lg:h-[100px] w-[250px] md:w-[300px] lg:w-[300px] p-2"
     />
     <Image
        src={footerPicture2}
        alt="slide picture"
      className="h-[100px] md:h-[100px] lg:ml-2  lg:h-[100px] w-[250px] md:w-[230px] lg:w-[300px] p-2"
     />
       </div>
       <div>
       <Image
        src={footerPicture3}
        alt="slide picture"
      className="h-[170px] md:h-[170px] lg:ml-2  lg:h-[200px] w-[200px] md:w-[330px] lg:w-[150px] p-2"
     />
       </div>
       <div>
       <Image
        src={footerPicture4}
        alt="slide picture"
      className="h-[170px] md:h-[200px] lg:ml-2  lg:h-[200px] w-[200px] md:w-[130px] lg:w-[150px] p-2"
     />
       </div>
       <div>
       <Image
        src={footerPicture6}
        alt="slide picture"
      className="h-[230px] md:h-[200px] lg:ml-2  lg:h-[230px] w-[250px] md:w-[250px] lg:w-[300px] p-2"
     />
       </div>
  
</footer> 
<hr className="h-px  bg-gray-400  "></hr>
<footer className=" bg-base-300 text-base-content p-4">
  <aside className="lg:flex   lg:justify-between lg:items-center">
    <p className="text-center">© Copyright 2024, All Rights Reserved by Banana Studio</p>
    <div>
    <Image
        src={footerPicture5}
        alt="slide picture"
      className="h-[40px] mx-auto mt-2 md:h-[40px] lg:ml-2  lg:h-[40px] w-[130px] md:w-[130px] lg:w-[140px] "
     />
    </div>
  </aside>
</footer>
        </div>
    );
};

export default Footer;