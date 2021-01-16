import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container=styled.div`
position: fixed;
width: 100%;
background-color: lightgrey;
display: flex;
justify-content: space-around;
align-items: center;
height: 3rem;
`;

const List=styled.section`
cursor: pointer;
color: black;
&:hover{
    text-decoration: underline;
}
`;

const Navbar=()=>{
    return (
     <Container>
         <Link  style={{ textDecoration: 'none' }} to="/allposts">
         <List>ALL POSTS</List>
         </Link>
         <Link  style={{ textDecoration: 'none' }} to="/newpost">
         <List>NEW POST</List>
         </Link>
     </Container>
    );
}

export default Navbar;