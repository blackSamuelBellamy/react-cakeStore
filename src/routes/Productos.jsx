import './productos.css'
import { useContext } from 'react'
import { DataContext } from '../components/context/DataContext'
import One from '../sources/g1.jpg'
import Two from '../sources/g2.jpg'
import Tree from '../sources/g3.jpg'
import Four from '../sources/g4.jpg'
import Five from '../sources/g5.jpg'
import Six from '../sources/g6.png'
import Seven from '../sources/g7.jpg'
import Eight from '../sources/g8.jpg'
import Nine from '../sources/g9.jpg'
import Ten from '../sources/g10.jpg'
import Eleven from '../sources/g11.jpg'
import Twelve from '../sources/g12.jpg'


const Productos = () => {
    const { setMain } = useContext(DataContext)
    if(window.location.href.includes('Productos'))setMain(true)
    return(
        <div className="productos">
          <img src= {One} alt='dessertPic' className='ancho'/>
          <img src= {Two} alt='dessertPic'className='alto' />
          <img src= {Tree} alt='dessertPic' />
          <img src= {Four} alt='dessertPic' className='alto'/>
          <img src= {Five} alt='dessertPic' />
          <img src= {Six} alt='dessertPic' className='ancho'/> 
          <img src= {Seven} alt='dessertPic' />  
          <img src= {Eight} alt='dessertPic' /> 
          <img src= {Nine} alt='dessertPic' className='alto'/> 
          <img src= {Ten} alt='dessertPic' /> 
          <img src= {Eleven} alt='dessertPic' />    
          <img src= {Twelve} alt='dessertPic' className='ancho'/>    
        </div>
    )
}

export default Productos