import Image from "next/image";
import testimonial1 from "../../assets/Testimonial (3).png"
import testimonial2 from "../../assets/Testimonial (4).png"
import slide from "../../assets/Slider.png"

const Testimonial = () => {
    return (
        <div>
            <div>
            <h3 className="text-xs mx-auto lg:mt-16 mt-11 lg:text-lg font-bold text-[#749B3F] border lg:w-[150px] w-[160px] text-center rounded-lg bg-gray-200">
            Testimonial
            </h3>
            <h1 className="lg:mt-6 text-[#212337] lg:text-5xl text-3xl mt-4 text-center font-bold"> What Our Customers Say</h1>
            <p className="text-[#4A4A52] text-center mt-3">Don't just take our word for it—here's what some of our customers have to </p>
            <p className="text-[#4A4A52] text-center mt-3">say about their experience with Fresh Harvest</p>
            </div>

            <div className='lg:flex md:flex justify-center items-center  lg:mx-12'>
                <div className='lg:w-[50%] md:w-[50%]'>
              <Image
                src={testimonial1}
                alt="testimonial picture"
                className=" h-[500px] md:h-[550px] lg:ml-2 lg:h-[700px] w-[700px] md:w-[350px]  lg:w-[500px] p-2"
              /> 
                </div>
                <div className='lg:w-[50%] md:w-[50%]'>
                <Image
                    src={testimonial2}
                    alt="descrription picture"
                    className=" h-full md:h-[400px] lg:ml-2 lg:h-[500px] w-full md:w-[550px]  lg:w-full p-2"
                />
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-center">
            <h1></h1>
                <Image
                    src={slide}
                    alt="slide picture"
                    className="h-[30px]  md:h-[15px] lg:ml-2 ml-[40%] lg:h-[30px] w-[50px] md:w-[30px] lg:w-[50px] p-2 "
                />
            </div>

        </div>
    );
};

export default Testimonial;