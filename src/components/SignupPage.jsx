import React, {useState} from 'react'

export default function SignupPage() {
    const initialValues = {
        email: '',
        password:'',
        nationality: ''
    }
    
    const [newUser, setNewUser] = useState(initialValues)
    // const [lenguage, setLenguage] = useState('')

    const handleChange = (e) => {
        setNewUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser)
        setNewUser(initialValues);
      }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email);
    const strongPassword = newUser.password.length >= 8;

    let greeting
    switch (newUser.nationality) {
        case "en":
        greeting = "Hello"
        break;
        case "de":
        greeting = "Hallo"
        break;
        case "fr":
        greeting = "Bonjour"
        break;
        default:
        break;
    }

  return (
    <div className="form_container">
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={newUser.email} onChange={handleChange}/>
            {validEmail ? <p>Valid email</p> : <p>Non valid email</p>}
            <label>Course image</label>
            <input type="password" name="password" value={newUser.password} onChange={handleChange}/>
            {strongPassword ? <p>Strong password</p> : <p>Weak password</p>}
            <select type="nationality" name="nationality" value={newUser.nationality} onChange={handleChange}>
                <option value="en">English</option>
                <option value="de">Deutch</option>
                <option value="fr">French</option>
            </select>
            <button type="submit">SignUp</button>
        </form>
        <p>{greeting}</p>
        <p>Your email address is: {newUser.email}</p>
        {validEmail && <p>Your email adress is correct</p>}
    </div>
  )
}
