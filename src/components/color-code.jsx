import React, { Component } from 'react';
import bg from '../images/checkered10.png';

class ColorCode extends Component {

    constructor(props){
        super(props);

        // Initialize the codes active state.
        this.state = {

            active: props.active
        }

        this.onClick = this.onClick.bind(this);
    }

    render() {

        return (

            // Render the codes.
            this.props.code === "yellow" || this.props.code === "green" || this.props.code === "white" || this.props.code === "gold" || this.props.code === "silver" ? (
                
                <div className="row" style={{ 'backgroundColor': this.props.code, 'color' : 'black'}} onClick={ this.onClick } >
                
                    <div style={{ 'backgroundColor': this.state.active ? 'pink' : this.props.code, 'display':'flex', 'flex' : '1 0', 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'cursor' : 'pointer', 
                    'background': this.state.active ? 'url(' + bg + ')' : 'none', 'backgroundRepeat': 'repeat' }} >
                            { this.props.header }
                    </div>
                
                </div>
            ) : (

                <div className="row" style={{ 'backgroundColor': this.props.code, 'color' :  'white'}} onClick={ this.onClick } >
                    
                    <div style={{ 'backgroundColor': this.state.active ? 'pink' : this.props.code, 'display':'flex', 'flex' : '1 0', 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'cursor' : this.props.code !== '#ccc' ? 'pointer' : 'not-allowed', 
                    'background': this.state.active ? 'url(' + bg + ')' : 'none', 'backgroundRepeat': 'repeat'}} >
                        { this.props.header }
                    </div>
                </div>
            ));
    }

    static getDerivedStateFromProps(props, current_state) {
        
        // Update the codes active state if it has changed.
        if (current_state.active !== props.active) {
        
            return {
                active: props.active
            }
        }

        return null;
      }

    /**
     * Updates the parent component when a code is selected.
     * @param {*} color The color of the selected code.
     */
    onClick(color){
        
        // Verify the code is not disabled.
        if(this.props.code !== '#ccc'){

            // Update the parent with the new code.
            this.props.codeChanged(this.props.code);
        }
    }
  }
  
  export default ColorCode;