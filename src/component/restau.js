import React,{ Component} from 'react';

class Restaurent extends Component{
    render(){

    return (
       
        <div id='resto' >
        <div className="bg-text"> 
<div className='text'>
        <h1>Find your perfect restaurant</h1>
        <i class="fa fa-search icon"></i><input type='text' placeholder='City or retaurent name' className='search_resto'/> 
        </div>
        </div> </div>
    )
}}
export default Restaurent;