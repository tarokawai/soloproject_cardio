
import React from 'react';
//import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
//import OneCardio from './components/OneCardio';
import Detail from './components/Detail';
import CardioForm from './components/CardioForm';
import CardioList from './components/CardioList';
import Update from './components/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Detail/>} path="/cardios/:id" /> 
        <Route element={<Update/>} path="/cardios/edit/:id"/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}
export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './views/Main';
// import Detail from './components/Detail';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//             <Route element={<Main/>} path="/people/" />
//             <Route element={<Detail/>} path="/people/:id" />    /* The :id part of our path is a variable that we 
//             must give value to. */
//         </Routes>
//       </BrowserRouter>                           
//     </div>
//   );
// }
// export default App;

// import React, { useState } from 'react'
// import axios from 'axios';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'; //this is new
// import PersonForm from './components/PersonForm'; //this is new
// import PersonList from './components/PersonList';
// const App = () => {
    
//     return(
// 	<div>
//     	<BrowserRouter>
//             <Routes>
//     	        /* This is INCORRECT. Each component in the Router needs its
//                    own unique path attribute. */
//                 /* The CORRECT way to do this is in the next example code block */
// 	        <Route element={<PersonForm/>} path="/home" />
// 	        <Route element={<PersonList/>} path="/home" />
//             <Routes>
//     	</BrowserRouter>
//         </div>
//     ) 
// }
// export default App;



// import logo from './logo.svg';
// import './App.css';

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
