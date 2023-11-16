import React,{ Component} from 'react';
import axios from 'axios'
import video from './caption_720.mp4';
import { useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
      
 const [hotel , setHotel] = useState('')
 const [image , setImage] = useState('')

 const vidRef=useRef();

 useEffect(() => { vidRef.current.play(); },[]);


const [users,setUsers]=useState([])
useEffect(()=>{

},[])
var er='';
const search =()=>{
    
    const user = {
        title:hotel
    }
    axios.post('http://localhost:4000/prodect/getall',user )
.then(res=>{
    setUsers(res.data)
    window.location.assign("#cart")
  })
    

}
  return (
    <>
<div id='img' >
<div className="bg-text"> 
 <center>
 <h1>Find your perfect Hotel</h1>
 <i class="fa fa-search icon"></i><input type='text' onChange={(e)=>{
     setHotel(e.target.value) 
 }}  placeholder='City or Hotel name' className='search_resto'/> <button  onClick={search} className='sh' >search</button>
   
</center>
</div></div>
<div  id='cart'>
  {er}
{users.map(user=>{
        return (
   
         <div className='cart'>    
 <img src={user.image} className='card-img-top' alt='...'/> 
 
   <Link to='/About'><h5 class='title'>{user.title}</h5></Link>
   <p class='card-text'>{user.dicription}</p><p>{user.price}$</p>
   </div>
        ) 
        })}
         </div>
<center>


<video
  src={video}
  ref={ vidRef }
  muted
  autoPlay
  loop 
/> 
</center>
<footer>
<img src={require('./logo.png')} width='10%' /><small>© 2023 Tripadvisor LLC All rights reserved.</small>
<h4 >Terms of Use
Privacy and Cookies Statement<br/> Cookie consent <br/>Site Map How the site works <br/>Contact us</h4>
<small style={{paddingLeft:'50px'}}>This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region,</small><br/><small style={{paddingLeft:'50px'}}> please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</small>
</footer>
    </>
  )}
 