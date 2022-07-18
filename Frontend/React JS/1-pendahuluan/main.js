const root = ReactDOM.createRoot(
    document.querySelector(".root")
);

const element = React.createElement("h1", {
    children: "Hello from React!",
    className: "heading"
})

root.render(element)