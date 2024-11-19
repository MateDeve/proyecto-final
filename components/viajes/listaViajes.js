import React, { useState, useEffect } from "react"
import { viajes } from "./Viaje.module.css"
import Viaje from "./viaje"
const ListaViajes = ({changeView}) => {
    const [misViajes, setMisViajes] = useState([]);

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const allViajes = JSON.parse(localStorage.getItem("viajes")) || [];
        if (currentUser) {
            const userViajes = allViajes.filter(
                (viaje) => 
                    viaje.owner === currentUser.userName ||
                    viaje.guests.includes(currentUser.userName)
            );
            setMisViajes(userViajes);
        }
    }, []);


    return(
        <section className={viajes}>
            {misViajes.length === 0 ? (
                <p>No tienes viajes aún. ¡Qué esperas!</p>
            ) : (
                <>
                    {misViajes.map((viaje, index) => (
                        <Viaje destino={viaje.name} codigo={viaje.code} changeView={changeView} owner={viaje.owner} key={index}/>
                    ))}
                
                </>
            )}
        </section>
    )
}
export default ListaViajes