import React, { useEffect, useReducer, useState } from 'react'
import "./comp.css";
import PopUp from './PopUp';
import Header from './Header';
const intialState = {
    fname: "",
    lname: "",
    age: "",
    email: "",
    phone: "",
    cgpa: "6-7",
    dob: "",
    gender: "male"
}
const reducer = (state, action) => {
    switch (action.type) {
        case "input":
            let { field, payload } = action;
            let obj = {}
            obj[field] = payload
            return { ...state, ...obj }
        case "clear":
            return {
                fname: "",
                lname: "",
                age: "",
                email: "",
                phone: "",
                cgpa: "",
                dob: "",
                gender: ""
            }
        default:
            return state;
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, intialState)
    const [showPopUp,updatePopUp]=useState(false)
    const clearState = () => {
        dispatch({ type: "clear" })
    }
    const handleSubmit = (event) => {
        
        event.preventDefault();
        // alert("form submitted")
        updatePopUp(true)
        // clearState();
    }

    const handleChange = (event) => {
        dispatch({
            type: "input",
            field: event.target.name,
            payload: event.target.value
        })
    }
    useEffect(()=>{
        updatePopUp(false)
    },[])
    // console.log(showPopUp)
    return (
        <>
        <div className="form-container">
            <Header/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div id="names">
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" value={state.fname} name="fname" onChange={(e) => handleChange(e)} placeholder="enter first name" required/>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" value={state.lname}  onChange={(e) => handleChange(e)} placeholder="enter last name" required/>
                    </div>
                </div>
                <div id="contact-details">
                    <label>E-mail</label>
                    <input type="email"  value={state.email} name="email" onChange={(e) => handleChange(e)} placeholder="enter e-mail" required/>
                    <label>Phone</label>
                    <input type="phone" value={state.phone}  name="phone" onChange={(e) => handleChange(e)} placeholder="phone number" required/>
                </div>
                <div id="age">
                    <label>Age</label>
                    <input type="age"  value={state.age} name="age" onChange={(e) => handleChange(e)} placeholder="enter age" required/>
                </div>
                <div id="gender">
                    <label>Gender</label>
                    <div>
                        <label htmlFor="male">Male
                            <input type="radio" id="male" value="male" name="gender" onChange={(e) => handleChange(e)} required/>
                        </label>
                        <label htmlFor="female">Female
                            <input type="radio" id="female" value="female" name="gender" onChange={(e) => handleChange(e)} required/>
                        </label>
                    </div>
                </div>
                <div id="cgpa">
                    <label>Select CGPA</label>
                    <select name="cgpa" onChange={(e) => handleChange(e)} required>
                        <option value="4-5">4 to 5</option>
                        <option value="5-6">5 to 6</option>
                        <option value="6-7">6 to 7</option>
                        <option value="7-8">7 to 8</option>
                        <option value="8-9">8 to 9</option>
                        <option value="9-10">9 to 10</option>

                    </select>
                </div>
                <div id="date">
                    <label>Date of Birth (D.O.B)</label>
                    <input type="date" value={state.dob}  name="dob" onChange={(e) => handleChange(e)} required/>
                </div>
                <div id="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        {
            (showPopUp)?<PopUp user={state.fname} email={state.email} pop={updatePopUp} clear={clearState}/>:""
        }
        </>
    )
}

export default Form