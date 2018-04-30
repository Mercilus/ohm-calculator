import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import resistor4Band from '../images/4-band-resistor.png';
import resistor5Band from '../images/5-band-resistor.png';

class Resistor extends Component {
  render() {
    return (

      <div className="resistor">
        <div className="band-one"        style={{'backgroundColor' : this.props.band1}}/>
        <div className="band-two"        style={{'backgroundColor' : this.props.band2}}/>
        {
          this.props.mode !== '4-band'? <div className="band-three" style={{'backgroundColor' : this.props.band3}}/> : null 
        }
        <div className="band-multiplier" style={{'backgroundColor' : this.props.multiplier, 'left' : this.props.mode === '4-band' ? '197px' : '225px'}}/>
        <div className="band-tolerance"  style={{'backgroundColor' : this.props.tolerance,  'left' : this.props.mode === '4-band' ? '243px' : '272px', 
             'top' : this.props.mode === '4-band' ? '5px' : '2px', 'height' : this.props.mode === '4-band' ? '55px' : '60px'}}/>
        <img className="resistor-img"    src={this.props.mode === '4-band' ? resistor4Band : resistor5Band} alt="color coded resistor"/>
      </div>
    );
  }
}

export default Resistor;