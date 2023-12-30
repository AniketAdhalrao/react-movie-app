import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home.js';
import ShowMovie from './Components/ShowMovie';
import TopRated from './Components/popular';
import Upcoming from './Components/Upcoming';
import SearchBar from './Components/SearchBar';
import SearchedMovie from './Components/SearchedMovie';

function App() {

  return (
    <div >
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
          <Link to="/" className="navbar-brand" style={{ fontSize: 40 }}>
            Movie<span className="text-warning">DB</span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
          
              <li className="nav-item">
                <Link to="/popular" className="nav-link">
                Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/topRated" className="nav-link">
                Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upcoming" className="nav-link">
                Upcoming
                </Link>
              </li>
              
            </ul>
          </div>
          <SearchBar/>
        </nav>
      </header>
      <body>
      <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/popular" element={<Home/>}></Route>
          <Route path="/upcoming" element={<Upcoming/>}></Route>
          <Route path="/topRated" element={<TopRated/>}></Route>
          <Route path="/showMovie" element={<ShowMovie/>} ></Route>
          <Route path="/searchMovie" element={<SearchedMovie/>} ></Route>
      </Routes>
      </body>
    </div>
  );
}

export default App;
