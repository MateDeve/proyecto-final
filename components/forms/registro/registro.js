import { btn } from "../Forms.module.css"

const Registro = () => {
    return(
        <>
            <h2>Registro</h2>
            <form action="mis-viajes" method="get">
                    <input type="text" name="name" id="name" placeholder="Nombre"/>
                    <input type="text" name="last-name-1" id="lastName1" placeholder="Primer Apellido"/>
                    <input type="text" name="last-name-2" id="lastName2" placeholder="Segundo Apellido"/>
                    <input type="email" name="mail" id="mail" placeholder="Correo Electrónico"/>
                    <input type="password" name="password" id="password" placeholder="Contraseña"/>
                    <input type="password" name="conf-password" id="confPassword" placeholder="Confirmar Contraseña"/>
                    <input type="submit" id="btn-login" className={btn} value="Registrarse"/>
            </form> 
        </>
    )
}
export default Registro