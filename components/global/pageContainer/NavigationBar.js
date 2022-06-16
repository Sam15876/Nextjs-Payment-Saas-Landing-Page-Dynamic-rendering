// NextJS
import Link from 'next/link'
import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Images
import logo from '../../../public/payLogo.svg'

export default function NavigationBar() {
    const [downloadCount, setDownloadCount] = useState()
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/downloads')
            const data = await response.json()
            setDownloadCount(data ?? 0)
        }

        fetchData()
    }, [])

    async function handleDownloadClick() {
        const response = await fetch('/api/downloads/increment')
        const data = await response.json()
        setDownloadCount(data)
    }

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
                <button onClick={handleDownloadClick}>
                    <a className='px-4 py-2 rounded-xl bg-white flex flex-col gap-y-1'>
                        <div className='font-semibold'>DOWNLOAD</div>
                        { downloadCount !== undefined && <div className='text-xs'><span className='text-secondary'>{downloadCount}</span> {downloadCount === 1 ? 'download' : 'downloads'}</div> }
                    </a>
                </button>
            </div>
        </nav>
    )
}