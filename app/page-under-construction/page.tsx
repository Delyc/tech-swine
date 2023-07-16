import Link from "next/link";
const test = () => {
    return (
        <>

            <section className="bg-black h-screen w-full flex items-center justify-center text-white text-3xl">
                <Link href="#" className="absolute top-10 left-20 underline animate-bounce">Back </Link>
                <h1>This page is currently under construction !!</h1>
            </section>
        </>
    );
}

export default test;