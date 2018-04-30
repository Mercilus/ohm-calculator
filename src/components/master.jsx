import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../theme/components/master.css';
import Panel from './panel';
import homer from '../images/homer1.png';
import bg from '../images/bg3.png';

class Master extends Component {
  render() {
    return (
      <div className="master" style={{'background':'url(' + bg + ')', 'backgroundAttachment': 'fixed', 'backgroundPosition' : 'center', 'backgroundSize' : 'cover'}}>
        
        {/* <img className="homer" src={homer} alt="color coded resistor"/> */}
        <Panel />
      </div>
    );
  }

  // Define our props expected from the parent component
  // Screen.propTypes = {
  //   question: PropTypes.string.isRequired,
  //   answer: PropTypes.string.isRequired
  // }

  // componentDidMount() {
  //   console.log('GrandChild did mount.');
  // }
}

export default Master;