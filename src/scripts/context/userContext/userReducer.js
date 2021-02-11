import { GET_USERS, OPEN_MODAL, CLOSE_MODAL } from '../types'

export default (state, action) => {
  switch(action.type){
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default: return state
  }
};
