import React from 'react';
import Image1 from '../../assets/img/shopping lady.png';
import Image2 from '../../assets/img/women.png';
import Image3 from '../../assets/img/sale.png';
import Slider from "react-slick";


const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Get up to 50% off on all Men's Wear",
        description:
        "lorem His life will forever be changed dolor",
    },
    {
        id: 2,
        img: Image2,
        title: "Get 30% off on all Women's Wear",
        description:
        "lorem His life will forever be changed dolor",
    },
    {
        id: 3,
        img: Image3,
        title: "Get  70% off on all Products Sale",
        description:
        "lorem His life will forever be changed dolor",
    },
]

const Hero = ( {handleOrderPopup} ) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 80,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px]
      sm:min-h-[650px] bg-gray-100 flex justify-center items-center
      dark:bg-gray-950 dark:text-white
      duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-blue-500/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
    </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-8'>
         <Slider {...settings}>
            {ImageList.map((data) => (
                
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12
                         file:sm:pt-8 text-center sm:text-left order-2 
                        sm:order-1 relative z-10 '>
                        <h1
                         data-aos="zoom-out"
                         data-aos-duraration="500"
                         data-aos-once="true"
                         className='text-5xl sm:text-6xl
                        lg:text-7xl font-bold'>{data.title}</h1>
                        <p 
                         data-aos="zoom-out"
                         data-aos-duraration="500"
                         data-aos-delay="100"
                         className='text-sm'> {data.description}
                        </p>
                        <div>
                            <button 
                            onClick= {handleOrderPopup} 
                            className='bg-gradient-to-r from-blue-500
                            to-blue-600 hover:scale-105 duration-200 text-white
                            py-2 px-4 rounded-full'
                            >Order Now
                            </button>
                        </div>
                    </div> 
                    {/* image content section */}
                    <div className='order-2 sm:order-1'>
                        <div 
                            data-aos="zoom-in"
                            data-aos-once="true"
                        className='relative z-10'>
                            <img src={data.img} alt="" 
                            className='w-[350px] h-[350px] 
                            sm:h-[450px] sm:w-[450px] sm:scale-105
                            lg: scale-120 object-contain mx-auto '/>
                        </div>
                    </div>

                </div>
            </div>
             ))}
        </Slider>
        </div>
    </div>
  )
}

export default Hero