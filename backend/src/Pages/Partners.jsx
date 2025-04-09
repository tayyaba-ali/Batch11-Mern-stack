import React from 'react';
import {
  FaCloud,
  FaPlug,
  FaTools,
  FaSmile, // Placeholder for FaLipstick
  FaUtensils,
  FaLaptop,
  FaTshirt,
  FaBicycle,
  FaFan,
  FaShoppingBag,
  FaShoePrints,
  FaGamepad,
  FaHistory,
} from 'react-icons/fa'; // Using valid FontAwesome icons

const Partners = () => {
  const partners = [
    {
      category: 'Hosting',
      items: [
        {
          logo: <FaCloud className="w-12 h-12 text-blue-500" />,
          name: 'Hosting Partner 1',
          description: 'Reliable hosting services for your website. Enjoy top-notch performance and security with our infrastructure. Our hosting solutions are designed to handle high traffic and ensure 99.9% uptime. With 24/7 customer support, you\'re never alone. We offer scalable plans to grow with your business. Our servers are optimized for speed and efficiency. Whether you\'re a small business or a large enterprise, we have the perfect plan for you. Experience seamless migration and hassle-free setup. Join thousands of satisfied customers today. Your website deserves the best hosting.',
          link: '#',
        },
        {
          logo: <FaCloud className="w-12 h-12 text-blue-500" />,
          name: 'Hosting Partner 2',
          description: 'Affordable hosting solutions with automatic updates, daily backups, and free SSL certificates. Our hosting plans are perfect for startups and small businesses. We provide a user-friendly control panel for easy management. Our servers are located in multiple regions for faster load times. Enjoy unlimited bandwidth and storage with our premium plans. Our team is always available to assist you with any issues. Start your online journey with us today. We make hosting simple and reliable. Your success is our priority.',
          link: '#',
        },
      ],
    },
    {
      category: 'Plugins',
      items: [
        {
          logo: <FaPlug className="w-12 h-12 text-green-500" />,
          name: 'Plugin Partner 1',
          description: 'Enhance your website with our powerful plugins. From backups to security, we have you covered. Our plugins are easy to install and use. They are compatible with all major platforms. Improve your website\'s functionality with just a few clicks. Our plugins are regularly updated for optimal performance. Join thousands of users who trust our products. Get started today and take your website to the next level. Your website deserves the best tools.',
          link: '#',
        },
        {
          logo: <FaPlug className="w-12 h-12 text-green-500" />,
          name: 'Plugin Partner 2',
          description: 'Innovative plugins to help you build and manage your website with ease. Our plugins are designed for both beginners and experts. They are lightweight and fast, ensuring your website runs smoothly. We offer a wide range of plugins for different needs. From SEO to e-commerce, we have it all. Our plugins come with detailed documentation and tutorials. Join our community of satisfied users today. Your website deserves the best plugins.',
          link: '#',
        },
      ],
    },
    {
      category: 'Services',
      items: [
        {
          logo: <FaTools className="w-12 h-12 text-purple-500" />,
          name: 'Service Partner 1',
          description: 'Professional services to optimize your website. From audits to custom development, we do it all. Our team of experts will analyze your website and provide actionable insights. We offer tailored solutions to meet your specific needs. Whether you need a new website or improvements to an existing one, we\'ve got you covered. Our services are affordable and reliable. Join our list of happy clients today. Your website deserves the best care.',
          link: '#',
        },
        {
          logo: <FaTools className="w-12 h-12 text-purple-500" />,
          name: 'Service Partner 2',
          description: 'Expert solutions for WordPress and WooCommerce. Get high-quality work delivered on time. Our team specializes in custom themes and plugins. We ensure your website is fast, secure, and user-friendly. From design to deployment, we handle everything. Our services are tailored to your business goals. Join our growing list of satisfied clients. Your website deserves the best service.',
          link: '#',
        },
      ],
    },
    {
      category: 'Makeup',
      items: [
        {
          logo: <FaSmile className="w-12 h-12 text-pink-500" />, // Placeholder for FaLipstick
          name: 'Makeup Partner 1',
          description: 'High-quality makeup products for every occasion. From foundations to lipsticks, we have it all. Our products are cruelty-free and made with natural ingredients. Whether you\'re going for a natural look or a bold statement, we\'ve got you covered. Join thousands of satisfied customers who trust our products. Your beauty deserves the best. Shop now and discover the difference.',
          link: '#',
        },
        {
          logo: <FaSmile className="w-12 h-12 text-pink-500" />, // Placeholder for FaLipstick
          name: 'Makeup Partner 2',
          description: 'Professional makeup kits for makeup artists and enthusiasts. Get the perfect look every time. Our kits include everything you need for a flawless finish. From brushes to palettes, we have it all. Join our community of makeup lovers today. Your beauty deserves the best tools. Shop now and elevate your makeup game.',
          link: '#',
        },
      ],
    },
    {
      category: 'Kitchen Items',
      items: [
        {
          logo: <FaUtensils className="w-12 h-12 text-red-500" />,
          name: 'Kitchen Partner 1',
          description: 'Premium kitchen appliances and utensils for your home. Cook like a pro with our products. Our appliances are designed for efficiency and durability. From blenders to cookware, we have it all. Join thousands of happy customers who trust our products. Your kitchen deserves the best. Shop now and transform your cooking experience.',
          link: '#',
        },
        {
          logo: <FaUtensils className="w-12 h-12 text-red-500" />,
          name: 'Kitchen Partner 2',
          description: 'Eco-friendly and durable kitchenware. Make your kitchen sustainable and stylish. Our products are made from high-quality materials that last. From cutting boards to utensils, we have it all. Join our community of eco-conscious customers today. Your kitchen deserves the best. Shop now and make a difference.',
          link: '#',
        },
      ],
    },
    {
      category: 'Electronics',
      items: [
        {
          logo: <FaLaptop className="w-12 h-12 text-blue-500" />,
          name: 'Electronics Partner 1',
          description: 'Cutting-edge electronics for your home and office. Stay connected with the latest technology. Our products are designed for performance and reliability. From smartphones to laptops, we have it all. Join thousands of satisfied customers who trust our products. Your tech deserves the best. Shop now and upgrade your gadgets.',
          link: '#',
        },
        {
          logo: <FaLaptop className="w-12 h-12 text-blue-500" />,
          name: 'Electronics Partner 2',
          description: 'Affordable and reliable electronics for everyday use. Upgrade your gadgets today. Our products are designed for durability and performance. From headphones to smartwatches, we have it all. Join our community of tech enthusiasts today. Your gadgets deserve the best. Shop now and stay ahead of the curve.',
          link: '#',
        },
      ],
    },
    {
      category: 'Dresses',
      items: [
        {
          logo: <FaTshirt className="w-12 h-12 text-purple-500" />,
          name: 'Dress Partner 1',
          description: 'Trendy and elegant dresses for every occasion. Find your perfect style with us. Our dresses are designed for comfort and style. From casual wear to formal attire, we have it all. Join thousands of satisfied customers who trust our products. Your wardrobe deserves the best. Shop now and elevate your style.',
          link: '#',
        },
        {
          logo: <FaTshirt className="w-12 h-12 text-purple-500" />,
          name: 'Dress Partner 2',
          description: 'Affordable and stylish dresses for women. Shop the latest fashion trends. Our dresses are designed for all body types. From summer dresses to winter wear, we have it all. Join our community of fashion lovers today. Your style deserves the best. Shop now and stay trendy.',
          link: '#',
        },
      ],
    },
    {
      category: 'Bikes',
      items: [
        {
          logo: <FaBicycle className="w-12 h-12 text-green-500" />,
          name: 'Bike Partner 1',
          description: 'High-performance bikes for adventure and daily commutes. Ride in style and comfort. Our bikes are designed for durability and performance. From mountain bikes to road bikes, we have it all. Join thousands of satisfied customers who trust our products. Your ride deserves the best. Shop now and hit the road.',
          link: '#',
        },
        {
          logo: <FaBicycle className="w-12 h-12 text-green-500" />,
          name: 'Bike Partner 2',
          description: 'Eco-friendly electric bikes for a sustainable future. Explore the world on two wheels. Our bikes are designed for efficiency and style. From city bikes to off-road bikes, we have it all. Join our community of eco-conscious riders today. Your journey deserves the best. Shop now and make a difference.',
          link: '#',
        },
      ],
    },
    {
      category: 'ACs & Fans',
      items: [
        {
          logo: <FaFan className="w-12 h-12 text-blue-500" />,
          name: 'AC Partner 1',
          description: 'Energy-efficient air conditioners for your home. Stay cool all summer long. Our ACs are designed for performance and reliability. From split ACs to window ACs, we have it all. Join thousands of satisfied customers who trust our products. Your comfort deserves the best. Shop now and beat the heat.',
          link: '#',
        },
        {
          logo: <FaFan className="w-12 h-12 text-blue-500" />,
          name: 'Fan Partner 1',
          description: 'High-speed fans for maximum airflow. Keep your space comfortable and breezy. Our fans are designed for efficiency and durability. From ceiling fans to table fans, we have it all. Join our community of satisfied customers today. Your comfort deserves the best. Shop now and stay cool.',
          link: '#',
        },
      ],
    },
    {
      category: 'Frypans',
      items: [
        {
          logo: <FaUtensils className="w-12 h-12 text-red-500" />,
          name: 'Frypan Partner 1',
          description: 'Non-stick frypans for easy cooking and cleaning. Perfect for every kitchen. Our frypans are designed for durability and performance. From small pans to large skillets, we have it all. Join thousands of satisfied customers who trust our products. Your kitchen deserves the best. Shop now and cook like a pro.',
          link: '#',
        },
        {
          logo: <FaUtensils className="w-12 h-12 text-red-500" />,
          name: 'Frypan Partner 2',
          description: 'Durable and stylish frypans for professional chefs and home cooks. Our frypans are designed for efficiency and style. From non-stick pans to cast iron skillets, we have it all. Join our community of cooking enthusiasts today. Your kitchen deserves the best. Shop now and elevate your cooking game.',
          link: '#',
        },
      ],
    },
    {
      category: 'Bags',
      items: [
        {
          logo: <FaShoppingBag className="w-12 h-12 text-purple-500" />,
          name: 'Bag Partner 1',
          description: 'Stylish and functional bags for every occasion. Carry your essentials in style. Our bags are designed for durability and style. From backpacks to handbags, we have it all. Join thousands of satisfied customers who trust our products. Your style deserves the best. Shop now and stay organized.',
          link: '#',
        },
        {
          logo: <FaShoppingBag className="w-12 h-12 text-purple-500" />,
          name: 'Bag Partner 2',
          description: 'Eco-friendly bags for a sustainable lifestyle. Shop our collection today. Our bags are made from high-quality materials that last. From tote bags to duffel bags, we have it all. Join our community of eco-conscious customers today. Your lifestyle deserves the best. Shop now and make a difference.',
          link: '#',
        },
      ],
    },
    {
      category: 'Shoes & Sandals',
      items: [
        {
          logo: <FaShoePrints className="w-12 h-12 text-blue-500" />,
          name: 'Shoe Partner 1',
          description: 'Comfortable and stylish shoes for men and women. Step out in confidence. Our shoes are designed for comfort and durability. From sneakers to formal shoes, we have it all. Join thousands of satisfied customers who trust our products. Your feet deserve the best. Shop now and walk in style.',
          link: '#',
        },
        {
          logo: <FaShoePrints className="w-12 h-12 text-blue-500" />,
          name: 'Sandals Partner 1',
          description: 'Trendy sandals for summer. Stay cool and fashionable all season long. Our sandals are designed for comfort and style. From flip-flops to wedges, we have it all. Join our community of fashion lovers today. Your style deserves the best. Shop now and step out in style.',
          link: '#',
        },
      ],
    },
    {
      category: 'Toys',
      items: [
        {
          logo: <FaGamepad className="w-12 h-12 text-green-500" />,
          name: 'Toy Partner 1',
          description: 'Fun and educational toys for kids. Spark creativity and imagination. Our toys are designed for safety and durability. From building blocks to action figures, we have it all. Join thousands of satisfied parents who trust our products. Your child\'s playtime deserves the best. Shop now and inspire creativity.',
          link: '#',
        },
        {
          logo: <FaGamepad className="w-12 h-12 text-green-500" />,
          name: 'Toy Partner 2',
          description: 'Safe and durable toys for children of all ages. Shop our collection now. Our toys are designed for learning and fun. From puzzles to dolls, we have it all. Join our community of happy parents today. Your child\'s happiness deserves the best. Shop now and make playtime memorable.',
          link: '#',
        },
      ],
    },
    {
      category: 'Vintage Items',
      items: [
        {
          logo: <FaHistory className="w-12 h-12 text-purple-500" />,
          name: 'Vintage Partner 1',
          description: 'Unique and timeless vintage items. Add a touch of nostalgia to your life. Our vintage collection is curated with care. From clothing to accessories, we have it all. Join thousands of satisfied customers who trust our products. Your style deserves the best. Shop now and embrace the past.',
          link: '#',
        },
        {
          logo: <FaHistory className="w-12 h-12 text-purple-500" />,
          name: 'Vintage Partner 2',
          description: 'Curated vintage collections for collectors and enthusiasts. Explore our store. Our vintage items are handpicked for quality and style. From furniture to decor, we have it all. Join our community of vintage lovers today. Your home deserves the best. Shop now and add a touch of history.',
          link: '#',
        },
      ],
    },
  ];

  return (
    <div className="text-black">
      <header className="bg-gray-800 py-20 mt-10 ">
        <h1 className="text-center text-white text-5xl font-semibold">Partners</h1>
        <p className="text-center text-white mt-2">
          A carefully chosen selection of companies which we have used and recommend. You'll be <br /> in safe hands with any of these suggestions.
        </p>
      </header>
      <main className="max-w-6xl mx-auto py-8 px-4">
        {partners.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-5xl font-semibold mb-9 justify-center text-center">{section.category}</h2>
            <div className="space-y-8">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-4 mt-9">
                    {item.logo}
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold text-xl">{item.description.split(' ')[0]}</span>{' '}
                      {item.description.split(' ').slice(1).join(' ')}{' '}
                      <a className="text-blue-500 hover:underline" href={item.link}>
                        Learn more
                      </a>.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Partners;