import { Carddetails } from './Carddetails'
import { List } from './List'
import { Menuitem } from './Menuitem'
import {  Trendingdetails } from './Trendingdetails'

const Bodycard = () => {
    return (
        <>
         <div className='container'>
             <div className='row'>
                 <div className='col-6'>
         
  {Carddetails.map((details) => {
    return(
    <div className="card mb-3">
    <img src={details.imgSrc}
  style={{height:"20vh",objectFit:'cover',width:'100%'}}
  className="card-img-top img-fluid" alt="Cardimage"/>
  
  <div className="card-body">
    <h5 className="card-title">{details.title}</h5>
    <p className="card-text"> {details.detailsCard}</p>
    
  </div>
 </div>
    )
  })}
  
  </div>
  <div className='col-6 '>
  {List.map((list=>{
                  return (
                      <p className='text-center'>{list.title}</p>
                  )
              }))}
      <div className='text-center '>
        <div className='mt-5'>
        <h6 style={{textTransform:'uppercase'}}>Become an Editor</h6>
        <hr style={{width: '50%'}}></hr>
        <button style={style} >JOIN US</button>
      </div>
      <h6 style={{textTransform:'uppercase'}}>Trending TOpics</h6>
      <hr style={{width: '50%'}}></hr>
              
      
              {Trendingdetails.map((detail)=>{
                return(
                  
                  <div className='d-flex ' style={{justifyContent:'center'}}>
                    
                    <img src={detail.imgSrc} alt={detail.title} style={{width:'100px',height:'80px'}}></img>
                    <p className='lead pt-4 pl-2'>{detail.title}</p>
                    </div>
                   
                )
              })}
               
              
      </div>
      
      <hr style={{width: '50%'}}></hr>
      
      <div style={{textAlign:'center'}}>
      {Menuitem.map((item)=>{
        return(
          <div className='d-inline-flex ' >
           
            <p className='pl-2' >{item.title}</p>

          </div>
        )
      })}
      </div>
       <hr style={{width: '50%'}}></hr>
     
     <div className='text-center'>
       <p>Copyright @ 2020 opinion of NEpal .<br></br>Powered By-<strong>illionso Technologies</strong></p>
     </div>
      </div>


</div>   


</div>

        </>
    )
}
const style ={
  padding:'  6px 35px 6px 36px',
  borderRadius:'0',
  border:'1px solid green',
  background:'#fff',
  color:'green',
 cursor:'pointer',
 marginBottom:'2.5rem'
}
export default Bodycard
