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
while (false) {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})// Define the root reducer here

const store = Redux.createStore(rootReducer);
}
/* Combine Multiple Reducers */

/* Send Action Data to the Store */
while (false) {
  const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case 'ADD_NOTE':
    return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
}
/* Send Action Data to the Store */

/* Use Middleware to Handle Asynchronous Actions */
while (false) {
  const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
}
/* Use Middleware to Handle Asynchronous Actions */

/* Write a Counter with Redux */
while (false) {
  const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
      
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
}
/* Write a Counter with Redux */

/* Never Mutate State */
while (false) {
  const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.slice().concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
}
/* Never Mutate State */

/* Use the Spread Operator on Arrays */
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
/* Use the Spread Operator on Arrays */
