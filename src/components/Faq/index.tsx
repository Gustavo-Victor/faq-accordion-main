import Question from "../Question";
import { faqData } from "../../data/faqData";
import starIcon from "../../assets/images/icon-star.svg"; 
import "./style.scss"; 

export default function Faq() {
    return (
        <section className="faq-section">
            <h1> <img src={starIcon} alt="star" title="star" /> FAQs</h1>
            {/* Questions */}
            {faqData.map(faqSingle => (
                <Question key={faqSingle.id} title={faqSingle.title} text={faqSingle.text} />
            ))}
        </section>
    )
}