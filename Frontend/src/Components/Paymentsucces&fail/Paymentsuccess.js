import React from 'react'
import './Paymentsuccess.css'
import {useSearchParams} from "react-router-dom";
const Paymentsuccess = () => {

    const searchQuery = useSearchParams()[0]

    const referenceNum = searchQuery.get("reference")
  return (
    <div>
      <div className='success'>
      <span>Payment Successfull</span>
      <div className='reference-no'>
      <span>Reference No: {referenceNum} </span>
      </div>
      </div>
    </div>
  )
}

export default Paymentsuccess
