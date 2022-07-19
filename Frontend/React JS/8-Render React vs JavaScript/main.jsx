// menggunakan javascript
const rootJs = document.querySelector(".root-js")

const rootReact = ReactDOM.createRoot(
    document.querySelector(".root-react")
)

const clockJs = () => {
    const element = `
        <h1>Clock JS</h1>
        <h2>${new Date().toLocaleTimeString()}</h2>
    `

    rootJs.innerHTML = element
}

setInterval(clockJs, 1000)


// menggunakan React
const clockReact = () => {
    const element = (
        <React.Fragment>
            <h1>Clock React</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </React.Fragment>
    )

    rootReact.render(element)
}

setInterval(clockReact, 1000)