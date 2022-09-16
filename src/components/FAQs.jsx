import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
import "../pages/home/Home.css";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs_wrapper">
          {faqs.map(({ id, question, answer }) => (
            <FAQ key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
