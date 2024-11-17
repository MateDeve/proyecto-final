import Header from "@/components/header/header"
import ImagenMain from "@/components/imagenMain/imagenMain"
import Cards from "@/components/cards/cards"
import Button from "@/components/button/button"
import Footer from "@/components/footer/footer"
import { mainContainer, container, linea, textMain } from "../styles/Home.module.css"


const Index = () => {
  return(
    <>
      <Header/>
      <div className={mainContainer}>
        <ImagenMain/>
        <div className={container}>
          <section className={textMain}>
            "Todo es más divertido si haces planes con amigos"
          </section>
          <Cards backColor={false}/>
          <section className={textMain}>
            Gestión de gastos de manera sencilla
          </section>
          <Cards backColor={true}/>
          <Button texto="¡Empieza Ahora!" link="register"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Index