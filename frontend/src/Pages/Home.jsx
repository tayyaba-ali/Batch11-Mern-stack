import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Category';

const Home = () => {
	return (
		<div className='container mx-auto pb-24 py-4 px-4 lg:px-16'>
			<div className='container mx-auto px-6 md:px-10 pt-8'>
				<Hero />
			</div>
			<div className='container mx-auto px-6 md:px-10 pt-8'>
              <div>
				<h1 className='text-3xl font-semibold text-gray-800'></h1>
				<Categories />

			  </div>
			</div>
            
			<div className='container mx-auto px-6 md:px-10 pt-8'>
			</div>
		</div>
	);
};

export default Home;
