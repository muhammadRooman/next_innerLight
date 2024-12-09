
 
import Image from 'next/image';
import Link from "next/link"; 

export default function MeditationConsultation() { 

    return (
        <>
           <section className="MeditationConsultation-wrap "> 
               <div className='MeditationConsultation-innner flex lg:min-h-[997px]  min-h-[860px]'>
                    <div className='Meditation-left-img bg-meditation-left w-full bg-cover lg:max-w-[calc(100%-70%)] max-w-full min-h-full lg:block hidden'></div>
                    <div className='Meditation-content bg-meditation-bg w-full bg-cover pt-20 lg:pl-16 2xl:pr-[230px] xl:pr-[140px] lg:pr-[45px] px-4 lg:max-w-[calc(100%-30%)] max-w-full min-h-full'>
                      <div className='Meditation-content-inner  pb-11'>
                      <div className='max-w-[887px]'>
                      <div className='heading-box xl:mb-9 mb-4'>
                            <h5 className='text-info-color 2xl:text-2xl font-black text-right'>الضوء الداخلي</h5>
                            <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold text-right'>التأمل والتشاور</h2>
                        </div>
                        <p className='text-lg xl:text-2xl font-normal mb-4 text-right'>استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة. سواء كنت جديدًا في مجال التأمل أو تتطلع إلى تعميق ممارستك، فإن استشاراتنا توفر التوجيه والوضوح والأدوات لمساعدتك في التغلب على التحديات وإيجاد السلام الداخلي. تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.</p>
                        <p className='text-lg xl:text-2xl font-bold text-[#753892] text-right'>تواصل مع الخبراء المتعاطفين الذين يكرسون جهودهم لرعاية نموك ورفاهيتك.</p>
                      </div>
                          <div className='static-img relative lg:left-[-166px] mt-8 lg:w-[calc(100%+166px)] w-full '>
                            <div class="md:grid md:grid-cols-3 items-center">
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg1.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                                <div className='col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg2.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div>
                                <div className=' col-span-1  '> 
                                    <div className='static-img-wrap relative  min-h-[380px] rounded-10 overflow-hidden'>
                                       <Image src="/MmeditationImg3.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                                    </div>
                                </div> 
                            </div>
                        </div>  
                        <div className='book-you-button md:flex md:justify-between items-center mt-8 justify-center text-center direction'>
                           <h5 className='text-black xl:text-40 lg:text-[30px]  text-[25px]  font-bold mb-3'>احجز استشارتك</h5> 
                           <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg block">اتصل بنا</Link>
                        </div>
                      </div>
                    </div>
                </div>       
            </section>
        </>
    )
}

