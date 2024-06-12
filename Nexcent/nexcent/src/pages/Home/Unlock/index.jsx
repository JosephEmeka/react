
import style from "./index.module.css"
import FilledButton from "../../../components/FilledButton";

const Unlock = ({image, text1, text2, text3,text4,text5,text6, buttontxt })=> {
    return (
        <>

            <div className={style.unlockSection}>
                <div className={style.unlockImage}>
                    <img src={image} alt="Unlock Image"/>
                </div>
                <div style = {{padding : "0"}}>
                    <div>
                        <p style = {{fontSize: "36px", paddingTop: "20px", color:"#4D4D4D"}}>The unseen of spending three<br/> years at Pixelgrade</p>
                    </div>
                    <div>
                        <h5 style={{color: "#717171", fontSize: "14px", fontStyle: "Inter"}}>
                            {text1 && text1}<br/>
                            {text2 && text2}<br/>
                            {text3 && text3}<br/>
                            {text4 && text4}<br/>
                            {text5 && text5}<br/>
                            {text6 && text6}
                        </h5>
                    </div>

                    <div>
                        <FilledButton text={buttontxt}/>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Unlock