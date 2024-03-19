import React from 'react';
import AppBar from './scenes/global/AppBar'
import Banner from './scenes/global/Banner'
import NarBar from './scenes/global/NavBar'
import Footer from './scenes/global/Footer'

import Copyright from './scenes/global/Copyright'
import { Outlet } from 'react-router-dom';
// import './App.css';
  
export default function App(){
  return (
      <div>
        <AppBar />
           <div className='container' >
            <Banner />
            <NarBar />
            <Outlet />
            <Footer /> 
           </div>
          
          
             
        <Copyright />
      </div>
    ) 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
