import React from 'react'
import footerlogo from "../../assets/img/logo.png";
import Banner from "../../assets/img/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeaat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%", 
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
  return (
    <div style= {BannerImg} 
    className='text-white  '>
        <div className='container'>
            <div  data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
               {/* company details  */}
               <div className='py-8 px-4'>
               <h1 className='
               sm:text-3xl text-xl font-bold sm:text-left
               text justify mb-3 flex items-center gap-3'>
                <img src={footerlogo} alt="" 
                className='max w-[50px]'/>
                Shoopy</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dicta odio eos nulla mollitia quia odit iusto, quaerat,
                  tempore rem dolore cum nisi eum explicabo voluptates 
                laborum aliquam ab. Blanditiis, fuga?</p>
                </div>
               {/* links details */}
               <div className='grid grid-cols-2 sm:grid-cols-3
               col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                     <h1 className='sm:text-3xl text-xl
                     font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                     <ul>
                        {
                            FooterLinks.map((link) => (
                                <li className='cursor-pointer
                                hover:text-blue-600/15 
                                hover:translate-x-1 duration-300
                                 text-gray-200'key={link.title}
                                >
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                        </ul>   
                    </div>
                </div>
               
                <div>
                    <div className='py-8 px-4'>
                     <h1 className='sm:text-3xl text-xl
                     font-bold sm:text-left text-justify mb-3'> Links</h1>
                     <ul>
                        {
                            FooterLinks.map((link) => (
                                <li className='cursor-pointer
                                hover:text-blue-600/15 
                                hover:translate-x-1 duration-300
                                 text-gray-200'key={link.title}
                                >
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                        </ul>   
                    </div>
                </div>
                {/* special links */}
                <div >
                   <div className='flex items-center gap-3  mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl' />
                        </a>
                    </div> 
                <div className='mt-6'>
                   <div className='flex items-center gap-3 '>
                         <FaLocationArrow />
                         <p>Ikeja Lagos,Nigeria</p>
                    </div>     
                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt  />
                            <p>+234 9063520691</p>
                        </div>
                </div>
               </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer