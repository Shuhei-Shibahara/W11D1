import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function Form (){

  return (
    <form action="">
      <h1>Form!</h1>
      <input type="text" value={user.name} placeholder="name" />
      <input type="email" value={user.email} placeholder="email" />
      <input type="tel" value={user.phoneNumber} placeholder="phone number" />
      <select>
        <option value="Home"> Home </option>
        <option value="Work"> Work </option>
        <option value="Mobile"> Mobile </option>
      </select>
      <input type="radio" name="staff" value="Instructor"/> Instructor<br/>
      <input type="radio" name="staff" value="Student" /> Student<br/>
      <input type="text-area" value={user.bio} placeholder="bio" />
      <input type="text" value={user.name} placeholder="name" />
      <input type="checkbox" value='true' />

    </form>
  
  )
}