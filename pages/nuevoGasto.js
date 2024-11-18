import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import NuevoGasto from "@/components/forms/nuevoGasto/nuevoGasto"
import { mainContainer, container } from "../styles/Pages.module.css"


const NuevoGastos = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <NuevoGasto/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NuevoGastos