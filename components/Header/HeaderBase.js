"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default active link

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations("NavbarLinks");
  const router = useRouter();

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = activeLink; // Stay on the same page after language change
    router.push(`/${newLocale}/${path}`, { shallow: true });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set clicked link as active
    setIsMenuOpen(false); // Close menu for mobile
  };

  return (
    <>
      <header
        className={`sticky top-0 z-20 transition-colors duration-300 ${isScrolled ? "bg-[#EBEBEB] shadow-shadow-color" : "bg-[#F7F7F7]"
          }`}
      >
        <div className="2xl:container xl:container lg:container mx-auto">
          <div className="header-inner flex justify-between items-center xl:px-5 px-3 xl:py-2 lg:py-2">
            {/* Logo */}
            <div className="logo">
              <Link href={`/${locale}/home`}>
                <Image
                  src="/logo.png"
                  width={108}
                  height={86}
                  alt="logo white"
                  className="brand-logo md:w-[108px] w-[90px]"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav
              className={`ml-auto fixed top-0 left-0 w-full h-full bg-white z-10 lg:relative lg:bg-transparent lg:w-auto lg:h-auto flex flex-col lg:flex-row justify-center items-center transition-transform duration-300 ${isMenuOpen
                ? "translate-x-0 bg-btn-gradient"
                : "-translate-x-full lg:translate-x-0"
                }`}
            >
              {/* Close Button for Mobile */}
              <button
                className="absolute top-10 right-10 lg:hidden text-black focus:outline-none"
                aria-label="Close Menu"
                onClick={toggleMenu}
              >
                <Image src="/close.svg" alt="Close" width={30} height={30} />
              </button>
              {/* Menu Links */}
              {["home", "about", "benefits", "contact", "event"].map((link, index) => (
                <Link
                  key={index}
                  href={`/${locale}/${link}`}
                  className={`py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:2xl:me-[99px] rtl:xl:me-[88px] font-medium ${activeLink === link
                      ? "text-[#1796D8]" 
                      : "lg:text-black text-white hover:text-[#1796D8]"
                    }`}
                  onClick={() => handleLinkClick(link)}
                  prefetch={true}
                >
                  {t(link)}
                </Link>
              ))}


            </nav>

            <div className="flex items-center">
              {/* Language Selector */}
              <select
                value={locale}
                onChange={handleLanguageChange}
                className="rounded-md px-4 py-2 bg-transparent lg:text[15px] lg:text-black font-medium xl:text-xl"
              >
                <option value="en">English</option>
                <option value="ar">{t("ar")}</option>
              </select>

              {/* Join Now */}
              <Link
                href="#"
                className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4"
              >
                {t("download_app")}
              </Link>

              {/* Hamburger Menu for Mobile */}
              <button
                className="ml-4 lg:hidden text-black focus:outline-none"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              >
                <Image
                  src={isMenuOpen ? "/close.svg" : "/menu.svg"}
                  alt="Menu"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
