import PropTypes from 'prop-types'

const Button = ( {text} ) => {
    return (
        <>
            <button style={style}>{text}</button>
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
