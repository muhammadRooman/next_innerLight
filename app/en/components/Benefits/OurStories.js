import Image from "next/image";
import Link from "next/link";



export default function OurStories() {
    return (
        <>
            <section className="our-stories bg-SubscriptionPlan-bg bg-cover  pb-20">
                <div className="2xl:container xl:container lg:container mx-auto px-5">

                    <div className='book-you-button md:flex md:justify-between items-center mt-8 justify-center text-center pt-16 pb-7'>
                        <div className="heading-box text-left">
                            <h5 className="text-info-color 2xl:text-2xl font-black">OUR STORIES</h5>
                            <h2 className="xl:text-40 lg:text-[30px]  text-[25px]  font-bold">Real Stories, Real Impact</h2>
                        </div>
                        <Link href="#" className="pt-[10px] pb-[10px] pl-[52px] pr-[52px] text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-20 lg:text-lg block">See All</Link>
                    </div>

                    <div className="max-w-full lg:max-w-[1440px] lg:pt-[60px] lg:pb-[60px] lg:pl-[60px] lg:pr-[60px] 2xl:pl-[112px] 2xl:pr-[112px] 2xl:pt-[84px] 2xl:pb-[84px] bg-white rounded-lg  space-y-8 pt-10 sm:pt-[50px] md:pt-[60px] pb-10 sm:pb-[50px] md:pb-[60px] px-5 sm:px-[40px] md:px-[60px]">
                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px]">A Journey To Inner Peace</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 md:max-w-[750px]">
                                        I was constantly overwhelmed by anxiety, and I felt like I was losing control of my life. Through daily mindfulness meditations and grounding practices shared on this platform, I’ve found a peace I didn’t think was possible. Today, I wake up feeling balanced and optimistic.
                                    </p>
                                    <p className="text-[#1796D8] font-handwriting mt-4">Sophia R.</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>


                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px] content-center">Reconnecting With Purpose</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 max-w-[750px]">
                                        After my father passed away, I felt completely lost. The grief was suffocating. Attending the spiritual health workshop introduced me to guided journaling and prayerful reflection. Slowly, I found strength in the belief that life’s challenges carry deeper meaning. I’m now living each day with renewed purpose.
                                    </p>
                                    <p className="text-[#1796D8] font-handwriting mt-4">Michael L</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex md:flex-row items-start md:items-center xl:justify-between justify-end flex-wrap">
                            <div className="md:flex">
                                <h3 className="text-[24px] font-bold text-[#1796D8] md:max-w-[220px] content-center">Healing Through Community</h3>
                                <div className="singnature-text md:pl-6">
                                    <p className="mt-2 text-[#343434] text-[18px] leading-7 max-w-[750px]">
                                        Being part of the meditation circle has been life-changing. I came here seeking answers, and I found a supportive community that helped me heal from years of emotional trauma. I’ve learned to forgive, let go, and truly embrace self-love.
                                    </p>
                                    <p className="text-[#1796D8] font-handwriting mt-4">Sophia R.</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-0 pr-8">
                                <button className="bg-bgBlue rounded-full p-3 h-16 w-16 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}