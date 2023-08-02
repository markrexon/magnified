import React from 'react'
import Navbar from './Header'
import Footer from './Footer'
import Prayer from './components/Prayer'
import Login from './components/Login'
import Hero from './components/Hero'
import { styled } from 'styled-components'

const Section = styled.section `
  
	display: inline-block;
	width: 100%;
 
`;
function LandingPage() {
  return (
    <Section >
    <Navbar/>
    <Hero/>
    <Login/>
      <Prayer/>
     <Footer/>
     </Section>
    )
}

export default LandingPage