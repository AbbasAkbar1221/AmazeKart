import React from "react";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Bottom />
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-sm">AbeBooks</h3>
              <p className="text-xs">Books, art & collectibles</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Amazon Web Services</h3>
              <p className="text-xs">Scalable Cloud Computing Services</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Audible</h3>
              <p className="text-xs">Download Audio Books</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">IMDb</h3>
              <p className="text-xs">Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Shopbop</h3>
              <p className="text-xs">Designer Fashion Brands</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Amazon Business</h3>
              <p className="text-xs">Everything For Your Business</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Prime Now</h3>
              <p className="text-xs">2-Hour Delivery on Everyday Items</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Amazon Prime Music</h3>
              <p className="text-xs">100 million songs, ad-free</p>
              <p className="text-xs">Over 15 million podcast episodes</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <ul className="flex justify-center gap-6 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Conditions of Use & Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interest-Based Ads
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
