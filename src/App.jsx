// import { useState } from 'react'
// import './App.css'
import Card from './Card'
import Copyright from './Copyright'

function App() {
  
  return (
   <>
       <img id="logo" src="myCollection.png" alt="" />
    <h1>Have Fun!</h1>
    <div id="bigDiv">
    <div id="mainDiv">
      <Card />


    </div>
    </div>
        <footer>
          <Copyright />
       </footer>
    <script src="script.js"></script>
    </>
  )


}

export default App
