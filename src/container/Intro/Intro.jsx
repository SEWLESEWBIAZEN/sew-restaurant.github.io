import React,{useState,useRef} from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const vdRef=useRef()
  const [playVideo,setPlayVideo]=useState(false);
  return(
  <div className='app__video'>
   <video 
   ref={vdRef}
   src={meal}
   type='video/mp4'
   loop
   controls={false}
   muted
   /> 
   <div className='app__video-overlay flex__center'>
    <div className='app__video-overlay_circle flex__center'
    onClick={()=>{
      setPlayVideo(!playVideo);
      if(playVideo){
        vdRef.current.pause();
      }else{
        vdRef.current.play()
      }
    }}>
      {playVideo?(
        <BsPauseFill color='#fff' fontSize={30}/>
      ):(
        <BsFillPlayFill color='#fff' fontSize={30}/>
      )}
    </div>
   </div>   
  </div>
)};

export default Intro;
