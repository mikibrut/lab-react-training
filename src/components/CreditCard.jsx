import visaImg from "../../src/assets/images/visa.png";
import masterImg from "../../src/assets/images/master.png";

const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const cardTypeImg = (type === "Visa") ? visaImg : masterImg;
    const secretNumber = number.substring(number.length - 4);
    const numberStyle={
        fontSize : "15px"
    }

    const cardStyle = {
        backgroundColor:`${bgColor}`,
        color: `${color}`
    }

return(
    <div className = "credit-card-container">
        <div className="card-creditCard" style={cardStyle}>
             <img src={cardTypeImg} alt="Card logo" width="30px"/>
            
             <p><span style={numberStyle}>···· ···· ···· </span>{secretNumber}</p>
             <p>Expires {expirationMonth}/{expirationYear}</p>
             <p>{bank}</p>
             <p>{owner}</p>
        </div>
    </div>
)
}

export default CreditCard;