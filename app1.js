import React from "react";
import ReactDOM from "react-dom/client";

const ReactElement = () => <h1>this is react element</h1>;

// const createRoot = ReactDOM.createRoot(document.getElementById("root"));
// createRoot.render(<ReactElement />);

const FunctionalComponent = () => {
  return (
    <div>
      <h1>This is react element</h1>
      <p>this is paragraph</p>
    </div>
  );
};

const AdditionComponent = () => {
  return (
    <div>
      <FunctionalComponent />
      <h1>value of a is 9</h1>
      <h1>value of b is 12</h1>
      <h1>Answer of this is 21</h1>
    </div>
  );
};

const createRoot1 = ReactDOM.createRoot(document.getElementById("root"));
createRoot1.render(<AdditionComponent />);
