import Image from "next/image";
import Link from "next/link";



export default function DownloadApp() {
    return (
        <>
            <section className="bg-[#1796D8] py-[50px] px-[10px] rounded-t-10">
                <div className="2xl:container xl:container lg:container mx-auto px-5 flex items-center justify-between md:flex-nowrap flex-wrap">
                    <div className="heading-box lg:text-left text-center ">
                        <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold text-white max-w-[750px]">Download The App And Transform Your Journey Today!</h2>
                    </div>
                    <div className='btn-download flex lg:mt-0 mt-4'>
                        <Link href="#" className="mr-3"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className='' /></Link>
                        <Link href="#" className=" block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className='' /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}