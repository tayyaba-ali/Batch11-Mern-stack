import React from 'react'

const Hero = () => {
  return (
	<div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">Our Store</span>
          </h1>
          <p className="text-lg text-gray-700">
            Discover the best products for your home with exclusive discounts.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
    src="https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            alt="Hero"
            className="w-3/4 lg:w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
        
      </div>
    </div>
  )
}

export default Hero
