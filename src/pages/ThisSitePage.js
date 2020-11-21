import React from 'react'
import styled from 'styled-components'

const ThisSiteContainer = styled.div`
  min-height: 70vh;
  background-color: #0A0A0E;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 690px) {
    min-height: 80vh;
  }
`
const Text = styled.h3`
  width: 50%;
  font-weight: 300;
  margin: 40px 0;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`
const Title = styled.h3`
  margin: 0 0 20px 0;
`
const Line = styled.h3`
  color: #0062cc;
  display: inline;
`

function ThisSitePage() {
  return (
    <ThisSiteContainer>
      <Text>
        <Title>Portfolio <Line> -- </Line> Leonardo Gomes</Title>

        👨🏾‍💻 Esse site é um SPA (single-page-aplication), foi desenvolvido usando React na estruturação,
        useState para gerenciar os estados, styled-components na estilização e animações, 
        react-router-dom para fazer as rotas de paginas e Jest nos testes unitários.<br/>
        Foram seguidas boas práticas de código e padrão de desenvolvimento.
      
        {/* 👨🏾‍💻 This site is a SPA (single-page-aplication), was made using React in the structuring, react-router-dom
        to make the page routes, styled-components in the styling and animations, Jest in unit tests.<br/>
        Good code practices and development standards were followed. */}
      </Text>
    </ThisSiteContainer>
  );
}

export default ThisSitePage;