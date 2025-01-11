import CustomCard from "@/components/shared/CustomCard";
import Image from "next/image";

const ProductDetailsPage = async({params}) => {
    console.log(params?.productId)
    
    // for single product
    const res = await fetch(`https://api-fresh-harvest.code-commando.com/api/v1/products/${params?.productId}`,{
        cache: "no-store",
       });
       const product = await res.json();
      
      //  for category
    const categoryRes = await fetch(`https://api-fresh-harvest.code-commando.com/api/v1/category/${product?.data?.categoryId}`,{
        cache: "no-store",
       });
       const productCategory = await categoryRes.json();
       
  return (
    <div className='bg-white lg:px-20 px-4'>
    <section className="py-8 bg-white md:py-16 text-black antialiased">
<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
 <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
   <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
     <img className="w-full hidden dark:block" src={product?.data?.images[0]}></img>
   </div>

   <div className="mt-6 sm:mt-8 lg:mt-0">
   <h3 className="text-xs  lg:text-lg font-bold text-[#749B3F] border lg:w-[100px] w-[160px] text-center rounded-lg bg-gray-200">
   {productCategory?.data?.categoryName}
         </h3>
     <h1 className="lg:text-4xl text-xl mt-4 font-semibold">
     {product?.data?.productName}
     </h1>
     <div className="mt-4 sm:items-center  sm:gap-4 sm:flex">
     <div className="flex items-center gap-2 mt-2 sm:mt-0">
         <div className="flex items-center gap-1">
           <svg
             className="w-4 h-4 text-yellow-300"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
             />
           </svg>
           <svg
             className="w-4 h-4 text-yellow-300"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
             />
           </svg>
           <svg
             className="w-4 h-4 text-yellow-300"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
             />
           </svg>
           <svg
             className="w-4 h-4 text-yellow-300"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
             />
           </svg>
           <svg
             className="w-4 h-4 text-yellow-300"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
             />
           </svg>
         </div>
         <p className="text-base font-bold leading-none ">
           5.0
         </p>
         <a
           href="#"
           className="text-sm font-medium leading-none text-gray-900  hover:no-underline "
         >
           (1 Reviews)
         </a>
       </div>
     </div>
      <div>
         <h1 className='text-[#FF6A1A] lg:text-4xl font-bold mt-3'>${product?.data?.price}/kg</h1>
      </div>
      <div>
         <p className='text-[#4A4A52] lg:text-base  mt-3'>{product?.data?.description}</p>
      </div>
      <div className="flex items-center mt-16 space-x-4">
   <span className="text-gray-800 text-lg font-medium">Quantity</span>
   <div className="flex items-center border border-gray-300 rounded-md">
     <button
      
       className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
     >
       -
     </button>
     <span className="px-4 py-1 text-gray-800">1</span>
     <button
      
       className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
     >
       +
     </button>
   </div>
   <span className="text-gray-500">/kg</span>
 </div>
     
 <div>
 <div className="lg:flex mt-8  lg:gap-4  lg:space-y-0 space-y-3  mb-6">
      
       <button
                     className="bg-gray-100 flex gap-2 items-center  text-gray-800 px-12  py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" className="size-6">
                         <path 
                             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                     </svg>
                     Save as favorite
                 </button>
                 <button
                     className=" flex gap-2 items-center bg-[#FF6A1A] font-bold text-white px-16 py-2 rounded-md hover:bg-[#FF6A1A] focus:outline-none focus:ring-2  focus:ring-offset-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" className="size-6">
                         <path 
                             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                     </svg>
                     Add to cart
                 </button>
     </div>
 </div>
    
   </div>
 </div>
</div>
     </section>



     <div>
         <div className='flex justify-start gap-5'>
         <button className="btn btn-active bg-[#749B3F] text-[#FFFFFF]">Description</button>
         <button className="btn btn-outline border-[#A6A6A6] text-[#A6A6A6]">Reviews (1)</button>
         </div>

         <div className='bg-[#F4F6F6] lg:p-20 text-sm p-4 mt-7 text-[#4A4A52] rounded-2xl'>
         <p >{product?.data?.description}</p>
         </div>
     </div>

     <div>
        <div>
         <h3 className="text-xs mx-auto lg:mt-16 mt-11 lg:text-lg font-bold text-[#749B3F] border lg:w-[150px] w-[160px] text-center rounded-lg bg-gray-200">
         Our Products
         </h3>
         <h1 className="lg:mt-6 text-[#212337] lg:text-5xl text-3xl mt-4 text-center font-bold"> Related products</h1>
         <p className="text-[#4A4A52] text-center mt-3">We pride ourselves on offering a wide variety of fresh and flavorful fruits,  </p>
         <p className="text-[#4A4A52] text-center mt-3">vegetables, and salad ingredients.</p>
         </div>

         <div className='lg:mt-14 pb-7'>
             <CustomCard/>
         </div>
     </div>

     </div>
  )
}

export default ProductDetailsPage