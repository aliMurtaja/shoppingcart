import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchProducts } from '../../services/shelf/actions';
import { connect } from 'react-redux';

import Spinner from './Spinner'
import ShelfHeder from './ShelfHeader'
import {ProductList} from './ProductList'

import './style.scss'

class Shelf extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoding : false
        }
    }

    static propTypes ={
        fetchProducts : PropTypes.func.isRequired,
        sort : PropTypes.string,
        filters : PropTypes.array,
        products : PropTypes.array,
    }

    componentDidMount(){
        console.log("MindexDid")
        // const {filters, sort} = this.props
        this.handleFetchProducts();
    }

    handleFetchProducts = () =>{
        this.props.fetchProducts()
    }

    componentWillReceiveProps(nextProps){
        const {filters : nextFilters, sort: nextSort} = nextProps;
        // console.log("lllllllllllllllll")
        // console.log(this.props.sort)
        console.log(nextProps)
        if(nextFilters !== this.props.filters){
            // console.log(this.props.filters)
            // console.log(this.props.sort)
            // console.log(nextSort)
            this.handleFetchProducts(nextFilters,undefined)
        }

        if(nextSort !== this.props.sort){
            // console.log(nextSort)
            // console.log("sort")
            // console.log(this.props.sort)
            this.handleFetchProducts(undefined,nextSort)
        }
    }

    handleFetchProducts = (filter = this.props.filters, sort = this.props.sort ) =>{
        // console.log("alihusain")
        this.setState({
            isLoding : !this.state.isLoding
        })
        
        this.props.fetchProducts(filter, sort, ()=>{
            this.setState({
                isLoding :!this.state.isLoding
            })
        })
    }

    render(){
        const {products} = this.props;
        // console.log("thisProducts")
        // console.log(products)
        const {isLoding} = this.state
        return(
            <React.Fragment>
               {isLoding && <Spinner />} 
                <div className ="shelf-container">
                     <ShelfHeder productsLength = {products.length} /> 
                    <ProductList products ={products} />
                    {this.props.filters}
                </div> 
            
            </React.Fragment>
        )
    }
    
}

const mapStateToProps = (state) =>{
    // console.log("mapS");
    // console.log(state)
    // console.log(state.filters)
    return {
        sort : state.sort.type,
        filters : state.filters.items,
        products : state.shelf.products
    }
}



export default connect(mapStateToProps, {fetchProducts} )(Shelf)