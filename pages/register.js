import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Registro from "@/components/forms/registro/registro"
import { mainContainer, container } from "../styles/Pages.module.css"


const Register = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <Registro/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register