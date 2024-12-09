import Image from "next/image";
import Link from "next/link";



export default function ContactUs() {
    return (
        <>
            <section className="bg-[#F7F7F7] lg:p-24 md:p-12 p-6">
                <div className="2xl:container xl:container lg:container mx-auto flex justify-center">
                    <div className="form-wrapper bg-yoga bg-cover xl:p-16 p-8 rounded-l-lg lg:flex hidden">
                        <div className="box-overlay shadow-shadow-color2 rounded-10 bg-[#F9F9F9] xl:px-24 xl:py-11 px-6 py-6 flex items-center flex-col justify-center">
                            <img src="/mobileimg.png" alt="mobile img" />
                            <h3 className="text-[32px] text-[#343434] font-bold">Download Our App</h3>
                            <img src="/AppStore.png" alt="app store img" className="w-[222px] mt-8" />
                            <img src="/GooglePlay.png" alt="google img" className="w-[222px] mt-8" />
                        </div>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-8 xl:w-1/2 lg:w-1/2 w-full">
                        <h2 class="xl:text-40 lg:text-[30px] text-[25px]  font-bold  text-[#0A448F] lg:text-left text-center">Contact Us</h2>
                        <p class="mb-6 text-[#000000] text text-[18px] font-normal lg:text-left text-center">Fill the form below, our representatives will respond to you within 24 hours.</p>

                        <form>
                            <input type="text" placeholder="Your name" class=" placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6 mb-5"/>
                            <input type="email" placeholder="Your name" class=" placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6 mb-5" />
                            <input type="text" placeholder="Contact no." class=" placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6 mb-5" />
                            <textarea placeholder="Message" class="placeholder:text-[#11171F] w-full p-4 border border-[#DEDEDE] focus:outline-none rounded-lg min-h-[180px] text-[18px] resize-none"></textarea>
                            <div className="btn-wrap text-right lg:mt-14 mt-10">
                                <Link href="#" className="py-2.5 px-11 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:text-lg">Submit</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}