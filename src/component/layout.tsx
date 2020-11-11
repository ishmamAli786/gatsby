import React from 'react';
import Nav from './nav';
import Footer from './footer';
export default function Layout({children}) {
    return (
        <>
        <Nav/>
           {children} 
           <Footer/>
        </>
    )
}