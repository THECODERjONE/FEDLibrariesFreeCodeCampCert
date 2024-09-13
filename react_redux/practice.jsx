/* Getting Started with React Redux */
while (false) {
  class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
    // Change code above this line
    render() {
      return <div />
    }
  };
}
/* Getting Started with React Redux */

/* Manage State Locally First */
while (false) {
  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      });
    }
  
    submitMessage() {
      this.setState({
        input: '',
        messages: [...this.state.messages, this.state.input]
      });
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.state.messages.map((x, i) => {
              return <li key={i}>{x}</li>;
            })}
          </ul>
        </div>
      );
    }
  } 
}
/* Manage State Locally First */

/* Extract State Logic to Redux */
while (false) {
  const ADD = "ADD";

const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:

    return [...previousState, action.message];

    default:

    return previousState;
  }
};

const store = Redux.createStore(messageReducer);

}
/* Extract State Logic to Redux */

/* Use Provider to Connect Redux to React */
while (false) {
  // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
    <Provider store={store}>
      <DisplayMessages />
    </Provider>
    )
  }
  // Change code above this line
};
}
/* Use Provider to Connect Redux to React */

/* Map State to Props */
while (false) {
  const state = [];

// Change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state,
  }
}
}
/* Map State to Props */

/* Map Dispatch to Props */
while (false) {
  const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message))
      }
    }
  }
}
/* Map Dispatch to Props */

/* Connect Redux to React */
while (false) {
  const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
}
/* Connect Redux to React */

/* Connect Redux to the Messages App */
while (false) {
  // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
};
}
/* Connect Redux to the Messages App */

/* Extract Local State into Redux */
while (false) {
  // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ""
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
}
/* Extract Local State into Redux */