import React from 'react';
import styled from 'styled-components';
import{CgSun} from 'react-icons/cg';
import {HiMoon}  from 'react-icons/hi';



const ToggleButton = styled.button`
margin-top:1.5%;
margin-left:90%;
cursor: pointer;
height:30px;
width:30px;
border-radius:50%;
border:none;
background:${props=>props.theme.colors.background.primary };
color:${props=>props.theme.colors.text.secundary};

transition: all .5s linear;

`



export const Toggle = ({theme, toggleTheme}) => {

  return (  
   
          <ToggleButton onClick={toggleTheme}>
            { theme === 'light' ? <HiMoon size={30}/>:<CgSun size={30}/>}
          </ToggleButton>
   
  
  )
} 
