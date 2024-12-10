import Image from 'next/image';

export default function UpcomingWorkshop() {
  // Array of workshop data
  const workshops = [
    {
      id: 1,
      imgSrc: "/MediaImg1.png",
      description: "Discuss how support groups and community connections can enhance the healing process.",
    },
    {
      id: 2,
      imgSrc: "/MediaImg2.png",
      description: "Discover strategies to improve mental wellness through mindfulness techniques.",
    },
    {
      id: 3,
      imgSrc: "/MediaImg3.png",
      description: "Learn about the benefits of active listening and empathy in community settings.",
    },
  ];

  return (
    <section className="SubscribeUs-wrap mt-6 lg:mb-0 mb-3">
      <div className="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-9 lg:px-8 p-5">
        <h1 className="2xl:text-2xl text-xl font-bold text-center mb-6">Upcoming Workshop</h1> 
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
            <div className="mediaContent ml-5 xl:max-w-[307px] max-w-full">
              <p className='lg:text-lg text-sm text-left'>{workshop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
