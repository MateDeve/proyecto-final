import React, { useState, useEffect } from "react"
import { listaUsuarios, usuario, listaUsuariosViaje, usuarioViaje } from "./Usuarios.module.css"

const Usuarios = ({ participantes, gastos, filtro, onSelectUser }) => {
    const [users, setUsers] = useState([])
    console.log(gastos)
    useEffect(() => {
        const usersApp = JSON.parse(localStorage.getItem("users")) || []
        setUsers(usersApp)
    }, [])

    const calcularGastosPorParticipante = () => {
        const totalGastos = {}
        if(gastos !== undefined){
            gastos.forEach((bill) => {
                bill.divBetween.forEach((user) => {
                    if (totalGastos[user.userName]) {
                        totalGastos[user.userName] += Number(user.paid)
                    } else {
                        totalGastos[user.userName] = Number(user.paid)
                    }
                })
            })
        }

        return totalGastos
    }
    
    const gastosPorParticipante = calcularGastosPorParticipante()

    return (
        <>
            {filtro !== undefined ? (
                <ul className={listaUsuarios}>
                    {users
                        .filter((user) =>
                            user.userName.toLowerCase().includes(filtro.toLowerCase())
                        )
                        .map((user, index) => (
                            <li key={index} className={usuario} onClick={() => {onSelectUser(user.userName)}}>{user.userName}</li>
                        ))}
                </ul>
            ) : (
                <ul className={listaUsuariosViaje}>
                    {participantes.map((participante, index) => (
                        <li key={index} className={usuarioViaje}>
                            {participante}: $
                            {gastosPorParticipante[participante]
                                ? gastosPorParticipante[participante].toLocaleString("es-CO")
                                : 0}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Usuarios
