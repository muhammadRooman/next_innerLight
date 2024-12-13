
import Image from 'next/image';
import Link from "next/link"; 
import { useTranslations } from "next-intl";

export default function SubscribeUs() {
  const t = useTranslations("SubscribeUs");
  return (
    <>
     <section className='SubscribeUs-wrap'> 
        <div class="SubscribeUs-card  shadow-shadow-color rounded-10 lg:py-9 lg:px-8 p-5">
            <h1 className='2xl:text-2xl text-xl font-bold text-center mb-6'>{t("subscribeUs")}</h1> 
            <form className='form-group mb-7'>
              <div className='icon-wrap relative'>
                 <input id="email" name="email" type="email" placeholder={t("enter_email_address")} class="pl-3 pr-9 border-[#CBCBCB] outline-0 lg:text-xl text-sm bg-transparent block w-full border-0 text-gray-900 border-b-2 py-3 placeholder:text-[#0F0202] focus:none  " />
                 <button type='submit' className=" absolute left-0 right-0 top-6 ml-auto flex lg:w-[20px] w-[15px] "><Image src="/arrow.png" alt="logo white"  width={20} height={20}   /></button>
              </div> 
            </form>
            <div className='follow-us flex items-center justify-between'>
              <h5 className='2xl:text-2xl text-xl mb-0 font-bold rtl:ml-4'>{t("follow_us")}</h5>
                <nav className="flex items-center justify-center   ml-auto">
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7  rounded-full flex items-center justify-center shadow-shadow-color8 bor ease-in-out me-2"><Image src="/assets/images/social-icon/facebook.png" width={17} height={17} alt="facebook" className='lg:w-[17px] w-4'/></Link>  
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8  ease-in-out me-2"><Image src="/assets/images/social-icon/linkedin.png" width={17} height={17} alt="linkedin" className='lg:w-[17px] w-4'/></Link> 
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"><Image src="/assets/images/social-icon/twitter.png" width={17} height={17} alt="twitter" className='lg:w-[17px] w-4'/></Link>  
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"><Image src="/assets/images/social-icon/pinterest.png" width={17} height={17} alt="pinterest" className='lg:w-[17px] w-4'/></Link> 
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out  "><Image src="/assets/images/social-icon/youtube.png" width={17} height={20} alt="youtube" className='lg:w-[17px] w-4'/></Link> 
                </nav> 
            </div>
        </div> 
     </section>
    </>
  )
}
