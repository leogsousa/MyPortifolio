import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import github from './imgs/github.svg'
import instagram from './imgs/instagram.svg'
import linkedin from './imgs/linkedin.svg'
import whatsapp from './imgs/whatsapp.svg'


const PageContainer = styled.div`
  background-color: blue;
`
const Menu = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgcolor};
  color: #263f8c;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  align-items: center; 
  transition: 1s;
  > * {
    margin: 0 40px;
    font-weight: 700;
    font-size: 18px;
  }
`
const Presentation = styled.div`
  background-color: #f26363;
  height: 520px;
  display: flex;
`
const AboutMe = styled.div`
  background-color: #f2c49b;
  height: 438px;
`
const MyKnowledge = styled.div`
  background-color: #263f8c;
  height: 418px;
`
const Education = styled.div`
  height: 427px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const MyProjects = styled.div`
  background-color: #7b7fbf;
  height: 1284px;
`
const MyContacts = styled.div`
  background-color: #263f8c;
  height: 397px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; 
`
const Footer = styled.div`
  background-color: #85a9d9;
  height: 60px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  font-weight: 500;
`
const MyPhoto = styled.img`
  background-color: #FFF;
  width: 35%;
  height: 100%;
`
const WhoIAm = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SquareEducation = styled.div`
  background-color: ${props => props.bgcolor};
  height: 100%;
`
const Title = styled.h1`
  margin: 0;
`
const MenuItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: 400;
  font-size: 16px;
`
const Item = styled.span`
  cursor: pointer;
  transition: 0.6s;
  :hover{
    color: #FFF;
  }
`
const TextPresentation = styled.div`
  margin: auto;
`
const TextContacts = styled.div`
  width: 523px;
  text-align: center;
`
const NetsPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 28px;
  > * {
    margin: 10px;
  }
`
const NetsContacts = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin: 0 28px;
  > * {
    margin: 10px;
  }
`
const MyName = styled.h1`
  margin: 0;
  font-size: 52px;
`
const HireMe = styled.h1`
  margin: 0;
  font-size: 45px;
`
const H2 = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 300;
`
const Link = styled.a`
  cursor: pointer;
`

function App() {

  const [scroll, setScroll] = useState(0)

  // const menu = () => {    
  //   if (scroll >= 100) {
  //     return(
  //       <Menu id="menu" bgcolor="#FFF">
  //         <span>Leonardo {scroll}</span> 
  //         <MenuItems>
  //           <Item onClick= {goToAboutMe}>quem sou</Item>
  //           <Item onClick= {goToMyProjects}>projetos</Item>
  //           <Item onClick= {goToMyContacts}>contato</Item>
  //         </MenuItems>
  //       </Menu>
  //     )
  //   } else {
  //     return(
  //       <Menu id="menu" bgcolor="rgba(255, 255, 255, 0)">
  //         <span>Leonardo {scroll}</span> 
  //         <MenuItems>
  //           <Item onClick= {goToAboutMe}>quem sou</Item>
  //           <Item onClick= {goToMyProjects}>projetos</Item>
  //           <Item onClick= {goToMyContacts}>contato</Item>
  //         </MenuItems>
  //       </Menu>
  //     )
  //   }
  // };

  const goToAboutMe = () => {
    window.scroll(0, 0)
  }
  const goToMyProjects = () => {
    window.scroll(0, 1743)
  }
  const goToMyContacts = () => {
    window.scroll(0, 3023)
  }

  useEffect(() => {
    setScroll(document.documentElement.scrollTop)
  },[scroll]);

  const menu = document.getElementById('menu'); 

  const addStyleMenu = (menu) => {
    window.addEventListener('scroll', function () {
      console.log(menu)
      if (scroll > 500) menu.classList.add('menuFixo');
      else menu.classList.remove('menuFixo');
    });
  }
  
  addStyleMenu(menu)


  return (
    <PageContainer>
      <Menu id="menu" bgcolor="rgba(255, 255, 255, 0)">
        <span>Leonardo {scroll}</span> 
        <MenuItems>
          <Item onClick= {goToAboutMe}>quem sou</Item>
          <Item onClick= {goToMyProjects}>projetos</Item>
          <Item onClick= {goToMyContacts}>contato</Item>
        </MenuItems>
      </Menu>
      <Presentation>
        <MyPhoto />
        <WhoIAm>
          <TextPresentation>
            <MyName>Eu sou<br/>Leonardo Gomes</MyName>
            <H2>Desenvolvedor Web Full Stack</H2>
            <br/>
            <span>Apaixonado por tecnologia e programação</span>
          </TextPresentation>
          <NetsPresentation>
            <Link href="https://github.com/leogsousa" target="_blanck"><img src= {github}></img></Link>
            <Link href="https://www.instagram.com/leo._.gomes/" target="_blanck"><img src= {instagram}></img></Link>
            <Link href="https://www.linkedin.com/in/leo-gomes-a2502/" target="_blanck"><img src= {linkedin}></img></Link>
            <Link href="https://api.whatsapp.com/send?phone=5561995466161" target="_blanck"><img src= {whatsapp}></img></Link>
          </NetsPresentation>
        </WhoIAm>
      </Presentation>
      <AboutMe>
        <Title>Sobre mim</Title>
      </AboutMe>
      <MyKnowledge>
        <Title>Meus conhecimentos</Title>
        <h1>Frot-end</h1>
        <h1>Back-end</h1>
      </MyKnowledge>
      <Education>
        <SquareEducation bgcolor="#f26363">
          <Title>Texto</Title>
        </SquareEducation>
        <SquareEducation bgcolor="#e8ae7a">
          <Title>Texto</Title>
        </SquareEducation>
        <SquareEducation bgcolor="#85a9d9">
          <Title>Texto</Title>
        </SquareEducation>
      </Education>
      <MyProjects>
        <Title>Meus projetos</Title>
      </MyProjects>
      <MyContacts>
        <HireMe>Contrate-me!</HireMe>
        <TextContacts>
          Procuro oportunidade de trabalho onde eu possa aprender,
          me desenvolver e evoluir na minha carreia profissional.
          <br/><br/>
          E-mail para contato: leonardogomessousa5@gmail.com
          <br/>
          Celular: (61) 99546-6161
        </TextContacts>
        <NetsContacts>
          <Link href="https://github.com/leogsousa" target="_blanck"><img src= {github}></img></Link>
          <Link href="https://www.instagram.com/leo._.gomes/" target="_blanck"><img src= {instagram}></img></Link>
          <Link href="https://www.linkedin.com/in/leo-gomes-a2502/" target="_blanck"><img src= {linkedin}></img></Link>
          <Link href="https://api.whatsapp.com/send?phone=5561995466161" target="_blanck"><img src= {whatsapp}></img></Link>
        </NetsContacts>
      </MyContacts>
      <Footer>
        © 2020 - Leonardo Gomes
      </Footer>
    </PageContainer>
  );
}

export default App;
