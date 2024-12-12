import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-6">
      <p>&copy; 2024 LP3I. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
