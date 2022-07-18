/** ada kalanya kita tidak ingin menggunakan div nesting
    contoh: <div class="root">
                <div>
                    <p> lorem ipsum 1 </p>
                    <p> lorem ipsum 2 </p>
                </div>
            </div>
    
    jika kita menggunakan fragment maka akan menjadi seperti berikut
    contoh: <div class="root">
                <p> lorem ipsum 1 </p>
                <p> lorem ipsum 2 </p>
            </div>
**/

const root = ReactDOM.createRoot(
    document.querySelector(".root")
);

const p1 = React.createElement("p", {
    children: "This is pharagraph 1"
})

const p2 = React.createElement("p", {
    children: "This is pharagraph 2"
})

const element = React.createElement(React.Fragment, {
    children: [p1, p2]
})

root.render(element)