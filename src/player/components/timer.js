import React from 'react'
import timeUtils from '../../utils/time-utils'
import './timer.css'

function Timer(props) {
    return (
        <div className="Timer">
            <p>
                <span>{timeUtils.formattedTime(props.currentTime)} / {timeUtils.formattedTime(props.duration)}</span>
            </p>
        </div>
    )
}

export default Timer