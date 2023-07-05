import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
    return (
        <section className="relative h-[10vh]">
            <nav className="flex justify-between items-center bg-white px-10 py-5 fixed w-full z-50">
                <Link href="#" className="text-primary-green font-extrabold text-3xl">SADR</Link>
                <ul className="flex gap-10 text-dark-blue">
                    <Link href="#">Home</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Blog</Link>
                </ul>
                <Button className="border border-primary-green text-primary-green" text="Support us"/>
            </nav>
        </section>
    );
}
export default Navbar;