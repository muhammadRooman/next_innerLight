import Image from "next/image";
import Link from "next/link";



export default function WeOffer() {
    return (
        <>
            <section>
                <div class="bg-white xl:pt-[130px] xl:pb-[126px] lg:pt-[90px] lg:pb-[90px] py-10">
                    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  px-5">

                        <div>
                            <div class="heading-box text-left xl:mb-11 mb-6">
                                <h5 class="text-info-color 2xl:text-2xl font-black">WHAT WE OFFER</h5>
                                <h2 class="xl:text-40 lg:text-[30px] text-[20px] font-bold">Transformative Resources, And Supportive Community</h2>
                            </div>
                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">Holistic Healing For Mind, Body, And Spirit: </span>We believe in nurturing the whole person, which is why our resources and guidance focus on aligning your physical, emotional, and spiritual health. By addressing all aspects of your well-being, we help you achieve a more balanced, harmonious life.
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">Holistic Healing For Mind, Body, And Spirit: </span>We understand that everyone’s path is different. That’s why we offer personalized coaching, consultations, and tailored resources to support your specific needs, goals, and challenges. You’ll never feel alone on your journey.
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">Holistic Healing For Mind, Body, And Spirit: </span>Our team consists of skilled spiritual guides, wellness coaches, and practitioners who bring years of experience to support your growth. Their wisdom and compassion create a safe and nurturing environment for your transformation.
                            </p>

                            <p class="text-lg xl:mb-7 mb-5">
                                <span className="text-info-color 2xl:text-2xl font-bold">Holistic Healing For Mind, Body, And Spirit: </span>Join a community of individuals who share your values and goals. Engage with others, share experiences, and find inspiration in a space that promotes empathy, kindness, and collective healing.
                            </p>
                        </div>

                        <div class="ml-auto w-full">
                            {/* <div className="yoga_image_wrap w-[566px] h-[715px]">
                                <img src="/yoga.png" alt="Yoga Image" class="rounded-lg shadow-md w-full" />
                            </div> */}
                            <div className='relative lg:max-w-[566px] lg:min-h-[715px]  min-h-[450px] w-full  shadow-shadow-color bg-white p-2.5 ml-auto rounded-10 my-7'>
                                <Image src="/yoga.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}