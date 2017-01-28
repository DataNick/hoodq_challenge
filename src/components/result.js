import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
          <div>
            <h2>{this.props.location.address}</h2>
            <h3>Coffee: {this.props.location.nearestCoffeeShop}</h3>
            <h3>Distance from work: {this.props.location.workDistance}</h3>
            <h3>Dog Park: {this.props.location.nearbyDogPark}</h3>
          </div>

      )


  }
}

export default Result;