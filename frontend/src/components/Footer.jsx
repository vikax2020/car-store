import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Brand Info */}
          <div className="col-md-3 col-12 mb-4">
            <h2 className="fw-bold">MyWebsite</h2>
            <p className="small text-secondary">
              Building modern and responsive web apps with React & Bootstrap.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light">About</Link></li>
              <li><Link to="/services" className="text-decoration-none text-light">Services</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="fw-semibold">Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/project" className="text-decoration-none text-light">Projects</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-light">Blog</Link></li>
              <li><a href="#" className="text-decoration-none text-light">UI/UX Design</a></li>
              <li><a href="#" className="text-decoration-none text-light">Web Development</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3 col-12 mb-4">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-3 mt-3 text-center text-secondary small">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
