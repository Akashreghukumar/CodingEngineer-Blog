import React from 'react'
import Searchbar from './Searchbar'

const Filters = (props) => {
  const {search,setSearch}=props
  return (
    <div className='m-5 '>
        <Searchbar search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Filters