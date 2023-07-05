import { Mission, Vision } from "../ui/svgs";
import PageWrapper from "../wrappers/PageWrapper";

const MissionVision = () => {
    const missionVision = [
        {
            icon: <Mission />,
            text: "Mission",
            description: "To drive the transformation of pig farming through innovative technology, sustainable practices, and a commitment to animal welfare while promoting environmental stewardship and supporting the livelihoods of our farming community."
        },
        {
            icon: <Vision />,
            text: "Vision",
            description: " Creating a future where pig farming integrates seamlessly with technology, ensuring optimal animal health and welfare, minimizing environmental impact, and meeting the growing demand for safe and nutritious pork worldwide."
        },

    ]
    return (
        <PageWrapper>
            <section className=" flex flex-col lg:flex lg:flex-row justify-center gap-10 lg:gap-20 py-10">
                {missionVision.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center flex-col gap-4 lg:w-1/3">
                            <div className="flex gap-5 items-center">
                                {item.icon}
                                <p className="font-bold text-dark-blue ">{item.text}</p>
                            </div>
                            <p className="text-center leading-[30px]">{item.description}</p>
                        </div>
                    )
                })}
            </section>
        </PageWrapper>
    );
}

export default MissionVision;