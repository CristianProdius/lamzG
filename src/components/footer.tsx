import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full mx-auto max-w-screen-xl px-6 py-8 md:py-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-sm text-gray-600">
              © 2025{" "}
              <a
                href="/"
                className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                CCA
              </a>
              <span className="ml-1">All Rights Reserved.</span>
            </span>
          </div>
          <nav>
            <ul className="flex flex-wrap items-center gap-6 text-sm">
              <li>
                <a
                  href="/creator"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  For Creators
                </a>
              </li>
              <li>
                <a
                  href="/business"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  For Businesses
                </a>
              </li>
              <li>
                <a
                  href="/casestudies"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
