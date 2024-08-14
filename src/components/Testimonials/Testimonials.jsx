import React from 'react';

import Img1 from "../../assets/img/member-1.png";
import Img2 from "../../assets/img/member-2.png"; 
import Img3 from "../../assets/img/member-3.png"; 
import Img4 from "../../assets/img/member-4.png"; 
import Img5 from "../../assets/img/member-5.png"; 
 import Img6 from "../../assets/img/member-6.png"; 
 import Img7 from "../../assets/img/member-7.png"; 
 import Img8 from "../../assets/img/member-8.png"; 
 import Img9 from "../../assets/img/member-9.png"; 
 import Img10 from "../../assets/img/photo1.png"; 
 import Img11 from "../../assets/img/photo2.png"; 
 import Img12  from "../../assets/img/photo3.png"; 
 import Img13  from "../../assets/img/photo4.png"; 
 import Img14  from "../../assets/img/photo5.png"; 
 import Img15 from "../../assets/img/photo6.png"; 

import Slider from "react-slick" 

const TestimonialData = [
    {
        id: 1,
        name: "Victoria Persley",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img1,
    },
    {
        id: 2,
        name: "Jackson Durelo",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img2,
    },
    {
        id: 3,
        name: "Angela",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img3,
    },
    {
        id: 4,
        name: "Mathew",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img4,
    },
    {
        id: 5,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img5,
    },
    {
        id: 6,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img6,
    },
    {
        id: 7,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img7,
    },
    {
        id: 8,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img8,
    },
    {
        id: 9,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img9,
    },
    {
        id: 10,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img10,
    },
    {
        id: 11,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img11,
    },
    {
        id: 12,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img12,
    },
    {
        id: 13,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img13,
    },
    {
        id: 14,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img14,
    },
    {
        id: 15,
        name: "victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint cupiditate eos quia iste, veniam culpa aspernatur dolores recusandae odit, libero pariatur necessitatibus aperiam error mollitia ut asperiores adipisci amet.",
        img: Img15,
    },
]
const Testimonials = () => {
 var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
 };
 
 
    return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* Header section  */}
            <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
               <p data-aos="fade-up" className='text-sm text-blue-500'>What our customers are saying?</p> 
               <h1  data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1> 
               <p  data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. 
                Tempora dolores, fuga 
                natus eum repudiandae.
               </p>
            </div >
            {/* Testimonial Card */}
            <div data-aos="zoom-in" >
               <Slider {... settings}> 
                {TestimonialData.map((data) => (
                    <div className='my-6'>
                        <div
                            key={data.id}
                            className='flex flex-col   gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-blue-500/20 relative'>
                                <div className='mb-4'>
                                    <img src={data.img} alt="" 
                                    className='rounded-full w-20 h-20'/>
                                </div>
                                <div className='flex  flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                    <p
                                    className='text-xs text-gray-500'
                                    >{data.text}</p>
                                    <h1 className='text-xl font-bold
                                    text-black/80 dark:text-white'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl
                                    font-serif absolute top-0 right-0'>
                                        ,,
                                </p>
                        </div>
                     </div>
                ))}
               </Slider>   
            </div>       
        </div>
    </div>
  );
};

export default Testimonials;