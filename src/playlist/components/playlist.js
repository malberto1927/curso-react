import React from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play'
import Volumen from '../../icons/components/volumen'
import Pause from '../../icons/components/pause'
import Fullscreen from '../../icons/components/fullscreen'

/* 
    Componente normal: Se escribe como una clase y extiende de Component
    Componente funcional: se escribe como una funcion y nos sirve solo para renderzar
    Componente Puro: es un componente normal solo extiene de PureComponent y tiene el metodo shouldComponentUpdate ya asignado no se tiene que validar a mano
 */

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
        // console.log(this.props.data)
        return (
            <div className="Playlist">
                <Play size={100} color="blue"/>
                <Volumen size={100} color="blue"/>
                <Pause size={100} color="blue"/>
                <Fullscreen size={100} color="blue"/>
                {
                    playlist.map(item => {
                        return <Media {...item} key={item.id}/>
                    })
                }
            </div>
        )
}

export default Playlist
