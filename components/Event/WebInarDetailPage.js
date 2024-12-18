"use client"
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTranslations } from "next-intl";
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import FullPageLoader from '../fullPageLoader.js/FullPageLoader';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const fetcher = (url) => fetch(url).then((r) => r.json());

const WebInarDeatilPage = () => {
  const router = useRouter();
  const t = useTranslations("SpiritualCard");
  const params = useParams(); // Use useParams here to access the dynamic id
  const { detaiId } = params; // Get id from params
  const currentPath = usePathname();
  const [language, setLanguage] = useState('')
  const [webinarDetailPage, setWebinarDetailPage] = useState(null)
  const token = localStorage.getItem("authToken");

  // Fetch WebInarDetailPage data using SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/event/${detaiId}`,
    fetcher
  );


useEffect(() => {
  if (data) {
    setWebinarDetailPage(data?.event);
  }
  const lang = currentPath.split('/')[1] || 'en';
  setLanguage(lang);
}, [data, currentPath]);

// Handle Loading and Error States
if (isLoading) return <FullPageLoader />;
if (error) return <div>Error: {error.message}</div>;

const handleSubmit = async (id) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/join-webinar/${id}`,
      {},
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );

   if (response.data.success === 1) {
      toast.success(
        language === "en"
          ? "Webinar joined successfully"
          : "الانضمام إلى الندوة عبر الإنترنت بنجاح"
      );
      router.push(`/${language}/thank-you`);
    } else if (response.data.status === 0) {
      // Token expired or invalid
      toast.error(
        language === "en"
          ? "Your session has expired. Please sign up again."
          : "انتهت صلاحية الجلسة. الرجاء التسجيل مرة أخرى."
      );
      setTimeout(() => {
        router.push(`/${language}/signup`);
      }, 4000); 
    } else {
      toast.error(
        language === "en"
          ? response.data.message
          : "لم يتم العثور على الرمز المميز"
      );
    }
  } catch (error) {
    console.error("Error in joining webinar:", error);

    // Handle token expiry or other errors
    if (error.response?.status === 401 || error.response?.status === 403) {
      toast.error(
        language === "en"
          ? "Your session has expired. Please sign up again."
          : "انتهت صلاحية الجلسة. الرجاء التسجيل مرة أخرى."
      );
      router.push(`/${language}/signup`);
    } else {
      toast.error(
        language === "en"
          ? "An unexpected error occurred. Please try again."
          : "حدث خطأ غير متوقع. حاول مرة اخرى."
      );
    }
  }
};

    return (
        <div>
          {/* Section 1: Banner Image */}
          <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
             src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${webinarDetailPage?.bannerPic}`}
              alt="Banner"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            </div>
          </section>
    
          {/* Section 2: Product Details */}
          <section className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <Image
                   src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${webinarDetailPage?.thumbnailPic}`}
                  alt="Product"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
    
              {/* Product Info */}
              <div>
                <h2 className="text-3xl font-bold mb-4"> {language === "en" ? webinarDetailPage?.name : webinarDetailPage?.name_ar}</h2>
                <p className="text-gray-600 mb-4">
                {/* {webinarDetailPage?.shortDescription} */}
                {language === "en" ? webinarDetailPage?.shortDescription : webinarDetailPage?.shortDescription_ar}
                </p>
                <div className="mb-6">
                  <span className="text-xl font-semibold">{t("price")}:</span>{" "}
                  <span className="text-xl text-green-600">$199.99</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold">{t("date")}</span>{" "}
                  <span className="text-xl text-green-600">
                {new Date(webinarDetailPage?.date).toLocaleDateString(language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold">Time</span>{" "}
                  <span className="text-xl text-green-600">{webinarDetailPage?.time}</span>
                </div>
                <div className="mb-6">
              <span className="text-xl font-semibold">Outline:</span>
              <div
                className="text-xl text-green-600"
                dangerouslySetInnerHTML={{ __html: webinarDetailPage?.description }}
              />
            </div>
               <button
                  onClick={()=>handleSubmit(webinarDetailPage._id)}
                    className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg"
                  >
                    {t("enrollnow")}
                    </button>
              </div>
            </div>
          </section>
      <ToastContainer />

        </div>
      );
}

export default WebInarDeatilPage
