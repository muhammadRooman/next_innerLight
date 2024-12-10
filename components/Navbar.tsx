"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl"; 
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };



  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
  <>
   <header className={`sticky top-0 z-20 transition-colors duration-300 ${isScrolled ? "bg-[#EBEBEB] shadow-shadow-color" : "bg-[#F7F7F7]" }`} >
      <div className="2xl:container xl:container lg:container mx-auto">
        <div className="header-inner flex justify-between items-center  xl:px-5 px-3 xl:py-2 lg:py-2">
          {/* Logo */}
          <div className="logo">
            <Link href="#"> <Image src="/logo.png" width={108} height={86} alt="logo white" className="brand-logo md:w-[108px] w-[90px]" />  </Link>
          </div> 
          {/* Navigation Menu */}
          <nav className={`ml-auto fixed top-0 left-0 w-full h-full bg-white   z-10 lg:relative lg:bg-transparent lg:w-auto lg:h-auto flex flex-col lg:flex-row justify-center items-center transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0  bg-btn-gradient" : "-translate-x-full lg:translate-x-0 " }`}
          >
            {/* Close Button for Mobile */}
            <button className="absolute top-10 right-10 lg:hidden text-black focus:outline-none"  aria-label="Close Menu" onClick={toggleMenu}>
              <Image src="/close.svg" alt="Close" width={30} height={30} />
            </button> 
            {/* Menu Links */}
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px]  hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px]  hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px]  hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>Courses </Link>
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px]  hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>Benefits </Link>
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px]  hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>Subscription</Link>
            <Link href="#" className="lg:text-black text-white py-1.5 lg:py-1 2xl:me-[59px] xl:me-[40px] lg:me-[40px] text-xl  xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            {/* <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium text-xl bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg" onClick={() => setIsMenuOpen(false)}> Join Now </Link> */}
          </nav>
          <div className="flex items-center">
          <select
          value={locale}
          onChange={handleLanguageChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="ar">Ar</option>
        </select>
          <div className="lg:ml-2 sm:ml-auto">
            <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg"  >
              Join Now
            </Link>
          </div>
           {/* Hamburger Menu for Mobile */}
           <button className="ml-4 lg:hidden text-black focus:outline-none"  aria-label="Toggle Menu" onClick={toggleMenu} >
            <Image  src={isMenuOpen ? "/close.svg" : "/menu.svg"} alt="Menu" width={30} height={30} />
          </button>
          </div>
        </div>
      </div>
    </header>
  </>

    
    // <div className="w-full flex justify-between border-b py-4 ">
    //   <div className="flex gap-4 items-center text-lg">
    //     <Link href={`/${locale}/`}>{t("home")}</Link>
    //     <Link href={`/${locale}/about`}>{t("about")}</Link>
    //     <Link href={`/${locale}/about/profile`}>{t("profile")}</Link>
    //   </div>
    //   <select
    //     value={locale}
    //     onChange={handleLanguageChange}
    //     className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
    //   >
    //     <option value="en">EN</option>
    //     <option value="ar">Ar</option>
    //   </select>
    // </div>
  );
};

export default Navbar;
