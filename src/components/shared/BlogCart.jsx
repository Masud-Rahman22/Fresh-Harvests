

const BlogCart = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-7 md:gap-5 lg:mx-14 mx-3">
            <div className="card card-compact bg-base-100 w-full ">
  <figure>
    <img
      src="https://i.ibb.co.com/7JPK8dh/image-2.png"
      alt="Shoes" className="rounded-2xl" />
  </figure>
  <div className="">
    <h2 className="text-xs mt-3 text-[#4A4A52]">May 23, 2024</h2>
    <p className="text-[#212337] mt-3 font-semibold">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
    <div className="card-actions justify-start">
    <button type="button" className="text-[#FF6A1A] mt-3 font-semibold flex justify-center items-center">
        read more 
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor"   d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </button>
    </div>
  </div>
             </div>

             <div className="card card-compact bg-base-100 w-full ">
  <figure>
    <img
      src="https://i.ibb.co.com/dJ1PNhw/image-3.png"
      alt="Shoes" className="rounded-2xl" />
  </figure>
  <div className="">
    <h2 className="text-xs mt-3 text-[#4A4A52]">May 23, 2024</h2>
    <p className="text-[#212337] mt-3 font-semibold">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</p>
    <div className="card-actions justify-start">
    <button type="button" className="text-[#FF6A1A] mt-3 font-semibold flex justify-center items-center">
        read more 
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor"   d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </button>
    </div>
  </div>
             </div>

                <div className="card card-compact bg-base-100 w-full ">
    <figure>
        <img
        src="https://i.ibb.co.com/1sRhk8Q/image-4.png"
        alt="Shoes" className="rounded-2xl" />
    </figure>
    <div className="">
        <h2 className="text-xs mt-3 text-[#4A4A52]">May 23, 2024</h2>
        <p className="text-[#212337] mt-3 font-semibold">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</p>
        <div className="card-actions justify-start">
        <button type="button" className="text-[#FF6A1A] mt-3 font-semibold flex justify-center items-center">
            read more 
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor"   d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </button>
        </div>
    </div>
                </div>
            </div>
    );
};

export default BlogCart;