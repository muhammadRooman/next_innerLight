"use client";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function SpiritualCard({ webinarEvenData }) {
  const t = useTranslations("SpiritualCard");
  const currentPath = usePathname();
  const router = useRouter(); 
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // State to toggle all data
  const token = localStorage.getItem("authToken");
  // Dynamically sliced data based on `showAll` state
  const displayedData = showAll ? webinarEvenData : webinarEvenData.slice(0, 3);

  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
    setLoading(true);
    const loaderTimeout = setTimeout(() => setLoading(false), 500); // Simulate loader delay
    return () => clearTimeout(loaderTimeout); 
  }, [currentPath]);

  if (loading) {
    return <FullPageLoader />;
  }

  const handleSubmit = async (id) => {
   try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/join-webinar/${id}`,
      {}, 
      {
        headers: {
          "Authorization": `Bearer ${token}` 
        }
      }
    );
    if(response.data.success === 1){
      router.push(`/${language}/thank-you`);
      // toast.success(language === "en" ? "webinar join successfully" : "الانضمام إلى الندوة عبر الإنترنت بنجاح");
    }
    else{
      toast.error(language === "en" ? response.data.message : " لم يتم العثور على الرمز المميز");
    }
  } catch (error) {
  }
};

const truncateText = (text) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : text;
};
 
  return (
    <>
      <section className="bg-[#EFEFEF] relative flex items-center justify-start lg:pt-4 lg:pb-14 ">
        <div className="2xl:container xl:container lg:container mx-auto lg:max-0  ">
          {displayedData?.map((event, index) => (
            <div
              key={index}
              className="blog-wrap flex flex-wrap gap-5 pt-10 pb-10 border-b-2 border-[#D0D0D0] last:border-0 first:pt-0"  >
              {/* Date Card */}
              <div className="date-wrap w-[161px] h-[188px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:flex hidden">
              <h1 className="xl:text-40 lg:text-[30px] text-[25px] font-bold leading-[46px] text-center text-[#0C0101]">
            {new Date(event.date).getDate()}
            <span className="block"> {new Date(event.date).toLocaleString(language === "en" ? "en-US" : "ar", { month: "short" }).toUpperCase()}</span>
          </h1>
              </div>
              {/* Image Card */}
              <div
                className={`bg-center blog-image lg:w-[375px] lg:h-[400px] h-[280px] w-full flex justify-center items-end rounded-10 overflow-hidden p-5 ${event.image} bg-cover relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[#FFFFFF00] before:via-[#00000019] before:to-[#000000C6] before:opacity-100 before:content-['']`}
              >
                 <Image
                       src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${event?.thumbnailPic}`}
                       alt={language === "en" ? event?.name : event?.name_ar }
                      layout="fill"
                      className="object-cover mx-auto w-full"
                    />
                {/* <h1 className="text-white relative z-10 2xl:text-2xl font-bold text-center">
                  {event.title}
                </h1> */}
                <div className="date-wrap w-[100px] h-[100px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:hidden lg:flex absolute top-3 left-3">
                <h1 className="xl:text-40 lg:text-[20px] text-[18px] font-bold lg:leading-[25px] leading-6  text-center text-[#0C0101]">
                  {event.date.split(" ")[0]}
                  <span className="block">{event.date.split(" ")[1]}</span>
                </h1>
              </div>
              </div>
              {/* Content Card */}
              <div className="blog-card-content flex-1 xl:max-w-[calc(100%-541px)] lg:max-w-[calc(100%-400px)]  max-w-[100%] shadow-color bg-white rounded-10  py-8 xl:px-12 p-6">
                <h4 className="xl:text-32  text-[24px]  font-bold">{language === "en" ? event?.name : event?.name_ar }</h4>
                <div className="shap bg-shap-bg max-w-[262.97px] bg-no-repeat rtl:rotate-[180deg] min-h-[42px] text-center flex items-center justify-center xl:my-7 my-5">
                  <p className="mt-0 text-white md:text-lg rtl:rotate-[180deg] px-2">{event.type}</p>
                </div>
                <p className="text-lg"> {language === "en"  ? truncateText(event?.shortDescription) : truncateText(event?.shortDescription_ar)  }
                </p>
                <div className="btn-wrap mt-10">
                <button
                  onClick={()=>handleSubmit(event._id)}
                    className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg"
                    href="#"
                  >
                    {t("enrollnow")}
                    </button>
                </div>
              </div>
            </div>
          ))}
              {/* Show "More" button only if data is more than 3 */}
              {webinarEvenData.length > 3 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-primary text-black py-2 px-4 rounded text-center"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t("show_less") : t("show_more")}
            </button>
          </div>
        )}
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
