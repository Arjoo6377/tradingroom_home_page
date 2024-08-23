import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F3836] text-white pt-16 pb-8 mt-20 rounded-3xl">
      <div className="container mx-auto text-center px-6 lg:px-0 w-full md:w-[70%]">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
            alt="Trade Room Logo"
            className="mb-4 w-52"
          />
          <p className="mb-6 text-gray-500">
            Subscribe to our newsletter and we will keep you informed about
            upcoming <br /> webinars, news, events, and updates to our products.
          </p>
          <div className="flex items-center w-full max-w-md mx-auto relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-l-lg text-black"
            />
            <button className="absolute right-0 top-0 h-full bg-black px-4 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10 text-left">
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Home</h5>
            <ul className="text-1xl">
              <li>Home</li>
              <li>Membership</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold text-2xl mb-2">Services</h5>
            <ul className="text-1xl">
              <li>Trading Courses</li>
              <li>The Swing Report</li>
              <li>Indicators</li>
              <li>TradrPro™ Alerts</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Products</h5>
            <ul className="text-1xl">
              <li>Articles</li>
              <li>Educational Videos</li>
              <li>E-Books & Guides</li>
              <li>Trading Tools</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Resources</h5>
            <ul className="text-1xl">
              <li>traderoom Blog</li>
              <li>Success Stories</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Contact</h5>
            <ul className="text-1xl">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between pt-4">
          <p className="text-gray-400 text-sm">
            Disclaimer &nbsp; | &nbsp; Privacy Service &nbsp; | &nbsp;
            Corporation
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Copyright © 2024 Tradroom | Powered by Onecontributor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
