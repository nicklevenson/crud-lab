import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'
class RestaurantsContainer extends Component {

  render() {
    
    return (
      <div>
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

export default connect(state=>({restaurants: state.restaurants}))(RestaurantsContainer);
