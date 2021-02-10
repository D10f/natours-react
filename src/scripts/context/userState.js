import { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { GET_USERS } from './types'

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

const UserState = (props) => {

  const initialState = {
    users: [],
    loading: true
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Get User
  const getUsers = () => {
    fetch('https://randomuser.me/api/?results=2')
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

  // This is for anything we want to make available for the entire App, it has to wrap other components.
  // props.children are the components it wraps around and they have ofc to be rendered
  return (
    <UserContext.Provider value={{ users: state.users, loading: state.loading, getUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
