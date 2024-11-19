import { viaje, letraColor } from "./Viaje.module.css"



const Viaje = ({destino, codigo, owner, changeView}) => {
    const urlDestino = "detalle-viaje?destino=" + destino
    return(
        <a className={viaje} onClick={() => {changeView('detalle', destino, codigo)}}>
            <figure>
                <img src="/images/avion.png" alt="avion"/>
            </figure>
            <div className={letraColor}>
                {destino}: {codigo} {owner}
            </div>
        </a>
    )
}

export default Viaje