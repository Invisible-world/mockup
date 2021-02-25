import { Bodycontent } from './Bodycontent'

const Bodysection = () => {
    return (
        <>
       <div className=' container  p-2'>
           <div className='row'>
       <div className="col-8 d-flex ">

        {Bodycontent.map((content)=>{
            return(
                
                    <div style={{marginLeft:'18px',color:'#2cd40e',cursor:'pointer'}}>
                    <p><i className={content.cName} style={{marginRight:'4px',color:'black'}} >
                            </i> {content.title}</p>
                    </div>
                   
                             
            )
        })}
            </div>
            </div>
            <hr style={{width: '50%',marginLeft: '0px'}}></hr>
            </div>
            
        </>
    )
}

export default Bodysection
