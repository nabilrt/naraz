export const cartInitialState = {};

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const items = [...state];
      const item = items.find((item: any) => item.id === action.payload.id);
      if (item) {
        const updatedItem = {
          ...item,
          quantity: item.quantity + action.quantity,
        };
        const newItems = items.map((item: any) =>
          item.id === action.payload.id ? updatedItem : item
        );
        return [...newItems];
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
      const afterUpdateItems = { ...existingitem, quantity: action.quantity };
      const updatedItems = existingItems.map((item: any) =>
        item.id === action.payload ? afterUpdateItems : item
      );
      return [...updatedItems];
    default:
      return state;
  }
};
