import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import AgregarViaje from "@/components/forms/agregarViaje/agregarViaje"
import { mainContainer, container } from "../styles/Pages.module.css"


const AgregarViajes = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <AgregarViaje/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AgregarViajes