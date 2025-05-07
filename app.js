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
    React.createElement("h1", {}, "Child one h1 tag"),
    React.createElement("h2", {}, "child 1 h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child 2 h1 tag"),
    React.createElement("h2", {}, "child 2 h2 tag"),
  ]),
]);
console.log("element", element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
