import React, { useState } from "react";
import style from "./headercard.module.css";

export default function Headercard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carddata = [
        { idx: "01", heading: "You refer a friend", content: "Refer a friend by clicking the button above." },
        { idx: "02", heading: "We do the heavy lifting", content: "Our sales experts will reach out and weave some magic to ensure they become our customers." },
        { idx: "03", heading: "You Earn", content: "You earn $1000 when the MSP you have referred becomes our customer. Yes, you get $100 for every valid sign-up." }
    ];

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carddata.length) % carddata.length);
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carddata.length);
    };

    return (
        <React.Fragment>
            <div className={style.CardContainer}>
                <p className={style.referfriend}>refer a friend</p>
                <p className={style.coverline}>Your next fancy dinner is<br />on us! We’re serious!</p>
                <div className={style.leftimg}></div>
                <div className={style.rightimg}></div>
                <div className={style.EarnCard}>
                    <p className={style.earntext}>Earn upto</p>
                    <div className={style.amountValue}>
                        <span className={`${style.earntext} ${style.dollar}`}>$</span>
                        <span className={`${style.earntext} ${style.amount}`}>1000</span>
                    </div>
                    <p className={style.earntext}>by referring fellow MSPs.</p>
                </div>
                <p className={style.subtext}>One click, two fields, and you could be on <br /> your way to win a $1000* voucher.</p>
                <button className={style.referfriendbutton}>REFER A FRIEND</button>
            </div>
            <div className={style.bottomdiv}>
                <div className={style.bottomText}>
                    <p className={style.title}>How does it work?</p>
                    <div className={style.bottomimg}></div>
                </div>
                <BottomCards carddata={carddata} currentIndex={currentIndex} />
                <div className={style.buttonContainer}>
                    <button onClick={slideLeft} className={style.leftBtn}><span class="material-symbols-outlined">arrow_circle_left</span></button>
                    <p className={style.indexText}>{currentIndex+1}/3</p>
                    <button onClick={slideRight} className={style.rightBtn}><span class="material-symbols-outlined">arrow_circle_right</span></button>
                </div>
            </div>
        </React.Fragment>
    );
}

export function BottomCards({ carddata, currentIndex }) {
    return (
        <div className={style.CardCarousalElements}>
            {carddata.map((element, index) => {
                let position = "nextCard";
                if (index === currentIndex) {
                    position = "activeCard";
                } else if (index === (currentIndex - 1 + carddata.length) % carddata.length) {
                    position = "prevCard";
                }

                return (
                    <div key={index} className={`${style.bottomCardContainer} ${style[position]}`}>
                        <p className={style.cardindex}>{element.idx}</p>
                        <p className={style.cardheading}>{element.heading}</p>
                        <p className={style.cardContent}>{element.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
