import { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { GET_USERS, OPEN_MODAL, CLOSE_MODAL } from '../types'

// Setting up environment variables for production in Netlify
// let gitHubClientId
// let gitHubClientSecret
//
// if(process.env.NODE_ENV !== 'production'){
//   gitHubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
//   gitHubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
// } else {
//   gitHubClientId = process.env.GITHUB_CLIENT_ID
//   gitHubClientSecret = process.env.GITHUB_CLIENT_SECRET
// }

const UserState = ({ stories, children }) => {

  const initialState = {
    users: [],
    loading: true,
    showModal: false
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Get User
  const getUsers = () => {
    fetch(`https://randomuser.me/api/?results=${stories}`)
      .then(res => res.json())
      .then(data => {

        const payload = data.results;

        dispatch({
          type: GET_USERS,
          payload
        });

      })
      .catch(console.error);
  };

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL
    });
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL
    });
  };

  // This is for anything we want to make available for the entire App, it has to wrap other components.
  // props.children are the components it wraps around and they have ofc to be rendered
  return (
    <UserContext.Provider value={
      {
        users: state.users,
        loading: state.loading,
        showModal: state.showModal,
        getUsers,
        openModal,
        closeModal
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
