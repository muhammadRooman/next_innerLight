import Image from 'next/image';
import Link from "next/link";

export default function BlogsCard() {
  // Card data array
  const blogCards = [
    {
      id: 1,
      title: "Self-Care Practices for Daily Healing",
      description:
        "Share practical self-care routines, including journaling, meditation, and grounding exercises. Share practical self-care routines.",
      image: "/BlogsCard2.png",
    },
    {
      id: 2,
      title: "Self-Care Practices for Daily Healing",
      description:
        "Share practical self-care routines, including journaling, meditation, and grounding exercises. Share practical self-care routines.",
      image: "/BlogsCard3.png",
    },
    {
      id: 3,
      title: "Self-Care Practices for Daily Healing",
      description:
        "Share practical self-care routines, including journaling, meditation, and grounding exercises. Share practical self-care routines.",
      image: "/BlogsCard4.png",
    },
  ];

  return (
    <section className="blog-wrap bg-gray-light xl:py-9 py-6">
      <div className="lg:grid lg:grid-cols-3 gap-6 ">
        {blogCards.map((card) => (
          <div
            key={card.id}
            className="blog-card shadow-shadow-color rounded-10 mb-6"
          >
            <div className="card-img relative lg:min-h-[243px] min-h-[200px] ">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                className="rounded-10 object-cover"
              />
            </div>
            <div className="card-content lg:p-6 lg:pb-10 p-5 ">
              <h4 className="2xl:text-2xl text-xl font-bold mb-3">{card.title}</h4>
              <p className="lg:text-lg text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
