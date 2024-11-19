import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { info, card, letraColor, gastos } from "./Gastos.module.css";
import Gasto from "./gasto";
import Usuarios from "../usuarios/usuarios";

const ListaGastos = () => {
    const router = useRouter();
    const { codigo } = router.query;
    const [misViajes, setMisViajes] = useState([]);
    const [selectedViaje, setSelectedViaje] = useState(null);
    const [user, setUser] = useState([])

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const allViajes = JSON.parse(localStorage.getItem("viajes")) || [];
        if (currentUser) {
            setUser(currentUser)
            const userViajes = allViajes.filter(
                (v) =>
                    v.owner === currentUser.userName ||
                    v.guests.includes(currentUser.userName)
            );
            setMisViajes(userViajes);
            const viajeSeleccionado = userViajes.find((v) => v.code === codigo);
            setSelectedViaje(viajeSeleccionado || null);
        }
    }, [codigo]);

    return (
        <>
            <section className={info}>
                <div className={card}>
                    <div className={letraColor}>
                        Mis gastos:{" $"}
                        {selectedViaje
                            ? selectedViaje.Bills.reduce((acc, bill) => {
                                const currentUserBill = bill.divBetween.find(
                                    (usuario) => usuario.userName === user.userName
                                );
                                return acc + (currentUserBill ? Number(currentUserBill.paid) : 0);
                            }, 0).toLocaleString("es-CO")
                            : 0}
                    </div>
                </div>
                <div className={card}>
                    <div className={letraColor}>
                        Gastos totales:{" $"}
                        {selectedViaje
                            ? selectedViaje.Bills.reduce(
                                  (acc, bill) => acc + Number(bill.price),
                                  0
                              ).toLocaleString("es-CO")
                            : 0}
                    </div>
                </div>
            </section>
            <h3 style={{marginBottom: "10px"}}>Participantes: </h3>
            {selectedViaje && 
                <Usuarios participantes={[selectedViaje.owner, ...selectedViaje.guests]} gastos={selectedViaje.Bills}/>
            }
            <section className={gastos}>
                {selectedViaje && Array.isArray(selectedViaje.Bills) && selectedViaje.Bills.length > 0 ? (
                    selectedViaje.Bills.map((bill, index) => (
                        <Gasto
                            key={index}
                            info={bill}
                        />
                    ))
                ) : (
                    <p>No hay gastos registrados en este viaje.</p>
                )}
            </section>
        </>
    );
};

export default ListaGastos;
