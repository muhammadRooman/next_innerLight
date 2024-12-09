import Image from 'next/image';
import Link from "next/link"; 

export default function SubscribeUs() {
  return (
    <>
     <section className='SubscribeUs-wrap'> 
        <div class="SubscribeUs-card  shadow-shadow-color rounded-10 lg:py-9 lg:px-8 p-5">
            <h1 className='2xl:text-2xl text-xl font-bold text-center mb-6'> اشترك معنا</h1> 
            <form className='form-group mb-7'>
              <div className='icon-wrap relative'>
                 <button type='submit' className=" absolute left-0 lg:top-3 top-5 ml-auto flex lg:w-[20px] w-[15px] origin-center rotate-180"><Image src="/arrow.png" alt="logo white"  width={20} height={20}   /></button>
                 <input id="email" name="email" type="email" placeholder="أدخل عنوان البريد الإلكتروني" class="pl-3 pr-9 border-[#CBCBCB] outline-0 lg:text-xl text-sm bg-transparent block w-full border-0 text-gray-900 border-b-2 py-3 placeholder:text-[#0F0202] focus:none text-right" />
              </div> 
            </form>
            <div className='follow-us flex items-center justify-between direction'>
              <h5 className='2xl:text-2xl text-xl mb-0 font-bold ml-3'>تابعنا</h5>
                <nav className="flex items-center justify-center">
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7  rounded-full flex items-center justify-center bg-[#BD081C] bor ease-in-out me-2"><Image src="/facebook.png" width={20} height={20} alt="facebook" className='lg:w-[20px] w-4'/></Link>  
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center bg-[#FFFC00] ease-in-out me-2"><Image src="/twitter.png" width={20} height={20} alt="twitter" className='lg:w-[20px] w-4'/></Link> 
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center bg-[#1275B1] ease-in-out me-2"><Image src="/linkedin.png" width={20} height={20} alt="linkedin" className='lg:w-[20px] w-4'/></Link> 
                  <Link href="#" className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center bg-[#3B5998] ease-in-out me-2"><Image src="/playSolid.png" width={20} height={20} alt="playSolid" className='lg:w-[20px] w-4'/></Link> 
                </nav> 
            </div>
        </div> 
     </section>
    </>
  )
}
