import React, { useState } from 'react'
import './report.css'
const Report = () => {
  const [msg,setMsg]=useState('')
  const [value,setValue]=useState('')
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(value)
    setMsg('')
    setValue('')
    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };


  
  
  
  return (
   <div className='report-card'>
    <div className='msg' >
    <p>Let us know about the <b>Issue </b> you are facing right now!</p>
    </div>
        
        <form onSubmit={handleSubmit}>
            <div className='select-issue'>
            <label>Choose a section</label>
            <select onChange={(e)=>setValue(e.target.value)}>
                <option value="interview questions">Interview Questions</option>
                <option value="concept cards">Concept cards</option>
                <option value="practice questions ">Practice Questions</option>
                <option value="quizzes">Quizzes</option>
                

            </select>
            </div>
           <div className='fields'>
           <label>Describe the issue in detail</label>
            <textarea type="text" onChange={(e)=>setMsg(e.target.value)} value={msg} rows={10} cols={41} className='text-area1' placeholder=' Write here...' min={10} required />
    
           </div>
        <button>Submit</button>
        </form>
        {showMessage && <p className='success-msg'>Thanks for reaching out to us! We will get back to you as soon as possible</p>}
   </div>
  )
}

export default Report