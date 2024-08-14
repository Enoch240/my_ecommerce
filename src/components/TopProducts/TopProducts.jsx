import React from 'react';
import Img1 from "../../assets/img/classic.png"; 
import Img2 from "../../assets/img/classic2.png" ;
import Img3 from "../../assets/img/classic5.png" ;
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual wear",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolores cupiditate totam fugit expedita magnam ex maxime ratione, eius sequi debitis optio praesentium similique consequatur illo ea labore sapiente perspiciatis",      
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolores cupiditate totam fugit expedita magnam ex maxime ratione, eius sequi debitis optio praesentium similique consequatur illo ea labore sapiente perspiciatis",      
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolores cupiditate totam fugit expedita magnam ex maxime ratione, eius sequi debitis optio praesentium similique consequatur illo ea labore sapiente perspiciatis",      
  },
];
const TopProducts = ({ handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
           {/* Header section */}
           <div className='text-left mb-24'>
               <p data-aos="fade-up" className='text-sm text-blue-500'>Top Rated Products For You</p> 
               <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1> 
               <p data-aos="fade-up"  className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora dolores, fuga natus eum repudiandae laudantium
                 recusandae vel accusamus asperiores, iusto animi deserunt 
                 dolore consequuntur officiis eaque suscipit, tempore cumque ratione.
               </p>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
              {
                ProductsData.map((data) => (
                  <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800
                  hover:bg-black/80 dark:hover:bg-blue-500
                  hover:text-white relative shadow-xl duration-300
                  group max-w-[300px]"
                  >
                    {/* image section */}
                    <div className= "h-[100px] "
                    >
                      <img src={data.img} alt="" 
                      className="max-w-[140px] block mx-auto transform
                    -translate-y-20 group-hover:scale-105
                     duration-300 drop-shadow-md"
                      />
                    </div>
                    {/* details section */}
                    <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className='w-full flex items-center justify-center gap-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-xl font-bold'>{data.title}</h1>
                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                      {data.description}</p>
                      <button className='bg-blue-500 hover:scale-105
                      duration-300 text-white py-1 px-4
                      rounded-full mt-4 group-hover:bg-white
                      group-hover:text-blue-600'
                      onClick={handleOrderPopup}
                      >
                        Order Now
                      </button>
                  </div>
                  </div>
                ))
              }
            </div>
      </div>
    </div>
  )
}

export default TopProducts