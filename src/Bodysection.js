

import { Bodycontent } from './Bodycontent'


const Bodysection = () => {
    
    return (
        <>
       <div className=' container  p-2'>
           <div className='row'>
       <div className="col-8 d-flex ">

        {Bodycontent.map((content)=>{
            return(
                <div className='bodyStyle'>
                    <div style={{marginLeft:'18px',color:'#2cd40e',cursor:'pointer'}}>
                    <p><i className={content.cName} style={{marginRight:'4px',color:'black'}} >
                            </i>    {content.title}</p>
                   
                   
                   
                    </div>
                    </div>
                             
            )
        })}
            
            </div>
            
            <hr style={{width: '50%',marginLeft: '0px'}}></hr>
          
          
            
            <div >
            <div className="col-4 inputfield" style={{top:'-46px',left: '0px'}}>
            <form>
            <input type='text' placeholder='Search' className="inputStyle"
  
            ></input>
            </form>
            </div>
            </div>
            
            
            </div>
            </div>
            <div className="container">
           <div className='row'>
               <div className='col-6'>
           
           <h6 >13 Opinions posted in total</h6>
           <hr style={{width: '75%',marginLeft: '0px'}}></hr>
           </div>
           <div className='col-6  '>
               
               <h6 className='text-center'>Reader's Topic</h6>
               <hr style={{width: '50%'}}></hr>
              
           </div>
           
           </div>
           </div>
       
       
       
       
        </>
    )
}

export default Bodysection
