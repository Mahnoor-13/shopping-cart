import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffd32c] py-12">
      <div className="container mx-auto text-center">
        <p className="text-black text-lg md:text-xl font-medium">
          Copyright &copy; M.D.SFY ShippyShop 🤍 2024. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-cyan-400 transition duration-300"
          >
            LinkedIn
          </a>
          <span className="mx-2 text-black">|</span>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-cyan-400 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
