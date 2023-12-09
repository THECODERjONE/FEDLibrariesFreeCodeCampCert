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
while (false) {
  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };  
      case "LOGOUT":
        return {
          authenticated: false
        };  
      default:
        return defaultState;
    }
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
}
/* Use a Switch Statement to Handle Multiple Actions */

/* Use const for Action Types */
while (false) {
  const defaultState = {
    authenticated: false
  };
  
  const LOGIN = "LOGIN";
  const LOGOUT = "LOGOUT";
  
  const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
      case LOGIN: 
        return {
          authenticated: true
        }
      case LOGOUT: 
        return {
          authenticated: false
        }
  
      default:
        return state;
  
    }
  
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };
}
/* Use const for Action Types */

/* Register a Store Listener */
while (false) {
  const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const ADDTOCOUNT = () => count++;
store.subscribe(ADDTOCOUNT);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
}
/* Register a Store Listener */

/* Combine Multiple Reducers */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
/* Combine Multiple Reducers */
