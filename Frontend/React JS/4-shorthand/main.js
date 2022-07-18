const root = ReactDOM.createRoot(
    document.querySelector(".root")
);

const element = React.createElement("ul", null,
    React.createElement("li", null, "Marsha"),
    React.createElement("li", null, "Lenathea"),
    React.createElement("li", null, "Lavia")
)

root.render(element)