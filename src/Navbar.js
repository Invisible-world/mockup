import React from 'react'
import Button from './Button'
import './App.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#"><img alt='logo' 
  style={{width:'80px',height:'50px',marginLeft:'1rem'}}
  src="https://s3.pixers.pics/pixers/700/FO/43/33/35/82/700_FO43333582_39957d53897242508d4dbdfec59dd35f.jpg"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Button text='post opinion' /></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className='fa fa-bell-o' style={{fontSize:'35px'}}></i></a>  
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img style={{width: "56px",
height: "43px",borderRadius:'50%'}}
        src='https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'></img></a>
      </li>
      
    </ul>
  </div>
</nav>
 </>
 )
}

export default Navbar
