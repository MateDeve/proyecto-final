import { viaje, letraColor } from "./Viaje.module.css"



const Viaje = ({destino}) => {
    const urlDestino = "detalle-viaje?destino=" + destino
    return(
        <a href={urlDestino} className={viaje}>
            <figure>
                <img src="/images/avion.png" alt="avion"/>
            </figure>
            <div className={letraColor}>
                {destino}
            </div>
        </a>
    )
}

export default Viaje