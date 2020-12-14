import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import './Navigation.css';


const Navigation = () => (
  <div className='navigation'>
    <Navbar color='faded' expand='sm'>
      <Link className='navBrand' to='/'>
       
        <h1>PSN BR PRICES</h1>
      </Link>
    </Navbar>
  </div>
);


export default Navigation;
