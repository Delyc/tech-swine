import Button from "../ui/Button";
const Demo = () => {
    return (
        <section className="relative font-sans">
            <div className="hero w-full h-[70vh] lg:h-[60vh]">
                <div className="flex flex-col gap-5 justify-center h-full items-center px-14 lg:px-0">
                    <h1 className="text-white text-4xl lg:text-[42px] font-bold">Welcome to Swine And Dine Ranch</h1>
                    <p className="text-white lg:w-1/3 text-center leading-[30px] tracking-[1px] font-medium">From Waste to Wealth: Empowering Circular Swine Production for a Sustainable Future</p>
                    <Button className="bg-primary-green uppercase rounded text-sm font-medium text-white" text="Explore more" />
                </div>
            </div>
        </section>
    );
}

export default Demo;