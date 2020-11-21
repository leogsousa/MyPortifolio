import React from 'react'
import styled from 'styled-components'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import jest from '../images/jest.png'
import node from '../images/node.png'
import ts from '../images/ts.webp'
import mysql from '../images/mysql.png'

const AcquirementsContainer = styled.div`
  min-height: 70vh;
  background-color: #0A0A0E;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 690px) {
    min-height: 80vh;
  }
`
const TechnologiesContainer = styled.div`
  width: 85%;
  min-height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 945px) {
    grid-template-columns: 1fr;
  }
`
const EducationContainer = styled.div`
  width: 85%;
  min-height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 0 60px 0;
  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`
const Technologies = styled.h3`
  min-height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 2px 0 #69696977;
  font-weight: 300;
`
const Education = styled.h3`
  min-height: 60vh;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column; 
  box-shadow: 0 0 2px 0 #69696977;
  font-weight: 300;
`
const TitleOut = styled.h2`
  width: 85%;
  margin: 40px 0 10px 0;
`
const TitleInTechnologies = styled.h1`
  color: #0062cc;
  margin: 10px 0 0 15px;
`
const TitleInEducation = styled.h3`
  margin: 10px 0 0 15px;
  font-weight: 300;
  color: #0062cc;
`
const Line = styled.h3`
  color: #0062cc;
  display: inline;
`
const Text = styled.div`
  margin: 15px;
`
const Icon = styled.img`
  width: 40px;
  margin: 0 16px;
`
const TechIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TechIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px 0;
  @media only screen and (max-width: 945px) {
    flex-wrap: wrap;
  }
`

function AcquirementsPage() {

  return (
    <AcquirementsContainer>
      <TitleOut><Line>-- </Line>Tecnologias</TitleOut>
      <TechnologiesContainer>
        <Technologies>
          <span>
            <TitleInTechnologies>Frot-end</TitleInTechnologies>
            <Text>
              Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
              <br/>
              <br/>
              Criação de sites responsivos seguindo princípio de Mobile First.
            </Text>
          </span>
          <TechIconContainer>
            <TechIcon>
              <Icon src={html}/>
              <div>HTML</div>
            </TechIcon>
            <TechIcon>
              <Icon src={css}/>
              <div>CSS</div>
            </TechIcon>
            <TechIcon>
              <Icon src={js}/>
              <div>JavaScript</div>
            </TechIcon>
            <TechIcon>
              <Icon src={react}/>  
              <div>React</div>
            </TechIcon>
            <TechIcon>
              <Icon src={jest}/>
              <div>Jest</div>
            </TechIcon>
          </TechIconContainer>
        </Technologies>
        <Technologies>
          <span>
            <TitleInTechnologies>Back-end</TitleInTechnologies>
            <Text>
              Aplicações utilizando NodeJS, Typescript e MySQL.
              <br/>
              <br/>
              Criação de API´s para comunicação com front-end seguindo princípio de Clean Code e padrão MVC.
            </Text>
          </span>
          <TechIconContainer>
            <TechIcon>
              <Icon src={node}/>
              <div>Node</div>
            </TechIcon>
            <TechIcon>
              <Icon src={ts}/>
              <div>TypeScript</div>
            </TechIcon>
            <TechIcon>
              <Icon src={jest}/>
              <div>Jest</div>
            </TechIcon>
            <TechIcon>
              <Icon src={mysql}/>
              <div>MySQL</div>
            </TechIcon>
          </TechIconContainer>
        </Technologies>
      </TechnologiesContainer>
      <TitleOut><Line>-- </Line> Educação</TitleOut>
      <EducationContainer>
        <Education>
          <TitleInEducation>Curso Técnico em Informática 
            <br/> na Escola Técnica de Brasília
          </TitleInEducation>
          <Text>
            São mais de 1400 horas de carga horária abordando temas teóricos e práticos relativos a 
            conteúdos como: Lógica de programação, Modelagem de dados, Arquitetura de computadores, 
            Redes, Sistemas operacionais, HTML, CSS, PHP e JSP.
          </Text>
        </Education>
        <Education>
          <TitleInEducation>Curso de Web Full Stack 
            <br/> na Labenu
          </TitleInEducation>
          <hr/>
          <Text>
            São mais de 1000 horas de programação que faz com que os alunos sejam profissionais 
            completos tanto no Back-End quanto no Front End. Exemplos do que é aprendido: SQL, Javascript
            , HTML, CSS, Git, Amazon Web Services, Node.js, React.js, Github, Typescript, Unit Testing
            , Firebase e Jest.
          </Text>
        </Education>
        <Education>
          <TitleInEducation>Bootcamp Full Stack Developer
            <br/> na Digital Innovation One
          </TitleInEducation>
          <Text>
            São 120 horas de conteúdo, nesse Bootcamp são abordadas tecnologias como: ES6, API´s, 
            Angular 8, PostgreSQL, Java, SpringBoot, dentre outras.
          </Text>
        </Education>
      </EducationContainer>
    </AcquirementsContainer>
  )
}

export default AcquirementsPage