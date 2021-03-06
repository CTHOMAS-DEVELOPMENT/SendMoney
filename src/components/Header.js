import React, { Component } from 'react';
import {VIEWS} from "../common/constants"
class Header extends Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      selected:"Full View"
    };
  } 
  menuItems=VIEWS;
  setCurrent=(val)=>{
    this.setState({selected:val});
    this.props.menuclick(val);
  }
  render() {
    return(
      <div className='item detaildiv'>
        <ul className="choicebuttons">
          {
            this.menuItems.map((item, index) =>
              <li key={index}>
                <a className={this.state.selected === item ? 'active' : 'dormant'} style={{padding: '5px'}} onClick={() => this.setCurrent(item)}>{item}</a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
export default Header;
