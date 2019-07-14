import React from 'react';
import './style.scss';
import Checkbox from '../../Checkbox';
import {connect} from 'react-redux';
import {updateFilters} from '../../../services/filters/actions'

const availiableSize = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selectedCheckboxes : null
        }
    }

componentDidMount(){
    this.setState({
        selectedCheckboxes : new Set()
    })
}

handleChange = (lable) =>{
    if(this.state.selectedCheckboxes.has(lable)){
        this.state.selectedCheckboxes.delete(lable)
    }else{
        this.state.selectedCheckboxes.add(lable)
    }

    this.props.updateFilters(Array.from(this.state.selectedCheckboxes))
}

createCheckBox = (lable)  =>{
   return <Checkbox
        classes = "filters-available-size"
        lable = {lable}
        handleChange = {this.handleChange}
        key = {lable}
    
    />
}

createCheckBoxes = () =>{
    return availiableSize.map(this.createCheckBox)
}
    render(){
        return(
            <React.Fragment>
                <div className ="filters">
                    <h4 className="title">Sizes:</h4>
                    {this.createCheckBoxes()}
                </div>
            
            </React.Fragment>
        )
    }

}

export default connect(null, {updateFilters})(Filter)