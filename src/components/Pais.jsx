import React from 'react'
import '../App.css'
import logoPais from '../pictures/descarga.jpeg'



function Pais() {
    return (
        <div className='Pais'>
            <div id='NamePais'>
            <h2>pais</h2>
            </div>
            <div id='ImgPais'>
                <img src={logoPais} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Pais