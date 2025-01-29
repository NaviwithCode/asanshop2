import React from "react";
import slide1 from "../img/01.webp";
import App from "../App";
import {Helmet} from "react-helmet";
const About = ({title,description,keywords}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>About Us - ASAN Graoup Shop</title>
                <meta name="description" content="Discover how ASAN Group Shop combines innovation, excellence, and vision to drive your success. Explore our About Us page and join the journey to a brighter future." />
                <meta name="keywords" content="phone, laptop, watch,electronic" />
            </Helmet>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  About ASAN Group Shop
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Welcome to ASAN Group Shop, your one-stop destination for all
                  your ecommerce needs. ASAN Group Shop was founded with the
                  mission to provide high-quality products and exceptional
                  service to our customers. Our team is dedicated to curating a
                  diverse selection of products to cater to a wide range of
                  interests and preferences. From fashion and electronics to
                  home goods and beyond, ASAN Group Shop aims to bring
                  convenience and reliability to your shopping experience. We
                  prioritize customer satisfaction and aim to create a seamless
                  and enjoyable shopping journey for all our visitors. At ASAN
                  Group Shop, we believe in delivering value and quality, and we
                  are committed to fostering a trustworthy and fulfilling
                  relationship with each of our customers. Thank you for
                  choosing ASAN Group Shop. Happy shopping!
                </p>
              </div>
              <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span class="px-1.5 text-white text-sm font-medium leading-6"><a href="/contact">
                  Contact Us</a>
                </span>
              </button>
            </div>
            <img
              class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

About.defaultProps ={
  title:"About - ASAN Group Shop",
}
export default About;
// w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1
