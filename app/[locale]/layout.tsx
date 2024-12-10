import Header from "@/components/Header/HeaderBase";
import Footer from "@/components/Footer/FooterBase";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={locale === 'ar' ? 'rtl' : ''}>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header locale={locale} />
            {children}
            <Footer/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}