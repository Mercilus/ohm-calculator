import React, { Component } from 'react';
import ColorCode from './color-code';

class ColorBand extends Component {
    
    constructor(props){
        super(props);

        // Set the color bands items source based on the band type.
        this.state = {

            itemsSource: props.bandType === "Significant" ? this.DIGITS : props.bandType === "Multiplier" ? this.MULTIPLIERS : this.TOLERANCES
        }

        this.onCodeChanged = this.onCodeChanged.bind(this);
    }

    render() {
        
        return (

            <div className="column">

                <div className="row">{ this.props.bandHeader }</div>
                
                {
                    // Render elements for all significant number bands.
                    this.props.bandType === "Significant" ? (

                        this.state.itemsSource.map((el, i) => <ColorCode key={i} group={this.props.bandHeader} code={ el.bgColor } header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)

                    ) : (
                    
                    // Render elements for the multiplier band.
                    this.props.bandType === "Multiplier" ? (

                        this.state.itemsSource.map((el, i) => <ColorCode key={i} group={this.props.bandHeader} code={el.bgColor} header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)
                    ) : (

                    // Render elements for the tolerance band.
                    this.props.bandType === "Tolerance" ? (
                        
                        this.state.itemsSource.map((el, i) => <ColorCode key={i} group={this.props.bandHeader} code={el.bgColor} header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)
                    ) : (

                    // Dont render anything.
                    null )))
                }
            </div>
          );
    }

    /**
     * Process code changes and manages the active states of the color codes.
     * @param {*} code The code/color that was selected in the list.
     */
    onCodeChanged(code){
        
        // Unselect the previous selected code and select the new one!
        const update = this.state.itemsSource.map((el)=> el.bgColor !== code ? Object.assign({}, el, {active: false}) : Object.assign({}, el, {active: true})); 
        
        // Update the state to reflect the changes.
        this.setState({ itemsSource: update });

        // Inform the parent the selection has changed.
        this.props.selectionChanged(this.props.bandHeader, code);
    }

    componentDidMount() {

        // Select the default code.
        this.onCodeChanged('brown');
    }
    
    /**
     * Collection of significant digit models.
     */
    DIGITS = [
        {bgColor: 'black', active: true, value: '0'},   {bgColor: 'brown', active: false, value: '1'},  {bgColor: 'red', active: false, value: '2'}, 
        {bgColor: 'orange', active: false, value: '3'}, {bgColor: 'yellow', active: false, value: '4'}, {bgColor: 'green', active: false, value: '5'}, 
        {bgColor: 'blue', active: false, value: '6'},   {bgColor: 'purple', active: false, value: '7'}, {bgColor: 'gray', active: false, value: '8'}, 
        {bgColor: 'white', active: false, value: '9'},  {bgColor: '#ccc', active: false, value: ''},    {bgColor: '#ccc', active: false, value: ''}
    ];

    /**
     * Collection of multiplier models.
     */
    MULTIPLIERS = [
        {bgColor: 'black', active: true, value: '1Ω'}, {bgColor: 'brown', active: false, value: '10Ω'}, {bgColor: 'red', active: false, value: '100Ω'}, 
        {bgColor: 'orange', active: false, value: '1KΩ'}, {bgColor: 'yellow', active: false, value: '10KΩ'}, {bgColor: 'green', active: false, value: '100KΩ'}, 
        {bgColor: 'blue', active: false, value: '1MΩ'}, {bgColor: 'purple', active: false, value: '10MΩ'}, {bgColor: '#ccc', active: false, value: ''}, 
        {bgColor: '#ccc', active: false, value: ''}, {bgColor: 'gold', active: false, value: '.1'}, {bgColor: 'silver', active: false, value: '.01'}
    ];

    /**
     * Collection of tolerance models.
     */
    TOLERANCES = [
        {bgColor: '#ccc', active: false, value: ''}, {bgColor: 'brown', active: true, value: '±1%'}, {bgColor: 'red', active: false, value: '±2%'}, 
        {bgColor: '#ccc', active: false, value: ''}, {bgColor: '#ccc', active: false, value: ''}, {bgColor: 'green', active: false, value: '±0.5%'}, 
        {bgColor: 'blue', active: false, value: '±0.25%'}, {bgColor: 'purple', active: false, value: '±0.10%'}, {bgColor: 'gray', active: false, value: '±0.05'}, 
        {bgColor: '#ccc', active: false, value: ''}, {bgColor: 'gold', active: false, value: '±5%'}, {bgColor: 'silver', active: false, value: '±10%'}
    ];
  }
  
  export default ColorBand;