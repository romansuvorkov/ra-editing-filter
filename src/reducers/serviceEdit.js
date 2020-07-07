import { EDIT_SERVICE } from '../actions/actionTypes'

const initialState = {
    targetId: null
};

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
      const { id } = action.payload;
      return {...state, targetId: id};
    default:
      return state;
  }
}
