/* Create a Redux Store */
while (false) {
    const reducer = (state = 5) => {
        return state;
      }
      
      // Redux methods are available from a Redux object
      // For example: Redux.createStore()
      // Define the store here:
    const store = Redux.createStore(reducer)
}
/* Create a Redux Store */

/* Get State from the Redux Store */
while (false) {
    const store = Redux.createStore(
        (state = 5) => state
      );
      
      // Change code below this line
    const currentState = store.getState()
}
/* Get State from the Redux Store */

/* Define a Redux Action */
// Define an action here:
while (false) {
    const action = {
        type: 'LOGIN'
    }
}
/* Define a Redux Action */

/* Define an Action Creator */
const action = {
type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
    return action;
}
/* Define an Action Creator */

/* Dispatch an Action Event */
while (false) {
    const store = Redux.createStore(
        (state = {login: false}) => state
      );
      
      const loginAction = () => {
        return {
          type: 'LOGIN'
        }
      };
      
      // Dispatch the action here:
    store.dispatch(loginAction())
}
/* Dispatch an Action Event */

/* Handle an Action in the Store */
while (false) {
    const defaultState = {
        login: false
      };
      
    const reducer = (state = defaultState, action) => {
    // Change code below this line
        if(action.type === 'LOGIN') {
            return state = {
                login: true
            }
        } else {
            return state
        }
    // Change code above this line
    };
      
    const store = Redux.createStore(reducer);
      
    const loginAction = () => {
        return {
            type: 'LOGIN'
        }
    };
}
/* Handle an Action in the Store */

/* Use a Switch Statement to Handle Multiple Actions */
const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
  
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
/* Use a Switch Statement to Handle Multiple Actions */
