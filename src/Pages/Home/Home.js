import React from 'react'
import { useState } from 'react'
import BannerSocial from '../../Components/BannerSocial';
import Navbar from '../../Components/Navbar';
import ContentsParent from '../../Components/ContentsParent'
import Filters from '../../Components/Filters'

const Home = () => {
    const [search,setSearch]=useState("")
  return (
    <div>
      <BannerSocial/>
      <ContentsParent search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Home