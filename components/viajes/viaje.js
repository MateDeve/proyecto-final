import { viaje, letraColor } from "./Viaje.module.css"



const Viaje = ({destino, changeView}) => {
    const urlDestino = "detalle-viaje?destino=" + destino
    return(
        <a className={viaje} onClick={() => {changeView('detalle', destino)}}>
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