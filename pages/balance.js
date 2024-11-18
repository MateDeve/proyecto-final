import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Balance from "@/components/balance/balance"
import { mainContainer, container } from "../styles/Pages.module.css"


const Balances = () => {
    return(
        <>
            <Header/>
            <div className={mainContainer}>
                <div className={container}>
                    <Balance/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Balances