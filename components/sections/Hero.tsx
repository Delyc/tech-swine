import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative">
            <div className="hero w-full h-[90vh]">

                <div className="flex flex-col gap-5 justify-center h-full items-center">
                <h1 className="text-white text-[42px] font-bold">Welcome to Swine And Dine Ranch</h1>
                <p className="text-white w-1/3 text-center leading-[30px] tracking-[1px] font-medium">From Waste to Wealth: Empowering Circular Swine Production for a Sustainable Future</p>
                <Button className="bg-primary-green uppercase rounded text-sm font-medium text-white" text="Explore more"/>
                </div>
               
            </div>
            {/* <div className="absolute top-0 w-full h-[90vh]">
                <div className="mx-auto lg:max-w-[75rem] py-20 lg:py-36 flex flex-col gap-5 px-6 lg:px-0">
                    <div>
                        <h1 className="text-white font-extrabold  text-2xl lg:text-5xl">WELCOME TO  <span className="text-primary-green font-extrabold"> <i>Swine And Dine Ranch</i></span></h1>
                    </div>
                    <p className="text-white/80 text-lg lg:text-xl lg:w-2/5 font-semibold tracking-[1px] lg:leading-[40px]">
                        From Waste to Wealth: Empowering Circular Swine Production for a Sustainable Future
                    </p>
                    <Button text="About" className="w-32 bg-primary-green text-white rounded" />
                </div>
            </div> */}
        </section>
    );
}
export default Hero;