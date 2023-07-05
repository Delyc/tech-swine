import { SectionTitle } from "../typography/Headings";
import PageWrapper from "../wrappers/PageWrapper";

const Services = () => {

    const services = [
        {
            icon: "",
            service: "Pig selling",
            desciption: "We provide high-quality pigfor sale, carefully bred and raised with utmost care."
        },
        {
            icon: "",
            service: "Hydroponic Fodder Production",
            desciption: "Provide hydroponic systems and expertise to produce nutrient-rich fodder for pig farms."
        },
        {
            icon: "",
            service: "Black Soldier Fly Integration",
            desciption: "Offer consultancy and support for integrating black soldier flies into pig farming operations."
        },
        {
            icon: "",
            service: "Circular Economy Solutions",
            desciption: "Assist pig farmers in adopting circular economy practices by helping them design and implement waste management systems that utilize black soldier flies and their byproducts."
        },
        {
            icon: "",
            service: "Sustainable Farming Consultancy",
            desciption: "Provide expert advice and consultation on sustainable pig farming practices. Such as such as feed optimization, water conservation, energy efficiency, and environmental impact mitigation."
        },
        {
            icon: "",
            service: "Research and Development",
            desciption: "Engage in research and development activities to continuously improve and innovate within the field of sustainable pig farming."
        },
        {
            icon: "",
            service: "Manure selling",
            desciption: "Our nutrient-rich pig manure is available for purchase, offering an excellent organic fertilizer for your crops and gardens."
        },
        {
            icon: "",
            service: "Breeding",
            desciption: "Partner with us for professional pig breeding services. Ensuring proper mating and reproduction"
        },
    ]

    return (
        <section className="bg-dark-blue gap-10">
            <PageWrapper>
                <section className="flex mt-20 flex-col gap-10 items-center py-10">
                    <h2 className="text-primary-green font-bold text-2xl">What We Offer</h2>
                    <p className="text-white">Experience excellence in pig farming with our comprehensive suite of services</p>
                    <div className="grid grid-cols-3 flex flex-col gap-10 lg:px-20 justify-center items-center">
                        {services.map((service, index) => {
                            return (
                                <div key={index} className="flex gap-4 items-center  bg-black/20 rounded py-5 px-8">
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