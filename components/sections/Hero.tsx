import Button from "../ui/Button";
import PageWrapper from "../wrappers/PageWrapper";

const Hero = () => {
    return (
        <section className="relative">
            <div className="hero w-full h-[84vh]">

            </div>
            <div className="bg-black/30 absolute top-0 w-full h-[84vh]">

                <div className="mx-auto max-w-[75rem] py-36 flex flex-col gap-5">
                    <div>
                    <h1 className="text-white font-extrabold uppercase text-5xl">WELCOME TO  TECHSWINE FARM</h1>
                    <div className="h-2 w-28 bg-primary-green mt-3"></div>
                    </div>
                    

                    <p className="text-white text-3xl w-2/5 font-semibold tracking-[1px] leading-[50px]">Where Technology Meets
                        Sustainable Swine Production.</p>

                        <Button text="About" className="w-32 bg-primary-green text-white rounded" />
                </div>
            </div>

        </section>
    );
}

export default Hero;