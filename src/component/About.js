import React,{ Component} from 'react';
import img1 from '../reviews.svg'
import img2 from  '../free_cancel.svg'
import img3 from  '../low_prices.svg'
class About extends Component{
    render(){

    return (
       <>
        <div id='abo' >
        <div className="bg-text"> 
        <center>
        <h1>Find tours, activities, and more</h1>
        <div>

        </div></center>
        </div>
         </div>
        <center><h2> Why Book on   Travel.tn ?</h2></center>
        <hr/>
          <div className='rest' >
            
                <img src={img1} className='img1' alt='...'/><br/>
                <h3><b>Trusted Reviews and Ratings</b></h3>
         
         <p>Know you're booking the best thanks to our <br/>helpful global traveler community</p>
         </div>
         <div className='rest1'> 
         <img src={img2} className='img2' alt='...'/><br/>
                <h3><b>Free 24-hour Cancellation</b></h3>
        
         <p>Plans changed? No problem. Change or cancel<br/>up to 24 hours before your experience</p>
         </div>
         <div className='rest2'>
         <img src={img3} className='img2' alt='...'/><br/>
                <h3><b>Low-price Guarantee</b></h3>
        
         <p>Enjoy the best experiences at the best price,<br/>every time</p>
         
         </div>
         </>
    )
}}
export default About;