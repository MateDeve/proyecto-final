import Button from "@/components/button/button"
import ListaViajes from "@/components/viajes/listaViajes"
import ListaGastos from "../gastos/listaGastos"
import { mainContainer, container, btns} from "../../styles/Pages.module.css"
import { btn } from "../button/button.module.css"

const Pagina = ({titulo, changeView, view, setView, codigo}) => {
    let linkNuevoGasto = "nuevo-gasto"
    let linkBalance = "balance"
    if (codigo){
        linkNuevoGasto = linkNuevoGasto + "?viaje=" + codigo
        linkBalance = linkBalance + "?viaje=" + codigo
    }
    return(
        <div className={mainContainer}>
            <div className={container}>
                <h2>{titulo}</h2>
                {titulo === "Mis viajes" && 
                    <>
                        <div className={btns}>
                        <Button texto="Unirse a un viaje" link="unirseViaje"/>
                        <Button texto="Agregar un viaje" link="agregarViaje"/>
                        </div>
                        <ListaViajes changeView={changeView}/>
                    </>
                }
                {titulo !== "Mis viajes" && 
                    <>
                        <div className={btns}>
                        <Button texto="Añadir gasto" link={linkNuevoGasto}/>
                        <Button texto="Mirar balance" link={linkBalance}/>
                        </div>
                        <ListaGastos/>
                        <button className={btn} onClick={() => {changeView('viajes', '')}}>Regresar</button>
                        <br/>
                    </>
                }
            </div>
        </div>
    )
}

export default Pagina