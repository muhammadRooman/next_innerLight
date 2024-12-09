import Image from 'next/image';

export default function BenefitsOfHolistic() {
    const benefits = [
        {
            id: 1,
            image: "/benefitsImg1.png",
            title: "التخصيص",
            description: "احصل على اهتمام شخصي بالإضافة إلى توصيات للارتقاء بتجربة الشفاء الخاصة بك."
        },
        {
            id: 2,
            image: "/benefitsImg2.png",
            title: "مجتمع",
            description: "قم بتطوير اتصال مع شبكة داعمة من الأفراد ذوي التفكير المماثل في رحلات عافية مماثلة."
        },
        {
            id: 3,
            image: "/benefitsImg3.png",
            title: "إمكانية الوصول",
            description: "استمتع بمحتوى عالي الجودة بالإضافة إلى إرشادات الخبراء من مساحة المعيشة الخاصة بك."
        },
        {
            id: 4,
            image: "/benefitsImg4.png",
            title: "المرونة",
            description: "اختر من بين مجموعة متنوعة من الخيارات المصممة خصيصًا لأهدافك وأسلوب حياتك."
        }
    ];

    return (
        <section className="benefits-holistic bg-gray-light pt-3 lg:pb-[107px] lg:pt-[60px] pb-[60px]">
            <div className="2xl:container xl:container lg:container mx-auto px-5">
                <div className="heading-box text-center xl:mb-20 mb-10">
                    <h5 className="text-info-color 2xl:text-2xl font-black">اكتشف</h5>
                    <h2 className="xl:text-40 lg:text-[30px]  text-[25px]  font-bold">فوائد العافية الشاملة</h2>
                </div>
                <div className="lg:grid xl:grid-cols-4 lg:grid-cols-2 gap-7">
                    {benefits.map(benefit => (
                        <div key={benefit.id} className="benefits-card-wrap xl:mb-3 mb-6">
                            <div className="benefits-card text-center">
                                <div className="relative min-h-[280px]">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        layout="fill"
                                        className="object-cover rounded-10"
                                    />
                                </div>
                                <div className="benefits-content">
                                    <h5 className="2xl:text-2xl text-xl  font-bold text-info-color lg:py-5 py-3">{benefit.title}</h5>
                                    <p className="text-lg">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
