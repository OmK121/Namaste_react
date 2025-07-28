// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// ); //Empty object{} is used to give attributes to tag

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello in h1 element"),
    React.createElement("h2", {}, "Hello in h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello in h1 element"),
    React.createElement("h2", {}, "Hello in h2 element"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
