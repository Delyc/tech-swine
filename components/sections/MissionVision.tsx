import { Mission, Vision } from "../ui/svgs";
import PageWrapper from "../wrappers/PageWrapper";

const MissionVision = () => {
    const missionVision = [
        {
            icon: <Mission />,
            text: "Mission",
            description: "We strive to design out waste, optimize resource utilization, and promote circularity by converting organic waste into valuable resources and repurposing them within the farming system."
        },
        {
            icon: <Vision />,
            text: "Vision",
            description: "To lead the transformation of pig farming towards a sustainable and circular future, where innovative practices and resource efficiency ensure the well-being of livestock, minimize environmental impact, and inspire positive change in the agricultural industry."
        },

    ]
    return (
        <PageWrapper>
            <section className=" flex flex-col lg:flex lg:flex-row justify-center gap-10 lg:gap-20 py-10 font-sans">
                {missionVision.map((item, index) => {
                    return (
                        <div key={index} className="flex i flex-col gap-4 lg:w-1/3 bg-primary-green rounded text-white py-5 px-10">
                            <div className="flex gap-5 items-center">
                                {/* {item.icon} */}
                                <p className="font-bold  ">{item.text}</p>
                            </div>
                            <p className="leading-[30px]">{item.description}</p>
                        </div>
                    )
                })}
            </section>
        </PageWrapper>
    );
}

export default MissionVision;