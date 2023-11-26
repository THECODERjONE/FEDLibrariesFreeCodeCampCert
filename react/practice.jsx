/* const JSX = <h1>Hello JSX!</h1>; */

/* const JSX =
 <div>
    <h1></h1>
    <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div> */

while(false) {
  const JSX = (
      <div>
      {/* what do we do */}
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
      </div>
    );
};

while(false) {
  const JSX = (
      <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>
    );
    // Add your code below this line
  
    ReactDOM.render(JSX, document.getElementById("challenge-node"));
}

while(false) {
  const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );
}

while (false) {
  // const JSX = (
  //   <div>
  //     <h2>Welcome to React!</h2> <br >
  //     <p>Be sure to close all tags!</p>
  //     <hr >
  //   </div>
  // );

  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  )
}

/* Create a Stateless Functional Component */
while (false) {
  const MyComponent = function() {
    // Change code below this line
    return    <div>                   {/* <--- cant change lines right after a return */}
      Some text here.
    </div>
    // Change code above this line
  };
}
/* Create a Stateless Functional Component */

while (false) {
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return <div>
        <h1>
          Hello React!
        </h1>
      </div>  
      // Change code above this line
    }
  };
}

/* Create a Component with Composition */ 
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent />
        { /* Change code above this line */ }
      </div>
    )
  }
}
/* Create a Component with Composition */

/* Use React to Render Nested Components */
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

// const Fruits = () => {
//   return (
//     <div>
//       { /* Change code below this line */ }
//       <TypesOfFruit />
//       { /* Change code above this line */ }
//     </div>
//   );
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* Change code below this line */ }
//         <Fruits />
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// }
/* Use React to Render Nested Components */

/* Compose React Components */
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
/* Compose React Components */

/* Render a Class Component to the DOM */
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};
// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
/* Render a Class Component to the DOM */

/* Write a React Component from Scratch */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  };
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
/* Write a React Component from Scratch */

/* Pass Props to a Stateless Functional Component */
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date = {Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
/* Pass Props to a Stateless Functional Component */

/* Pass an Array as Props */
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks = {["walk dog", "exercise", "have a shower", "drink a coffee", "brush teeth", "go to work"]}/>
        <h2>Tomorrow</h2>
        <List tasks = {["walk dog", "exercise", "have a shower", "drink a tea", "brush teeth", "go to work"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
/* Pass an Array as Props */

/* Use Default Props */
while (false) {
  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = { items: 0 }
}
/* Use Default Props */

/* Override Default Props */
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity = {10}/>
    { /* Change code above this line */ }
  }
};
/* Override Default Props */

/* Use PropTypes to Define the Props You Expect */
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
/* Use PropTypes to Define the Props You Expect */

/* Access Props Using this.props */
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Genericname"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
/* Access Props Using this.props */

/* Review Using Props with Stateless Functional Components */
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
/* Review Using Props with Stateless Functional Components */

/* Create a Stateful Component */
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName : "THECODERjONE"
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
/* Create a Stateful Component */


