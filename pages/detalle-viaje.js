import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import { useRouter } from 'next/router';
import Pagina from "@/components/pagina/pagina";

const DetalleViaje = () => {
    const router = useRouter();
    const { destino } = router.query;
    return(
        <>
            <Header/>
            <Pagina titulo={destino}/>
            <Footer/>
        </>

    )
}
export default DetalleViaje