export const cartInitialState = {};

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        return state.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + action.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: action.quantity }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item: any) => item.id !== action.payload);

    case "UPDATE_CART":
      return state.map((item: any) =>
        item.id === action.payload
          ? { ...item, quantity: action.quantity }
          : item
      );
    default:
      return state;
  }
};
