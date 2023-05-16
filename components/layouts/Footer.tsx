import { Clock, Email, Location, Phone } from "../ui/svgs";

const Footer = () => {
    return ( 
        <section className="bg-dark-blue mt-20">
            <section className="mx-auto max-w-[75rem] py-16 flex justify-between">
            <div className="">
                <h3 className="font-bold text-white text-xl uppercase">Address</h3>
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
                        info@gmail.com
                    </li>
                    <li className="flex items-center gap-2">
                        <Clock />
                        8AM - 6PM
                    </li>
                </ul>

            </div>

            <div>
                <h3 className="uppercase text-white font-bold text-xl">Working hours</h3>
                <ul className="text-white/70 flex flex-col gap-3 mt-5 ">
                <li className="flex justify-between gap-10">
                    <p>Monday - Friday            </p>
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

            <div>
                <h3 className="uppercase text-white font-bold text-xl">useful links</h3>
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

            <div>
                <h3 className="uppercase text-white font-bold text-xl">useful links</h3>
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