import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello ,world from React!!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//for nested html tag

const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "item1" }, "Child one  tag"),
    React.createElement("h2", { key: "item2" }, "child 1 two tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "item3" }, "child 2 h1 tag"),
    React.createElement("h2", { key: "item4" }, "child 2 h2 tag"),
  ]),
]);
console.log("element", element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
