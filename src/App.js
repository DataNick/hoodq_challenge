import React, { Component } from 'react';
import Dropdown from './components/dropdown.js';
import Result from './components/result.js';
import Selector from './components/selector.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location1: this.props.profileData[0],
      location2: this.props.profileData[1],
      selector1: 0,
      selector2: 0,
      selector3: 0
    }
  }

  handleFirstLocation(newLocation) {
    this.setState({
      location1: newLocation
    })
  }

  handleSecondLocation(newLocation) {
    this.setState({
      location2: newLocation
    })
  }

  handleFirstSelector(value) {
    this.setState({
      selector1: value
    })
  }

  handleSecondSelector(value) {
    this.setState({
      selector2: value
    })
  }

  handleThirdSelector(value) {
    this.setState({
      selector3: value
    })
  }

  render() {
    console.log(this.state.selector2)
    return <div className="container">
            <h1>Hoodq Challenge</h1>
            <div className='row'>
              <div className='col-md-1'>
                <Selector text={'Work'} onSelect={(value) => this.handleFirstSelector(value) }/>
              </div>
              <div className='col-md-1'>
                <Selector text={'Park'} onSelect={(value) => this.handleSecondSelector(value) }/>
              </div>
              <div className='col-md-1'>
                <Selector text={'Coffee'} onSelect={(value) => this.handleThirdSelector(value) }/>
              </div>
            </div>
            <br />
            <div className="row">
              <div className='col-md-4'>
                <Dropdown profileData={this.props.profileData} onSelectLocation={(newLocation) => this.handleFirstLocation(newLocation) } initialLocation={this.state.location1} />
              </div>
              <div className='col-md-4'>
                <Dropdown profileData={this.props.profileData} onSelectLocation={(newLocation) => this.handleSecondLocation(newLocation) } initialLocation={this.state.location2} />
              </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="row">
              <div className='col-md-4'>
                <Result profileData={this.props.profileData} location={this.state.location1} />
              </div>
              <div className='col-md-4'>
                <Result profileData={this.props.profileData} location={this.state.location2} />
              </div>
            </div>
          </div>
  }
}

export default App;
