import {  mainSection, formViaje, h1, customCheckbox, containerCheckbox, rowInput } from "../NuevoGasto/NuevoGasto.module.css"
import { btn } from "../Forms.module.css"

const NuevoGasto = () => {
    return(
        <>
                    <h1 class={h1}>Nuevo gasto</h1>
                    <section class={mainSection}>
                        <form class={formViaje} action="#" method="post">
                            <input type="text" placeholder="Nombre del gasto" name="nombreGasto" id="nombreGasto"/>
                            <input type="text" placeholder="Precio total gastado" name="precioGastado" id="precioGastado"/>
                            <input type="text" placeholder="Pagado por" name="pagadoPor" id="pagadoPor"/>
                            <input type="date" className={rowInput} placeholder="Fecha" name="fechaGastado" id="fechaGastado"/>
                            <p>Divido entre:</p>
                            <div className={containerCheckbox}>
                                <input className={customCheckbox} type="checkbox" name="persona1" id="persona2"/>
                                <label for="">Mateo</label>
                            </div>
                            <div className={containerCheckbox}>
                                <input className={customCheckbox} type="checkbox" name="persona2" id="persona2"/>
                                <label for="">Camilo</label>
                            </div>
                            <div className={containerCheckbox}>
                                <input className={customCheckbox} type="checkbox" name="persona3" id="persona3"/>
                                <label for="">Daniel</label>
                            </div>
                            <div className={containerCheckbox}>
                                <input className={customCheckbox} type="checkbox" name="persona3" id="persona3"/>
                                <label for="">Manuela</label>
                            </div>
                            <input type="submit" value="Añadir gasto" class={btn}/>
                        </form>
                    </section>      
        </>
    )
}


export default NuevoGasto