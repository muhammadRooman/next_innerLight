import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DownloadApp() {
    const t = useTranslations("Download");
    return (
        <>
            <section className="bg-[#1796D8] py-[50px] px-[10px] rounded-t-10">
                <div className="2xl:container xl:container lg:container mx-auto px-5 flex items-center justify-between md:flex-nowrap flex-wrap">
                    <div className="heading-box lg:text-left text-center ">
                        <h2 className="xl:text-40 rtl:xl:text-[70px] lg:text-[30px] text-[25px] font-bold text-white max-w-[750px]">{t("download")}</h2>
                    </div>
                    <div className='btn-download flex lg:mt-0 mt-4'>
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="mr-3 rtl:ml-14"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className='' /></Link>
                        <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank" className=" block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className='' /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}