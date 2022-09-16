import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { programs } from "../data";
import Card from "../ul/Card";
import SectionHead from "./SectionHead";
import { AiFillCaretRight } from "react-icons/ai";
import "../pages/home/Home.css";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="programs_wrapper">
          {programs.map(({ id, icon, title, info, path }) => (
            <Card key={id} className="programs_card">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
