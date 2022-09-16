import "./Footer.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import {} from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import {} from "react-icons/ai";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/">
            <img src={Logo} alt="Footer_Logo" className="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
            delectus dolor. Voluptates soluta voluptatibus officia molestias,
            suscipit provident ullam.
          </p>
          <div className="footer_socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link id="article-links" to="/about">
            About
          </Link>
          <Link id="article-links" to="/plans">
            Plans
          </Link>
          <Link id="article-links" to="/trainers">
            Trainers
          </Link>
          <Link id="article-links" to="/gallery">
            Gallery
          </Link>
          <Link id="article-links" to="/contact">
            Contact
          </Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link id="article-links" to="/s">
            Blog
          </Link>
          <Link id="article-links" to="/s">
            Case Studies
          </Link>
          <Link id="article-links" to="/s">
            Events
          </Link>
          <Link id="article-links" to="/s">
            Communities
          </Link>
          <Link id="article-links" to="/s">
            FAQs
          </Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link id="article-links" to="/contact">
            Contact
          </Link>
          <Link id="article-links" to="/s">
            Support
          </Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2022 TUTORIALS &copy; All Right Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
