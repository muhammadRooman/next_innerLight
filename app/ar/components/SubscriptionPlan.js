import Image from 'next/image';
import Link from "next/link";

export default function SubscriptionPlan() {
    const subscriptionPlans = [
        {
            id: 1,
            name: "الخطة الأساسية",
            price: "9.99 دولارًا شهريًا",
            benefits: [
                "نشرة شهرية تحتوي على نصائح وموارد علاجية",
                "الوصول إلى المقالات ومقاطع الفيديو الحصرية",
                "السعر: 9.99 دولارًا شهريًا"
            ]
        },
        {
            id: 2,
            name: "الخطة المميزة",
            price: "19.99 دولارًا شهريًا",
            benefits: [
                "جميع فوائد الخطة الأساسية",
                "تأملات وورش عمل موجهة أسبوعيًا",
                "الوصول إلى منتديات المجتمع",
                "السعر: 19.99 دولارًا شهريًا"
            ]
        },
        {
            id: 3,
            name: "خطة VIP",
            price: "49.99 دولارًا شهريًا",
            benefits: [
                "جميع فوائد الخطة المميزة",
                "جلسة تدريب فردية شهرية (30 دقيقة)",
                "الوصول المبكر إلى الأحداث والخلوات",
                "السعر: 49.99 دولارًا شهريًا"
            ]
        }
    ];

    return (
        <section className="subscription-plan xl:py-[107px]  py-[60px] bg-SubscriptionPlan-bg bg-cover">
            <div className="2xl:container xl:container lg:container mx-auto px-5">
                <div className="heading-box text-center lg:mb-20 mb-10 max-w-[1087px] ms-auto me-auto">
                    <h5 className="text-info-color 2xl:text-2xl font-black">الضوء الداخلي</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold mb-4 ">خطة الاشتراك</h2>
                    <p className="2xl:text-2xl text-xl">
                    استمتع بالدعم الشخصي في رحلتك الروحية من خلال جلسات التأمل المخصصة والمشاورات الفردية مع الممارسين المهرة.
                    </p>
                </div>
                <div className="lg:grid lg:grid-cols-3 gap-7">
                   {/* subscriptionPlans map */}
                    {subscriptionPlans.map(plan => (
                        <div key={plan.id} className="subscription-card shadow-shadow-color rounded-md bg-blue-color text-center lg:px-6 lg:py-12 px-4 py-10  lg:min-h-[485px] min-h-[470px] flex flex-col lg:max-w-[450px] max-w-full mb-6   ">
                            <div className="head">
                                <h4 className="xl:text-32 text-[25px] text-white font-bold">{plan.name}</h4>
                                <h6 className="xl:text-32 text-[25px] text-info-color font-normal mb-9">{plan.price}</h6>
                            </div>
                            <div className="inner-content">
                                {plan.benefits.map((benefit, index) => (
                                    <p key={index} className="lg:text-xl text-lg text-white mt-2">{benefit}</p>
                                ))}
                            </div>
                            <div className="inner-content-footer flex mt-auto justify-center">
                                <Link href="#" className="py-2 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover mt-4 lg:max-w-[110px] w-full ">
                                يختار
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
