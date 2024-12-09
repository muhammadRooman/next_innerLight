import Image from 'next/image';

export default function UpcomingWorkshop() {
  // Array of workshop data
  const workshops = [
    {
      id: 1,
      imgSrc: "/MediaImg1.png",
      description: "ناقش كيف يمكن لمجموعات الدعم والاتصالات المجتمعية أن تعزز عملية الشفاء.",
    },
    {
      id: 2,
      imgSrc: "/MediaImg2.png",
      description: "اكتشف استراتيجيات لتحسين الصحة العقلية من خلال تقنيات اليقظة الذهنية.",
    },
    {
      id: 3,
      imgSrc: "/MediaImg3.png",
      description: "تعرف على فوائد الاستماع النشط والتعاطف في بيئات المجتمع.",
    },
  ];

  return (
    <section className="SubscribeUs-wrap mt-6 lg:mb-0 mb-3 direction">
      <div className="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-9 lg:px-8 p-5">
        <h1 className="2xl:text-2xl text-xl font-bold text-center mb-6">ورشة العمل القادمة</h1> 
        {workshops.map((workshop) => (
          <div 
            key={workshop.id} 
            className="mediaObject flex justify-start items-center mb-5"
          >
            <Image 
              src={workshop.imgSrc} 
              alt="Workshop image" 
              width={103} 
              height={94} 
              className="rounded-10 lg:w-[103px] w-20" 
            />
            <div className="mediaContent mr-5 xl:max-w-[307px] max-w-full">
              <p className='lg:text-lg text-sm text-right'>{workshop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
