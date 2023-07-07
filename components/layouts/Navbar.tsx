import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
    return (
        <section className="relative font-sans h-[10vh]">
            <nav className="flex justify-between items-center bg-white px-20 py-3 fixed w-full z-50">
                <Link href="#" className="text-primary-green font-extrabold text-3xl">SADR</Link>
                <ul className="flex items-center gap-12 text-dark-blue">
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