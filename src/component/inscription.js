import React,{ Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import axios from 'axios'

var x=''
 class  Inscri extends Component{
    state={
        
        name:'',
        lastname:'',
        email:'',
        password:'',
        Passwordconf:'',
    
    }    
    Sinup = async () => {
        try{
            const user = {
                name:this.state.name,
                lastname:this.state.lastname,
                email:this.state.email,
                password:this.state.password,
                
            }
        const response = await axios.post('http://localhost:3000/user/sinup' ,user )
            console.log(response.data)
            console.log("Sucess")

            
        }
        catch(error){
            console.log(error)
        }
    
    }      
    render(){
          
        
        
        if((this.state.passwordconf===this.state.password)&&(this.state.name.length<10)&&(this.state.name.length>3)&&(this.state.lastname.length<15)&&(this.state.lastname.length>3)){
            
               x= <button onClick={this.Sinup} className='bt-inscri' ><NavLink  style={{textDecoration: 'none'}} to='/login' >Inscription</NavLink></button> 
            
         }
         else
         x=''
        
   return (
    
        <div>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
            
       <center> <h2>Inscription</h2>
       <from >
        Name<br/>
        <i class="fa fa-user icon"></i>
       <input type='text' onChange={(e)=>{
        this.setState({
            name:e.target.value
        })    
        }}/><br/>
       Lastname<br/>
       <i class="fa fa-user icon"></i>
       <input type='text' onChange={(e)=>{
            this.setState({
                lastname:e.target.value
            })    
            }}/><br/>
       Email<br/>
       <i class="fa fa-envelope icon"></i>
       <input type='text' onChange={(e)=>{
                this.setState({
                    email:e.target.value
                })    
                }}/><br/>
       
       Password<br/>
       <i class="fa fa-key icon"></i>
       <input type='password' onChange={(a)=>{
                    this.setState({
                        password:a.target.value
                    })    
                    }}/><br/>
       Password comfirme<br/>
       <i class="fa fa-key icon"></i>
       <input type='password' onChange={(e)=>{
                        this.setState({
                            passwordconf:e.target.value
                      
                        })
                       
                         }}/>
      
 <p className='p'>{x}</p>
 <br/>

 {this.state.passwordconf}<br/>
 {this.state.password}
       </from>
       </center>
       
       </div>
     
    )
    
}}


export default (Inscri);