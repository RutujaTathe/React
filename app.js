import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello ,world from React!!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log("heading", heading);

//for nested html tag

// const element = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: "item1" }, "Child one  tag"),
//     React.createElement("h2", { key: "item2" }, "child 1 two tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { key: "item3" }, "child 2 h1 tag"),
//     React.createElement("h2", { key: "item4" }, "child 2 h2 tag"),
//   ]),
// ]);
// console.log("element", element);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//React element
const jsxheading = (
  <h1 id="heading" tabIndex="5">
    Namste React using JSX
  </h1>
);

// const fn = () => true;
// const fn = () => {
//   return true;
// };
const HeadingComponent = () => {
  return <h1>This is React Compoennt</h1>;
};

const number = 1000;
const Title = () => <h2> React Using JSX</h2>;
const Heading1Component = () => (
  <div id="conatiner">
    <Title></Title>
    {jsxheading}
    <h2>{number}</h2>
    <h2 className="header">This is header component </h2>
  </div>
);
console.log("jsx heading", jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//render the react component
root.render(<Heading1Component />);
