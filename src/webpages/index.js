import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Layout from './layout';
import Home from './home';
import Contact from './contact';
import User from './user';
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route exact path = "/" element = {<Layout/>} />
            <Route  path="/home" element= {<Home/>} />
            <Route path = "/contact" element = {<Contact/>} />
            <Route path =  "/user/:id"  element = {<User/>} />
            </Routes>
        </Router>
    );
};
export default Webpages;
