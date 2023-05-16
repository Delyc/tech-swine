import { SectionTitle } from "../typography/Headings";
import PageWrapper from "../wrappers/PageWrapper";

const Services = () => {

    const services = [
        {
            icon: "",
            service:"Pig selling",
            desciption: "We provide high-quality pigfor sale, carefully bred and raised with utmost care."
        },
        {
            icon: "",
            service:"Manure selling",
            desciption: "Our nutrient-rich pig manure is available for purchase, offering an excellent organic fertilizer for your crops and gardens."
        },
        {
            icon: "",
            service:"Breeding",
            desciption: "Partner with us for professional pig breeding services. Ensuring proper mating and reproduction"
        },
    ]

    return ( 
            <section className=" bg-dark-blue gap-10 ">
        <PageWrapper>
            <section className="flex mt-20 flex-col gap-10 items-center py-10">

                <h2 className="text-primary-green font-bold text-2xl">Our Services</h2>
                <p className="text-white">Experience excellence in pig farming with our comprehensive suite of services</p>
                <div className="flex flex-col lg:flex lg:flex-row gap-10 lg:px-20 justify-center items-center">
                    {services.map((service, index) => {
                        return(
                            
                                <div className="flex gap-4 items-center lg:w-1/3 bg-black/20 rounded py-5 px-8">
                                        {/* <div className="bg-primary-green rounded-full w-12 h-12"></div> */}
                                        <div>
                                            <p className="font-bold text-white">{service.service}</p>
                                            <p className="lg:w-5/6 text-white/70 mt-3 leading-[30px]">{service.desciption}</p>
                                            </div>
                                </div>
                        )
                    })}
                </div>
                </section>
        </PageWrapper>

            </section>
     );
}
 
export default Services;