import React,{ Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/accueil';
import Home from './component/Home';
import About from './component/About';
import Inscri from './component/inscription';
import Login  from './component/login';
import Restaurent from './component/restau';
/*
    <button onClick={this.Plus}>+</button>
    <h1>{this.state.x}</h1>
    <button onClick={this.Mois}>-</button>*/

class  App extends Component{
  state={
x:0,
  }
  Plus=()=>{
    this.setState(
      {x:this.state.x+1}
    )
  }
  Mois=()=>{
    this.setState(
      {x:this.state.x-1}
    )
  }
  render(){
  return(
    <div className='App'>

    <BrowserRouter>
      
    <Nav />
       
         
         
        <Routes>
        
          <Route path="/" Component={Home} />
          
          <Route path="/about" Component={About} />
          <Route path="/inscription" element={<Inscri/>} />
          <Route path="/restaurent" element={<Restaurent/>} />
          <Route path="/login" Component={Login} />
         
        </Routes>
    
       
    </BrowserRouter>
    
    



    </div>
  )
  
  
  }}

export default  (App);
