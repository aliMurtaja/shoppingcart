import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export class ProductList extends React.Component{
    // constructor(props){
    //     super(props);
        
    // }

    render(){

        return(
            <React.Fragment>
            
                {
                    this.props.products.map(product =>{
                        return <Product product ={product} key ={product.id} /> 
                    })
                }
            
            </React.Fragment>
        )
    }
}

ProductList.propTypes = {
    products : PropTypes.array.isRequired
}