import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import AddressList from './addressList.js';
import React, { Component } from 'react';


class Dropdown extends Component {
  constructor({initialLocation}){
    super();
    this.state = {
      open: false,
      location: initialLocation
    }
  }

  _handleDropDown(){
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    var dropdownClasses = this.state.open ? 'dropdown open' : "dropdown";
    return <div>
            <div onClick={this._handleDropDown.bind(this)} className={dropdownClasses}>
              <button className="btn btn-default dropdown-toggle" type="button">
                Select Address
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <AddressList profileData={this.props.profileData} onSelectLocation={this.props.onSelectLocation}/>
              </ul>
            </div>
          </div>

  }
}

export default Dropdown;