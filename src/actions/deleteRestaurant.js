export const deleteRestaurant = (restaurant) => {
  return {type: "DELETE_RESTAURANT", restaurant: restaurant}
}