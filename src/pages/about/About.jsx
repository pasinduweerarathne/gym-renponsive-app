import Header from "../../components/Header";
import HeaderImg from "../../images/header_bg_1.jpg";
import StoryImg from "../../images/about1.jpg";
import VisionImg from "../../images/about2.jpg";
import MissionImg from "../../images/about3.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eveniet cupiditate nemo optio officiis deserunt facilis fuga assumenda
        itaque sunt.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-img">
            <img src={StoryImg} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium,
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
          </div>
          <div className="about_section-img">
            <img src={VisionImg} alt="" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-img">
            <img src={MissionImg} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium, est
              distinctio sint quis nulla, sapiente repellendus obcaecati et
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              atque eum ex ipsam maiores nostrum animi magnam laudantium,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
