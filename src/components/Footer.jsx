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
            <ul className="text-1xl text-gray-500 md:block">
              <li>Home</li>
              <li>Membership</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold text-2xl mb-2">Services</h5>
            <ul className="text-1xl text-gray-500 md:block">
              <li>Trading Courses</li>
              <li>The Swing Report</li>
              <li>Indicators</li>
              <li>TradrPro™ Alerts</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Products</h5>
            <ul className="text-1xl  text-gray-500 md:block">
              <li>Articles</li>
              <li>Educational Videos</li>
              <li>E-Books & Guides</li>
              <li>Trading Tools</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl">Resources</h5>
            <ul className="text-1xl text-gray-500 md:block">
              <li>traderoom Blog</li>
              <li>Success Stories</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex-1 w-full md:w-1/2 lg:w-1/5 px-2">
            <h5 className="font-semibold mb-2 text-2xl hidden md:inline">
              Contact
            </h5>
            <ul className="text-1xl flex md:flex-col gap-2 justify-center">
              <li className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/512px-Facebook_f_logo_%282019%29.svg.png"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                <span className="hidden md:inline">Facebook</span>
              </li>
              <li className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000"
                  alt="Twitter"
                  className="w-5 h-5 mr-2"
                />
                <span className="hidden md:inline">Twitter</span>
              </li>
              <li className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
                  alt="YouTube"
                  className="w-5 h-5 mr-2"
                />
                <span className="hidden md:inline">YouTube</span>
              </li>
              <li className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-5 h-5 mr-2"
                />
                <span className="hidden md:inline">Instagram</span>
              </li>
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
