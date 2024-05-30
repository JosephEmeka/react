import styles from './index.module.css'
import img from '../../../asset/heroImg.jpg'
const Hero = () => {

    return (
        <>
            <div className={styles.heroSection}>
                <div>
                    <h1>Lessons and insights
                        <span style={{color: "#4caf4f", display:"block"}}> from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button
                        style={{color: "white", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>Register
                    </button>
                </div>
                <img src={img} alt="image"/>
            </div>
        </>
    )
}

export default Hero;