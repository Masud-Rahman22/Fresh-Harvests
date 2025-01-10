import Image from "next/image";
import fruit from "../../assets/image 1.png"
import timeCalander from "../../assets/Countdown.png"
import buttonType from "../../assets/Button.png"

const FruitBundle = () => {
    return (
        <div
  className="hero min-h-screen object-cover  lg:mt-20 lg:px-10"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/GdbfYyt/Footer-Section.png)",
  }}>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="lg:flex lg:mt-7 ">
      <div className="lg:w-[55%]">
      <h3 className="text-xs mt-6 lg:text-lg font-bold text-[#749B3F] border lg:w-[150px] w-[160px] text-center rounded-lg bg-gray-200">
           Special Offer
    </h3>
   <div className="lg:text-left mt-4 text-center">
   <h1 className="lg:text-6xl text-4xl text-[#212337] font-bold lg:mt-7">Seasonal Fruit Bundle </h1>
   <h3 className="lg:text-4xl text-2xl text-[#212337] font-bold lg:mt-3">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h3>
   </div>

    <div>
        <Image src={timeCalander} alt="about picture"
    className="h-[100px] md:h-[120px]  lg:h-[200px] w-[500px] md:w-[250px]   lg:w-[600px] p-2"
    />
    <Image src={buttonType} alt="about picture"
    className="h-[80px] md:h-[90px] lg:h-[100px] w-[300px] md:w-[350px]   lg:w-[400px] p-2"
    />
    </div>
      </div>
      <div className="lg:w-[45%]">
      <Image
    src={fruit}
    alt="about picture"
    className="hidden md:block h-full md:h-[150px] lg:ml-2 lg:h-[500px] w-full md:w-[250px] lg:pt-16 lg:w-full p-2"
/>
      </div>
    </div>
  </div>
</div>
    );
};

export default FruitBundle;