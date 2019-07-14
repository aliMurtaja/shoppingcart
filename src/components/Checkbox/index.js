import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked : false,
            classes : this.props.classes ,
            lable : this.props.lable,
            handleChange : this.props.handleChange,
            key : this.props.lable
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.lable !== nextProps.lable) {
          return {
            lable: nextProps.lable
          };
        }
    
        // Return null to indicate no change to state.
        return null;
      }

      handleChange = () =>{
        const {handleChange, lable} = this.props;
        this.setState({
            isChecked : !this.isChecked
        })

        handleChange(lable);
      }

    render(){
        
        return(
            <React.Fragment>
                <div className ={this.state.classes}>
                    <label>
                        <input 
                            type ="checkbox"
                            value ={this.state.lable}
                            checked = {this.state.isChecked}
                            onChange = {this.handleChange}
                        
                        />
                        <span className = "checkmark">{this.state.lable}</span>
                    </label>
                </div>    
            
            </React.Fragment>
        )
    }

}