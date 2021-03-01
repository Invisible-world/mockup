import { Carddetails } from './Carddetails'
import { List } from './List'


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
      
      </div>


</div>   


</div>

        </>
    )
}

export default Bodycard
