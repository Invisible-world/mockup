

const User = () => {
    const handleClick = () => {
        console.log('userlogin logout content will be displayed on click ') 
    }   
    
    return (
          
        
        <>
            <img 
                onClick={handleClick}
                style={{width: "56px",
                height: "43px",borderRadius:'50%'}}
                src='https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'>

                
</img>
        </>
    )
}

export default User
