import vector1 from '../../public/assets/vector1.png';
import vector2 from '../../public/assets/vector2.png';
import vector3 from '../../public/assets/vector3.png';
import pigg from '../../public/assets/pigg.png';
import Image from 'next/image';
const HowItWorks = () => {
    return (
        <section className='flex justify-center'>
            <section className='relative  py-20 h-[60rem] max-w-[80rem]'>
                <div className='flex justify-center items-center h-full'>
                    <Image src={pigg} alt="pig" className='w-2/5' />
                </div>
                <section className="flex flex-col items-center absolute top-0 bg-[#ffffffd3] w-full py-20 ">
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-3xl text-dark-blue font-bold'>How we work</h1>
                        <p className='text-text-gray w-3/5 text-center'>Zero Waste Champions: Paving the Path to a Greener Future!</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className="w-64 bg-white px-8 py-3 shadow-xl h-44">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p className=''>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                        <Image className='h-44 w-72 mt-10' src={vector1} alt="vector 1" />
                        <div className="w-64 bg-white px-8 py-3 shadow-xl mt-24">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                    </div>
                    <div className='flex justify-end w-1/2'>
                        <Image className='h-44 w-81' src={vector2} alt="vector 1" />
                    </div>

                    <div className='flex w-1/2 -mt-20'>
                        <div className="w-64 bg-white px-8 py-3 shadow-xl">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                    </div>

                    <div className='flex justify-end gap-10 w-3/5'>
                        {/* <div></div> */}
                        <Image className='h-44 w-64' src={vector3} alt="vector 1" />
                        <div className="w-64 bg-white px-8 py-3 shadow-xl mt-14">
                            <div className="w-12 h-12 rounded-full bg-primary-green grid place-content-center">1</div>
                            <p>Experience excellence in pig farming with our comprehensive suite of services</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default HowItWorks;