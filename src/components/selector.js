import React, { Component } from 'react';

class Selector extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  _handleTopValue(){
    this.setState({
      value: 3
    })
    this.props.onSelect(3)
  }

  _handleSecondValue(){
    this.setState({
      value: 2
    })
    this.props.onSelect(2)
  }

  _handleLowestValue(){
    this.setState({
      value: 1
    })
    this.props.onSelect(1)
  }

  render(){
    return(
        <div>
          <div className="radio-inline">
            <label>{this.props.text}</label>
            <input type="checkbox" value='1' onClick={this._handleTopValue.bind(this)} className='form-control'/>
            <input type="checkbox" value='2' onClick={this._handleSecondValue.bind(this)} className='form-control'/>
            <input type="checkbox" value='3' onClick={this._handleLowestValue.bind(this)} className='form-control'/>
          </div>
        </div>
      )
  }
}

export default Selector;