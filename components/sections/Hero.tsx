import PageWrapper from "../wrappers/PageWrapper";

const Hero = () => {
    return (
        <section className="relative">
            <div className="hero w-full h-[80vh]">

            </div>
            <div className="bg-black/30 absolute top-0 w-full h-[80vh]">

                <div className="mx-auto max-w-[75rem] py-44">
                    <h1 className="text-white font-extrabold uppercase text-3xl">WELCOME TO  TECHSWINE FARM</h1>
                    <div className="h-2 w-28 bg-primary-green mt-3"></div>
                </div>
            </div>

        </section>
    );
}

export default Hero;