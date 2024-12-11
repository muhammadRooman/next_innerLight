"use client";
import Image from 'next/image';
import Link from "next/link"; 
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";

export default function Commitment({CommitmentHeader}) { 
    console.log("CommitmentHeader1234567890",CommitmentHeader);
    const t = useTranslations("Commitments");

    const currentPath = usePathname();
    const [language, setLanguage] = useState('');
  
  /**
     * Determine the current language based on the path and set it to state.
     * Defaults to 'en' if no language is found in the path.
     * 
     * Author: Muhammad Rooman
     * Date: 11 December, 2024
     */
    useEffect(() => {
       const lang = currentPath.split('/')[1] || 'en';  // Default to 'en' if language is missing
      setLanguage(lang);
    }, [currentPath]);
  
    return (
        <>
           <section className="commitment-wrap bg-gray-light lg:pt-[102px] xl:pb-[110px] lg:pb-[80px] pt-[60px] pb-[60px]">
                <div className="2xl:container xl:container lg:container mx-auto px-5">
                   <div className='heading-box text-center lg:mb-16 mb-7'>
                      <h5 className='text-info-color 2xl:text-2xl font-black  '>122121{t("innerLight")}</h5>
                      <h2 className='xl:text-40 lg:text-[30px]  text-[25px]  font-bold'>{language === "en" ? CommitmentHeader?.heading_en : CommitmentHeader?.heading_en }</h2>
                   </div>
                   <div class="lg:grid lg:grid-cols-4  items-center ">
                        <div className=' col-span-1  '>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>{language === "en" ? CommitmentHeader?.point1_en : CommitmentHeader?.point1_en }</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full'>
                               <p className='xl:text-lg font-normal'>{CommitmentHeader?.point2_en}</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                               <p className='xl:text-lg font-normal'>{CommitmentHeader?.point3_en}</p>
                            </div>
                        </div> 
                        <div className='col-span-2  '>
                            <div className='relative xl:max-w-[566px] lg:max-w-[440px] max-w-full lg:min-h-[715px] min-h-[450px] shadow-shadow-color bg-white p-2.5 mx-auto rounded-10 my-7'>
                                <Image src="/CommitmentImg.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2.5" />
                            </div> 
                        </div>
                       <div className=' col-span-1 '>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>{CommitmentHeader?.point4_en}</p>
                            </div>
                            <div className='commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>{CommitmentHeader?.point5_en}</p>
                            </div>
                            <div className='commitment-content text-center lg:max-w-[395px] max-w-full mb-4'>
                                <p className='xl:text-lg font-normal'>{CommitmentHeader?.point6_en}</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

