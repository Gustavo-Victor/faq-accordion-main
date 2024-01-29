import { useState } from "react";
import { faqProps } from "../../types/faqTypes";
import minusIcon from "../../assets/images/icon-minus.svg";  
import plusIcon from "../../assets/images/icon-plus.svg"; 
import "./style.scss"; 

export default function Question({ title, text } : faqProps) {
    const [isActive, setIsActive] = useState(false); 

    const toggleIsActive = () => {
        setIsActive(prevState => !prevState); 
    }

    const ChosenIcon = 
        isActive ? <img className="icon active" src={minusIcon} alt="minus" /> : <img className="icon" src={plusIcon} alt="plus" />

    const activateClass = isActive ? "active" : ""; 

    return (
        <div onClick={toggleIsActive} className={"faq-question " + activateClass} >
            <h2>{title} {ChosenIcon} </h2>
            <p>{text}</p>
        </div>
    );
}


