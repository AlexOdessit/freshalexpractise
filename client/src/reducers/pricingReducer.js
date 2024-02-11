import { ACTIONS } from './actionTypes';

const initialState = {
  packages: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRICING_PACKAGES:
      return {
        ...state,
        packages: action.payload,
        loading: true,
        error: false,
      };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: true, error: null };
    case ACTIONS.SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
