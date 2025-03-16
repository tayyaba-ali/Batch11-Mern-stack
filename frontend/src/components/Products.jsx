import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';



const Products = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	//const API_URL = 'http://localhost:5000/api/products';
	const API_URL = 'https://fakestoreapi.com/products';
	// const fetchProducts = async () => {
	//   try {
	//     const response = await fetch(`${API_URL}`, {
	//       credentials: "include",
	//       method: "GET",
	//     });
	//     if (!response.ok) throw new Error("Failed to fetch products");
	//     const data = await response.json();

	//     if (data.success && Array.isArray(data.products)) {
	//       setProducts(data.products);
	//       console.log(data.products);
	//     } else {
	//       console.error("Unexpected API response:", data);
	//       toast.error("Unexpected response format from API", { position: "top-right" });
	//     }
	//   } catch (error) {
	//     console.error("Error fetching products:", error);
	//     toast.error("Failed to fetch products", { position: "top-right" });
	//   }
	// };

	const fetchProducts = async () => {
		try {
			const response = await fetch(`${API_URL}`, {
				//credentials: 'include',
				method: 'GET',
			});

			if (!response.ok) throw new Error('Failed to fetch products');

			const data = await response.json();

			if ( Array.isArray(data)) {
				setProducts(data);

				// ✅ Log all product details
				console.log('Fetched Products:', JSON.stringify(data.products, null, 2));
			} else {
				console.error('Unexpected API response:', data);
				toast.error('Unexpected response format from API', { position: 'top-right' });
			}
		} catch (error) {
			console.error('Error fetching products:', error);
			toast.error('Failed to fetch products', { position: 'top-right' });
		}
	};

	const handleProductSubmit = async (productData) => {
		try {
			const formData = new FormData();
			formData.append('title', productData.title);
			// formData.append("description", productData.description);
			formData.append('price', productData.price);

			// Add images
			if (productData.images) {
				productData.images.forEach((image) => {
					formData.append('images', image);
				});
			}
			if (productData.front) formData.append('front', productData.front);
			if (productData.back) formData.append('back', productData.back);
			if (productData.side) formData.append('side', productData.side);

			// Add colors
			if (productData.colors) {
				productData.colors.forEach((color) => {
					formData.append('colors', color);
				});
			}

			let response;
			if (selectedProduct) {
				response = await fetch(`${API_URL}/update/${selectedProduct._id}`, {
					credentials: 'include',
					method: 'PUT',
					body: formData,
				});
			} else {
				response = await fetch(`${API_URL}/add`, {
					credentials: 'include',
					method: 'POST',
					body: formData,
				});
			}

			if (!response.ok) throw new Error('Failed to save product');
			const savedProduct = await response.json();

			if (selectedProduct) {
				setProducts((prevProducts) =>
					prevProducts.map((product) => (product.id === selectedProduct.id ? savedProduct : product)),
				);
				toast.success('Product updated successfully!', { position: 'top-right' });
			} else {
				setProducts((prevProducts) => [...prevProducts, savedProduct]);
				toast.success('Product added successfully!', { position: 'top-right' });
			}
		} catch (error) {
			console.error('Error saving product:', error);
			toast.error('Failed to save product', { position: 'top-right' });
		} finally {
			setIsModalOpen(false);
		}
	};

	const handleDeleteProduct = async (productId) => {
		try {
			const response = await fetch(`${API_URL}/delete/${productId}`, {
				credentials: 'include',
				method: 'DELETE',
			});
			if (!response.ok) throw new Error('Failed to delete product');
			setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
			toast.success('Product deleted successfully!', { position: 'top-right' });
		} catch (error) {
			console.error('Error deleting product:', error);
			toast.error('Failed to delete product', { position: 'top-right' });
		} finally {
			setIsDeleteModalOpen(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='p-4'>
			{/* Title and Add Product Button */}
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl font-semibold text-gray-800'>Products</h1>
				<button
					onClick={() => {
						setSelectedProduct(null);
						setIsModalOpen(true);
					}}
					className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600'>
					Add Product
				</button>
			</div>

			{/* Product Count Display */}
			<div className='mb-4 text-gray-600'>
				<p className='text-lg'>Total Products: {products.length}</p>
			</div>

			{/* Product Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{Array.isArray(products) &&
					products.map((product) => (
						<div key={product.id} className='bg-white shadow rounded-lg p-4'>
							<img
								src={product.frontImage || product.backImage || product.sideImage}
								alt={product.title}
								className='w-32 h-32 object-cover rounded-lg mb-4'
							/>
							<h2 className='text-lg font-semibold'>{product.title}</h2>
							<p>${product.price}</p>
							<div className='flex space-x-2 mt-4'>
								<button
									onClick={() => {
										setSelectedProduct(product);
										setIsModalOpen(true);
									}}
									className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600'>
									Update
								</button>
								<button
									onClick={() => {
										setSelectedProduct(product);
										setIsDeleteModalOpen(true);
									}}
									className='bg-black text-white px-4 py-2 rounded hover:bg-red-700'>
									Delete
								</button>
							</div>
						</div>
					))}
			</div>

			<ToastContainer />

			{/* Modals */}
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleProductSubmit}
				initialData={selectedProduct}
			/>
			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={() => handleDeleteProduct(selectedProduct._id)}
			/>
		</div>
	);
};

export default Products;
