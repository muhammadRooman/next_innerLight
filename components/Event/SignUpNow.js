import Image from "next/image";
import Link from "next/link"; 

export default function SignUpNow(){

    return(
        <>
        <section className=" bg-gray-light  relative flex items-center justify-start py-16 ">
            <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                <div className="heading-box text-center xl:mb-11 mb-8">
                    <h5 className="text-info-color 2xl:text-2xl font-black">MOMENTS OF SERENITY</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">Sign Up Now</h2>
                    <p className="2xl:text-2xl text-xl font-normal">Fill the form below, our representatives respond you with in 24h.</p>
                </div>  
                <div>
                    <div className="lg:grid lg:grid-cols-2  gap-6">  
                        <div class="form-group lg:mb-0 mb-4"> 
                            <input type="text" name="username" id="username" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder="Full Name" />
                        </div> 
                        <div class="form-group lg:mb-0 mb-4"> 
                            <input type="text" name="Phone Number" id="phone" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder="Phone Number" />
                        </div> 
                        <div class="form-group lg:mb-0 mb-4"> 
                            <input type="password" name="Phone Number" id="password" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder="Password" />
                        </div>
                        <div class="form-group lg:mb-0 mb-4"> 
                            <input type="password" name="Phone Number" id="confirm_password" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder="Confirm Password" />
                        </div> 
                    </div> 
                    <div className='book-you-button flex-wrap  flex lg:justify-between items-center mt-10 justify-center text-center '>
                        <p className='text-black lg:order-none order-2  text-lg mb-3 lg:mt-0 mt-2 '>Already have an account? <Link href="#" className="text-info-color font-bold "> Sign in</Link></p> 
                        <Link href="#" className="lg:order-none order-1   py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover  lg:text-lg block lg:w-[181px] w-full  ">Sign Up</Link>
                    </div> 
                </div>
            </div>
        </section>
        </>
    )
}