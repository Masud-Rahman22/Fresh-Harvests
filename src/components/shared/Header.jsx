"use client"
import Image from "next/image";
import bg from "../../../src/assets/Bg.png";
import offers from "../../../src/assets/Special Offer.png";
import icons from "../../../src/assets/Clip path group.png";
import download_App from "../../../src/assets/Download App_.png";

const Header = () => {
    return (
        <div
            className="bg-cover bg-center w-full  lg:h-[880px] md:h-[600px] h-[400px]"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className="text-black pt-16 md:pt-28 lg:pt-32">
                <div className="pl-4 lg:pl-20">
                    <h3 className="text-xs lg:text-lg font-bold text-[#749B3F] border lg:w-[250px] w-[160px] text-center rounded-lg bg-gray-200">
                        Welcome to Fresh Harvest
                    </h3>
                    <h1 className="mt-1 lg:mt-8 text-3xl lg:text-7xl font-bold text-[#212337]">
                        Fresh Fruits and
                    </h1>
                    <h1 className="mt-1 lg:mt-4 text-3xl lg:text-7xl font-bold text-[#212337]">
                        Vegetables
                    </h1>
                    <p className="text-sm lg:text-base text-[#4A4A52] lg:w-[460px] lg:mt-8">
                        At Fresh Harvests, we are passionate about providing you with
                        the freshest and most flavorful fruits and vegetables
                    </p>
                    <button className="btn btn-active px-5 lg:px-8 bg-[#FF6A1A] text-white font-bold mt-2 lg:mt-7 hidden lg:block">
                        Shop Now
                    </button>

                    <button className="btn btn-xs px-5 lg:px-8 bg-[#FF6A1A] text-white font-bold mt-2 lg:mt-7 block lg:hidden">
                        Shop Now
                    </button>

                </div>
                <div className="flex lg:gap-5 md:gap-10 mt-2 lg:mt-7 pl-4 lg:pl-44">
                    <Image
                        src={icons}
                        width={80}
                        height={20}
                        alt="icon picture"
                        className="hidden md:block"
                    />
                    <Image
                        src={offers}
                        alt="offer picture"
                        className="h-[80px] md:h-[150px] lg:h-[200px] w-[160px] md:w-[250px] lg:w-[300px] p-2"
                    />
                </div>
                <div className=" md:mt-8  pl-4 md:pl-20">
                    <Image
                        src={download_App}
                        className=" md:h-[90px] lg:h-[100px] w-[260px] md:w-[280px] lg:w-[300px] p-2"
                        alt="offer picture"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;