import React from 'react'

const Searchbar = (props) => {
  const {search,setSearch}=props
  console.log("sesa",search)
  return (
    <div className='search-bar px-5'>
        <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Searchbar