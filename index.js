function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { class: "header" }, "Topics Covered"),
    React.createElement("p", null , "The following is the list of all the topics we cover in the MDN learning area"),
    React.createElement(Para1),
    React.createElement(Para2),
    React.createElement(Para3)
  );
}

function Para1() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, React.createElement("a", {href: "#"}, "Getting started with the web")),
    React.createElement("p", { class: "para" }, "Provides a practical introduction to web development for complete beginners.")
  );
}

function Para2() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, React.createElement("a", {href: "#"}, "HTML - Structuring the web")),
    React.createElement("p", { class: "para" }, "HTML is a language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")
  );
}

function Para3() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, React.createElement("a", {href: "#"}, "CSS - Styling the web")),
    React.createElement("p", { class: "para" }, "CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS.")
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root1"));
