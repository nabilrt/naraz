export const cartInitialState = {};

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const items = [...state];
      const item = items.find((item: any) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.quantity;
        return [...items];
      } else {
        return [...state, { ...action.payload, quantity: action.quantity }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item: any) => item.id !== action.payload);

    case "UPDATE_CART":
      const existingItems = [...state];
      const existingitem = existingItems.find(
        (item: any) => item.id === action.payload
      );
      existingitem.quantity = action.quantity;
      return [...existingItems];
    default:
      return state;
  }
};
