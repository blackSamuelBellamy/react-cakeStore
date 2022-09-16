import './contacto.css'
import { useContext, useState } from 'react';
import { DataContext } from '../components/context/DataContext'
import { SiWhatsapp, SiTiktok } from 'react-icons/si'
import { GrFacebook } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import swal from 'sweetalert'

const Contacto = () => {

    const { setMain } = useContext(DataContext)
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    if (window.location.href.includes('Contacto')) setMain(true)

    const validation = e => {
        e.preventDefault()

        if (nombre === '' || correo === '') {
            swal({
                title: 'Lo siento',
                text: 'No pueden haber campos vacíos',
                icon: 'error',
                button: 'Entendido'
            })

        } else if (!correo.includes('@') || !correo.includes('.')) {
            swal({
                title: 'Error',
                text: 'Formato de correo no válido',
                icon: 'error',
                button: 'Entendido'
            })
        }
        else {
            swal({
                title: 'Muy bien!',
                text: 'Nos pondremos en contacto contigo para enviarte nuestras ofertas',
                icon: 'success',
                button: 'Gracias!'
            })
            setNombre('')
            setCorreo('')
        }
    }

    return (
        <div className="contacto">
            <form>
                <h2>Recibe nuestras ofertas</h2>
                <div>
                    <input type="text" id='name' value={nombre}
                        onChange={e => setNombre(e.target.value)} required />
                    <label htmlFor="name">tu nombre</label>

                </div>
                <div>
                    <input type="email" id='mail' value={correo}
                        onChange={e => setCorreo(e.target.value)} required />
                    <label htmlFor="mail">tu correo</label>

                </div>
                <button onClick={validation}>Inscribir</button>
                <div className="icons">
                    <SiWhatsapp className='icon' />
                    <GrFacebook className='icon' />
                    <BsInstagram className='icon' />
                    <SiTiktok className='icon' />
                    <IoLogoYoutube className='icon' />
                </div>
            </form>
        </div>
    );
}

export default Contacto