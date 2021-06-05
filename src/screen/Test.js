import { useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { darkModeVar, scoreVar } from '../apollo';
import { checkList } from '../psyTestData';
import Finish from './Finish';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
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
  console.log(`lastSocre: ${lastScore}`);
  const onClikeNextBtn = (e) => {
    const { target: { dataset: { score } } } = e
    scoreVar(lastScore + parseInt(score))
    setNum(num + 1)
  }
  return (<Container>
    { num === 10 ? <Finish /> : <><Title>
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
      </Options></>}
  </Container >);
}

export default Test;