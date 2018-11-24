
import React, { Component } from 'react';

/* instead of using a class we can use a stateless Functional component, need to add props as a parameter for functional component, don't need that for class components */
/* so don't need this.props instead use props as a parameter for functional component */
/*
const NavBar = props =>{
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                  {props.totalCounters}
               </span>
            </a>
        </nav>
    );
};
*/

/* object destructuring */

const NavBar = ({ totalCounters }) =>{
    /* lifecycle hooks can be added for class components and for functional component */
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                  {totalCounters}
               </span>
            </a>
        </nav>
    );
};

/*
class NavBar extends Component {
 render (){

  }
}
*/

export default NavBar;