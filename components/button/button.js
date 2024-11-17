import { divBtn, btn } from "./button.module.css"

const Button = ({texto, link}) => {
    return(
        <div className={divBtn}>
            <a href={link} className={btn}>{texto}</a>
        </div>
    )
}
export default Button