import { btn } from "../Forms.module.css"

const InicioSesion = () => {
    return(
        <>
            <h2>Bienvenido</h2>
            <form action="mis-viajes" method="get">
                <input type="email" name="mail" id="mail" placeholder="Correo Electrónico"/>
                <input type="password" name="password" id="password" placeholder="Contraseña"/>
                <input type="submit" id="btn-login" className={btn} value="Ingresar"/>
            </form>
        </>
    )
}
export default InicioSesion