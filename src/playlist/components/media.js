import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {

    handlerClick = (event) => {
        console.log(this.props.title)
    }

    render() {
        return (
            <div className="Media" onClick={this.handlerClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default Media