import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { balancePos, balanceNeg, listaBalances, elBalance } from "../balance/Balance.module.css"
import { btn } from "../button/button.module.css"

const Balance = () => {
    const router = useRouter()
    const { viaje } = router.query
    const { codigo } = router.query
    const [misViajes, setMisViajes] = useState([])
    const [selectedViaje, setSelectedViaje] = useState(null)
    const [user, setUser] = useState([])
    const [balances, setBalances] = useState({})
    const [success, setSuccess] = useState("")

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const allViajes = JSON.parse(localStorage.getItem("viajes")) || []
        if (currentUser) {
            setUser(currentUser)
            const userViajes = allViajes.filter(
                (v) =>
                    v.owner === currentUser.userName ||
                    v.guests.includes(currentUser.userName)
            )
            setMisViajes(userViajes)
            const viajeSeleccionado = userViajes.find((v) => v.code === codigo)
            setSelectedViaje(viajeSeleccionado || null)
        }
    }, [codigo])

    useEffect(() => {
        if (selectedViaje) {
            const participants = [selectedViaje.owner, ...selectedViaje.guests]
            const balances = {}

            participants.forEach((participant) => {
                balances[participant] = 0
            })

            selectedViaje.Bills.forEach((bill) => {
                const { paidFor, price, divBetween } = bill
                const dividedAmount = Number(price) / divBetween.length
                let bandera = false

                divBetween.forEach((participant) => {
                    if(participant.paid === 0){
                        bandera = true
                    }
                })

                divBetween.forEach((participant) => {
                    if(bandera){
                        if (participant.userName === paidFor) {
                            balances[paidFor] += dividedAmount * (divBetween.length - 1)
                        } else {
                            balances[participant.userName] -= dividedAmount
                        }
                    }
                })
                
            })

            setBalances(balances)
        }
    }, [selectedViaje])

    const balancearGastos = () => {
        if (!selectedViaje) return

        const updatedViaje = selectedViaje

        updatedViaje.Bills.forEach((bill) => {
            const { paidFor, divBetween, price } = bill
            const dividedAmount = Number(price) / divBetween.length

            divBetween.forEach((participant) => {
                participant.paid = dividedAmount
            })
        })

        const allViajes = JSON.parse(localStorage.getItem("viajes")) || []
        const updatedViajes = allViajes.map((v) =>
            v.code === updatedViaje.code ? updatedViaje : v
        )
        localStorage.setItem("viajes", JSON.stringify(updatedViajes))

        setSelectedViaje(updatedViaje)
        setMisViajes(updatedViajes)
        setSuccess("Gastos balanceados correctamente")

        setTimeout(() => {
            window.location.href = "mis-viajes?view=detalle&viaje=" + viaje + "&codigo=" + codigo
        }, 1000)
        
    }

    return (
        <>
            <button className={btn} onClick={balancearGastos}>
                Balancear gastos
            </button>
            {success && <p style={{color: "green"}}>{success}</p>}
            <ul className={listaBalances}>
                {Object.keys(balances).length > 0 &&
                    Object.entries(balances).map(([participant, balance]) => (
                        <li
                            className={balance >= 0 ? `${balancePos} ${elBalance}` : `${balanceNeg} ${elBalance}`}
                            key={participant}
                        >
                            {participant}: {balance.toLocaleString("es-CO")}
                        </li>
                    ))}
            </ul>
            <button className={btn} style={{marginTop: "20px"}} onClick={() => {window.location.href = "mis-viajes?view=detalle&viaje=" + viaje + "&codigo=" + codigo}}>Regresar</button>
        </>
    )
}

export default Balance
