import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"

function Form (){
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      phoneNumber: "",
    }
  );

  const [errors, setErrors] = useState([]);

  const validates = () => {
    const errors = [];
    if(!user.name.length) {
      errors.push("Name cannot be blank")
    }
    if(!user.email.length){
      errors.push("Email cannot be blank")
    }
    if(!user.phoneNumber.length){
      errors.push("Phone Number cannot be blank")
    }
    //validate phone type
    return errors;
  }

  const handleChange = (incomingKey) => {
    return (e) => {
      const userObj = Object.assign({}, user, {[incomingKey]: e.target.value})
      setUser(userObj)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errors = validates()
    if(errors.length){
      setErrors(errors)
    }
  }

  const showError = () => {
    if(!errors.length){
      return null
    } else {
      return (
        <ul>
          {errors.map(error => <li>{error}</li>)}
        </ul>
      )
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Form!</h1>
      <input type="text" value={user.name} placeholder="name" onChange={handleChange("name")}/>
      <input type="email" value={user.email} placeholder="email" onChange={handleChange("email")} />
        <input type="tel" value={user.phoneNumber} placeholder="phone number" onChange={handleChange("phoneNumber")} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required />
      <select>
        <option value="Home"> Home </option>
        <option value="Work"> Work </option>
        <option value="Mobile"> Mobile </option>
      </select>
      <input type="radio" name="staff" value="Instructor"/> Instructor<br/>
      <input type="radio" name="staff" value="Student" /> Student<br/>
      <textarea maxLength="280" placeholder="bio"></textarea>
      <input type="checkbox" value='true' />
      <button>Submit</button>
    </form>
    {showError()}
    </>
  )
}

export default Form