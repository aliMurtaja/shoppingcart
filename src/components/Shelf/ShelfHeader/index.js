import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../../Sort'

export default class ShelfHeader extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <React.Fragment>
            
                <div className="shelf-container-header">
                        <small className="products-found">
                            <span>{this.props.productsLength} Product(s) found.</span>
                            {/* {console.log("renChild")} */}
                        </small>
                        <Sort />
                </div>

            </React.Fragment>
        )
    }
}

ShelfHeader.propTypes ={
    productsLength : PropTypes.number.isRequired
}