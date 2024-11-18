import { btn } from "../Forms.module.css"
import { container, mainContainer, mainSection, mainInfo, formGroup, h1, p} from "../unirseViaje/UnirseViaje.module.css"

const UnirseViaje = () => {
    return(
        <>
                    <h1 class={h1}>Únete a un viaje</h1>
                    <section class={mainSection}>
                        <article class={mainInfo}>
                            <p class={p}>
                                Pide a los otros participantes el código del viaje al que quieres unirte. Luego, haz clic en “Unirme”.
                            </p>                   
                            <p class={p}>
                                Si lo prefieres, también puedes copiar y pegarlo en este cuadro.
                            </p>                 
                        </article>
                        <form>
                            <input type="text" id="codigoViaje" placeholder="Código del viaje" required/>
                            <input type="submit" className={btn}/>
                        </form>
                    </section>
        </>
    )
}
export default UnirseViaje

