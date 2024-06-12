import styles from './index.module.css'
import arrow from '../../../asset/Right.png'
import first from '../../../asset/image 18.png'
import second from '../../../asset/image 19.png'
import third from '../../../asset/image 20.png'
export const Community = () => {
    return (
        <>
            <div className={styles.communityContainer}>
                <div className={styles.communityHeader}>
                    <p style={{
                        fontSize: "36px",
                        display: "flex",
                        alignItems: "center",
                        color: "#4D4D4D",
                        fontStyle: "Inter",
                        margin: '0',
                    }}>Caring is the new marketing</p>
                    <p style={{
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        color: "#717171",
                        fontStyle: "Inter",
                        marginBottom: '50px',
                    }}>The Nexcent blog is the best place to read about the latest membership insights,<br/>
                        trends and more. See who's joining the community, read about how our community<br/>
                        are increasing their membership income and lot's more.</p>
                </div>
                <div className={styles.communityImage}>


                    {/*first section*/}
                    <div>
                        <div>
                            <img src={first} alt="computer"/>
                        </div>
                        <div className={styles.lastPart} style={{
                            backgroundColor: "#F5F7FA",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "80%",
                            position: "relative",
                            left: "22.5px"
                        }}>
                            <div>
                                <h4 style={{fontSize: "20px", color: "#717171", alignItems: "center"}}>Creating
                                    Streamlined<br/>
                                    Safeguarding Processes with<br/>
                                    OneRen
                                </h4>
                            </div>
                            <div>
                                <h4 style={{color: "#4CAF4F", fontSize: "20px"}}>
                                    Readmore <img src={arrow} alt="read more"/>
                                </h4>
                            </div>
                        </div>

                    </div>


                    {/*second section*/}
                    <div>
                        <div>
                            <img src={second} alt="computer"/>
                        </div>
                        <div className={styles.lastPartTwo} style={{
                            backgroundColor: "#F5F7FA",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "80%",
                            position: "relative",
                            left: "22.5px"
                        }}>
                            <div>
                                <h4 style={{fontSize: "20px", color: "#717171", alignItems: "center"}}>Creating
                                    What are your safeguarding <br/>
                                    responsibilities and how can<br/>
                                    you manage them?
                                </h4>
                            </div>
                            <div>
                                <h4 style={{color: "#4CAF4F", fontSize: "20px"}}>
                                    Readmore <img src={arrow} alt="read more"/>
                                </h4>
                            </div>
                        </div>
                    </div>

                        {/*third section*/}

                    <div>

                        <div>
                            <img src={third} alt="computer"/>
                        </div>
                        <div className={styles.lastPartThree} style={{
                            backgroundColor: "#F5F7FA",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "80%",
                            position: "relative",
                            left:"22.5px"
                        }}>
                            <div>
                                <h4 style={{fontSize: "20px", color: "#717171", alignItems: "center"}}>Creating
                                    Revamping the Membership<br/>
                                    Model with Triathlon<br/>
                                    Australia
                                </h4>
                            </div>
                            <div>
                                <h4 style={{color: "#4CAF4F", fontSize: "20px"}}>
                                    Readmore <img src={arrow} alt="read more"/>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Community

