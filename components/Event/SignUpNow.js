"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import i18nIsoCountries from 'i18n-iso-countries';
import { jwtDecode } from "jwt-decode";

// Register the Arabic locale
i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/ar.json'));

export default function SignUpNow() {
  const router = useRouter();
  const t = useTranslations("SignUpNow");
  const [phoneNumber, setPhoneNumber] = useState("");
  const currentPath = usePathname();
  const [language, setLanguage] = useState("");
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
  });
  const [otpCode, setOtpCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVerifyMessage, setErrorVerifyMessage] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [disabledPhoneOTP, setDisabledPhoneOTP] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // For image upload
  const [profileImagePreview, setProfileImagePreview] = useState(null); // For preview
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState("");
  const [OtpMessage, setOtpMessage] = useState("");
  const [showSignUp, setShowSignUp] = useState(true);
  const [validationErrors, setValidationErrors] = useState({
   fullName: "",
    email: "",
    phoneNumber: "",
    otpCode: "",
  });
  //  const token = localStorage.getItem('authToken');
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const countries = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    { code: "+92", name: "Pakistan" },
    { code: "+20", name: "Egypt" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+971", name: "United Arab Emirates" },
    { code: "+213", name: "Algeria" },
    { code: "+61", name: "Australia" },
    { code: "+33", name: "France" },
    // Add more countries as needed
  ];

  const arabicCountries = [
    { code: "+1", name: "الولايات المتحدة" }, // United States in Arabic
    { code: "+44", name: "المملكة المتحدة" }, // United Kingdom in Arabic
    { code: "+91", name: "الهند" }, // India in Arabic
    { code: "+92", name: "باكستان" }, // Pakistan in Arabic
    { code: "+20", name: "مصر" }, // Egypt in Arabic
    { code: "+966", name: "المملكة العربية السعودية" }, // Saudi Arabia in Arabic
    { code: "+971", name: "الإمارات العربية المتحدة" }, // United Arab Emirates in Arabic
    { code: "+213", name: "الجزائر" }, // Algeria in Arabic
    { code: "+61", name: "أستراليا" }, // Australia in Arabic
    { code: "+33", name: "فرنسا" }, // France in Arabic
    // Add more countries with their Arabic names as needed
  ];
  
  // fetched cmsWeb
  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
  }, [currentPath]);

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerify, setIsOtpVerify] = useState(false);
  const handleSendOTP = async () => {
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return; // Stop execution if phone number is not provided
    }
    // Validate the phone number length (between 8 and 16 digits)
    if (phoneNumber.length < 8 || phoneNumber.length > 16) {
      setErrorMessage(t("phone_number_must_be_between_8_and_16_digits"));
      return; // Stop execution if validation fails
    }
    setIsOtpSent(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/generate-otp`,
        {
          phoneNumber,
          userExist: 0, // Add userExist here as part of the request body
        }
      );

      // OTP generated successfully
      if (response?.data.success) {
        setOtpGenerated(true); // Show OTP input field
        setOtpMessage(response.data.message || "");
        toast.success(language === "en" ? response.data.message : response.data.message_ar );
        setErrorMessage("");
      } else {
        toast.error(language === "en" ? response.data.message : response.data.message_ar );
      setIsOtpSent(false);

      }
    } catch (error) {
      console.error("Error generating OTP:", error);
      setIsOtpSent(false);

    }
  };

  const handleVerifyOTP = async () => {
    if (!otpCode) {
        setErrorVerifyMessage(t("OTP_is_required"));
        return;
    }
    setIsOtpVerify(true)
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
        toast.success(language === "en" ? response.data.message : response.data.message_ar );
        setErrorVerifyMessage("");
        setDisabledPhoneOTP(true);
      } else {
        toast.error(language === "en" ? response.data.message : response.data.message_ar );
    setIsOtpVerify(false)

      }
    } catch (error) {
      toast.error(t("failed_to_Verify_OTP"));
     setIsOtpVerify(false)

    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if a file was selected
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert size to MB
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

      // Validate the file type
      if (!allowedTypes.includes(file.type)) {
        toast.error(t("please_upload_a_valid_image_file"));
        return;
      }
      // Validate the file size (e.g., max size 5MB)
      if (fileSizeInMB > 5) {
        toast.error(t("file_size_exceeds_5MB"));
        return;
      }
      setProfileImage(file); // Preview the image
      setProfileImagePreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleSubmit = async () => {
    let errors = {};

      // Validate fullName (maximum length of 150 characters)
      if (!signUpData?.fullName || signUpData.fullName.trim() === "") {
        errors.fullName = t("full_name_is_required");
    } else if (signUpData.fullName.trim().length > 150) {
        errors.fullName = t("name_should_not_more_then_150_character");
    }

    // Validate email with regex
    if (!signUpData?.email || signUpData.email.trim() === "") {
        errors.email = t("email_is_required");
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(signUpData.email.trim())) {
            errors.email = t("invalid_email");
        }
    }

    // Validate profile image
    if (!profileImage) {
        errors.profileImage = t("profile_image_is_required");
        setImageError(t("please_upload_your_profile_picture"));
    }

    // Validate phone number
    if (!phoneNumber || phoneNumber.trim() === "") {
        setErrorMessage(t("phone_number_is_required"));
        return;
    }

    // Validate OTP
    if (!otpCode) {
        setErrorVerifyMessage(t("OTP_is_required"));
        return;
    }
    // If there are validation errors, show them and stop the form submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("fullName", signUpData?.fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", signUpData?.email);
      formData.append("profileImage", profileImage || "");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/signup`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response?.data?.status === 1) {
        router.push(`/${language}/thank-you`);
        localStorage.setItem("authToken", response.data.token);
      } else {
        toast.error(
          language === "en" ? response.data.message : response.data.message_ar
        );
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };
  const signin = ()=>{
   router.push(`/${language}/signin`);
  }

  const handlePhoneChange = (value) => {
  setPhoneNumber(value); // Set the full phone number with the country code
  };

  // Function to check if the token is expired
  const isTokenExpired = () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("No token found.");
      return true;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      if (currentTime > decoded.exp) {
         localStorage.removeItem("authToken"); // Remove when expired token
        return true;
      } else if (decoded.exp > currentTime) {
        console.log("decoded.exp",decoded.exp);
        console.log("currentTime",currentTime);
       return false;
      }
    } catch (error) {
      localStorage.removeItem("authToken"); // Remove invalid token
      return true;
    }
  };

  useEffect(() => {
    const checkToken = () => {
      if (isTokenExpired()) {
        setShowSignUp(true); // Show sign-up if token is expired or invalid
      } else {
        setShowSignUp(false); // Hide sign-up if token is valid
      }
    };
    checkToken(); // Initial check
    const interval = setInterval(checkToken, 5000); // Check every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);


  return (
    <>{
      showSignUp &&    <section className=" bg-gray-light  relative flex items-center justify-start py-16 ">
      <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
        <div className="heading-box text-center xl:mb-11 mb-8">
          <h5 className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold">
            {t("moments_of_serenity")}
          </h5>
          <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[28px] rtl:text-[24px]">{t("sign_up_now")}</h2>
          <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal">
            {t("fill_the_form_below_our_representatives_respond_you")}
          </p>
        </div>
        <div>
          <div className="lg:grid lg:grid-cols-2  gap-6">
            <div class="form-group lg:mb-0 mb-4">
              <input
                type="text"
                name="FullName"
                id="FullName"
                value={signUpData?.fullName}
                onChange={(e) => {
                  setSignUpData({ ...signUpData, fullName: e.target.value });
                  // Clear the error message as the user starts typing
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    fullName: "", // Clear fullName error message
                  }));
                }}
                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                placeholder={t("full_name")}
              />
             {validationErrors?.fullName && (
            <p style={{ color: "red" }}>{validationErrors?.fullName}</p>
             )}
            </div>
            <div className="form-group lg:mb-0 mb-4">
              <div className="btn-icon select_country relative flex align-baseline">
                {
                  language ==="en" ? <div>
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className="max-w-[154px] placeholder:text-[#11171F] w-full items-center dir_left-t-right rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                </div> : <div>
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className=" max-w-[154px] placeholder:text-[#11171F] w-full items-center dir_left-t-right rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                  >
                    {arabicCountries.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>
                }
             
      <div className="relative w-[80%]">
        <input
          type="text"
          name="PhoneNumber"
          id="PhoneNumber"
          value={`${selectedCountryCode}${phoneNumber}`}
          onChange={(e) => setPhoneNumber(e.target.value.replace(selectedCountryCode, ""))}
          className="pr-[165px] placeholder:text-[#11171F] w-full items-center dir_left-t-right rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"

          placeholder="Enter phone number"
        />
      </div>
              {/* <input
                    type="text"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    disabled={disabledPhoneOTP || OtpMessage}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                    placeholder={t("phone_number")}
                  /> */}

              {/* <PhoneInput
              international
              defaultCountry="OM"
              value={phoneNumber}
              onChange={handlePhoneChange}
              disabled={disabledPhoneOTP || OtpMessage}
              className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
              placeholder={t("phone_number")}
              pattern="^\d{8,16}$" // Enforces a minimum of 8 digits and a maximum of 16 digits
              /> */}

            {/* <select
              onChange={(e) => handlePhoneChange(e.target.value, phoneNumber)}
              value={phoneNumber}
              className="bg-white border-solid border-2 border-[#DEDEDE] focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none sm:text-sm/6 mb-5"
            >
              {countryOptions.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select> */}

            <button
              disabled={isOtpSent || disabledPhoneOTP || OtpMessage} // Disable immediately on click
              onClick={handleSendOTP}
              className="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute rtl:xl:text-[30px] lg:w-[149px] w-[100px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-35px)] min-h-[calc(100%-4px)] shadow-shadow-color"
            >
              {t("send_OTP")}
            </button>
              </div>
              {
               errorMessage && (
                <span className="text-red-500 text-sm mt-2">
                  {errorMessage}
                </span>
              )
            }
            </div>
            {otpGenerated && (
              <div class="form-group lg:mb-0 mb-4">
                <div className="btn-icon relative">
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    // disabled={disabledPhoneOTP}
                    onChange={(e) => setOtpCode(e.target.value.trim())}
                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                    placeholder="OTP"
                  />
                  <button
                    disabled={isOtpVerify}
                    onClick={handleVerifyOTP}
                    class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color"
                  >
                    {t("verify")}
                  </button>
                </div>
                {  !otpCode && errorVerifyMessage && (
                  <span className="text-red-500 text-sm mt-2">
                    {errorVerifyMessage}
                  </span>
                )}
              </div>
            )}
            <div class="form-group lg:mb-0 mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={signUpData?.email}
               
                onChange={(e) => {
                  setSignUpData({ ...signUpData, email: e.target.value })
                  // Clear the error message as the user starts typing
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "", 
                  }));
                }}
                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                placeholder={t("email")}
              />
              {validationErrors?.email && (
                <p style={{ color: "red" }}>{validationErrors?.email}</p>
              )}
            </div>
            {disabledPhoneOTP && (
              <div className="form-group lg:mb-0 mb-4">
                <div className="flex items-center cursor-pointer placeholder:text-[#11171F]  relative  rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px]   min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6">
                  {/* <!-- Label wraps everything --> */}
                  <label
                    for="upload_picture"
                    className="flex items-center w-full"
                  >
                    {/* <!-- Text Section --> */}
                    <span className="flex-1 lg:text-lg text-[#11171F]">
                      {imageName ? imageName : t("upload_picture")}
                    </span>
                    {/* <!-- Hidden Input --> */}
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/jpg,image/webp"
                      onChange={(e) => handleImageChange(e)}
                      id="upload_picture"
                      className="hidden"
                    />
                    {/* <!-- Upload Icon/Button --> */}
                    <span className="cursor-pointer bg-[#1796D8]   text-white flex items-center justify-center  rounded-[4px] w-[74px] absolute  lg:top-2 top-0  right-0 lg:min-h-[calc(100%-16px)] min-h-[100%] lg:right-[6px]">
                      {/* <!-- Icon --> */}
                      <svg
                        class="feather feather-upload"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                    </span>
                  </label>
                </div>
                {profileImagePreview && (
                  <div className="mt-4">
                    <img
                      src={profileImagePreview}
                      alt="Preview"
                      className="w-[100px] h-[100px] object-cover rounded"
                    />
                  </div>
                )}
                {!profileImage && imageError && (
                  <p style={{ color: "red" }}>{imageError}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="book-you-button flex-wrap  flex lg:justify-between items-center mt-10 justify-center text-center ">
          <p className="text-black lg:order-none order-2 text-lg mb-3 lg:mt-0 mt-2 rtl:xl:text-[30px] ">
            {t("already_have_an_account")}{" "}
            <button
             onClick={signin}
             className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]">
              {t("sign_in")}
            </button>
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
            {t("sign_up")}
          </button>
        </div>
      </div>
    </section> 
    }  
      <ToastContainer/>
    </>
  );
}
