import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import * as Yup from 'yup';

const validationSchema = Yup.object({
	username: Yup.string()
		.matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers (No spaces or special characters)')
		.min(3, 'Username must be at least 3 characters long')
		.max(20, 'Username cannot exceed 20 characters')
		.required('Username is required'),

	email: Yup.string()
		.email('Enter a valid email address (e.g., example@domain.com)')
		.matches(/^[^\s@]+@[^\s@]+\.(com|net)$/, 'Only .com and .net domains are allowed')
		.required('Email is required'),

	password: Yup.string()
		.min(3, 'Password must be at least 3 characters long')
		.max(30, 'Password must not exceed 30 characters')
		.matches(/^[^\s]*$/, 'Only letters (A-Z, a-z) and numbers (0-9) are allowed. No spaces.')
		.matches(/^[a-zA-Z0-9]*$/, 'Only letters (A-Z, a-z) and numbers (0-9) are allowed.')
		.required('Password is required'),
});

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center min-h-screen px-4'>
			<div className='relative flex flex-col rounded-xl bg-white shadow-lg p-6 w-full max-w-md'>
				<h2 className='text-2xl font-semibold text-gray-800 text-center'>Sign Up</h2>
				<p className='text-gray-500 text-center mb-6'>Welcome! Enter your details to register.</p>

				<Formik
					initialValues={{ username: '', email: '', password: '' }}
					validationSchema={validationSchema}
					onSubmit={async (values) => {
						setLoading(true);
						console.log(values);
						try {
							const response = await fetch('http://localhost:5000/api/auth/signup', {
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify(values),
							});

							const data = await response.json();
							setLoading(false);
							if (response.ok) {
								toast.success(data.message);
								navigate('/login');
							} else {
								toast.error(data.message || 'An error occurred while signing up');
							}
						} catch (error) {
							setLoading(false);
							console.error('Error:', error);
							toast.error(error.message || 'An error occurred while signing up');
						}
					}}>
					<Form className='space-y-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700'>Your Name</label>
							<Field
								name='username'
								type='text'
								className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								placeholder='Enter your name'
							/>
							<ErrorMessage name='username' component='p' className='text-red-500 text-sm' />
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700'>Email</label>
							<Field
								name='email'
								type='email'
								className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								placeholder='Enter your email'
							/>
							<ErrorMessage name='email' component='p' className='text-red-500 text-sm' />
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700'>Password</label>
							<div className='relative'>
								<Field
									name='password'
									type={showPassword ? 'text' : 'password'}
									className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
									placeholder='Enter your password'
								/>
								<button
									type='button'
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none'
									onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							<ErrorMessage name='password' component='p' className='text-red-500 text-sm' />
						</div>

						<button
							type='submit'
							className='w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-md transition-all duration-300 disabled:bg-gray-500'
							disabled={loading}>
							{loading ? 'Signing Up...' : 'Sign Up'}
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Signup;
