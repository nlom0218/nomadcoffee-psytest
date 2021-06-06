import { faHome, faList, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
width: 40%;
margin-top: 50px;
margin-bottom: 40px;
display: flex;
justify-content: space-between;
  svg {
    cursor: pointer;
    font-size: 30px;
    color: ${props => props.theme.iconColor};
  }
`

const HomeBtn = styled.div``

const TestBtn = styled.div``

const ListBtn = styled.div``

const Nav = () => {
  return (<NavContainer>
    <HomeBtn>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </HomeBtn>
    <TestBtn>
      <Link to="/test">
        <FontAwesomeIcon icon={faUndo} />
      </Link>
    </TestBtn>
    <ListBtn>
      <Link to="/list">
        <FontAwesomeIcon icon={faList} />
      </Link>
    </ListBtn>
  </NavContainer>);
}

export default Nav;