import emptyStar from '../assets/images/starUnFilled.png';
import filledStar from '../assets/images/starFilled.png';

const Rating = ({children}) => {
    const roundedRating = Math.round(children);
    const starsDirection = {
        display: "flex",
        flexDirection: "row"
    };
    const starStyle={
        width: '25px',
        height: '25px'
    }
    const rating = [];
    for(let i = 0; i <= 4; i++){
        rating.push((i < roundedRating) ?  <img style={starStyle} key={i} src={filledStar} alt='Filled star rating' /> : <img style={starStyle} key={i} src={emptyStar} alt='Unfilled star rating' />)
    }
    return ( 
        <div className="card-container" style={starsDirection}>
            {rating}
        </div>
     );

}

export default Rating;