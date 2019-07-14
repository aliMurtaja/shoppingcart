import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Selectbox extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    static propTypes = {
        options : PropTypes.array.isRequired,
        classes : PropTypes.string,
        onChange : PropTypes.func.isRequired
    }

    createOptions = (...rest) => {
        const {options} = [...rest];
         options.map( (option)=>{
           return <option value ={option.value} key = {option.value}>
                {option.lable}
            </option>
        })

    }

    onChange = (val) =>{
        this.props.onChange(val)
    }

    render(){
        let {options, classes} = this.props;
        console.log(options)
        return(
            <React.Fragment>
            
                <select onChange = {this.onChange} className = {classes}>
                
                    {
                        // this.createOptions(options)
                    }

                </select>
            
            </React.Fragment>
        )
    }
}

export default Selectbox;