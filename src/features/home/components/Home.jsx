import React, { useState } from 'react'
import '../styles/home.css'
import backarrow from '../../../assets/Arrow 2.png'
import rocket from '../../../assets/Frame 2211.png'
import avtar from '../../../assets/Ellipse 52.png'
import fbtn from '../../../assets/Vector 15.png'
import { AiFillEdit } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { BiLike } from "react-icons/bi";

import { MdThumbsUpDown } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { BsFlagFill } from "react-icons/bs";

import { MdEditNote } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import Report from '../../../components/report/Report'
import Contact from '../../../components/contact/Contact'
import Feedback from '../../../components/feedback/Feedback'
import Suggestion from '../../../components/sugesstion/Suggestion'






const Home = () => {

    const [value,setValue] =useState('')
    const [float,setFloat] =useState(false)
    const [message,setMessage] =useState(false)
    const [feedback,setFeedback] =useState(false)
    const [flag,setFlag] =useState(false)
    const [suggestion,setSuggestion] =useState(false)


    

    const floatBtn = ()=>{
        if (float) {
            setFloat(false)
            setFlag(false)
            setMessage(false)
            setFeedback(false)
            setSuggestion(false)
        }else{
            setFloat(true)

       
        }
    }

  return (<>
    <div className='back' >
    <img src={backarrow} alt="back" /> <p>Back to Questions</p></div>
    <div className='container'>

        <div className='message-container'>
            <div className='msg-head'>
                <div className='category'>
                <p className='category-text'>Design</p>
                <p className='category-text'>Technology</p>
                </div>
                <div ><img src={rocket} alt="rocket" /></div>
            </div>
            <div className='msg-body'>
                <h3>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </h3>
                <p>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
                <div className='end-box'>
                    <label><IoIosEye className='icon' /> <span>100 Views</span></label>
                    <label><CiCircleInfo  className='icon'/> <span>How should you word your answer?</span></label>
                </div>
            </div>
            <div className='answers'>
                <h1>Answers(23)</h1>
                <span>Sort By: 
                    <select className='filter' onChange={(e)=>setValue(e.target.value)} defaultValue={'popular'}>
                        <option value="popular">Popular</option>
                        <option value="relevant">Relevant</option>
                    </select>
                </span>
            </div>
            <div className='reply-container'>

            
            <div className='reply-box'>

                <div className='details'>
                <img src={avtar} alt="user" />
                <div className='profile' >
                    <div><h3>Neha Bhat </h3> <span>(You)</span> 
                    </div><p>Jun 27, 2023</p>
                 </div>
                 
                </div>
                <div className='edit' ><AiFillEdit /> Edit</div>
                
                </div>
                
                <div className='text-area'>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... Show more</p>
                </div>
                <div className='actions'>
                  <label ><BiLike /> <span> Like</span></label>
                  <label ><span><FaRegMessage /> </span></label>
                   
                    <input placeholder='  Add a comment' type="text" />
                    <button>Post</button>
                </div>
                </div>
            </div>
    <div className='floating-button'>
    {message && <Contact/>}
    {feedback && <Feedback/>}
    {flag && <Report/>}
    {suggestion && <Suggestion/>}
{float ?<div className='btn-features' >  <TiMessages className='ft-btn' onClick={()=>{setMessage(true),setFeedback(false),setSuggestion(false),setFlag(false) }} />
 <MdEditNote className='ft-btn' onClick={()=>{setMessage(false),setFeedback(false),setSuggestion(true),setFlag(false)}}  />
 <BsFlagFill onClick={()=>{setMessage(false),setFeedback(false),setSuggestion(false),setFlag(true)}} className='ft-btn'  /> 
 <MdThumbsUpDown className='ft-btn' onClick={()=>{setFeedback(true),setMessage(false),setSuggestion(false),setFlag(false)}} /> 
 <IoClose  className='ft-btn'  onClick={floatBtn}  /> </div> : <MdEditNote className='ft-btn'  onClick={floatBtn}  /> }


    </div>
        </div>
    
    </>
  )
}

export default Home