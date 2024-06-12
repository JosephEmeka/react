
import style from './index.module.css'
const FilledButton =({text}) => {

    return (
        <div className={style.filledButtonStyle}>
            <button className={style.btn} style={{padding: "10px",
                borderRadius: "4px",
                background: "#4caf4f",
                color: "#fff",
                border: "none"
            }}>{text}</button>
        </div>

    )
}
export default FilledButton;