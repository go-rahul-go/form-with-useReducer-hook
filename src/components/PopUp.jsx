import React, { useRef } from 'react'
import "./comp.css"
let messageStyle = {
  position: "absolute",
  top: "50%",
  left: "5%",
  width: "90%",
  height: "40vh",
  backgroundColor: "white",
  border: "2px solid black"

}
const PopUp = ({ user, email, pop, clear }) => {
  console.log(user, email)
  const refStyle = useRef();
  const handleClick = () => {
    refStyle.current.style.display = "none"
  }
  return (
    <div className="pop-up-container" >
      <div style={messageStyle} ref={refStyle}>
        <div id="success">
          <i class="fa-regular fa-circle-check"></i>
          <p>Form Successfully submitted</p>
        </div>
        <div id="user-details">
          <p><span className="bold">name</span> {user}</p>
          <p><span className="bold">email</span> {email}</p>
        </div>

        <button onClick={() => {
          pop(false);
          clear();
          handleClick();
        }} id="close-btn">Close</button>
      </div>
    </div>
  )
}

export default PopUp;