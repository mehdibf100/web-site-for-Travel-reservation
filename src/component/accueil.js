/* eslint-disable jsx-a11y/alt-text */
import React,{ Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import logo from './logo.png';


class  Nav extends Component{
render(){
return(
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div className='navbar'>
<div className='.logo1'>
<img src={logo} alt="Logo" width="10%" height="10%" />
 <a href='/' className='logo'>Travel.tn </a><i class="fa fa-search icon"></i><input type='text'  className='search'/> 
 <a className="trips" href="/ShoppingCart?oik=DFLT_836a0820-804a-490a-bea8-0b355efdac61" aria-label="Cart with 0 items."><span className='rev'><svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4.75H2v-1.5h2.5c.779 0 1.354.398 1.71.844.339.423.54.959.54 1.406v.25h14.71l-1.874 7.5H6.75v1.25c0 .29.164.76.475 1.175.327.436.632.575.775.575h9a2.75 2.75 0 11-2.45 1.5h-3.1a2.75 2.75 0 11-4.645-.407c-.314-.219-.578-.499-.78-.768-.439-.585-.775-1.365-.775-2.075v-9a.95.95 0 00-.21-.469c-.144-.179-.319-.281-.54-.281zm4.5 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm8 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-10.25-6h11.664l1.125-4.5H6.75v4.5z"></path></svg><span class="kLqdM"><span class="biGQs _P ttuOS"><span class="wQzUQ">Cart</span></span></span></span></a>
 <NavLink  className="sinin" to='/login'><span className='sin'>Sign in</span></NavLink>
   <a className="trips" href="/Trips"><span className='rev'><svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.798 5.786A5.769 5.769 0 017.72 4.25c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.769 5.769 0 013.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.599 2.324 1.569 3.662-.03 1.323-.578 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a183.566 183.566 0 01-3.153 2.785l-.069.059-.489-.569.49.569-.486.416-.488-.412a101.98 101.98 0 01-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453l.002-.002zm8.19 13.226a174.415 174.415 0 002.708-2.4c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.148-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.127 6.742z"></path></svg><span class="kLqdM"><span class="biGQs _P ttuOS">Trips</span></span></span></a>
  <a className="trips" href='/review'><span className='rev'><svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z"></path></svg>review</span></a>
  
  </div>

  
  <ul>
  

 
  <NavLink activClassName="active" to='/'>Hotels </NavLink>
  <NavLink activClassName="active" to='/About' >Things to Do</NavLink>
  <NavLink activClassName="active" to='/restaurent' >Restaurent</NavLink>
  <NavLink activClassName="active" to='/inscription' >Inscription</NavLink>
  <NavLink activClassName="active" to='/login' >Login</NavLink>
  
</ul>
</div>

</div>
)


}}
export default Nav;