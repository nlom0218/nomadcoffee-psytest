import { useReactiveVar } from '@apollo/client';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { scoreVar } from '../apollo';
import { checkList } from '../psyTestData';
import Finish from './Finish';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
`

const Status = styled.div`
  margin-top: 30px;
  width: 600px;
  position: relative;
`

const StautsIcon = styled.div`
    position: absolute;
    bottom: 40px;
    svg {
    color: ${props => props.theme.barBgColor};
    font-size: 30px;
  }
`


const StatusBar = styled.div`
  width: 600px;
  max-width: 600px;
  height: 10px;
  margin: 10px 0px 30px 0px;
  background-color: ${props => props.theme.barBgColor};
`

const Title = styled.h1`
  height: 100px;
  width: 100%;
  display:flex;
  justify-content: flex-start;
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
`

const Img = styled.img`
  width: 600px;
  max-width: 600px;
  height: 350px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`

const Options = styled.ul`
  width: 100%;
  margin-top: 30px;
`

const Option = styled.li`
  box-shadow: ${props => props.theme.shadow};
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 24px;
  padding: 10px 15px;
  background-color: ${props => props.theme.optBgColor};
  color: ${props => props.theme.optColor};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.optBgColorHover};
    color: ${props => props.theme.optColorHover};
  }
`

const Test = () => {
  const [num, setNum] = useState(0)
  const lastScore = useReactiveVar(scoreVar)
  const onClikeNextBtn = (e) => {
    const { target: { dataset: { score } } } = e
    scoreVar(lastScore + parseInt(score))
    setNum(num + 1)
  }
  const leftSize = () => {
    return num * 60 + 20
  }
  return (<><Container>
    {num === 10 ? <Finish /> : <>
      <Status>
        <StautsIcon style={{ left: leftSize() }}>
          <FontAwesomeIcon icon={faCoffee} />
        </StautsIcon>
        <StatusBar></StatusBar>
      </Status>
      <Title>
        <div style={{ marginRight: "10px" }}>#</div>
        <div>
          {checkList[num].title}
        </div>
      </Title>
      <Img src={checkList[num].img}></Img>
      <Options>
        {checkList[num].options.map((option, index) => (
          <Option
            key={index}
            data-score={index + 1}
            onClick={onClikeNextBtn} >
            {option}
          </Option>
        ))}
      </Options>
    </>}
  </Container >
  </>);
}

export default Test;