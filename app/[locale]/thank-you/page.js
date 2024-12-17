import DownloadOurApp from "@/components/DownloadOurApp";
import { useTranslations } from "next-intl"; 


export default function ThankYou() {
  const t = useTranslations("ThankYou");

  

  return (
    <>
      <div className="thankYou-wrap bg-gray-light ">
        <div className='heading-box text-left lg:pt-20 pt-10 '>
          <h2 className='xl:text-40 lg:text-[30px] text-[25px] font-bold text-info-color text-center'>{t("thanks_joining_us")}</h2>
        </div>
        <DownloadOurApp />
      </div>
    </>
  );
}
