import Reatc, { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Pagina from "@/components/pagina/pagina"

const MisViajes = () => {
    const [view, setView] = useState('viajes')
    const router = useRouter();
    const changeView = (newView, viaje) => {
        router.push(`?view=${newView}`, undefined, { shallow: true });
        if(viaje != ''){
            router.push(`?view=${newView}&viaje=${viaje}`, undefined, { shallow: true });
        }
    };

    useEffect(() => {
        const queryView = router.query.view || 'viajes'; 
        setView(queryView);
    }, [router.query.view]);

    const { viaje } = router.query;

    return(
        <>
            <Header/>
            {view === 'viajes' && <Pagina titulo="Mis viajes"  changeView={changeView} view={view} setView={setView}/>}
            {view === 'detalle' && <Pagina titulo={viaje} changeView={changeView} view={view} setview={setView}/>}
            <Footer/>
        
        </>
    )
}
export default MisViajes