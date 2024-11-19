import React, { useState } from "react"
import { card, letraColor, gasto, infoGasto } from "./Gastos.module.css"

const Gasto = ({info}) => {
    const [informacion, setInformacion] = useState(false)
    return(
        <div className={gasto} data-gasto={info.name}>
            <div className={card} onClick={() => {setInformacion(!informacion)}}>
                <div className={letraColor}>
                    <div>
                        {info.name}
                    </div>
                    <div>
                        {info.date}
                    </div>
                </div>
            </div>
            {informacion && 
                <div className={infoGasto} id={info.name}>
                    <ul>
                        <li>Total pagado: {info.price}</li>
                        <li>Pagado por: {info.paidFor}</li>
                        <li>Para {info.divBetween.length} participante(s):</li>
                        {info.divBetween.map((payer, index) => (
                            <li key={index} className={letraColor}>{payer.userName} : ${payer.paid}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>

    )
}

export default Gasto