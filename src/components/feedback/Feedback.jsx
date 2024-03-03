import React, { useState } from 'react'
import './feedback.css'
const Feedback = () => {
  const [msg,setMsg]=useState('')
  const [check,setCheck]=useState(false)
  const [showMessage, setShowMessage] = useState(false);


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(msg)
    setMsg('')
    setCheck(false)
    console.log(check) 
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  
  }
  return (
    <div className='feedback'>
        <p>Let us know your <b>Feedback</b> <br />about us!</p>
      <form onSubmit={handleSubmit}>   
    
      <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='  Write here...' cols="42" rows="10"></textarea>
      <div className='input-n-text'><input type="checkbox" onChange={(e)=>setCheck(e.target.value)} checked={check} /> <span>Send feedback anonymously</span></div>
      <button>Submit</button>
   </form>
   {showMessage && <p className='success-msg'>Thanks for your valuable feedback!</p>}
    </div>
  )
}

export default Feedback