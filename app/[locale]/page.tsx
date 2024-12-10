import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

import LandingPage from "@/app/[locale]/landing-page/page";   
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;
  const home = messages.NavbarLinks.HomePage;
  
  
  return {
    title,
    home,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <LandingPage />
    </>
  );
}
