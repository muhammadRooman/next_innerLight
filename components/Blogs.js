import Image from 'next/image';
import Link from "next/link"; 
import SubscribeUs from "@/components/SubscribeUs";
import UpcomingWorkshop from "@/components/UpcomingWorkshop"; 
import BlogsCard from "@/components/BlogsCard"; 
export default function Blogs() {
  return (
    <>
     <section className='blog-wrap bg-gray-light xl:py-[107px] py-[30px] '>
        <div className="2xl:container xl:container lg:container px-5 mx-auto   pt-7 pb-0">
          <div className="heading-box text-left mb-9    ">
            <h5 className="text-info-color 2xl:text-2xl font-black">DEEPEN YOUR PRACTICE</h5>
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold  ">Blogs And Upcoming Workshops</h2> 
          </div>
          <div class="xl:grid xl:grid-cols-12 gap-6">
            <div className='col-span-8'> 
                 <div className='blog-card shadow-shadow-color rounded-10 xl:mb-0 mb-6'> 
                    <div className='card-img relative xl:min-h-[521px] lg:min-h-[421px] min-h-[300px]'>
                        <Image src="/BlogCard1.png" alt="BlogCard1 white" layout="fill"  className="rounded-10 object-cover  " />
                    </div> 
                    <div className='card-content lg:p-7 p-5 lg:pb-10 pb-7 '>
                        <h4 className='2xl:text-2xl text-xl font-bold max-w-[605px] mb-4'>The Mind-Body Connection: How Mental Health Affects Physical Well-Being</h4>
                        <p className='lg:text-lg text-sm'>Discuss how emotional and psychological health can impact physical health and recovery. Discuss how emotional and psychological health can impact physical health and recovery.</p>
                    </div>
                 </div> 
            </div>
            <div className='col-span-4  '> 
                <SubscribeUs />
                <UpcomingWorkshop   />
            </div>
          </div>
           <BlogsCard />
        </div>
     </section>
    </>
  )
}
