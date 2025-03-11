import React from 'react';

const SinglePage = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-12 mt-20">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Stay Updated</h1>
          <p className="mb-6 max-w-2xl mx-auto">
            Join over 5,000 subscribers who get our free weekly newsletter. Get the latest updates on makeup bags, bikes, ACs, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-full w-full max-w-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
            />
            <button className="bg-blue-700 text-white p-3 rounded-full ml-2 hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              SIGN UP
            </button>
          </div>
          <p className="mt-6 text-blue-300">Follow @GreatItemail.com</p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container mx-auto py-12 max-w-4xl mt-10 mb-15">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          {/* First Service */}
          <div className="text-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">Fast & Reliable Delivery</h3>
            <p className="text-gray-600">
              We ensure your orders are delivered quickly and safely, so you can enjoy your new products without delay.
            </p>
          </div>
          {/* Second Service */}
          <div className="text-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is always here to help you with any questions or issues.
            </p>
          </div>
          {/* Third Service */}
          <div className="text-center max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Shop with confidence using our secure payment gateway, ensuring your transactions are safe.
            </p>
          </div>
        </div>
      </div>
      {/* New Section 2 */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="mb-8 text-gray-600">
            We are committed to providing the best shopping experience for our customers. Here’s what makes us stand out:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We offer only the best products, carefully curated for you.
              </p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly and safely.
              </p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Shop with confidence using our secure payment gateway.
              </p>
            </div>
          </div>
          </div></div>

      {/* Past Issues Section */}
      <div className="container mx-auto p-4 max-w-6xl mt-20">
        <h1 className="text-4xl font-bold mb-9 ml-7">Past Issues</h1>
        {/* 2025 */}
        <div className="ml-8 mr-8">
          <h2 className="text-2xl font-bold mb-2">2025</h2>
          <ul>
            <li className="flex justify-between py-2">
              <span>
                #280{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top 10 Makeup Bags for 2025: Style Meets Functionality
                </a>
              </span>
              <span>MAR 07, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #279{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Choose the Perfect Bike for Your Lifestyle
                </a>
              </span>
              <span>FEB 28, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #278{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Energy-Efficient ACs: Save Money and Stay Cool
                </a>
              </span>
              <span>FEB 21, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #277{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Must-Have Accessories for Your New Bike
                </a>
              </span>
              <span>FEB 14, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #276{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Organize Your Makeup Collection Like a Pro
                </a>
              </span>
              <span>FEB 07, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #275{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  2025 eCommerce Trends: What’s Hot in Makeup Bags, Bikes, and ACs
                </a>
              </span>
              <span>JAN 31, 2025</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #274{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Style Your Makeup Bag for Every Occasion
                </a>
              </span>
              <span>JAN 24, 2025</span>
            </li>
          </ul>
        </div>
        {/* 2024 */}
        <div className="mt-8 ml-8 mr-8">
          <h2 className="text-2xl font-bold mb-2">2024</h2>
          <ul>
            <li className="flex justify-between py-2">
              <span>
                #273{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  The Ultimate Guide to Maintaining Your Bike
                </a>
              </span>
              <span>JAN 17, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #272{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top 5 AC Brands for 2024: Cooling with Style
                </a>
              </span>
              <span>JAN 10, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #271{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Best Makeup Bags for Travel Enthusiasts
                </a>
              </span>
              <span>DEC 15, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #270{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top Bikes for Urban Commuters in 2024
                </a>
              </span>
              <span>NOV 20, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #269{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Smart ACs for Modern Homes in 2024
                </a>
              </span>
              <span>OCT 10, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #268{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Makeup Bags for Minimalists
                </a>
              </span>
              <span>SEP 05, 2024</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #267{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Best Mountain Bikes of 2024
                </a>
              </span>
              <span>AUG 12, 2024</span>
            </li>
          </ul>
        </div>
        {/* 2023 */}
        <div className="mt-8 ml-8 mr-8">
          <h2 className="text-2xl font-bold mb-2">2023</h2>
          <ul>
            <li className="flex justify-between py-2">
              <span>
                #266{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  ACs with Advanced Cooling Tech in 2023
                </a>
              </span>
              <span>JUL 18, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #265{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Choose the Perfect Makeup Bag for Travel
                </a>
              </span>
              <span>JUN 22, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #264{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top 10 Bikes for Long Rides in 2023
                </a>
              </span>
              <span>MAY 30, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #263{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Energy-Efficient ACs for Small Spaces
                </a>
              </span>
              <span>APR 25, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #262{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Style Your Makeup Bag for Every Occasion
                </a>
              </span>
              <span>MAR 18, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #261{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Best AC Brands for 2023
                </a>
              </span>
              <span>FEB 12, 2023</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #260{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top 5 Makeup Bags for 2023
                </a>
              </span>
              <span>JAN 10, 2023</span>
            </li>
          </ul>
        </div>
        {/* 2022 */}
        <div className="mt-8 ml-8 mr-8">
          <h2 className="text-2xl font-bold mb-2">2022</h2>
          <ul>
            <li className="flex justify-between py-2">
              <span>
                #259{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Makeup Bags for Every Occasion
                </a>
              </span>
              <span>DEC 15, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #258{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top Bikes for Urban Commuters in 2022
                </a>
              </span>
              <span>NOV 20, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #257{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Smart ACs for Modern Homes in 2022
                </a>
              </span>
              <span>OCT 10, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #256{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  How to Organize Your Makeup Collection Like a Pro
                </a>
              </span>
              <span>SEP 05, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #255{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Best Mountain Bikes of 2022
                </a>
              </span>
              <span>AUG 12, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #254{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Top 5 AC Brands for 2022
                </a>
              </span>
              <span>JUL 18, 2022</span>
            </li>
            <li className="flex justify-between py-2">
              <span>
                #253{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Makeup Bags for Minimalists
                </a>
              </span>
              <span>JUN 22, 2022</span>
            </li>
          </ul>
        </div>
      </div>
</div>
           
  );
};

export default SinglePage;