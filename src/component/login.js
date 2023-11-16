import React,{ Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import {Link,NavLink} from 'react-router-dom';
 class  Login extends Component{
    state={
        
        
        email:'',
        password:'',
      
    
    }

    logins = async () => {
        try{
            const user = {
                email:this.state.email,
                password:this.state.password

            }
        const response = await axios.post('http://localhost:3000/user/login' ,user )
            console.log(response.data)
            console.log("hello")
            

        }
        catch(error){
            console.log(error)
        }
    
    }

    componentDidMount() {
    }




    render(){
return(
    <div><from >
       
        <center>
        <h1>Log in for {this.props.name}</h1>
             Email<br/>
       <input type='text' onChange={(e)=>{
        this.setState({email:e.target.value})
       }}/><br/>
       Pasword<br/>
       <input type='password'  onChange={(e)=>{
        this.setState({password:e.target.value})
       }}/><br/><br/>
       <button onClick={this.logins} >Log in</button>
       </center></from>
       
    </div>
)

    }}
    function mapStateToProps(state){
        return{
        name:state.name
        }
    
      }
    export default connect(mapStateToProps)  (Login);