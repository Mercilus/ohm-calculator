import React, { Component } from 'react';
import ColorBand from './color-band';

class ColorCodeTable extends Component {

    constructor(props){
        super(props);
        
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
    }

    render() {

        return (

            <div className="color-code-table">
                <ColorBand bandType={"Significant"} bandHeader={"Band 1"} selectionChanged={this.onSelectionChanged}/>
                <ColorBand bandType={"Significant"} bandHeader={"Band 2"} selectionChanged={this.onSelectionChanged}/>
                {
                    this.props.mode !== '4-band'? <ColorBand bandType={"Significant"} bandHeader={"Band 3"} selectionChanged={this.onSelectionChanged} /> : null 
                }
                <ColorBand bandType={"Multiplier"}  bandHeader={"Mul."}   selectionChanged={this.onSelectionChanged}/>
                <ColorBand bandType={"Tolerance"}   bandHeader={"Tol."}   selectionChanged={this.onSelectionChanged}/>
            </div>
          );
    }

    /**
     * Informs the parent component of the selected code.
     * @param {*} name The name of the code.
     * @param {*} code The color of the code.
     */
    onSelectionChanged(name, code){
        
        this.props.selectionsChanged(name, code);
    }
  }
  
  export default ColorCodeTable;