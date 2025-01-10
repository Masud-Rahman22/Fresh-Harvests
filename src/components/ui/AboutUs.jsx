import Image from "next/image";
import aboutUs from "../../assets/aboutussss.png"

const AboutUs = () => {
    return (
        <div className="lg:flex lg:justify-center lg:mx-16 mx-2 lg:mt-16">
            <div className="lg:w-[50%]">
            <Image
                        src={aboutUs}
                        alt="about picture"
                        className="h-full md:h-[150px] lg:h-[500px] w-full md:w-[250px] lg:w-[550px] p-2"
                    />
            </div>
            <div className="lg:w-[50%] lg:mt-24">
            <h3 className="text-xs  mt-6 lg:text-lg font-bold text-[#749B3F] border lg:w-[120px] w-[100px] text-center rounded-lg bg-gray-200">
            About Us
            </h3>
           <h1 className="lg:mt-6 text-[#212337] lg:text-5xl text-3xl mt-4 text-center font-bold"> About Fresh Harvest</h1>
           <p className="text-[#4A4A52] mt-3">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>

           <div className=" my-7">
                <button className="btn btn-outline border-[#FF6A1A] text-[#FF6A1A] hover:bg-[#FF6A1A] hover:border-0 hover:text-white"> Read More</button>
                </div>
            </div>


           
            
        </div>
    );
};

export default AboutUs;