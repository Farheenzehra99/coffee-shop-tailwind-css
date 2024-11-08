import Image from 'next/image';
import React from 'react'

interface ServiceItemProps{
    img:string;
    name:string;
    description:string;
    aosDelay:string;



}
const  ServiceItem : React.FC<ServiceItemProps>=(
    {aosDelay, description,  img, name})=> {
  return (
    <div  data-aos="fade-down"
    data-aos-once="false" data-aos-delay={aosDelay} 
    className='rounded-2xl bg-white group hover:bg-light 
    relative shadow-xl md:max-w-96 w-full'>
        
        <div className='h-36'>
            <Image alt='' src={img} width={200} className='mx-auto
            transform -translate-y-14 group-hover:scale-110 transition
            duration-500'
            height={200}></Image>


        </div>

        <div className='p-4 text-center'>
            <div className='w-full'>
                <h1 className='text-xl lg:text-2xl font-bold font-poppins 
                text-gray-700 group-hover:text-gray-950 transition duration-500'>{name}</h1>
                <p className=' text-gray-500 group-hover:text-gray-900  
                transition duration-500'>{description}</p>


            </div>


        </div>
        
        
  </div>
  )
}

export default ServiceItem;