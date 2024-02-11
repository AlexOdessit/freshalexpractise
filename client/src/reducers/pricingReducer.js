import { ACTION } from './actions';

const initialState = {
  packages: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_PACKAGES:
      return {
        ...state,
        packages: action.payload,
        loading: false,
        error: null,
      };
    case ACTION.SET_LOADING:
      return { ...state, loading: true, error: null };
    case ACTION.SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
