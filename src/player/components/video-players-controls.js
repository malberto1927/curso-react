import React from 'react'
import './video-player-controls.css'

function VideoPlayersControls(props) {
    return (
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    )
}

export default VideoPlayersControls