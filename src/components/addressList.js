import React, { Component } from 'react';
import AddressItem from './addressItem.js';
class AddressList extends Component {
  constructor({addressObject}){
    super();
    this.state={
      select: false,
      location: addressObject
    }
  }


  render() {
    console.log(this.props.profileData);
    var addressItems = [];
    Object.keys(this.props.profileData).forEach((key)=>{
      addressItems.push(<AddressItem key={key}  address={this.props.profileData[key]["address"]} object={this.props.profileData[key]}onSelectLocation={this.props.onSelectLocation } />);
    });



    return <div>
    <ul>
      {addressItems}
    </ul>
    </div>
  }
}

export default AddressList;

