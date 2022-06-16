// NextJS
import Link from 'next/link'
import Image from 'next/image'

// Images
import logo from '../../../public/payLogo.svg'

export default function NavigationBar() {
    return (
        <nav className='absolute top-0 left-0 w-full flex justify-around items-center z-10 pt-12 px-36'>

            {/* Navigation links */}
            <div className='basis-1/2 flex justify-around items-center '>
                <Image src={logo} width={'64'} />
                <Link href='/home'><a>Home</a></Link>
                <Link href='/feature/1'><a>Feature</a></Link>
                <Link href='/about'><a>About Pay</a></Link>
                <Link href='/howItWorks'><a>How it works</a></Link>
            </div>

            {/* Download button */}
            <div className='basis-1/2 text-[14px] text-[#191D2A] flex justify-end'>
                <Link href='#'><a className='p-4 rounded-xl font-semibold bg-white'>DOWNLOAD</a></Link>
            </div>
        </nav>
    )
}