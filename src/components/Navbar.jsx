import './navbar.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './context/DataContext';

const Navbar = () => {

    const { main } = useContext(DataContext)

    return (
        <div className={ main ? 'nav down': 'nav'}>
            <ul>
                <NavLink to='/'><li>HOME</li></NavLink>
                <NavLink to='/Productos'><li>PRODUCTOS</li></NavLink>
                <NavLink to='/Contacto'><li>CONTACTO</li></NavLink>
            </ul>
        </div>
    );
}

export default Navbar;