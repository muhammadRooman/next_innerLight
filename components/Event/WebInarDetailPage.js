import Image from 'next/image';
import React from 'react'
import { useTranslations } from "next-intl";


const WebInarDeatilPage = () => {
    const t = useTranslations("SpiritualCard");
    return (
        <div>
          {/* Section 1: Banner Image */}
          <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/banner.jpg" // Replace with your image path
              alt="Banner"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            </div>
          </section>
    
          {/* Section 2: Product Details */}
          <section className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <Image
                  src="/product.jpg" // Replace with your product image
                  alt="Product"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
    
              {/* Product Info */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Product Name</h2>
                <p className="text-gray-600 mb-4">
                  This is a detailed description of the product. It provides all
                  necessary information about the product including features and
                  specifications.
                </p>
                <div className="mb-6">
                  <span className="text-xl font-semibold">Price:</span>{" "}
                  <span className="text-xl text-green-600">$199.99</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold">Date & Time:</span>{" "}
                  <span className="text-xl text-green-600">12/18/2024 , 5:24px</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold">Outline</span>{" "}
                  <span className="text-xl text-green-600">this test heading</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
                {t("enroll_now")}
                </button>
              </div>
            </div>
          </section>
        </div>
      );
}

export default WebInarDeatilPage
