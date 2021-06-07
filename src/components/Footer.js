import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faInfo, faList } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  width: 100%;
  margin: 30px 0px;
  border-top: 1px solid ${props => props.theme.fontColor};
  padding-top: 30px;
  display: flex;
  justify-content: center;
`

const Info = styled.div`
  width: 600px;
`

const ViewMenus = styled.div`
  font-size: 18px;
  display: flex;
  svg {
    margin-right: 10px;
  }
  a {
    color: ${props => props.theme.fontColor};
    text-decoration: none;
  }
`

const ProjectContent = styled.div`
  margin-top: 10px; 
  font-size: 18px;
  display: flex;
  svg {
    margin-right: 10px;
  }
`

const ProjectName = styled.div`
  margin-right: 10px;
`

const ProjectHref = styled.a`
  color: ${props => props.theme.fontColor};
  text-decoration: none;
`

const TestInfo = styled.div`
  margin-top: 10px;
  font-size: 18px;
  display: flex;
  svg {
    margin-right: 18px;
    margin-left: 5px;
  }
  a {
    text-decoration: none;
  }
  `

const TestInfoText = styled.div`
  color: ${props => props.theme.fontColor};
`

const Github = styled.div`
  margin-top: 10px;
  font-size: 18px;
  display: flex;
  svg {
    margin-right: 10px;
  }
`

const GithubUser = styled.div`
    margin-right: 10px;
`

const GithubHref = styled.a`
    color: ${props => props.theme.fontColor};
    text-decoration: none;
`

const Footer = () => {
  const [info, setInfo] = useState(false)
  return (<Container>
    <Info>
      <ViewMenus>
        <FontAwesomeIcon icon={faList} />
        <Link to="/list">
          View all coffee menus
        </Link>
      </ViewMenus>
      <ProjectContent>
        <FontAwesomeIcon icon={faCube} />
        <ProjectName>
          Go to other Test:
        </ProjectName>
        <ProjectHref href="https://nomadcoders.co/community/type-test" target="_blank">
          Nomad Type Test
      </ProjectHref>
      </ProjectContent>
      <TestInfo>
        <FontAwesomeIcon icon={faInfo} />
        <Link to="/info">
          <TestInfoText onClick={() => { setInfo(true) }}>
            NOMADCOFFEE TYPE TEST Info
        </TestInfoText>
        </Link>
      </TestInfo>
      <Github>
        <FontAwesomeIcon icon={faGithub} />
        <GithubUser>
          Author Github:
        </GithubUser>
        <GithubHref href="https://github.com/nlom0218" target="_blank">
          nlom0218
      </GithubHref>
      </Github>
    </Info>
  </Container>);
}

export default Footer;