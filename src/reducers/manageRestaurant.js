import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  console.log(state)
  switch(action.type){
  
    case "ADD_RESTAURANT":
      return {...state, restaurants: [...state.restaurants, action.restaurant]}
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(r => r.id !== action.restaurant.id)}
    default:
      return state
  }
}
