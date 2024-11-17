import { info, card, letraColor, gastos } from "./Gastos.module.css"
import Gasto from "./gasto"
const ListaGastos = () => {
    return(
        <>
            <section class={info}>
                <div class={card}>
                    <div class={letraColor}>
                        Mis gastos: 50000
                    </div>
                </div>
                <div class={card}>
                    <div class={letraColor}>
                        Gastos totales: 125000
                    </div>
                </div>
            </section>
            <section className={gastos}>
                <Gasto nombre="Hotel"/>
                <Gasto nombre="Carro"/>
                <Gasto nombre="Comida"/>
                <Gasto nombre="Souvenirs"/>
            </section>
        </>
    )
}
export default ListaGastos