import Image from 'next/image';
import Link from "next/link"; 
import { useTranslations } from "next-intl";  

export default function FooterBase( ) {
  const t = useTranslations("NavbarLinks");  
 
  return (
    <>
      <footer className="bg-[#F3F3F3] lg:pt-[84px] lg:pb-[23px] pt-[44px] pb-[15px]">
        <div className="container mx-auto">
          <div className="header-inner mx-auto">
            <div className="footer-logo text-center">
              <Link href="#" className="inline-block">
                <Image src="/logo.png" width={220} height={174} alt="logo white" className="mx-auto md:mb-9 mb-5" />
              </Link>
            </div>
            <div className="nav-menu flex lg:mb-14 mb-8 justify-center">
              <nav className="flex items-center md:flex-row flex-col">
                <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">{t("home")}</Link>
                <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">{t("about")}</Link>
                <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">{t("benefits")}</Link>  
                <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">{t("contact")}</Link>
                <Link href="#" className="text-black py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-lg xl:text-lg lg:text-[15px] hover:text-[#1796D8] font-medium">{t("events")}</Link>
              </nav>
            </div>
            <p className="text-lg flex items-center justify-center">
              <Image src="/copyright.svg" width={20} height={20} alt="logo white" className="mr-2" />
            {t("copyright_reserved_Innerlight")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}