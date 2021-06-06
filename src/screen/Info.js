import React from 'react';
import styled from 'styled-components';
import info_img from "../img/info-unsplash.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 600px;
  a {
    text-decoration: none;
    color: ${props => props.theme.fontColor}
  }
`

const Title = styled.div`
  width:100%;
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
`

const InfoImg = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 600px;
  max-width: 600px;
  height: 400px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`

const ImgInfo = styled.div`
  width: 100%;
  font-size: 24px;
  margin-bottom: 20px;
`

const ImgInfoText = styled.span`

`

const ImgInfoHref = styled.a``

const CoffeeInfo = styled.div`
  width: 100%;
  font-size: 24px;
`

const CoffeeInfoText = styled.span``

const CoffeeInfoBlog = styled.a`
  margin-right: 10px;
`

const CoffeeInfoWiki = styled.a`
  margin-left: 10px;
`

const Info = () => {
  return (<Container>
    <Title>NOMAD COFFEE INFO</Title>
    <InfoImg src={info_img} />
    <ImgInfo>
      <ImgInfoText>Image Form: </ImgInfoText>
      <ImgInfoHref href="https://unsplash.com/" target="_blank">unsplash free image</ImgInfoHref>
    </ImgInfo>
    <CoffeeInfo>
      <CoffeeInfoText>Coffee Info From: </CoffeeInfoText>
      <CoffeeInfoBlog href="https://blog.daum.net/paysew/7718301" target="_blank">Naver Blog</CoffeeInfoBlog>
        /
        <CoffeeInfoWiki href="https://namu.wiki/w/%EC%BB%A4%ED%94%BC" target="_blank">Namu Wiki</CoffeeInfoWiki>
    </CoffeeInfo>
  </Container >
  );
}

export default Info;