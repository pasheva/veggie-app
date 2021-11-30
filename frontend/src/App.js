import React, { useEffect, useState,Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
// import Home from "./Home";
// import Stuff from "./Stuff";


// class App extends Component {
//   render() {
//     return (
//       <HashRouter >
//         <div>
//           <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><NavLink to="/">Houumme</NavLink></li>
//             {/* <li><NavLink to="/">Stuff</NavLink></li> */}
//           </ul>
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               {/* <Route path="/stuff" element={<Stuff />} /> */}
//             </Routes>
//           </div>
//         </div>
//       </HashRouter>
//     );
//   }
// }


function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
