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

const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);