import { viajes } from "./Viaje.module.css"
import Viaje from "./viaje"
const ListaViajes = () => {
    return(
        <section className={viajes}>
            <Viaje destino="Cartagena"/>
            <Viaje destino="Medellín"/>
            <Viaje destino="Madrid"/>
            <Viaje destino="Roma"/>
        </section>
    )
}
export default ListaViajes