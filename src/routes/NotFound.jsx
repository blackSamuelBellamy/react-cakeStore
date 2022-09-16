import './notFound.css'
import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="notFound">
            <p>No se encontró este link. Pide un descuento por las molestías</p>
            <Link to='/'><button>VOLVER</button></Link>
        </div>
    )
}

export default NotFound