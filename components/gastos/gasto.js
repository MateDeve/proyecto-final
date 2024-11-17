import React, { useState } from "react"
import { card, letraColor, gasto, infoGasto } from "./Gastos.module.css"

const Gasto = ({nombre}) => {
    const [informacion, setInformacion] = useState(false)
    return(
        <div className={gasto} data-gasto={nombre} onClick={() => {setInformacion(!informacion)}}>
            <div className={card}>
                <div className={letraColor}>
                    <div>
                        {nombre}
                    </div>
                    <div>
                        26/09/2024
                    </div>
                </div>
            </div>
            {informacion && 
                <div className={infoGasto} id={nombre}>
                    <ul>
                        <li>Total pagado: 100</li>
                        <li>Pagado por: Mateo</li>
                        <li>Para 4 participantes incluyéndome:</li>
                        <li>Camilo: 25</li>
                        <li>Daniel: 25</li>
                        <li>Manuela: 25</li>
                        <li>Mateo: 25</li>
                    </ul>
                </div>
            }
        </div>

    )
}

export default Gasto