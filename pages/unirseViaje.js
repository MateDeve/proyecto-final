import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import UnirseViaje from "@/components/forms/unirseViaje/unirseViaje"
import { mainContainer, container } from "../styles/Pages.module.css"



const UnirseViajes = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <UnirseViaje/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UnirseViajes