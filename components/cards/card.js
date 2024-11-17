import { card, imgCard, backColor } from "./cards.module.css"

const Card = ({texto, img, backGColor}) => {
    const clases = `${card} ${backGColor ? backColor : ''}`;
    return(
        <>
            <div className={clases}>
                {img && <figure className={imgCard}>
                        <img src={img} alt=""></img>
                    </figure>}
                <p>{texto}</p>
            </div>
        </>
    )
}

export default Card