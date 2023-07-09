import test from '../../public/assets/hydrop.jpg'
import Image from 'next/image'
import pig from '../../public/assets/pigg.png'
import fly from '../../public/assets/fly.jpg'
const WhatWeOffer = () => {

    const services = [
        {
            icon: "/assets/pigselling.jpg",
            service: "Pig selling",
            desciption: "We provide high-quality pigfor sale, carefully bred and raised with utmost care."
        },
        {
            icon: "/assets/circular.png",
            service: "Circular Economy Solutions",
            desciption: "Assist pig farmers in adopting circular economy practices by helping them design and implement waste management systems. "
        },
        // {
        //     icon: "/assets/hydrop.jpg",
        //     service: "Hydroponic Fodder Production",
        //     desciption: "Provide hydroponic systems and expertise to produce nutrient-rich fodder for pig farms."
        // },
        // {
        //     icon: "/assets/fly.jpg",
        //     service: "Black Soldier Fly Integration",
        //     desciption: "Offer consultancy and support for integrating black soldier flies into pig farming operations."
        // },
     
    

    ]


    const services2 = [
    
        {
            icon: "/assets/manure.png",
            service: "Manure selling",
            desciption: "Our nutrient-rich pig manure is available for purchase, offering an excellent organic fertilizer for your crops and gardens."
        },
        {
            icon: "/assets/breeding.png",
            service: "Breeding",
            desciption: "Partner with us for professional pig breeding services. Ensuring proper mating and reproduction"
        },
  
    ]
    return (
        <>
            <section className='bg-[#FFF9F9] px-40 py-10 mt-10'>
                <div className='flex flex-col gap-4 items-center mb-12'>
                    <h2 className="text-primary-green font-bold text-2xl">What We Offer</h2>
                    <p className="text-dark-blue">Experience excellence in pig farming with our comprehensive suite of services</p>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex flex-col gap-5 '>
                        {services.map((service, index) => {
                            return (
                                <div key={index} className=' flex flex-col gap-2   rounded p-5'>
                                   {/* <div className='flex items-center'> */}
                                    <Image src={service.icon} alt="test" width={100} height={100} className='rounded-full'/>
                                    {/* <div> */}
                                        <p className=' text-dark-blue w-4/5 '>{service.service}</p>
                                      {/* </div> */}
                                        <p className=' text-sm'>{service.desciption}</p>
                                    {/* </div> */}
                                </div>
                            )
                        }
                        )}
                    </div>
                    <div className='col-span-2 flex flex-col gap-5 items-center justify-center'>
                    <div className=' flex flex-col gap-2 items-start  p-5 rounded w-1/2'>
                                   {/* <div className='flex items-center'> */}
                                    <Image src={fly} alt="test" width={100} height={100} className='rounded-full'/>
                                    {/* <div> */}
                                        <p className='w-3/5 text-left text-dark-blue'>Black Soldier Fly Integration</p>
                                      {/* </div> */}
                                        <p className=' text-left text-sm'>Offer consultancy and support for integrating black soldier flies into pig farming operations.</p>
                                    {/* </div> */}
                                </div>
                        {/* <Image src={pig} alt="test" width={100} height={100} className='w-3/5' /> */}
      

                    </div>
                    <div className='flex flex-col gap-5'>
                    {services2.map((service, index) => {
                            return (
                                <div key={index} className=' flex flex-col gap-2 items-start  p-5 rounded'>
                                   {/* <div className='flex items-center'> */}
                                    <Image src={service.icon} alt="test" width={100} height={100} className='rounded-full'/>
                                    {/* <div> */}
                                        <p className='w-3/5 text-left text-dark-blue'>{service.service}</p>
                                      {/* </div> */}
                                        <p className=' text-left text-sm'>{service.desciption}</p>
                                    {/* </div> */}
                                </div>
                            )
                        }
                        )}

                    </div>
                </div>
                {/* <section className='grid grid-cols-2 px-44 gap-20'>

            {services.map((service, index) => {
                return(
                    <div key={index} className='flex gap-5 items-center'>
                        <Image src={service.icon} alt="test" width={200} height={50}/>
                        <div>
                        <p className='font-bold text-primary-green'>{service.service}</p>
                        <p>{service.desciption}</p>
                        </div>

                    </div>
                )
            }
            )}

        </section> */}
            </section>
        </>
    );
}

export default WhatWeOffer;