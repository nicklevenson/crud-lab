import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addRestaurant} from '../../actions/addRestaurant'
import cuid from 'cuid';
class RestaurantInput extends Component {
  state = {
    text: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant({text: this.state.text, id: cuid()})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label>Name</label>
          <input type="text" value={this.state.text} onChange={e=>this.handleChange(e)}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default connect(null,{addRestaurant})(RestaurantInput);
