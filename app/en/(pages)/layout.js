import Header from "@/app/en/components/Header/HeaderBase";
import Footer  from '@/app/en/components/Footer/FooterBase';

export default async function PagesLayout({children,params: {lng}}) { 
    return (
      <>
        <Header />
          <main>
              {children}
          </main>
        <Footer />
      </>
    )
  }