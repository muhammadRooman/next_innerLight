import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function SignUpNow() {
    const t = useTranslations("SignUpNow");


    return (
        <>
            <section className=" bg-gray-light  relative flex items-center justify-start py-16 ">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                    <div className="heading-box text-center xl:mb-11 mb-8">
                        <h5 className="text-info-color 2xl:text-2xl font-black">{t("moments_of_serenity")}</h5>
                        <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">{t("sign_up_now")}</h2>
                        <p className="2xl:text-2xl text-xl font-normal">{t("fill_the_form_below_our_representatives_respond_you")}</p>
                    </div>
                    <div>
                        <div className="lg:grid lg:grid-cols-2  gap-6">
                            <div class="form-group lg:mb-0 mb-4">
                                <input type="text" name="FullName" id="FullName" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder={t("full_name")} />
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <input type="text" name="LastName" id="LastName" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder={t("full_name")} />
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <div className="btn-icon relative">
                                    <input type="text" name="PhoneNumber" id="PhoneNumber" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder={t("phone_number")} />
                                    <button class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute lg:w-[149px] w-[100px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color">Send OTP</button>
                                </div>
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <div className="btn-icon relative">
                                    <input type="text" name="otp" id="otp" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder="OTP" />
                                    <button class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color">Verify</button>
                                </div>
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <input type="email" name="email" id="email" className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6" placeholder={t("email")} />
                            </div>
                            <div className="form-group lg:mb-0 mb-4">
                                <div className="flex items-center cursor-pointer placeholder:text-[#11171F]  relative  rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px]   min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6">
                                    {/* <!-- Label wraps everything --> */}
                                    <label for="upload_picture" className="flex items-center w-full">
                                        {/* <!-- Text Section --> */}
                                        <span className="flex-1 lg:text-lg text-[#11171F]">{t("upload_picture")}</span>
                                        {/* <!-- Hidden Input --> */}
                                        <input type="file" id="upload_picture" className="hidden" />
                                        {/* <!-- Upload Icon/Button --> */}
                                        <span className="cursor-pointer bg-[#1796D8]   text-white flex items-center justify-center  rounded-[4px] w-[74px] absolute  lg:top-2 top-0  right-0 lg:min-h-[calc(100%-16px)] min-h-[100%] lg:right-[6px]" >
                                            {/* <!-- Icon --> */}
                                            <svg class="feather feather-upload" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='book-you-button flex-wrap  flex lg:justify-between items-center mt-10 justify-center text-center '>
                            <p className='text-black lg:order-none order-2  text-lg mb-3 lg:mt-0 mt-2 '>{t("already_have_an_account")} <Link href="#" className="text-info-color font-bold ">{t("sign_in")}</Link></p>
                            <Link href="#" className="lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover  lg:text-lg block lg:w-[181px] w-full  ">{t("sign_up")}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}