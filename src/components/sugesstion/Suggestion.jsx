import React, { useState } from 'react';
import './suggestion.css'

const Suggestion = () => {

const [value,setValue]=useState('')
const [msg,setMsg]=useState('')
const [showMessage, setShowMessage] = useState(false);
const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(value)
  console.log(msg)
  setMsg('')
  setValue('')
  setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  
}

  return (
    <div className='suggestion'>
      <span>Share your <b>Suggestions</b> with us for a chance to earn rewards!</span>
      <form onSubmit={handleSubmit} >
        <div>
        <p>
          Choose a section
        </p>
        <select onChange={(e)=>setValue(e.target.value)}>
          <option value="concept cards">Concept cards</option>
          <option value="interview questions">Interview Questions</option>
          <option value="practice questions">Practice Questions</option>
          <option value="quizzes">Quizzes</option>
        </select></div>
       <div> <p >
        Describe the suggestion in detail
        </p>
        <textarea value={msg}  onChange={(e)=>setMsg(e.target.value)} cols="42" rows="10"/></div>
        <button>Submit</button>
      </form>
      {showMessage && <p className='success-msg'>Thanks for your valuable Suggestion!</p>}
    </div>
  )
}

export default Suggestion