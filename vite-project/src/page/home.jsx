import React from 'react'
import Navbar from '../componenets/navbar'
import Display from '../componenets/display'
import Search from '../componenets/search'
import Axios from "axios"
function Home() {
function generateCountry() {
    Axios.get("https://restcountries.com/v3.1/region/europe").then((res)=> {
        console.log(res.data.name)
    })
}
  return (
    <React.Fragment>
        <main className='homepage'>

      
      <Navbar />
      <Search />
      <button onClick={()=> {
        generateCountry()
      }}>Workingl...</button>
      <Display />
      
      </main>


    </React.Fragment>
  )
}

export default Home
