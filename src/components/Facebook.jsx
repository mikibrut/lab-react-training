import React , {useState} from 'react'
import profiles from '../data/berlin.json';

export default function Facebook() {
const [countryBtn, setCountryBtn] = useState(profiles)

const filteredCountries = [];
  profiles.filter(elem => !filteredCountries.includes(elem.country) ? filteredCountries.push(elem.country) : elem);

  const handleCountryBtn = (country) => {
    setCountryBtn(country)
  };

  return (
     <div className="fb-buttons">
        {filteredCountries.map((elem, i) => {
        return (
          <button key={`button-${i}`} onClick={()=> {handleCountryBtn(elem)}} className={elem===countryBtn ? "blue-button" : "white-button"}>{elem}</button>
        )
      })}
        <div className="card-container">
            {profiles.map((elem) => {
                return (
                <div key={elem.img} onChange={() => handleCountryBtn(elem.country)} className={elem.country === countryBtn ? "card blue-background" : "card white-background card" }>
                    <img src={elem.img} width="100px" alt="Profile" />
                    <div >
                        <p><span className="title"><b>First name: </b></span>{elem.firstName}</p>
                        <p><span className="title"><b>Last name: </b></span>{elem.lastName}</p>
                        <p><span className="title"><b>Country: </b></span>{elem.country}</p>
                        <p><span className="title"><b>Type: </b></span>{elem.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                </div>
                )
            })}
          </div>
    </div>
     );
  
}
