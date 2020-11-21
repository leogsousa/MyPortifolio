import React, { useState } from 'react'
import styled from 'styled-components'
import {data} from '../data'

const ProjectsContainer = styled.div`
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
const ProjectPhoto = styled.img`
  width: 250px;
  height: 250px;
  border: 3px solid #0062cc99;
  border-radius: 2px; 
  @media only screen and (max-width: 690px) {
    grid-row: 1/2;
    justify-self: center;
  }
`
const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 250px;
  border-radius: 2px; 
  transition: 0.4s;
  margin: 5px;
  padding: 16px;
  box-shadow: 0 0 2px 0 #69696977;
  @media only screen and (max-width: 925px) {
    width: 85%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 690px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 70%;
  }
  @media only screen and (max-width: 375px) {
    padding-top: 0;
  }
`
const ButtonsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.h3`
  width: 70%;
  font-weight: 300;
  text-align: ${props => props.align};
  margin: ${props => props.margin};
  @media only screen and (max-width: 690px) {
    width: 100%;
    margin: 15px 0 0 0;
    text-align: start;
  }
`
const ProjectName = styled.h3`
  color: #0062cc;
  font-weight: 300;
`
const RepoButton = styled.button`
  background-color: #0062cc;
  margin: ${props => props.margin};
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
`
const MoreMinusButton = styled.button`
  background-color: #FFF;
  margin: 20px 20px 40px 20px;
  padding: 5px 10px ;
  border-radius: 16px;
  cursor: pointer;
  color: #0062cc;
  box-shadow: 0 0 3px 0 #696969;
  transition: 0.4s;
  :hover{
    color: #FFF;
    box-shadow: none;
    background-color: #0062cc;
  }
`
const DisabledButton = styled.button`
  background-color: #808080;
  margin: 20px 20px 40px 20px;
  padding: 5px 10px ;
  border-radius: 16px;
  color: #000;
`
const AddMargin = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function ProjectsPage() {

  const [projectCount, setProjectCount] = useState(2) 

  const myProjects = data.map((project, index) => {
    if(index < projectCount){
      if(index % 2 === 0){
        return(
          <Project> 
            <ProjectPhoto src ={project.image}/>
            <Text align="start" margin="0 0 0 20px">
              <ProjectName>{project.name}</ProjectName>
              <h3>{project.stack}</h3>
              <span>{project.description}</span>
              <div>
                {project.linkFront ? <RepoButton margin="20px 10px 0 0">Front-End</RepoButton> : ""}
                {project.linkBack ? <RepoButton margin="20px 10px 0 0">Back-End</RepoButton> : ""}
              </div>
            </Text>
          </Project>  
        )
      }else{
        return(
          <Project> 
            <Text align="end" margin="0 20px 0 0">
              <ProjectName>{project.name}</ProjectName>
              <h3>{project.stack}</h3>
              <span>{project.description}</span>
              <div>
                {project.linkFront ? <RepoButton margin="20px 0 0 10px">Front-End</RepoButton> : ""}
                {project.linkBack ? <RepoButton margin="20px 0 0 10px">Back-End</RepoButton> : ""}
              </div>
            </Text>
            <ProjectPhoto src ={project.image}/>
          </Project>  
        )
      }
    }else{
      return ""
    }
  })

  const buttons = () => {
    if(projectCount <= 2){
      return(
        <ButtonsContainer>
          <MoreMinusButton onClick={moreClick}>Mostrar mais</MoreMinusButton>
          <DisabledButton disabled>Mostrar menos</DisabledButton>
        </ButtonsContainer>
      )
    }else if(projectCount > 2 && projectCount < data.length) {
      return(
        <ButtonsContainer>
          <MoreMinusButton onClick={moreClick}>Mostrar mais</MoreMinusButton>
          <MoreMinusButton onClick={minusClick}>Mostrar menos</MoreMinusButton>
        </ButtonsContainer>
      )
    }else{
      return(
        <ButtonsContainer>
          <DisabledButton disabled>Mostrar mais</DisabledButton>
          <MoreMinusButton onClick={minusClick}>Mostrar menos</MoreMinusButton>
        </ButtonsContainer>
      )
    }
  }

  const moreClick = () => {
    setProjectCount(projectCount + 2)
  }
  const minusClick = () => {
    setProjectCount(projectCount - 2)
  }

  return (
    <ProjectsContainer>
      <AddMargin>
        {myProjects}
        {buttons()}
      </AddMargin>
    </ProjectsContainer>
  )
}

export default ProjectsPage