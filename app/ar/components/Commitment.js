
 
import Image from 'next/image';
import Link from "next/link"; 

export default function Commitment() { 

    return (
        <>
           <section className="commitment-wrap bg-gray-light lg:pt-[102px] lg:pb-[107px] pt-[60px] pb-[60px]">
                <div className="2xl:container xl:container lg:container mx-auto px-5">
                   <div className='heading-box text-center lg:mb-24 mb-7'>
                      <h5 className='text-info-color 2xl:text-2xl font-black  '>الضوء الداخلي</h5>
                      <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold'>الالتزام بنموك الروحي</h2>
                   </div>
                   <div class="lg:grid lg:grid-cols-4  items-center ">
                        <div className=' col-span-1  '>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>نحن ملتزمون بتوجيه الأفراد نحو السلام الداخلي والعافية والنمو الروحي من خلال الممارسات الشاملة.</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>تمزج أكاديميتنا بين ممارسات التأمل والشفاء والرعاية الذاتية لتعزيز التوازن في الجسم والعقل والروح.</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                               <p className='xl:text-lg font-normal'>يتمتع المعالجون والمعلمون المهرة لدينا بسنوات من الخبرة، ويقدمون التوجيه في طرق مثل الريكي والشفاء الصوتي والمزيد.</p>
                            </div>
                        </div> 
                        <div className='col-span-2  '>
                            <div className='relative xl:max-w-[566px] lg:max-w-[440px] max-w-full lg:min-h-[615px] min-h-[515px] shadow-shadow-color bg-white p-2.5 mx-auto rounded-10 my-7'>
                                <Image src="/CommitmentImg.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                            </div> 
                        </div>
                       <div className=' col-span-1 '>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>نحن نؤمن بقوة الدعم المخصص، حيث نلتقي بكل شخص أينما كان في رحلته الفريدة.</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>نحن نعزز بيئة ترحيبية حيث يمكن للأفراد التواصل والتعلم والنمو معًا في مساحة داعمة.</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>تقدم أكاديميتنا الأدوات والإرشادات لإحداث تغيير دائم، وتمكينك من العيش بمزيد من الوضوح والسلام والهدف.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

