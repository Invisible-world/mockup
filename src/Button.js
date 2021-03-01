import PropTypes from 'prop-types'
import { useState } from 'react'






const Button = ( {text, onClick } ) => {
    const [Notification, setNotification] = useState(false)
    const [value, setValue] = useState('');
    const [post, setPost] = useState([])
    
    
    const handleCLick = () => {
       setNotification(!Notification)
       console.log(Notification)
      }

const handleChange = (e) => {
console.log(e.target.value)
setValue(e.target.value);
}
    
        
        
    
    return (
        <>
            <button style={style} onClick={handleCLick}>{text}</button>
            {Notification && 
            <div style={postBox}> 
        <div className='card'>
          <div className='card-body'>
            <form >
              <textarea type='text' placeholder='Post Opinion...' onChange={handleChange} />
              <button type='submit' className='m-auto'>Submit</button>
              
            </form>
            
            </div> 
          </div> 
  </div>
      
  
    

                   


           
            
            
            }
            
        </>
    )
}
const style ={
    padding:' 8px 12px',
    borderRadius:'0',
    border:'1px solid green',
    background:'#fff',
    color:'green',
   cursor:'pointer'
  }
  const postBox = {
    position:'absolute' ,
    top:'110%',
    zIndex:'100',
    
 
  }



Button.propTypes = {
    text:PropTypes.string,
    style:PropTypes.object
}

export default Button
