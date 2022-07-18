const root = ReactDOM.createRoot(
    document.querySelector(".root")
);

const p1 = React.createElement("p", {
    children: "This is pharagraph 1"
})

const p2 = React.createElement("p", {
    children: "This is pharagraph 2"
})

const element = React.createElement("div", {
    children: [p1, p2]
})

root.render(element)