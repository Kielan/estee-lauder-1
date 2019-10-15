import React from 'react'
import PropTypes from 'prop-types'

function Hit(props) {
    const imgStyles = {backgroundImage: 'url(' + props.hit.picture + ')'}
    return (
        <div id="hit">
            <div className="elc-pic" style={imgStyles}></div>
            <div className="elc-name"><b>Product:</b><br />{props.hit.name}</div>
            <hr />
            <div className="elc-price"><b>Price:</b><br />{props.hit.price}</div>
            <div className="elc-tags">
                <p>Tags:</p>
                <ul>
                    {props.hit.tags.map((tag, key) => {
                        return <li key={key}>{tag}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

Hit.propTypes = {hit: PropTypes.object.isRequired}

module.exports = Hit