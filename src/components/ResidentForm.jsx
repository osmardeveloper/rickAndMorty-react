import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSudmit}) => {
  return (
    <div className='residentForm_container'>
    <form className='residentForm' onSubmit={handleSudmit}>
      <input className='residentForm_text' type="text" id="idLocation" placeholder= "type a location id"/>
      <button className='residentForm_button'>Search</button>
    </form>
    </div>
  )
}
 
export default ResidentForm