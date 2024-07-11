import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed bg-slate-300 shadow-xl">
        <div className="footer-left">
          <h3>
            <span>
              <img className="w-[150px]" src="/logo.png" alt="" />
            </span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div className="flex items-center">
            <i className="fa fa-map-marker flex items-center justify-center">
              <RiMapPin2Line />
            </i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div className="flex items-center">
            <i className="fa fa-phone flex items-center justify-center">
              <FaPhoneAlt />
            </i>
            <p>+98 09926553469</p>
          </div>

          <div className="flex items-center">
            <i className="fa fa-envelope flex items-center justify-center">
              <FaRegEnvelope />
            </i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
