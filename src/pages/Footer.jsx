import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p> &copy; 2025 EasyTickets. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/about" className="mx-2 hover:text-gray-400">About</Link>
          <Link to="/contact" className="mx-2 hover:text-gray-400">Contact</Link>
          <Link to="/privacy" className="mx-2 hover:text-gray-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;