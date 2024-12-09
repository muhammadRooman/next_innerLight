
 
import Image from 'next/image';
import Link from "next/link"; 

export default function DownloadOurApp() { 

    return (
        <>
           <section className="DownloadOurApp direction bg-gray-light lg:pt-9 lg:pb-10 py-8">
                <div className="2xl:container xl:container lg:container mx-auto px-5"> 
                    <div class="xl:grid xl:grid-cols-2  "> 
                        <div className='DownloadOurApp-content xl:max-w-[685px] max-w-full lg:pt-20 pt-10 '> 
                            <div className='heading-box text-left mb-3.5'>
                                <h5 className='text-info-color 2xl:text-2xl font-black text-right '>الضوء الداخلي</h5>
                                <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold text-right'>قم بتنزيل تطبيقنا</h2>
                            </div>
                            <p className='text-lg xl:text-2xl font-bold text-[#753892]  mb-7'>تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.</p>
                            <p className='text-lg xl:text-2xl '>استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة.</p>
                            <div className='QR-box mt-9 flex justify-between items-center max-w-[420px]'>
                              <div className='btn-download'>
                                <Link href="#" className=""><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                                <Link href="#" className="mt-9 block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                              </div>
                              <div className='QR'>
                                  <Image src="/QR-Code.png" width={128} height={128} alt="AppStore" className=''/>
                              </div>
                            </div>
                        </div> 
                        <div className='DownloadOurApp-img   '> 
                            <div className='relative xl:min-h-[700px] min-h-[400px]' >
                                <Image src="/DownloadOurApp.png" alt="logo white" layout="fill"  className="rounded-30  lg:object-contain object-contain    p-2.5 xl:w-[400px]    " />
                            </div> 
                        </div> 
                    </div>  
                </div>  
            </section>
        </>
    )
}

