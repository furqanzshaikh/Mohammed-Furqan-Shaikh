import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(msg)
    setMsg('')
    setName('')
    console.log(name)
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  
  
  }
  return (
    <div className='contact'>
      <h4>Get in <b> Contact with us</b> for your <br />queries!</h4>
      <form onSubmit={handleSubmit} >
      

        <p>Your Name</p>
        <input id='input' type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your Name'/>
       
    
          <p>What would you like to ask? </p>
          <textarea onChange={(e)=>setMsg(e.target.value)} value={msg}  cols="42" rows="10" placeholder='Write here' />
       <button>Submit</button>
      </form>
      {showMessage && <p className='success-msg'>Thanks for reaching out to us! We will get back to you as soon as possible</p>}
    </div>
  )
}

export default Contact