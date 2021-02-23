import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#"><img style={{width:'80px',height:'50px',marginLeft:'1rem'}}
  src="https://s3.pixers.pics/pixers/700/FO/43/33/35/82/700_FO43333582_39957d53897242508d4dbdfec59dd35f.jpg"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i className='fa fa-bell-o'></i></a>  
      </li>
      <li class="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      
    </ul>
  </div>
</nav>
 </>
 )
}

export default Navbar
