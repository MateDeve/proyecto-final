import React, { useState, useEffect } from "react"
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
        linkBalance = linkBalance + "?viaje=" + titulo + "&codigo=" + codigo
    }
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setLogged(true);
            return;
        }
    }, [])
    return(
        <div className={mainContainer}>
            <div className={container}>
                <h2>{titulo}</h2>
                {logged ? (
                    <>
                        {titulo === "Mis viajes" && 
                            <>
                                <div className={btns}>
                                <Button texto="Unirse a un viaje" link="unirse-viaje"/>
                                <Button texto="Agregar un viaje" link="agregar-viaje"/>
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
                    
                    </>
                ) : (
                    <p>Para ver este contenido debes iniciar sesión</p>
                )}
            </div>
        </div>
    )
}

export default Pagina