
import LandingPage from "@/app/ar/(pages)/landing-page/page";
import Header from "@/app/ar/components/Header/HeaderBase";
import Footer from "@/app/ar/components/Footer/FooterBase";


export default async function Home() {
  return (
    <>
      <Header  />
      <LandingPage   />
      <Footer />
    </>
  );
}
