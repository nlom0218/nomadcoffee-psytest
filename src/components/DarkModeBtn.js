import { useReactiveVar } from '@apollo/client';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { darkModeVar } from '../apollo';

const Btn = styled.span`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 40px 40px 0px 0px;
  box-sizing: border-box;
  svg {
    font-size: 26px;
    cursor: pointer;
  }
`

const DarkModeBtn = () => {
  const darkMode = useReactiveVar(darkModeVar)
  const disableDarkMode = () => {
    localStorage.removeItem("dark")
    darkModeVar(false)
  }
  const enableDarkMode = () => {
    localStorage.setItem("dark", "true")
    darkModeVar(true)
  }
  return (<Btn>
    <FontAwesomeIcon
      icon={darkMode ? faSun : faMoon}
      onClick={darkMode ? disableDarkMode : enableDarkMode}
    />
  </Btn>);
}

export default DarkModeBtn;