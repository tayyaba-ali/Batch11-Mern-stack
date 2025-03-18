

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/signup';
import Cart from "./Pages/Cart" 
import Logout from "./Pages/Logout" 
import AdminPage from './Pages/AdminPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminPage />} />
    </Routes>
      <Footer />
    </>
  );
};

export default App;