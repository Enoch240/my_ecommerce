import React from 'react';
import Img1 from "../../assets/img/woman-1.jpg";
import Img2 from "../../assets/img/woman-2.jpg";
import Img3 from "../../assets/img/woman-3.jpg";
import Img4 from "../../assets/img/woman-4.jpg";
import Img5 from "../../assets/img/woman-2.jpg";
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: 'white',
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: 'Red',
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Googles",
        rating: 4.7,
        color: 'Brown',
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Fashion T-shirt",
        rating: 4.6,
        color: 'Yellow',
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Printed T-shirt",
        rating: 4.8,
        color: 'Blue',
        aosDelay: "800",
    },
];
const Products = () => {
  return (
    <div>
        <div>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
               <p data-aos="fade-up" className='text-sm text-blue-500'>Top Selling Products For You</p> 
               <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1> 
               <p data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora dolores, fuga natus eum repudiandae laudantium
                 recusandae vel accusamus asperiores, iusto animi deserunt 
                 dolore consequuntur officiis eaque suscipit, tempore cumque ratione.
               </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5'>
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className='space-y-3'>
                <img src= {data.img} 
                alt=""
                className='h-[220px] w-[150px]
                object-cover rounded-md' />
                <div>
                  <h3 className='font-semibold'>{data.
                  title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>  
                </div>
              </div>  
            ))}

            </div>
            {/* view all button */}
            <div className='flex justify-center'>
              <button className='text-center mt-10
              cursor-pointer bg-blue-500 text-white
              py-2 px-5 rounded-md'>
                View All Button
              </button>
            </div>
        </div>
    </div>
  );
}; 

export default Products;