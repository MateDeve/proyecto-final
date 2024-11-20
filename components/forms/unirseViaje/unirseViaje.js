import React, { useState, useEffect } from "react"
import {mainSection,  mainInfo, p} from "./UnirseViaje.module.css"
import { btn } from "../Forms.module.css"

const UnirseViaje = () => {
    const [codigoViaje, setCodigoViaje] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (currentUser) {
            setLogged(true)
            return
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const currentUser = JSON.parse(localStorage.getItem("currentUser"))


        const viajes = JSON.parse(localStorage.getItem("viajes")) || []
        const viajeEncontrado = viajes.find((viaje) => viaje.code === codigoViaje)

        if (!viajeEncontrado) {
            setError("El código proporcionado no corresponde a ningún viaje.")
            return
        }

        if (viajeEncontrado.guests.includes(currentUser.userName)) {
            setError("Ya eres participante de este viaje.")
            return
        }else if(viajeEncontrado.owner === currentUser.userName){
            setError("Eres el propietario de este viaje")
            return
        }

        viajeEncontrado.guests.push(currentUser.userName)
        const updatedViajes = viajes.map((viaje) =>
            viaje.code === codigoViaje ? viajeEncontrado : viaje
        )
        localStorage.setItem("viajes", JSON.stringify(updatedViajes))

        setError("")
        setSuccess("Te has unido al viaje exitosamente.")
        setTimeout(() => {
            window.location.href = "mis-viajes?view=viajes"
        }, 1000)
    }

    return (
        <>  
            <h2>Únete a un viaje</h2>
            {logged ? (
                <section className={mainSection}>
                    <article className={mainInfo}>
                        <p className={p}>
                            Pide a los otros participantes el código del viaje al que
                            quieres unirte. Luego, haz clic en “Unirme”.
                        </p>
                        <p className={p}>
                            Si lo prefieres, también puedes copiar y pegarlo en este cuadro.
                        </p>
                    </article>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="codigoViaje"
                            placeholder="Código del viaje"
                            value={codigoViaje}
                            onChange={(e) => setCodigoViaje(e.target.value)}
                            required
                        />
                        <input type="submit" value="Unirme" className={btn} />
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                </section>
                ) : (
                    <p>Para unirte a un viaje debes iniciar sesión primero</p>
                )
                
            }
        </>
    )
}

export default UnirseViaje


