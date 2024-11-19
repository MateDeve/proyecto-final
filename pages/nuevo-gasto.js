import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import AnadirGasto from "@/components/forms/anadirGasto/anadirGasto"
import { mainContainer, container } from "../styles/Pages.module.css"


const NuevoGasto = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <AnadirGasto/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NuevoGasto