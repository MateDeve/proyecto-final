import { viajes } from "./Viaje.module.css"
import Viaje from "./viaje"
const ListaViajes = ({changeView}) => {
    return(
        <section className={viajes}>
            <Viaje destino="Cartagena" changeView={changeView}/>
            <Viaje destino="Medellín" changeView={changeView}/>
            <Viaje destino="Madrid" changeView={changeView}/>
            <Viaje destino="Roma" changeView={changeView}/>
        </section>
    )
}
export default ListaViajes