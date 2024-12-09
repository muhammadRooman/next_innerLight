import Image from 'next/image';
import Link from "next/link"; 
import SubscribeUs from "@/app/ar/components/SubscribeUs";
import UpcomingWorkshop from "@/app/ar/components/UpcomingWorkshop"; 
import BlogsCard from "@/app/ar/components/BlogsCard"; 
export default function Blogs() {
  return (
    <>
     <section className='blog-wrap bg-gray-light xl:py-[107px]  py-[30px]'>
        <div className="2xl:container xl:container lg:container px-5 mx-auto lg:py-12 py-7">
          <div className="heading-box mb-9 text-right">
            <h5 className="text-info-color 2xl:text-2xl font-black">قم بتعميق ممارستك</h5>
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold  "> المدونات وورش العمل القادمة</h2> 
          </div>
          <div class="xl:grid xl:grid-cols-12 gap-6">
            <div className='col-span-8'> 
                 <div className='blog-card shadow-shadow-color rounded-10 xl:mb-0 mb-6'> 
                    <div className='card-img relative xl:min-h-[521px] lg:min-h-[421px] min-h-[300px]'>
                        <Image src="/BlogCard1.png" alt="BlogCard1 white" layout="fill"  className="rounded-10 object-cover  " />
                    </div> 
                    <div className='card-content lg:p-7 p-5 lg:pb-10 pb-7 text-right'>
                        <h4 className='2xl:text-2xl text-xl font-bold mb-4'>العلاقة بين العقل والجسم: كيف تؤثر الصحة العقلية على الصحة البدنية</h4>
                        <p className='lg:text-lg text-sm'>ناقش كيف يمكن أن تؤثر الصحة العاطفية والنفسية على الصحة البدنية والتعافي. ناقش كيف يمكن أن تؤثر الصحة العاطفية والنفسية على الصحة البدنية والتعافي.</p>
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
