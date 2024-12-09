
import LandingPage from "@/app/en/(pages)/landing-page/page";
import Header from "@/app/en/components/Header/HeaderBase";
import Footer from "@/app/en/components/Footer/FooterBase";


export default async function Home() {
  return (
    <>
      <Header  />
      <LandingPage   />
      <Footer />
    </>
  );
}
