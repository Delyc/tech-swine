import test from '../../public/assets/hydrop.jpg'
import Image from 'next/image'
const WhatWeOffer = () => {

    const services = [
        {
            icon: "/assets/pigselling.jpg",
            service: "Pig selling",
            desciption: "We provide high-quality pigfor sale, carefully bred and raised with utmost care."
        },
        {
            icon: "/assets/hydrop.jpg",
            service: "Hydroponic Fodder Production",
            desciption: "Provide hydroponic systems and expertise to produce nutrient-rich fodder for pig farms."
        },
        {
            icon: "/assets/fly.jpg",
            service: "Black Soldier Fly Integration",
            desciption: "Offer consultancy and support for integrating black soldier flies into pig farming operations."
        },
        {
            icon: "/assets/circular.png",
            service: "Circular Economy Solutions",
            desciption: "Assist pig farmers in adopting circular economy practices by helping them design and implement waste management systems. "
        },
        {
            icon: "/assets/susfarm.jpg",
            service: "Sustainable Farming Consultancy",
            desciption: "Provide expert advice and consultation on sustainable pig farming practices."
        },
        {
            icon: "/assets/resdev.jpg",
            service: "Research and Development",
            desciption: "Engage in research and development activities to continuously improve and innovate within the field of sustainable pig farming."
        },
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

        <div className='flex flex-col gap-4 items-center mt-32 mb-12'>         
        <h2 className="text-primary-green font-bold text-2xl">What We Offer</h2>
                    <p className="text-dark-blue">Experience excellence in pig farming with our comprehensive suite of services</p>
            </div>
        <section className='grid grid-cols-2 px-44 gap-20'>

            {services.map((service, index) => {
                return(
                    <div key={index} className='flex gap-5 items-center'>
                        <Image src={service.icon} alt="test" width={250} height={250}/>
                        <div>
                        <p className='font-bold text-primary-green'>{service.service}</p>
                        <p>{service.desciption}</p>
                        </div>

                    </div>
                )
            }
            )}

        </section>
        </>
     );
}
 
export default WhatWeOffer;