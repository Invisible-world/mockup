

const Notification = () => {
   const handleClick = () => {
       console.log('notification panel goes here ')
   }
   
   
   
    return (
        <>
        <i 
        className='fa fa-bell-o' 
        style={{fontSize:'35px'}}
        onClick={handleClick}
        >
       
        </i> 
        </>
    )
}

export default Notification
