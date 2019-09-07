import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props)
// setTimeout(()=> {
//     props.history.push('/about')
//   },4000);
  
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">PUPA</a>
        <ul className="right">  
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/contact">Contact </Link></li>
          <li><Link to="/about">About </Link></li>
                  
        </ul>
      </div>
    </nav>
  )
}


export default withRouter(Navbar);