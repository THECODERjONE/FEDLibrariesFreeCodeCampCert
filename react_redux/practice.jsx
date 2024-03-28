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

  // Change code above this line
};
/* Use Provider to Connect Redux to React */
