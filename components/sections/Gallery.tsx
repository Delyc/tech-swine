import PageWrapper from "../wrappers/PageWrapper"
import Image from "next/image";
import image1 from '../../public/assets/image3.png'
import image2 from '../../public/assets/image3.png'
import image3 from '../../public/assets/image3.png'
import image4 from '../../public/assets/image4.png'
import image5 from '../../public/assets/image5.png'
import image6 from '../../public/assets/image6.png'
import image7 from '../../public/assets/image7.png'
import image8 from '../../public/assets/image8.png'

const Gellery = () => {

    return (
        <PageWrapper>
            <section className="mt-20 flex flex-col items-center font-sans">
                <h2 className="text-primary-green font-bold text-2xl">Gallery</h2>
                <p className="text-dark-blue">Experience excellence in pig farming with our comprehensive suite of services</p>
                <section className="grid grid-cols-3 gap-2 lg:grid-cols-4 mt-10 lg:px-10 lg:px-28 lg:gap-5">
                    <Image src={image1} alt="pig"/>
                    <Image src={image2} alt="pig"/>
                    <Image src={image3} alt="pig"/>
                    <Image src={image4} alt="pig"/>
                    <Image src={image5} alt="pig"/>
                    <Image src={image6} alt="pig"/>
                    <Image src={image1} alt="pig"/>
                    <Image src={image5} alt="pig"/>
                    <Image src={image7} alt="pig"/>
                    <Image src={image8} alt="pig"/>
                    <Image src={image8} alt="pig"/>
                    <Image src={image3} alt="pig"/>
                </section>
            </section>
        </PageWrapper>
    );
}
export default Gellery;