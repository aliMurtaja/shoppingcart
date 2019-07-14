import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    width : "100%" 
}

export const Thumb = props =>{
    return (
        <React.Fragment>
            {/* {console.log("imgg")} */}
            {/* {console.log(props)} */}
            <img
                 alt = {props.alt}
                 title = {props.title}
                 className = "shelf-item__thumb"
                 src = {props.src}
                 width = {styles.width}
            />
        
        </React.Fragment>
    )
}

Thumb.propTypes = {
    alt : PropTypes.string,
    title : PropTypes.string,
    classes : PropTypes.string,
    src : PropTypes.string.isRequired
}