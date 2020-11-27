import React from 'react'
import styled from 'styled-components'
import Me from '../images/myphoto.jpg'

const HomeContainer = styled.div`
  min-height: 70vh;
  background-color: #0A0A0E;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 690px) {
    min-height: 80vh;
  }
`
const Presentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 40px 0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 415px) {
    width: 90%;
  }
`
const MyPhoto = styled.img`
  width: 300px;
  height: 300px;
  border: 3px solid #0062cc99;
  border-radius: 2px; 
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
  @media only screen and (max-width: 415px) {
    width: 260px;
    height: 260px;
  }
`
const Title = styled.h3`
  margin: 20px 0;
  font-weight: 400;
`
const Line = styled.h3`
  color: #0062cc;
  display: inline;
  @media only screen and (max-width: 353px) {
    display: none;
  }
`
const Text = styled.h3`
  width: 70%;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`
const MyName = styled.h3`
  display: inline;
`
const Stack = styled.h3`
  color: #0062cc;
  font-weight: 300;
  display: inline;
`
const CurriculumButton = styled.button`
  background-color: #0062cc;
  margin-left: 20px;
  padding: 5px 10px ;
  border-radius: 16px;
  cursor: pointer;
  color: #FFF;
  box-shadow: 0 0 3px 0 #696969;
  transition: 0.6s;
  :hover{
    box-shadow: none;
    background-color: #004FA3;
  }
  @media only screen and (max-width: 353px) {
    margin: 0 auto 0 10px;
  }
`

function HomePage() {

  return (
    <HomeContainer>
      <Presentation>
        <MyPhoto src={Me}/>
        <Text>
          <Line>-- </Line><MyName>Leonardo Gomes</MyName>
          <a href="https://drive.google.com/file/d/1S9TtHP6hXOLZu7c0aeigImeAR6MgSkWr/view" target="_blanck">
            <CurriculumButton >CURRICULUM 📃</CurriculumButton>
          </a>
          <Title>
            <Stack>FullStack Web Developer </Stack><Line>|</Line> HTML5, CSS, JavaScript, React, Jest, Node.js, Typescript, MySQL
          </Title>
          💻 Estudo programação desde 2017, já tive contato com as tecnologias: PHP, JSP, HTML, CSS e MySQL.
          Conheci o mundo da programação em um curso técnico que fiz, desde lá nunca mais parei de estudar.
          <br/>
          <br/>
          🧠 Atualmente sou estudante na Labenu, onde estou estudando para me tornar um Full Stack Web
          Developer com as tecnologias: HTML, CSS, JavaScript, React.js, Jest, Node.js, Git, MySQL,
          TypeScript, AWS. Ainda tenho muito a aprender e estou a procura de experiência para me
          desenvolver pessoal e profissionalmente tendo como referência a área da tecnologia. 
        </Text>
      </Presentation>
    </HomeContainer>
  )
}

export default HomePage