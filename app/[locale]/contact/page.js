import ContactUs from "@/components/Contact/ContactUs";
import ContactForm from "@/components/Contact/ContactForm";
import Head from "@/app/[locale]/contact/head"; // Import DefaultTags component

export default function Contact() {
    return (
        <>
            <Head/>
            <ContactUs />
            <ContactForm />
        </>
    );
}
