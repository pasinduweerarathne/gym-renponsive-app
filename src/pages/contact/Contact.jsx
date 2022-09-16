import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import Header from "../../components/Header";
import HeaderImg from "../../images/header_bg_2.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImg}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fuga
        adipisicing elit. Atque fuga eiusad ipisicing elit. Atque fuga
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="#">
              <MdEmail />
            </a>
            <a href="#">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+94766197751">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
