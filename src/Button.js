import PropTypes from 'prop-types'

const Button = ( {text} ) => {
    
    const handleCLick = () => {
      console.log('clicked')
    }
    return (
        <>
            <button style={style} onClick={handleCLick}>{text}</button>
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


Button.propTypes = {
    text:PropTypes.string,
    style:PropTypes.object
}

export default Button
