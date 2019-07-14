import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Selectbox from '../Selectbox';
import {updateSort} from '../../services/sort/actions';
import {connect} from 'react-redux';



const options = [ 
        {
            lable : "Lowest to highest", value :"lowestprice"
        },
        {
            lable : "Highest to lowest", value : "highestprice"
        }
    
]


class Sort extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    static propTypes = {
        updateSort : PropTypes.func.isRequired
    }

    onChange = (e) => {
        console.log(e)
        // this.props.updateSort(e);
    }

    render(){
        
        return(
            <React.Fragment>
            
                Order by <Selectbox options = {options} onChange = {this.onChange} />
            
            </React.Fragment>
        )
    }
}

export default connect(null, {updateSort} )(Sort);