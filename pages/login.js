import Header from "@/components/header/header"
import InicioSesion from "@/components/forms/inicioSesion/inicioSesion"
import Footer from "@/components/footer/footer"
import { mainContainer, container } from "../styles/Pages.module.css"

const Login = () =>{
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <InicioSesion/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login