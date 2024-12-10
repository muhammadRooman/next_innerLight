import Image from 'next/image';
import Link from "next/link";

export default function SubscriptionPlan() {
    const subscriptionPlans = [
        {
            id: 1,
            name: "Basic Plan",
            price: "$9.99/month",
            benefits: [
                "Monthly newsletter with healing tips and resources",
                "Access to exclusive articles and videos",
                "Price: $9.99/month"
            ]
        },
        {
            id: 2,
            name: "Premium Plan",
            price: "$19.99/month",
            benefits: [
                "All Basic Plan benefits",
                "Weekly guided meditations and workshops",
                "Access to community forums",
                "Price: $19.99/month"
            ]
        },
        {
            id: 3,
            name: "VIP Plan",
            price: "$49.99/month",
            benefits: [
                "All Premium Plan benefits",
                "Monthly one-on-one coaching session (30 minutes)",
                "Early access to events and retreats",
                "Price: $49.99/month"
            ]
        }
    ];

    return (
        <section className="subscription-plan xl:py-[107px]  py-[60px] bg-SubscriptionPlan-bg bg-cover">
            <div className="2xl:container xl:container lg:container mx-auto px-5">
                <div className="heading-box text-center lg:mb-20 mb-10 max-w-[1087px] ms-auto me-auto">
                    <h5 className="text-info-color 2xl:text-2xl font-black">INNERLIGHT</h5>
                    <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold mb-4 ">Subscription Plan</h2>
                    <p className="2xl:text-2xl text-xl">
                        Experience personalized support on your spiritual journey through tailored meditation sessions and one-on-one consultations with skilled practitioners.
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
                                    Select
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
