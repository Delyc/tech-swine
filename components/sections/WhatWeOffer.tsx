import test from '../../public/assets/hydrop.jpg'
import Image from 'next/image'
import pig from '../../public/assets/pigg.png'
import fly from '../../public/assets/fly.jpg'
import Link from 'next/link'
const WhatWeOffer = () => {

    const services = [
        {
            btnText: "View and Buy",
            icon: "/assets/pigselling.jpg",
            service: "Pig selling",
            desciption: "We provide high-quality pigfor sale, carefully bred and raised with utmost care."
        },
        {
            btnText: "View and Buy",
            icon: "/assets/manure.png",
            service: "Manure selling",
            desciption: "Offering an excellent organic fertilizer for your crops and gardens."
        },
        {
            btnText: "View and Contact us",
            icon: "/assets/breeding.png",
            service: "Breeding",
            desciption: "Partner with us for professional pig breeding services. Ensuring proper mating and reproduction"
        },
        {
            btnText: "View and Book us",
            icon: "/assets/circular.png",
            service: "Circular Economy Solutions",
            desciption: "Assist pig farmers design and implement waste management systems. ",
            tags: ["Black Soldier fly Integration", "Hydroponic Fodder Production"]
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




    ]
    return (
        <>
            <section className='bg-[#FFF9F9] px-10 lg:px-40 py-28 mt-40 lg:mt-10 font-sans'>
                <div className='flex flex-col gap-4 items-center mb-12'>
                    <h2 className="text-primary-green font-bold text-2xl">What We Offer</h2>
                    <p className="text-dark-blue font-sans">Experience excellence in pig farming with our comprehensive suite of services</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 relative'>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='  bg-white shadow-xl rounded p-5' >
                                <div className=' flex flex-col gap-2 pb-14'>
                                    {/* <div className='flex items-center'> */}
                                    <Image src={service.icon} alt="test" width={100} height={100} className='rounded-full' />
                                    {/* <div> */}
                                    <p className='text-[#0B666A] font-bold w-4/5 '>{service.service}</p>
                                    {/* </div> */}
                                    <p className=' text-md text-text-gray font-sans tracking-[o.5px]'>{service.desciption}</p>
                                    {/* </div> */}
                                    <div>
                                        {service.tags?.map((tag, index) => {
                                            return (
                                                <p key={index} className='text-xs text-primary-green'>{tag}</p>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                                <Link href="page-under-construction">
                                <button className='font-medium  bottom-5 border border-primary-green px-5 py-2 bg-primary-green text-white rounded'>{service.btnText}</button>
                        </Link>
                            </div>
                        )
                    }
                    )}
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