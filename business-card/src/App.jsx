import React from 'react'
import './App.css'
import './component/header'
import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'

function App() {
  return (

    <div className='container'>
         <Header/>
         <Body/>
         <Footer/>
    </div>
  )
}
export default App
