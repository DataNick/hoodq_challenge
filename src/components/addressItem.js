import React, { Component } from 'react';

class AddressItem extends Component {
  constructor(){
    super();
    this.state = {
      select: true
    }
  }
  _handleClick(e){
    console.log(this.props.address);
    e.stopPropagation();
    this.setState({
      select: !this.state.select
    })
    const newLocation = this.props.object;
    this.props.onSelectLocation(newLocation);
  }



  render(){
    var showSelect = this.state.select ? '' : "selected"
    return <div onClick={this._handleClick.bind(this)} className={showSelect}>
              {this.props.address}
          </div>

    }
  }

export default AddressItem;