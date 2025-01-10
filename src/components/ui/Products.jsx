import CustomCard from "../shared/CustomCard";


const Products = () => {
    return (
        <div className="bg-white lg:mx-16 mx-2">
            <div className="">
            <h3 className="text-xs mx-auto mt-6 lg:text-lg font-bold text-[#749B3F] border lg:w-[150px] w-[160px] text-center rounded-lg bg-gray-200">
            Our Products
            </h3>
            <h1 className="text-[#212337] lg:text-5xl mt-2 lg:mt-7 font-semibold text-center">
                Our Fresh Products
          </h1>
                <p className="text-[#A6A6A6] lg:w-[430px] lg:mt-6 mx-auto text-center">We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
            </div>
            <div className="flex justify-center mb-9 lg:space-x-8 space-x-1 mt-6">
            <button className="btn btn-info bg-[#749B3F] border-0 text-white  ]">All</button>
            <button className="btn btn-outline border-[#A6A6A6] text-[#A6A6A6]">Fruits</button>
            <button className="btn btn-outline border-[#A6A6A6] text-[#A6A6A6]">vegetables</button>
            <button className="btn btn-outline border-[#A6A6A6] text-[#A6A6A6]">salad</button>
            </div>


            <div >
                <CustomCard />

                <div className="flex justify-center items-center my-7">
                <button className="btn btn-outline border-[#FF6A1A] text-[#FF6A1A] hover:bg-[#FF6A1A] hover:border-0 hover:text-white">See All Products</button>
                </div>
            </div>
        </div>
    );
};

export default Products;