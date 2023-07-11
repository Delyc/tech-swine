'use client'

import Link from "next/link";
import Button from "../ui/Button";
import { Menu } from "../ui/svgs";
import { useState } from "react";
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const handleMenuShow = () => {
        setShowMenu(!showMenu)
    }
    return (
        <section className="relative font-sans h-[10vh]">
            <nav className="flex justify-between items-center bg-white xl:px-20 py-3 fixed w-full z-50 px-6">
     
                <Link href="#" className="text-primary-green font-extrabold text-3xl">SADR</Link>

                <button className="" onClick={handleMenuShow}>
                    <Menu />
                </button>
                {showMenu && <ul className="absolute bg-white right-0 p-6 shadow-xl top-14 flex flex-col items-center gap-6 text-dark-blue md:hidden">
                <Link href="#">Home</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Gallery</Link>
                    <a href="https://forms.gle/CJM2zjBV1fHW1cAk8" target="_b">
                        <Button className="bg-primary-green text-white font-semibold rounded-[5px] py-2" text="Contact us" />
                    </a>
                    </ul>}

                <ul className="flex items-center gap-12 text-dark-blue hidden md:block">
                    <Link href="#">Home</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Gallery</Link>
                    <a href="https://forms.gle/CJM2zjBV1fHW1cAk8" target="_b">
                        <Button className="bg-primary-green text-white font-semibold rounded-[5px]" text="Contact us" />
                    </a>
                    {/* <Link href="#">Shop</Link>
                    <Link href="#">Blog</Link> */}
                </ul>

            </nav>
        </section>
    );
}
export default Navbar;