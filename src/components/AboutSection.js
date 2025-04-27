import React from "react";
import Logo from "../assets/images/logo.png"; // Correct path for src/components/

const AboutSection = () => (
  <div className="relative min-h-screen flex flex-col justify-start pt-1 pb-8 px-3 lg:px-5 animate-fadeInUp">
    <div className="flex flex-col lg:flex-row lg:space-x-8 h-auto lg:h-[500px] w-full lg:justify-between gap-4 overflow-hidden rounded-lg bg-gray-100 shadow-lg border border-gray-200 mx-auto animate-fadeInUp">
      <div className="flex flex-col justify-start lg:w-[60%] p-8 lg:p-8 animate-fadeInUp">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 underline underline-offset-8 font-lobster animate-fadeInUp">
        Welcome to FORSA       </h1>
        <p className="text-sm lg:text-lg text-gray-700 mb-4 leading-relaxed text-justify animate-fadeInUp">
          At FORSA, we’re on a mission to make great food accessible while tackling food waste in Tunisia. Our platform connects you with your favorite restaurants, offering fresh, delicious meals at unbeatable prices—food that would otherwise go to waste.
        </p>
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed text-justify animate-fadeInUp">
          Our mission is to bring you the best food delivery experience
          possible. We are constantly working to enhance our service and make
          sure that every meal you order meets your expectations.
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-[40%] animate-fadeInUp lg:mt-[-20px] p-7 lg:p-0">
       <img
                   src={Logo}
                   className="h-50 w-auto mb-4 sm:mb-0 hidden md:block"
                   alt="FORSA Logo"
                 />

      </div>
    </div>
  </div>
);

export default AboutSection;
