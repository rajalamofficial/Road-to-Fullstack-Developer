const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function clock(){
    const element = (
        <React.Fragment>
            <h1>Clock</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </React.Fragment>
    )

    root.render(element)
}

setInterval(clock, 1000)
