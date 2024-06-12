import style from "./index.module.css";
import {members} from "./data";


const Achievement = ()=> {
    return (
        <>

            <div className={style.achievementSection}>

                <div>
                    <div className={style.localBusiness} style={{
                        paddingTop: '20px',
                    }}>
                        <div>
                        </div>
                        <div>
                            <div><p style={{fontSize: '36px', color: '#4D4D4D', margin: '0'}}>Helping a</p></div>
                            <div><p style={{fontSize: '36px', color: '#4CAF4F', margin: '0'}}>business reinvent
                                itself</p></div>
                            <div><p style={{fontSize: '16px', color: '#18191F', margin: '0'}}>reached here with our hard
                                work and dedication</p></div>
                        </div>
                    </div>


                </div>

                <div className={style.statisticsNumbers}>
                    <div className={style.statsContainer} style={{columnGap: "30px", rowGap: "20px"}}>
                        {
                            members.map((value, index) => (
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "15px"
                                }} key={index}>
                                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                                            <img src={value.image} />
                                        </div>
                                        <div style={{display:"flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                                            <h6 style={{marginBottom:0}}>{value.number}</h6>
                                            <h6 style={{marginTop:"10px"}}>{value.text}</h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>

        </>
    )
}

export default Achievement;