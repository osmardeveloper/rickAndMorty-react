import React, { useState } from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({setPage, RESIDENTS_PERPAGE, location}) => {
  
  return (
    <div className='pagination_list'>
    {
      numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <a href="#" onClick={() => {
        setPage (numberPage)        
        window.scrollTo(0, 0)
      }} key={numberPage} > {numberPage}</a>)
    }
  </div>
  )
}

export default Pagination