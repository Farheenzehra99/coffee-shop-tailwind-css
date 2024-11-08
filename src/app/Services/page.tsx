import React from 'react'
import ServiceItem from '../../components/ServiceItem';
import Image from 'next/image';


const ServiceData=[
    {
        id:1,
        img:"/images/expresso.jpg",
        name:"Expresso",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
        aosDelay:"100"
    },
    {
        id:2,
        img:"/images/capachino.jpg",
        name:"Cappicuno",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
        aosDelay:"300"
    },
    {
        id:3,
        img:"/images/americano.jpg",
        name:"Americano",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
        aosDelay:"500"
    },
    {
        id:4,
        img:"/images/latte-coffee.jpg",
        name:"Latte",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
        aosDelay:"700"
    },
]

function Services() {
  return (
    <div className='py-10'>
        <div className='container'>

            <div className='text-center mb-20'>
                <h1 className=' text-amber-950  text-5xl md:text-4xl lg:text-5xl font-second2 font-bold'>
                    Best Coffee For you
                </h1>
                
                <div className='flex justify-center m-4'>
                    <div className='mb-6 h-5 w-full max-w-xl
                     bg-gradient-to-r opacity-50
                      from-primary to-secondary'></div>

                </div>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 gap-14 place-items-center'>

                {ServiceData.map((service)=>(

                   <ServiceItem 
                   aosDelay={service.aosDelay}
                   description={service.description}
                   img={service.img}
                   name={service.name}
                   key={service.id}

                   >


                   </ServiceItem>


                ))}

                

            </div>



        </div>
    </div>
  )
}

export default Services;