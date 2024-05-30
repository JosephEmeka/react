import logo from '../../asset/2Logo.png'
import twitter from '../../asset/Social X.png'
import youtube from '../../asset/Social youtube.png'
import web from '../../asset/Social Icons.png'
import instagram from '../../asset/Social Insta.png'
import send from '../../asset/send.png'
import style from './index.module.css'
import arrow from '../../asset/Arrow.png'
const Footer = () => {
    return (
        <>
            <div className={style.footerButton}>
                <button style={{
                    padding: "10px",
                    borderRadius: "4px",
                    background: "#4caf4f",
                    color: "#fff",
                    border: "none"
                }}>Get a Demo <img src={arrow} alt=''/></button>
            </div>

            <footer className={style.footer}>

                <div>
                    <img src={logo}/>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div>
                        <img src={instagram}/>
                        <img src={web}/>
                        <img src={twitter}/>
                        <img src={youtube}/>
                    </div>
                </div>
                <div className={style.footerSide}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={send} className={style.image}/>
                        </label>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;