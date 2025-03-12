import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    { name: "Electronics", img: "https://media.istockphoto.com/id/2161306738/photo/modern-gadgets-and-accessories-in-black-laptop-camera-smartphone-stereo-headphones-notepad.webp?a=1&b=1&s=612x612&w=0&k=20&c=AspYYax2VCQf79P5Brdl1QKjKyYoh9vhQbCkTX0KHAM=" },
    { name: "Fashion", img: "https://media.istockphoto.com/id/2155498776/photo/woman-walking-with-shopping-bags-on-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=aF9rkTbesDO3X04nP7Xid23BP0or1i5gUfHP-rhw724=" },
    { name: "Home Decor", img: "https://images.unsplash.com/photo-1606246481699-f16245882373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yZXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Beauty", img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8fHww" },
    { name: "Sports", img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Toys", img: "https://media.istockphoto.com/id/1168991239/photo/colourful-different-types-of-gi-tagged-channapatna-toys-on-table-with-isolated-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=22DR_9AKkEz02dDiDDYijYsvO1i5X1_8OFZ81qQIQGE=" },
  ];

  return (
    <div className="container mx-auto py-12 px-6 bg-blue-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
         Trending Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
            
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-105
             transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <img src={category.img} alt={category.name} className="w-full h-44 object-cover" />
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
           </div>
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/20 
              backdrop-blur-md rounded-lg text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
             <h4 className="text-gray-500 text-3xl font-bold ">{category.name}</h4>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Categories;