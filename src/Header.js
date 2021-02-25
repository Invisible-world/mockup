import React from 'react'
import Headercol1 from './Headercol1'
import Headercol3 from './Headercol3'

const Header = () => {
    return (
        <>
        <div className="mt-4">
            <div className="container  ">
            <div className="row">
                <div className="col-sm-5">
                 <Headercol1 />
                </div>
                <div className="col-sm-3 headercol2">
                 <div style={{color:'green'}}>
                 <h1>24K</h1>
                 <h6>Posts</h6>
                 <h6>Views</h6>
                 </div>
                 </div>
                 
                 <div className="col-sm-4 headercol3">
                  <Headercol3 />
                </div>
                </div>
                </div>
               </div>     
        </>
    )
}

export default Header
