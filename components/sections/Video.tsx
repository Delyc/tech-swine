import PageWrapper from "../wrappers/PageWrapper";
import Image from "next/image";
import bgPig from '../../public/assets/bgPig.png'
import videoPig from '../../public/assets/videoPig.png'
const Video = () => {
    return ( 
        // <section className="relative">
        //       <div className="flex justify-center absolute top-[10rem]">
        //         <h1>hello</h1>
        //         <Image className="w-1/2" src={videoPig} alt="pig"/>
        //     </div>
        <section className="relative mt-20">
          
        <div className="video w-full h-[84vh] relative">
            <Image src={videoPig} alt="pig " layout="fill" className="absolute"/>

        </div>
        <div className="bg-black/70 absolute top-0 w-full h-[84vh]">

            <div className="mx-auto max-w-[75rem] py-36 flex flex-col gap-5">
              

            </div>
        </div>
        {/* </section> */}

    </section>
     );
}
 
export default Video;