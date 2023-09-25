import React from "react";
import { Button } from "../Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Watch our videos and give us more subscription
        </p>
        <p className="footer-subscription-text">You can unsubscribe anytime</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrappper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Editing Tools</Link>
            <Link to="/">Term of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Patners</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrappper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Traveling</Link>
            <Link to="/">Informative </Link>
            <Link to="/">Dancing</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube </Link>
            <Link to="/">FaceBook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Ria in Ireland
              <i class="fa-solid fa-clover" style={{ marginLeft: "5px" }} />
            </Link>
          </div>
          <small className="website-rights">Ria in Ireland @2023</small>
          <div className="social-icons">
            <Link
              className="social-icons-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icons-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icons-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
