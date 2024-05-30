const Member = () => {
    return(
        <>
            <div className={styles.member2}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src={} alt="icon 1"/>
                    </div>
                    <h3 style={{color: "#4d4d4d", textAlign: "center"}}>Membership <br/>Organisations</h3>
                    <p style={{width: "80%", textAlign: "center", color: "#4d4d4d"}}>Our membership management <br/>software
                        provides full automation of <br/>membership renewals and payments</p>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <div
                        style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src="asset/newIcon3.png" alt="icon 1"/>
                    </div>
                    <h3 style={{color: "#4d4d4d", textAlign: "center"}}>National <br/>Associations</h3>
                    <p style={{width: "80%", textAlign: "center", color: "#4d4d4d"}}>Our membership management <br/>software
                        provides full automation of <br/>membership renewals and payments</p>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <div
                        style={{height: "55px", width: "70px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", background: "#e8f5e9"}}>
                        <img src="asset/newIcon%20(2).png" alt="icon 1"/>
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