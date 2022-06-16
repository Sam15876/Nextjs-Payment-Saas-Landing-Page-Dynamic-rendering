// NextJS
import Image from "next/image"

// Images
import iphoneImage1 from '../../public/iPhone/iPhone-back.png'
import iphoneImage2 from '../../public/iPhone/iPhone-front-charts.png'
import iphoneImage3 from '../../public/iPhone/iPhone-front-cardDetails.png'

export default function FeatureComponent({ feature }) {
    return(
        <div className='w-full flex flex-col items-center mt-44'>

            {/* Centre section */}
            <div className='relative grow max-w-[620px] w-full aspect-square rounded-full bg-primary/[15%]'>

                {/* iPhones*/}
                <div className='w-full absolute flex justify-center translate-x-28 translate-y-12'><Image src={iphoneImage1} width={500} height={500} objectFit='contain' /></div>
                <div className='w-full absolute flex justify-center -translate-x-28'><Image src={iphoneImage3} width={500} height={500} objectFit='contain' /></div>
                <div className='w-full absolute flex justify-center translate-y-32'><Image src={iphoneImage2} width={500} height={500} objectFit='contain' /></div>
            </div>

            <div className='mt-12 max-w-md bg-primary/[15%] flex flex-col justify-center text-center px-6 py-3 shadow-md rounded-lg'>
                <h2 className='font-bold text-3xl py-4'>{feature?.title}</h2>
                <p className='text-lg leading-7 opacity-70 pb-4'>{feature?.content}</p>
            </div>

        </div>
    )
}