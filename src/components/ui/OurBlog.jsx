import Image from "next/image";
import tree from "../../assets/Rectangle-removebg-preview.png"
import BlogCart from "../../components/shared/BlogCart"
 

const OurBlog = () => {
    return (
        <div className="lg:pb-20 pb-7">
            <div className="lg:flex lg:justify-end lg:mt-20 items-end">
                    <div className="lg:w-[80%] lg:pl-[15%]">
                    <h3 className="text-xs mx-auto  mt-11 lg:text-lg font-bold text-[#749B3F] border p-1 lg:w-[130px] w-[120px] text-center rounded-lg bg-gray-200">
                    Our Blog
                    </h3>
                    <h1 className="lg:mt-6 text-[#212337] lg:text-5xl text-3xl mt-4 text-center font-bold">Fresh Harvest Blog</h1>
                    <p className="text-[#4A4A52] text-center mt-3">Welcome to the Fresh Harvest Blog, your go-to resource for all things  </p>
                    <p className="text-[#4A4A52] text-center mt-1">related to fresh produce, healthy eating, and culinary inspiration.</p>
                    </div>

                    <div className="hidden lg:block lg:w-[20%] pt-16">
                    <Image
                        src={tree}
                        alt="slide picture"
                        className="h-[30px] md:h-[100px] lg:ml-2 ml-[40%] lg:h-[100px] w-[50px] md:w-[30px] lg:w-[100px] p-2"
                    />
                </div>

            </div>

            <div className="lg:mt-20">
                <BlogCart />
            </div>
        </div>
    );
};

export default OurBlog;