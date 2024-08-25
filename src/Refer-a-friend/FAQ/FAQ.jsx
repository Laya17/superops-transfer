import React, { useState } from "react";
import style from "./FAQ.module.css";

export default function FAQ(){
   

    return(
        <div className={style.FAQContainer}>
            <div className={style.FAQText}> 
                <p className={style.FAQtitle}>Frequently asked questions</p>
                <p className={style.FAQSubtitle}>We have them answered.</p>
            </div>

            <FAQAnswers/>
        </div>
    );
}


export function FAQAnswers(){
    const [open,setOpen]=useState(null);

    const handlebuttonClick=(index)=>{
        setOpen(open===index?null:index);
    }


    const FAQS=[
        {question:"Is there an eligibility to be a SuperOps.ai affiliate?",
        answer:"If you're someone who's passionate about educating or adding value to the channel, you're a fit. You could be: ",
        points:["An MSP owner"," A geek who's passionate about MSPs"," An MSP sales/marketing coach","Anyone who works with MSPs"]},

        {question:"What is a valid sign-up?",
        answer:"If you're someone who's passionate about educating or adding value to the channel, you're a fit. You could be: ",
        points:["An MSP owner"," A geek who's passionate about MSPs"," An MSP sales/marketing coach","Anyone who works with MSPs"]},

        {question:"When will my commissions be paid?",
        answer:"If you're someone who's passionate about educating or adding value to the channel, you're a fit. You could be: ",
        points:["An MSP owner"," A geek who's passionate about MSPs"," An MSP sales/marketing coach","Anyone who works with MSPs"]},

        {question:"What if my prospect upgrades/downgrades during the first year?",
           answer:"If you're someone who's passionate about educating or adding value to the channel, you're a fit. You could be: ",
           points:["An MSP owner"," A geek who's passionate about MSPs"," An MSP sales/marketing coach","Anyone who works with MSPs"]}
       ];


    return(
        <div className={style.FAQDivContainer}>
            {FAQS.map((element, index) => (
                <div key={index} className={style.toggleDivs}>
                    <button onClick={() => handlebuttonClick(index)} className={`${style.FAQDivs} ${open === index ? style.toggledFAQDiv : ""}`}>
                       <div className={style.point}>{element.question}
                        {open === index && <div className={style.answer}><p>{element.answer}</p>{element.points.map(point=>(
                        <li>{point}</li>
                    ))}</div>}</div> 
                    {open===index ? <div className={style.dropdownsymbol}><span class="material-symbols-outlined">close</span></div>:<div className={style.dropdownsymbol}><span class="material-symbols-outlined">keyboard_arrow_down</span></div>}
                    </button>
                    
                </div>
            ))}
        </div>

    );
}