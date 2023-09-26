import React from 'react'

const Footer = () => {

  const today = new Date();
  return (
<footer className='Footer'><p><em>Copyright &copy; {today.getFullYear()}</em></p></footer>  )
}

export default Footer