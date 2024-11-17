import Button from "@/components/button/button"
import ListaViajes from "@/components/viajes/listaViajes"
import ListaGastos from "../gastos/listaGastos"
import { mainContainer, container, btns} from "../../styles/Pages.module.css"

const Pagina = ({titulo}) => {
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
                        <ListaViajes/>
                    </>
                }
                {titulo !== "Mis viajes" && 
                    <>
                        <div className={btns}>
                        <Button texto="Añadir gasto" link="añadir-gasto"/>
                        <Button texto="Mirar balance" link="balance"/>
                        </div>
                        <ListaGastos/>
                    </>
                }
            </div>
        </div>
    )
}

export default Pagina