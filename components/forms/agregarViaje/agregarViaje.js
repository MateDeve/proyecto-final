import { mainSection } from "./AgregarViaje.module.css"
import { btn } from "../Forms.module.css"

const AgregarViaje = () => {
    return(
        <>
                    <h2>Nuevo viaje</h2>
                    <section class={mainSection}>
                        <form action="#" method="post">
                            <input type="text" placeholder="Nombre del viaje" name="nombreViaje" id="nombreViaje"/>
                            <input type="text" placeholder="Tipo de divisa (COP o USD)" name="tipoDivisa" id="tipoDivisa"/>
                            <select name="participantes" id="participantes">
                                <option value="participantes" disabled selected>Participantes</option>
                                <option value="value1">Mateo</option>
                                <option value="value2">Camilo</option>
                                <option value="value3">Manuela</option>
                                <option value="value4">Daniel</option>
                            </select>
                            <input type="submit" value="Crear un nuevo viaje" class={btn}/>
                        </form>
                    </section>         
        </>
    )
}


export default AgregarViaje