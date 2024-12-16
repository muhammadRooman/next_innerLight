"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactUs() {
    const t = useTranslations("Contact");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                alert(t("alert"))
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert("Something went wrong.PLease try again")
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <section className="bg-[#F7F7F7] lg:p-24 md:p-12 p-6">
                <div className="2xl:container xl:container lg:container mx-auto flex justify-center">
                    <div className="form-wrapper bg-yoga bg-cover xl:p-16 p-8 rounded-l-lg lg:flex hidden">
                        <div className="box-overlay shadow-shadow-color2 rounded-10 bg-[#F9F9F9] xl:px-24 xl:py-11 px-6 py-6 flex items-center flex-col justify-center">
                            <img src="/mobileimg.png" alt="mobile img" />
                            <h3 className="text-[32px] text-[#343434] font-bold">{t("download")}</h3>
                            <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank">
                            <img
                                src="/AppStore.png"
                                alt="app store img"
                                className="w-[222px] mt-8"
                            />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank">
                            <img
                                src="/GooglePlay.png"
                                alt="google img"
                                className="w-[222px] mt-8"
                            />
                            </Link>
                           
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 xl:w-1/2 lg:w-1/2 w-full">
                        <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold  text-[#0A448F] lg:text-left text-center">
                            {t("contact_us")}
                        </h2>
                        <p className="mb-6 text-[#000000] text text-[18px] font-normal lg:text-left text-center">
                            {t("form")}
                        </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t("your_name")}
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none sm:text-sm/6 mb-5"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t("email")}
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none sm:text-sm/6 mb-5"
                            />
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t("contact_no")}
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none sm:text-sm/6 mb-5"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t("message")}
                                className="placeholder:text-[#11171F] w-full p-4 border border-[#DEDEDE] focus:outline-none rounded-lg min-h-[180px] text-[18px] resize-none"
                            ></textarea>
                            <div className="btn-wrap text-right lg:mt-14 mt-10">
                                <button
                                    type="submit"
                                    className="py-2.5 px-11 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:text-lg"
                                >
                                    {t("submit")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
