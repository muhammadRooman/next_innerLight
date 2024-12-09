import Header from "@/app/ar/components/Header/HeaderBase";
import Footer  from '@/app/ar/components/Footer/FooterBase';

export default async function PagesLayout({children}) { 
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