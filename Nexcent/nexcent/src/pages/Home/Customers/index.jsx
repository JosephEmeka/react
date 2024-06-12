import style from './index.module.css'
import picture from '../../../asset/tesla.png'
import cus1 from '../../../asset/Cus1.png'
import cus2 from '../../../asset/cus2.png'
import cus3 from '../../../asset/cus3.png'
import cus4 from '../../../asset/cus4.png'
import cus5 from '../../../asset/cus5.png'
import cus6 from '../../../asset/cus6.png'
import arrow from '../../../asset/Right.png'
const Customer = () => {
    return (
        <>
            <div className = {style.customerSection}>
                <div className = {style.teslaSection}>
                    <img src = {picture} alt={"tesla logo"}/>
                </div>
                <div className = {style.textSection} style={{marginLeft :"50px"}}>
                            <div>
                                <p>
                                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/>
                                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br/>
                                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/>
                                    mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br/>
                                    eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/>
                                    vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum<br/>
                                    id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                                </p>

                            </div>
                            <div>
                                <h4 style = {{color:"#4CAF4F", fontStyle:"Inter", fontSize: "20px"}}>Tim Smith</h4>
                            </div>
                            <div>
                                <p>British Dragon Boat Racing Association</p>
                            </div>
                    <div className={style.logoArea}>
                        <div className={style.logosSection}>
                            <img src={cus1} alt={"tesla logo"}/>
                            <img src={cus2} alt={"tesla logo"}/>
                            <img src={cus3} alt={"tesla logo"}/>
                            <img src={cus4} alt={"tesla logo"}/>
                            <img src={cus5} alt={"tesla logo"}/>
                            <img src={cus6} alt={"tesla logo"}/>
                            <h4 style={{color: "#4CAF4F", fontStyle: "Inter", fontSize: "20px"}}>Meet all customers <img
                                src={arrow} alt={"arrow"}/></h4>
                    </div>

                    {/*<div>*/}
                    {/*    <h4 style={{color: "#4CAF4F", fontStyle: "Inter", fontSize: "20px"}}>Meet all customers <img src={arrow} alt={"arrow"}/></h4>*/}
                    {/*    </div>*/}

                    </div>


                </div>
            </div>
        </>
    )
}
export default Customer;