import { container, linea } from "../../styles/Home.module.css"

const Footer = () => {
    return(
        <footer>
            <div className={container}>
                <div className={linea}></div>
                <p>© Todos los derechos reservados CMD.</p>
            </div>
        </footer>
    )
}

export default Footer