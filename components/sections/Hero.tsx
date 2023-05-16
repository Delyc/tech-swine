import Button from "../ui/Button";
import PageWrapper from "../wrappers/PageWrapper";

const Hero = () => {
    return (
        <section className="relative">
            <div className="hero w-full h-[84vh]">

            </div>
            <div className="bg-black/30 absolute top-0 w-full h-[84vh]">

                <div className="mx-auto lg:max-w-[75rem] py-20 lg:py-36 flex flex-col gap-5 px-6 lg:px-0">
                    <div>
                    <h1 className="text-white font-extrabold uppercase text-2xl lg:text-5xl">WELCOME TO  TECHSWINE FARM</h1>
                    <div className="h-2 w-28 bg-primary-green mt-3"></div>
                    </div>
                    

                    <p className="text-white text-lg lg:text-3xl lg:w-2/5 font-semibold tracking-[1px] lg:leading-[50px]">Where Technology Meets
                        Sustainable Swine Production.</p>

                        <Button text="About" className="w-32 bg-primary-green text-white rounded" />
                </div>
            </div>

        </section>
    );
}

export default Hero;