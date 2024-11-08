
import Image from 'next/image';
import React from 'react';
import NavbarItem from './NavbarItems';
import OrderButton from '../Buttons/OrderButton';
import { FaCoffee } from 'react-icons/fa';
import Link from 'next/link';


const Navbar: React.FC=()=> {
  return (
    <div className='bg-gradient-to-r from-secondary bg-yellow-900 bg-opacity-50
     to-secondary/75 shadow-lg text-light'>
        <div className='container py-3'>
            <div className='flex items-center justify-between'>

                <div   data-aos="fade-down"
                data-aos-once="true" data-aos-delay="300" className='font-pacifiko
                font-bold text-xl lg:text-3xl md:text-2xl
                items-center justify-center flex gap-2'
                
                
                >
                    <Image src="/images/logo/1.png" alt='' width={50}
                    height={50}>

                    </Image>
                   

                    CoffeeLover
                </div>

<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-sky-50" >
              Home
            </Link>
            <Link href="/Services" className="mr-5 hover:text-sky-50">
              Services
            </Link>
            <Link href="/testimonials" className="mr-5 hover:text-sky-50">
              Testimonials
            </Link>
            <Link href="/contact" className="mr-5 hover:text-sky-50">
              Contact
            </Link>
          </nav>


                <div  data-aos="fade-down"
                data-aos-once="true" data-aos-delay="500">
 <OrderButton 
                    icon={FaCoffee} label='Order'></OrderButton>
                </div>
               

            </div>

        </div>
     
        
        
        </div>
  )
}

export default Navbar;