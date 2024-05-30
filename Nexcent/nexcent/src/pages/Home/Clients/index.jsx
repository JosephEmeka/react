import logo1 from '../../../asset/Logo1.png'
import logo2 from '../../../asset/Logo2.png'
import logo3 from '../../../asset/Logo3.png'
import logo4 from '../../../asset/Logo4.png'
import logo5 from '../../../asset/Logo5.png'
import logo6 from '../../../asset/Logo6.png'
import logo7 from '../../../asset/Logo7.png'

import styles from './index.module.css'
import {members} from "./data";
const Clients = () => {

    return (
        <>
            <div className={styles.client}>
                <h4>Our Clients</h4>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                    <img src={logo6} alt=""/>
                    <img src={logo7} alt=""/>
                </div>
            </div>
            <div className={styles.member}>
                <p>Manage your entire community in a single system</p>
                <h6>Who is Nextcent suitable for?</h6>
            </div>

            <div className={styles.member2}>
                {
                    members.map((value, index) => (
                        <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                            <img src={value.image} alt={""}/>
                            <h2>{value.title}</h2>
                            <p style={{width: "50%", textAlign: "center"}}>
                                {value.text}
                            </p>
                        </div>
                    ))}
            </div>
        </>
    )
}
export default Clients;