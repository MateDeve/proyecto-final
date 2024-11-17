import Card from "./card"
import { cards } from "./cards.module.css"

const Cards = ({ backColor }) => {
    if(backColor){
        return(
            <section className={cards}>
                <Card texto="Multiplataforma" img="" backGColor={true}/>
                <Card texto="Divides gastos en un clic" img="" backGColor={true}/>
                <Card texto="Ideal para cualquier plan" img="" backGColor={true}/>
            </section>
        )
        
    }else{
        return(
            <section className={cards}>
                <Card texto="Crea planes con tu grupo de amigos" img="/images/en-todo-el-mundo.png" backGColor={false}/>
                <Card texto="Añade gastos" img="/images/ahorrar-dinero.png" backGColor={false}/>
                <Card texto="Divide los gastos automáticamente" img="/images/dividir-dinero.png" backGColor={false}/>
            </section>
        )
    }
}

export default Cards