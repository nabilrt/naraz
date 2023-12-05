export const INITIAL_STATE = {
  loading: false,
  error: false,
  products: [],
};

export const postReducer = (state: any, action: any) => {
  switch (action.type) {
    case "POST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POST_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "POST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
