import pic2 from "./card-images/sword.png"
import pic3 from "./card-images/heart.png"
import './App.css';

function Kart(params) {
    var bgcolor = "#00ff00";
    if (params.element === "f") {
        bgcolor = "#f00";
    }
    else if (params.element === "w") {
        bgcolor = "#00f";
    }
    else if (params.element === "l") {
        bgcolor = "#aaa";
    }
    else if (params.element === "s") {
        bgcolor = "#000";
    }
    return(
    <div className="Card" style={{backgroundColor: bgcolor}}>
        <img className="pic" src={params.pic} alt="WriteCardimageurl"/>
        <div className="cardBody">
            <hr/>
            <p className="cardName">{params.name}</p>
            <hr/>
            <p className="info">{params.info}</p>
        </div>
        <hr/>
        <div className="bottom">
            <div className="bottomLeft">
            <img  src={pic2} alt="card1"/> {params.damage}
            </div>
            <div className="bottomRight">
            <img  src={pic3} alt="card2"/> {params.health}
            </div>
        </div>
    </div>
    );
}

export default Kart;