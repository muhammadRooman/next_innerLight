 

 
import Image from 'next/image';
import Link from "next/link"; 

export default function FooterBase() { 
    console.log('FooterBase component is rendering');

    return (
        <> 
         <footer className="bg-[#F3F3F3] lg:pt-[84px] lg:pb-[23px] pt-[44px] pb-[15px]">
            <div className="container mx-auto">
                <div className="header-inner mx-auto">
                    <div className="footer-logo text-center">
                        <Link href="#" className='inline-block'><Image src="/logo.png" width={170} height={120} alt="logo white" className='mx-auto md:mb-9 mb-5 '/></Link>
                    </div>
                    <div className="nav-menu flex lg:mb-14 mb-8 justify-center">
                        <nav className="flex items-center  md:flex-row flex-col">
                            <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">بيت</Link>  
                            <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">معلومات عنا</Link> 
                            <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">الدورات</Link>
                            <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">فوائد</Link>
                            <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">الاشتراك</Link>
                            <Link href="#" className="text-black py-1.5  text-xl  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">Blog</Link>  
                        </nav> 
                    </div>
                    <p className='text-lg flex items-center justify-center'><Image src="/copyright.svg" width={20} height={20} alt="logo white" className='mr-2'/>  Copyright Reserved Innerlight</p>
                </div>
            </div>
         </footer>
        </>
    )
}





 
 
