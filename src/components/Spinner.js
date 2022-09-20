import React from 'react'
import Spinner from '../assets/css/Spinner.css'

const Spinner = () => {
  return (
    <div>
      <div class='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
