import {FILTER_SERVICE} from '../actions/actionTypes'

const initialState = {
  filter: ''
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const {value} = action.payload;
      return {...state, filter: value};
    default:
      return state;
  }
}