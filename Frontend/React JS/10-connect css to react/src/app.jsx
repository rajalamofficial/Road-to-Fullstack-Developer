const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

const clock = () => {
    const element = (
        <div className="clock">
            <h1>Clock</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )

    root.render(element)
}
setInterval(clock, 1000)