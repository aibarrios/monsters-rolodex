import {
  FETCH_DATA_REQUESTED,
  FETCH_DATA_SUCCEEDED,
  FETCH_DATA_FAILED,
} from './fetchDataThunk';

const INITIAL_STATE = {
  isPending: true,
  monsters: [],
  error: '',
};

const monstersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_DATA_REQUESTED:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        isPending: false,
        monsters: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        isPending: true,
        monsters: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default monstersReducer;
