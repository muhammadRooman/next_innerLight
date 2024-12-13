"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpNow() {

    const t = useTranslations("SignUpNow") || ((key) => key);
    const [phoneNumber, setPhoneNumber] = useState("");
    const currentPath = usePathname();
    const [language, setLanguage] = useState('')
    const [signUpData, setSignUpData] = useState({ fullName: "", lastName: "", email: "" });
    const [otpCode, setotpCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorVerifyMessage, setErrorVerifyMessage] = useState("");
    const [otpGenerated, setOtpGenerated] = useState(false);
    const [disabledPhoneOTP, setDisabledPhoneOTP] = useState(false);
    const [profileImage, setProfileImage] = useState(null); // For image upload
    const [imageName, setImageName] = useState("");
    const [imageError, setImageError] = useState("");
    const [OtpMessage, setOtpMessage] = useState("");
    const [validationErrors, setValidationErrors] = useState({
        fullName: "",
        lastName: "",
        email: "",
    });

    // fetched cmsWeb
    useEffect(() => {
        const lang = currentPath.split('/')[1] || 'en';
        setLanguage(lang);
    }, [currentPath]);


    const handleSendOTP = async () => {
        if (!phoneNumber) {
            setErrorMessage("Phone number is required.");
            return;
        }
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/generate-otp`,
                {
                    phoneNumber,
                    userExist: 0 // Add userExist here as part of the request body
                }
            );

            // OTP generated successfully
            if (response?.data?.success) {
                setOtpGenerated(true); // Show OTP input field
                toast.success(response.data.message || "OTP sent successfully!");
                setOtpMessage(response.data.message || ""); // Display success message
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error generating OTP:", error);
        }
    };

    const handleVerifyOTP = async () => {
        if (!otpCode) {
            setErrorVerifyMessage("OTP is required.");
            return;
        }
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/verify-otp`,
                {
                    phoneNumber,
                    otpCode // Add userExist here as part of the request body
                }
            );
            // OTP generated successfully
            if (response?.data?.success) {
                console.log("response", response.data);
                toast.success(response.data.message || "OTP verified successfully!")
                setErrorVerifyMessage("")
                setDisabledPhoneOTP(true)
            } else {
                toast.error(response?.data?.message || "OTP verification failed.");
            }
        } catch (error) {
            toast.error("Failed to Verify OTP. Please try again.");

        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // Check if a file was selected
        if (file) {
            const fileSizeInMB = file.size / (1024 * 1024); // Convert size to MB
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

            // Validate the file type
            if (!allowedTypes.includes(file.type)) {
                toast.error("Please upload a valid image file (JPG, PNG).");
                return;
            }
            // Validate the file size (e.g., max size 5MB)
            if (fileSizeInMB > 5) {
                toast.error("File size exceeds 5MB. Please upload a smaller image.");
                return;
            }
            setProfileImage(URL.createObjectURL(file));  // Preview the image
            setImageName(file.name);
        }
    };

    const handleSubmit = async () => {
        let errors = {};

        // Validate form fields
        if (!signUpData?.fullName) {
            errors.fullName = "Full name is required.";
        }
        if (!signUpData?.lastName) {
            errors.lastName = "Last name is required.";
        }
        if (!signUpData?.email) {
            errors.email = "Email is required.";
        }
        // Validate image upload
        if (!profileImage) {
            errors.profileImage = "Profile image is required.";
            setImageError("Please upload a profile image."); // Set image-specific error
        }
        // If there are validation errors, show them and stop the form submission
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }
        try {
            const formData = new FormData();
            formData.append("fullName", signUpData?.fullName);
            formData.append("lastName", signUpData?.lastName);
            formData.append("phoneNumber", phoneNumber);
            formData.append("email", signUpData?.email);
            formData.append("profileImage", profileImage || ""); // Append the image

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/signup`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log("response Token", response.data.token);
            if (response?.data?.status === 1) {
                localStorage.setItem("authToken", response.data.token);
                toast.success(language === "en" ? response.data.message : response.data.message_ar);
            } else {
                toast.error(language === "en" ? response.data.message : response.data.message_ar);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        }
    };


    return (
        <>
            <section className=" bg-gray-light  relative flex items-center justify-start py-16 ">
                <div className="2xl:container xl:container lg:container mx-auto lg:max-0  px-5">
                    <div className="heading-box text-center xl:mb-11 mb-8">
                        <h5 className="text-info-color 2xl:text-2xl font-black">
                            {t("moments_of_serenity")}
                        </h5>
                        <h2 className="xl:text-40 lg:text-[30px] text-[25px]  font-bold">
                            {t("sign_up_now")}
                        </h2>
                        <p className="2xl:text-2xl text-xl font-normal">
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
                                    onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                                    placeholder={t("full_name")}
                                />
                                {validationErrors?.fullName && <p style={{ color: "red" }}>{validationErrors?.fullName}</p>}
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    value={signUpData?.lastName}
                                    onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                                    placeholder={t("last_name")}
                                />
                                {validationErrors?.lastName && <p style={{ color: "red" }}>{validationErrors?.lastName}</p>}
                            </div>
                            <div class="form-group lg:mb-0 mb-4">
                                <div className="btn-icon relative">
                                    <input
                                        type="text"
                                        name="PhoneNumber"
                                        id="PhoneNumber"
                                        disabled={disabledPhoneOTP || OtpMessage}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                                        placeholder={t("phone_number")}
                                    />
                                    {errorMessage && (
                                        <span className="text-red-500 text-sm mt-2">{errorMessage}</span>
                                    )}
                                    <button disabled={disabledPhoneOTP || OtpMessage} onClick={handleSendOTP} class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute lg:w-[149px] w-[100px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color">
                                        {t("send_OTP")}
                                    </button>

                                </div>
                            </div>
                            {otpGenerated && <div class="form-group lg:mb-0 mb-4">
                                <div className="btn-icon relative">
                                    <input
                                        type="text"
                                        name="otp"
                                        id="otp"
                                        disabled={disabledPhoneOTP}
                                        onChange={(e) => setotpCode(e.target.value)}
                                        className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                                        placeholder="OTP"
                                    />
                                    {errorVerifyMessage && (
                                        <span className="text-red-500 text-sm mt-2">{errorVerifyMessage}</span>
                                    )}
                                    <button disabled={disabledPhoneOTP} onClick={handleVerifyOTP} class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color">
                                        {t("verify")}
                                    </button>
                                </div>
                            </div>
                            }
                            <div class="form-group lg:mb-0 mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={signUpData?.email}
                                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6"
                                    placeholder={t("email")}
                                />
                                {validationErrors?.email && <p style={{ color: "red" }}>{validationErrors?.email}</p>}
                            </div>
                            {disabledPhoneOTP &&
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
                                            <input type="file" onChange={handleImageChange} id="upload_picture" className="hidden" />
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
                                </div>
                            }
                            {profileImage && (
                                <div className="mt-4">
                                    <img src={profileImage} alt="Preview" className="w-[100px] h-[100px] object-cover rounded" />
                                </div>
                            )}
                            {
                                !profileImage ? imageError && <p style={{ color: "red" }}>{imageError}</p> : ""
                            }
                        </div>
                    </div>
                    <div className="book-you-button flex-wrap  flex lg:justify-between items-center mt-10 justify-center text-center ">
                        <p className="text-black lg:order-none order-2  text-lg mb-3 lg:mt-0 mt-2 ">
                            {t("already_have_an_account")}{" "}
                            <Link href="#" className="text-info-color font-bold ">
                                {t("sign_in")}
                            </Link>
                        </p>
                        <button
                            disabled={!disabledPhoneOTP}
                            onClick={handleSubmit}
                            className={!disabledPhoneOTP ? "lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient " : "lg:text-lg block lg:w-[181px] w-full lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover  lg:text-lg block lg:w-[181px] w-full  "}
                        >
                            {t("sign_up")}
                        </button>
                    </div>
                </div>
            </section >
            <ToastContainer />
        </>
    )
}