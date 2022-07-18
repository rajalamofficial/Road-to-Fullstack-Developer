const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

const names = "Marsha Lenathea Lavia";

const element = () => {
    return (
        <React.Fragment>
            <h1 className="heading">{names}</h1>
            <img src="https://1.bp.blogspot.com/-WhtbwCBrhew/Xp_kxvbAX1I/AAAAAAAAG38/MgZfKotNfxs_UdP7lyMAy--ryMxYu-65QCLcBGAsYHQ/s640/biografi%2Bmarsha%2Bjkt48%2Bskandal%2Bgraduate%2Bpacar.jpg" alt="" srcset="" />
        </React.Fragment>
    )
}
    

root.render(element())