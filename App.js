// // one child element
// const heading = React.createElement(
//   "div",
//   { className: "container", id: "container1", style: { color: "yellow" } },
//   "hello"
// );
// // heading is a JavaScript object, not a DOM element it is a React Element, try to log it
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // root.render will transform react element to DOM element and render it to the root element

// nested elements
// <div id="parent">
//  <div id="child1">
//    <h1>h1</h1>
//    <h2>h2</h2>
//  </div>
//  <div id="child2">
//    <h1>h1</h1>
//    <h2>h2</h2>
//  </div>
// </div>
const app = React.createElement("parent", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
]);
console.log(app);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);