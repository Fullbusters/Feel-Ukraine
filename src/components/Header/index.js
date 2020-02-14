import React, {Component} from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>

        <img src={'/public/assets/svg/line.svg'} alt='menu'/>
        <div>
          Feel Ukraine
        </div>
        <div>
          user
        </div>
      </div>
    );
  }
}

export default Header;