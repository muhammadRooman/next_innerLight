"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';

export default function SignIn() {
  const router = useRouter();
  const t = useTranslations("SignUpNow");
  const [phoneNumber, setPhoneNumber] = useState("");
  const currentPath = usePathname();
  const [language, setLanguage] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVerifyMessage, setErrorVerifyMessage] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [disabledPhoneOTP, setDisabledPhoneOTP] = useState(false);
  const [OtpMessage, setOtpMessage] = useState("");

  // fetched
  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
  }, [currentPath]);

  const handleSendOTP = async () => {
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/generate-otp`,
        {
          phoneNumber,
          userExist: 1, 
        }
      );

      // OTP generated successfully
      if (response?.data.success) {
        setOtpGenerated(true); // Show OTP input field
        setOtpMessage(response.data.message || "");
        toast.success(response.data.message);
        setErrorMessage("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/verify-otp`,
        {
          phoneNumber,
          otpCode, // Add userExist here as part of the request body
        }
      );
      // OTP Verified successfully
      if (response?.data?.success) {
        toast.success(response.data.message);
        setErrorVerifyMessage("");
        setDisabledPhoneOTP(true);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(t("failed_to_Verify_OTP"));
    }
  };

  const handleSubmit = async () => {
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return;
    }
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
    }
 
    try {
      const formData = new FormData();   
      formData.append("phoneNumber", phoneNumber);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/login`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      
      if (response?.data?.status === 1) {
        window.localStorage.setItem('accessToken', response.data.data.accessToken);
        router.push(`/${language}/thank-you`);
      } else {
        toast.error(
          language === "en" ? response.data.message : response.data.message_ar
        );
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <section className=" bg-gray-light  relative flex items-center justify-start py-16 ">
        <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
          <div className="heading-box text-center xl:mb-11 mb-8">
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("sign_in_now")}</h2>
            <p className="2xl:text-2xl text-xl font-normal">
              {t("fill_the_form_below_our_representatives_respond_you")}
            </p>
          </div>
          <div>
            <div className="lg:grid lg:grid-cols-2  gap-6">
              <div className="form-group lg:mb-0 mb-4">
                <div className="btn-icon relative">
                  <PhoneInput
                    international
                    defaultCountry="US" // Default country code
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    disabled={disabledPhoneOTP || OtpMessage}
                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                    placeholder={t("phone_number")}
                  />
                  <button
                    disabled={disabledPhoneOTP || OtpMessage}
                    onClick={handleSendOTP}
                    className="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute lg:w-[149px] w-[100px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color"
                  >
                    {t("send_OTP")}
                  </button>
                </div>
                {errorMessage && (
                  <span className="text-red-500 text-sm mt-2">
                    {errorMessage}
                  </span>
                )}
              </div>
              {otpGenerated && (
                <div class="form-group lg:mb-0 mb-4">
                  <div className="btn-icon relative">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      disabled={disabledPhoneOTP}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                      placeholder="OTP"
                    />
                    <button
                      disabled={disabledPhoneOTP}
                      onClick={handleVerifyOTP}
                      class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color"
                    >
                      {t("verify")}
                    </button>
                  </div>
                  {errorVerifyMessage && (
                    <span className="text-red-500 text-sm mt-2">
                      {errorVerifyMessage}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="book-you-button flex-wrap  flex lg:justify-between items-center mt-10 justify-center text-center ">
            <p className="text-black lg:order-none order-2  text-lg mb-3 lg:mt-0 mt-2 ">
              {t("dont_have_account")}
              <Link
                href={`/${language}/signin`}
                className="text-info-color font-bold ml-4"
              >
                {t("register")}
              </Link>

            </p>
            <button
              // disabled={!disabledPhoneOTP}
              onClick={handleSubmit}
              className={
                !disabledPhoneOTP
                  ? "lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient "
                  : "lg:text-lg block lg:w-[181px] w-full lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover"
              }
            >
              {t("login")}
            </button>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}
