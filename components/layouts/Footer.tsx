import { Clock, Email, Location, Phone } from "../ui/svgs";

const Footer = () => {
    return (
        <section className="bg-dark-blue mt-20">
            <section className="mx-auto max-w-[75rem] px-6 lg:px-0 gap-10 py-16 grid grid-cols-4 gap-20 justify-between">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl text-primary-green font-medium">SADR</h1>
                    <p className="text-white/80">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                
                <div className="">
                    <h3 className="font-bold text-white text-md lg:text-xl uppercase">Address</h3>
                    <ul className="flex flex-col gap-3 text-white/80 mt-5">
                        <li className="flex items-center gap-2">
                            <Location />
                            kigali, Rwanda kk135
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone />
                            0781093895
                        </li>
                        <li className="flex items-center gap-2">
                            <Email />
                            delyce35@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock />
                            8AM - 6PM
                        </li>
                    </ul>

                </div>
                <div>
                    <h3 className="uppercase text-white font-bold text-md lg:text-xl">Working hours</h3>
                    <ul className="text-white/70 flex flex-col gap-3 mt-5 ">
                        <li className="flex justify-between gap-10">
                            <p>Mon - Fri            </p>
                            <p>08AM - 6PM</p>
                        </li>
                        <li className="flex justify-between gap-10">
                            <p>Saturday             </p>
                            <p>08AM - 6PM</p>
                        </li>

                        <li className="flex justify-between gap-10">
                            <p>Sunday            </p>
                            <p>08AM - 6PM</p>
                        </li>


                    </ul>
                </div>
                <div className="ml-10">
                    <h3 className="uppercase text-white font-bold text-md lg:text-xl">useful links</h3>
                    <ul className="text-white/70 flex flex-col gap-3 mt-5">
                        <li>
                            Contact us
                        </li> <li>
                            Contact us
                        </li> <li>
                            Contact us
                        </li> <li>
                            Contact us
                        </li>



                    </ul>
                </div>
      
            </section>
        </section>
    );
}

export default Footer;