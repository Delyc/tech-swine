import vector1 from '../../public/assets/vector1.png';
import vector2 from '../../public/assets/vector2.png';
import vector3 from '../../public/assets/vector3.png';
import pigg from '../../public/assets/pigg.png';
import Image from 'next/image';
import { DashedArrow } from '../ui/svgs';
const HowItWorks = () => {
    return (

        <section className='flex justify-center font-sans'>
            <section className='relative  py-20 h-[60rem] max-w-[80rem]'>
                <div className='flex justify-center items-center h-full'>
                    <Image src={pigg} alt="pig" className='w-2/5' />
                </div>
                <section className='flex flex-col gap-5 bg-[#ffffffd3] absolute  top-0 lg:hidden'>
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-3xl text-dark-blue font-bold'>How we work</h1>
                        <p className='text-text-gray w-3/5 text-center'>Zero Waste Champions: Paving the Path to a Greener Future!</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="w-64 bg-white px-8 py-3 shadow-xl h-44">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p className=''>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                        <DashedArrow />
                        <div className="w-64 bg-white px-8 py-3 shadow-xl h-44">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p className=''>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                        <DashedArrow />
                        <div className="w-64 bg-white px-8 py-3 shadow-xl h-44">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p className=''>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                        <DashedArrow />
                        <div className="w-64 bg-white px-8 py-3 shadow-xl h-44">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p className=''>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                    </div>

                </section>

                <section className="lg:flex lg:flex-col items-center absolute  top-0 bg-[#ffffffd3] w-full py-20 hidden md:block">
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-3xl text-dark-blue font-bold'>How we work</h1>
                        <p className='text-text-gray w-3/5 text-center'>Zero Waste Champions: Paving the Path to a Greener Future!</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className="w-96 bg-white px-8 py-5 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center font-bold text-2xl">1</div>
                            <p className='my-2 text-primary-green font-bold text-xl'>Waste Collection and Segregation</p>
                            <p className='text-text-gray'> Collect and separate organic waste to promote effective waste management and resource utilization.</p>
                        </div>
                        <Image className='h-44 w-72 mt-10' src={vector1} alt="vector 1" />
                        <div className="w-96 bg-white px-8 py-5 shadow-xl mt-24">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center font-bold text-2xl">2</div>
                            <p className='my-2 text-primary-green font-bold text-xl'>Black Soldier Fly Larvae Rearing</p>
                            <p className='text-text-gray'>Utilize black soldier fly larvae to convert organic waste into valuable nutrient-rich biomass.</p>
                        </div>
                    </div>
                    <div className='flex justify-end w-1/2'>
                        <Image className='h-44 w-81' src={vector2} alt="vector 1" />
                    </div>

                    <div className='flex w-1/2 -mt-20'>
                        <div className="w-96 bg-white px-8 py-5 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center font-bold text-2xl">3</div>
                            <p className='my-2 text-primary-green font-bold text-xl'>Utilizing Urine in Hydroponics</p>
                            <p className='text-text-gray'>Employ hydroponic systems to utilize animal urine as a sustainable nutrient source, fostering plant growth and resource efficiency.</p>
                        </div>
                    </div>

                    <div className='flex justify-end gap-10 w-3/5'>
                        {/* <div></div> */}
                        <Image className='h-44 w-64' src={vector3} alt="vector 1" />
                        <div className="w-96 bg-white px-8 py-5 shadow-xl mt-14">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center font-bold text-2xl">4</div>
                            <p className='my-2 text-primary-green font-bold text-xl'>Animal Nutrient Reincorporation</p>
                            <p className='text-text-gray'>Close the loop by feeding the resulting products, such as black soldier fly larvae and hydroponic biomass, back to animals, ensuring efficient utilization of resources in animal nutrition.</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default HowItWorks;