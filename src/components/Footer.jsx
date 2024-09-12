import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer >
      <div  className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <img className='mb-5' src="/Craflex_Logo.webp" alt="" />
        </div>
        <p className="mx-auto max-w-md text-center leading-relaxed text-white">
          We're here to help. Contact us directly, and our team will provide you with the personalized support you need.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-white hover:text-[#4dffb5]"
              href="#about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-[#4dffb5]"
              href="#process"
            >
              Process
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-[#4dffb5]"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-[#4dffb5]"
              href="#portfolio"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-[#4dffb5]"
              href="#price"
            >
              Price
            </a>
          </li>
        </ul>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8 pb-20">
          <li>
            <a
              className="text-[#4dffb5] hover:text-white"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF size={18} className="transition-transform hover:scale-150 hover:-translate-y-1" />
            </a>
          </li>
          <li>
            <a
              className="text-[#4dffb5] hover:text-white"
              href="https://www.linkedin.com/company/craflex/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn size={20} className="transition-transform hover:scale-150 hover:-translate-y-1" />
            </a>
          </li>
          <li>
            <a
              className="text-[#4dffb5] hover:text-white"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter size={20} className="transition-transform hover:scale-150 hover:-translate-y-1" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;