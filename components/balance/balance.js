import { container, mainContainer, mainSection, formViaje, row_input, btn} from "../balance/Balance.module.css"


const Balance = () => {
    return(
        <>
            <div class={mainContainer}>
                <div class={container}>
                    <section class={mainSection}>
                        <form class={formViaje} action="#" method="post">
                            <input type="submit" value="Equilibrar gastos" class={btn}/>
                        </form>
                        <div class={row_input}>
                            <h3>Mateo: +150000</h3>
                        </div>
                        <div class={row_input}>
                            <h3>Camilo: -150000</h3>
                        </div>
                        <div class={row_input}>
                            <h3>Daniel: +50000</h3>
                        </div>
                        <div class={row_input}>
                            <h3>Mateo: -20000</h3>
                        </div>
                    </section>
                </div>
            </div>          
        </>
    )
}

export default Balance