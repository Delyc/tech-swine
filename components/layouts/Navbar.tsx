import Link from "next/link";
import Button from "../ui/Button";
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mx-auto max-w-[75rem] py-5">
            <Link href="#" className="text-primary-green font-extrabold text-3xl">Techswine</Link>
                <ul className="flex gap-10 text-dark-blue">
                    <Link href="#">Home</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Blog</Link>

                </ul>

            <Button className="border border-primary-green text-primary-green" text="Support us"/>

        </nav>
    );
}

export default Navbar;