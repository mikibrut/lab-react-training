const Random = (props) => {
    const {min, max} = props;
    function randomInt(){
        return Math.floor(Math.random() * (max-min) + min)
 }
    return(
        <div className="card-container">
            <div className="card">
                {(max > 6) ?  <h2>Random value between 1 and 100 {randomInt()}</h2> : <h2>Random value between 1 and 6 {randomInt()}</h2>  }
            </div>
        </div>
        
    )
}

export default Random;