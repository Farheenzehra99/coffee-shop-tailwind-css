import React from 'react'
import Image from 'next/image';

function PlayStore() {
  return (
    <div className="bg-[url('/images/beans1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full p-28">
        
        <div className='container'>

            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div data-aos="fade-up" data-aos-duration="200">
                    <h1 className='text-3xl
                    text-light font-semibold md:text-4xl lg:text-5xl
                    pl-3 font-second2'> Coffe cafe is avaible for Andorid and Ios</h1>

                    <div className='flex flex-wrap justify-center items-center mt-12'>
                        <Image alt='' src="/images/app_store.png" width={150} height={120}></Image>
                        <Image alt='' src="/images/play_store.png" width={150} height={120}></Image>

                    </div>


                </div>

                <div></div>



            </div>



        </div>
        
        
    </div>
  )
}

export default PlayStore;