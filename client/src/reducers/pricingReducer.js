import ACTION from '../actions/actionTypes';

const initialState = {
  packages: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_PRICING_PACKAGES:
      return {
        ...state,
        packages: action.data,
      };
    case ACTION.SET_PRICING_LOADING:
      return { ...state, loading: action.data };

    case ACTION.SET_PRICING_ERROR:
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export { initialState, reducer };
