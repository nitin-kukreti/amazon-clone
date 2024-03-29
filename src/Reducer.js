export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, basket: [...state.basket, action.item],
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id == action.id);
      return {
        ...state, basket: state.basket.filter((item, ind) => ind !== index)
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "DONE":
      return {
        ...state, basket: []
      }
    default:
      return state;
  }
};

export default reducer;