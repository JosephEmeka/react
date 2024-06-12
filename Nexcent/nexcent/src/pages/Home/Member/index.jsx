import icon1 from "../../../asset/nIcon1.png"
import icon2 from "../../../asset/nIcon2.png"
import icon3 from "../../../asset/nIcon3.png"
import styles from "./index.module.css"

const Member = () => {
    return(
        <>
            <div className={styles.member2}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src={icon1} alt="icon 1"/>
                    </div>
                    <h3 style={{color: "#4d4d4d", textAlign: "center"}}>Membership <br/>Organisations</h3>
                    <p style={{width: "80%", textAlign: "center", color: "#4d4d4d"}}>Our membership management <br/>software
                        provides full automation of <br/>membership renewals and payments</p>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <div
                        style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src={icon2} alt="icon 1"/>
                    </div>
                    <h3 style={{color: "#4d4d4d", textAlign: "center"}}>National <br/>Associations</h3>
                    <p style={{width: "80%", textAlign: "center", color: "#4d4d4d"}}>Our membership management <br/>software
                        provides full automation of <br/>membership renewals and payments</p>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <div
                        style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src={icon3} alt="icon 1"/>
                    </div>
                    <h3 style={{color: "#4d4d4d", textAlign: "center"}}>Clubs And <br/>Groups</h3>
                    <p style={{width: "80%", textAlign: "center", color: "#4d4d4d"}}>Our membership management <br/>software
                        provides full automation of <br/>membership renewals and payments</p>
                </div>
            </div>

        </>
    )
}

export default Member;