import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFound_img from "../img/notFound-unsplash.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 600px;
`

const Title = styled.div`
  width:100%;
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
`

const NotFoundImg = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 600px;
  max-width: 600px;
  height: 400px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`

const HomeBtn = styled.div`
  svg {
    cursor: pointer;
    font-size: 30px;
    color: ${props => props.theme.iconColor};
  }
`

const NotFound = () => {
  return (<Container>
    <Title>404 Not Found</Title>
    <NotFoundImg src={notFound_img} />
    <HomeBtn>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </HomeBtn>
  </Container >);
}

export default NotFound;