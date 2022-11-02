import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header =()=>{
    return(
        <>
<div>
<Navbar bg="dark" variant="dark">
        <Container className='mycustomenav'>
          
            
              <Link to="/">Home </Link>
            
            
            <Link to="/features">Features </Link>
            <Link to="/pricing">Pricing </Link>
            
        </Container>
      </Navbar>

</div>

        </>
    );
}

export default Header;