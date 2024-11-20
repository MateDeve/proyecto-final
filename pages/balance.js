import React, { useState, useEffect } from "react"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Balance from "@/components/balance/balance"
import { mainContainer, container } from "../styles/Pages.module.css"


const Balances = () => {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setLogged(true);
            return;
        }
    }, [])
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    {logged ? (
                        <Balance/>
                    ) : (
                        <p>Debes iniciar sesión par acceder a este contenido</p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Balances