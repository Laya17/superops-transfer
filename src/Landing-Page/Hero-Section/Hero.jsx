import style from "./Hero.module.css";
import heropic from './Heropic.png';


export default  function Hero(){
    return(
        <section className={style.heroStatic}>
            <div className={style.leftside}>
                <div className={style.titleContainer}>
                    <h1 className={`${style.downtoup1} ${style.title}`}>Step into</h1> 
                    <h1 className={`${style.downtoup2} ${style.title}`}>the future with</h1> 
                    <h1 className={`${style.downtoup3} ${style.title}`}>SuperOps</h1>
                </div>
                <div className={style.subtitleContainer}>
                    <p className={`${style.downtoup3} ${style.subtitle1}`}>Leave LegacyOps Behind</p>
                    <div className={`${style.downtoup3} ${style.line}`}></div>
                    <div className={`${style.downtoup3} ${style.subtitle2}`}>
                        <span>The</span>
                        <span className={style.subtitile2white}>AI powered unified PSA-RMM</span>
                        <span>platform</span>
                        <span>for modern MSPs</span>
                    </div>
                </div>
                <div className={`${style.buttonContainer}`}>
                    <button className={`${style.button1} ${style.buttonstyles} ${style.downtoup4}`}>GET STARTED FOR FREE</button>
                    <button className={`${style.button2} ${style.buttonstyles} ${style.downtoup4}`}>BOOK A DEMO</button>
                </div>
            </div>
            <div className={style.rightside}>
                <img src={heropic} alt="HeroPic" />
            </div>
        </section>
    );
}