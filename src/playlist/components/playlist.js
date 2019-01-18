import React from 'react'
import Media from './media'
import './playlist.css'

/* 
    Componente normal: Se escribe como una clase y extiende de Component
    Componente funcional: se escribe como una funcion y nos sirve solo para renderzar
    Componente Puro: es un componente normal solo extiene de PureComponent y tiene el metodo shouldComponentUpdate ya asignado no se tiene que validar a mano
 */

function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map(item => {
                    return <Media {...item} key={item.id}/>
                })
            }
        </div>
    )
}

export default Playlist
