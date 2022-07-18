const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function SayHello(props){
    return <p>Hello <b>{props.name}</b></p>
}

const element = () => {
    return (
        <React.Fragment>
            <SayHello name="Marsha"/>
            <SayHello name="Lenathea"/>
            <SayHello name="Lavia"/>
        </React.Fragment>
    )
}

root.render(element())