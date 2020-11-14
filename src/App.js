import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import github from './imgs/github.svg'
import instagram from './imgs/instagram.svg'
import linkedin from './imgs/linkedin.svg'
import whatsapp from './imgs/whatsapp.svg'
// import data from './data.json'

let data = require('./data.json');

const PageContainer = styled.div`
  background-color: #FFF;
`
const Menu = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgcolor};
  color: #FFF;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  align-items: center; 
  transition: 1s;
  > * {
    margin: 0 40px;
    font-weight: 700;
    font-size: 18px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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
  display: flex;
  justify-content: center;
  align-items: center;
`
const MyKnowledge = styled.div`
  background-color: #263f8c;
  height: 418px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`
const Education = styled.div`
  height: 427px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const MyProjects = styled.div`
  background-color: #7b7fbf;
  height: 1284px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
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
const BigPhoto = styled.img`
  background-color: #FFF;
  width: 35%;
  height: 100%;
`
const SmallPhoto = styled.img`
  background-color: #FFF;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  margin: 0 30px;
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const Title = styled.h1`
  margin: 120px 0 20px 0;
  font-size: 21px;
  width: 80%; 
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
    color: #f26363;
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
  justify-content: space-between;
  margin: 0 28px;
  > * {
    margin: 10px;
  }
`
const BigTitle = styled.h1`
  margin: 0;
  font-size: 52px;
  color: ${props => props.color};
`
const MediumTitle = styled.h1`
  margin: 0;
  font-size: 42px;
`
const SmallTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 300;
  width: 100%;
  text-align: ${props => props.align};
`
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #FFF;
`
const SpecializationContent = styled.span`
  width: 30%;
  height: 60%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  text-align: start;
  margin: 0 16px;
`
const TextEducation = styled.span`
  width: 80%;
`
const TitleEducation = styled.div`
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  margin-top: 24px;
`
const TextAboutMe = styled.span`
  width: 40%;
  color: #263f8c;  
`
const CustonButton = styled.button`
  cursor: pointer; 
  background-color: ${props => props.bgcolor};
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 6px 12px; 
  color: #FFF;
  box-shadow: 1px 1px 1px 1px gray;
  margin: ${props => props.margin};
  font-weight: 500;
  font-size: 16px;
`
const MainTechnologies = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Bar = styled.span`
  font-weight: 900;
  color: #FFF;
`
const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`
const TextProject = styled.div`
  width: 40%;
  text-align: ${props => props.align};
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
  
  // addStyleMenu(menu)

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

  const myProjects = data.map((project, index) => {
    if(index <= 2){
      if(index % 2 === 0){
        return(
          <Project> 
            <SmallPhoto/>
            <TextProject align="start">
              <MediumTitle>{project.name}</MediumTitle>
              <SmallTitle>{project.stack}</SmallTitle>
              <span>{project.description}</span>
              <div>
                {project.linkFront ? <CustonButton margin="20px 10px 0 0" bgcolor="#263f8c">Front-End</CustonButton> : ""}
                {project.linkBack ? <CustonButton margin="20px 10px 0 0" bgcolor="#263f8c">Back-End</CustonButton> : ""}
              </div>
            </TextProject>
          </Project>  
        )
      } else {
        return(
          <Project> 
            <TextProject align="end">
              <MediumTitle>{project.name}</MediumTitle>
              <SmallTitle>{project.stack}</SmallTitle>
              <span>{project.description}</span>
              <div>
                {project.linkFront ? <CustonButton margin="20px 0 0 10px" bgcolor="#263f8c">Front-End</CustonButton> : ""}
                {project.linkBack ? <CustonButton margin="20px 0 0 10px" bgcolor="#263f8c">Back-End</CustonButton> : ""}
              </div>
            </TextProject>
            <SmallPhoto/>
          </Project>  
        )
      }
    } else {
      return ""
    }
  })

  return (
    <PageContainer>
      <Menu id="menu" bgcolor="rgba(255, 255, 255, 0.2)">
        <span><Link href="">Leonardo</Link> {/* {scroll}  */} </span> 
        <MenuItems>
          <Item onClick= {goToAboutMe}>Quem sou</Item>
          <Item onClick= {goToMyProjects}>Projetos</Item>
          <Item onClick= {goToMyContacts}>Contato</Item>
        </MenuItems>
      </Menu>
      <Presentation>
        <BigPhoto/>
        <WhoIAm>
          <TextPresentation>
            <BigTitle>Eu sou<br/>Leonardo Gomes</BigTitle>
            <SmallTitle align="start">Desenvolvedor Web Full Stack</SmallTitle>
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
        <TextAboutMe>
          <MediumTitle>Sobre mim</MediumTitle>
          <div>
            💻 Estudo programação desde 2017, já tive contato com as tecnologias: PHP, JSP, HTML, CSS e MySQL.
            Conheci o mundo da programação em um curso técnico que fiz, desde lá nunca mais parei de estudar.
            <br/>
            <br/>
            🧠 Atualmente sou estudante na Labenu, onde estou estudando para me tornar um Full Stack Web 
            Developer com as tecnologias: HTML, CSS, JavaScript, React.js, Jest, Node.js, Git, MySQL,
            TypeScript, AWS.
          </div>
          <MainTechnologies>
            <span><Bar>|</Bar> ReactJS</span>
            <span><Bar>|</Bar> NodeJS</span>
            <span><Bar>|</Bar> MySQL</span>
            <span><Bar>|</Bar> TypeScript</span>
          </MainTechnologies>
          <CustonButton margin="20px 0" bgcolor="#f26363">CV em PDF</CustonButton>
        </TextAboutMe>
        <SmallPhoto/>
      </AboutMe>
      <MyKnowledge>
        <SmallTitle align="center">Meus conhecimentos</SmallTitle>
        <SpecializationContent>
          <BigTitle color="#f26363">Frot-end</BigTitle>
          Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
          <br/>
          <br/>
          Criação de sites responsivos seguindo princípio de Mobile First.
        </SpecializationContent>
        <SpecializationContent>
          <BigTitle color="#f26363">Back-end</BigTitle>
          Aplicações utilizando NodeJS, Typescript e MySQL.
          <br/>
          <br/>
          Criação de API´s para comunicação com front-end seguindo princípio de Clean Code e padrão MVC. 
        </SpecializationContent>
      </MyKnowledge>
      <Education>
        <SquareEducation bgcolor="#f26363">
          <Title>Curso de Web Full Stack 
            <br/> na Labenu</Title>
          <TextEducation>
            São mais de 1000 horas de programação que faz com que os alunos sejam profissionais 
            completos tanto no Back-End quanto no Front End. Exemplos do que é aprendido: SQL, Javascript
            , HTML, CSS, Git, Amazon Web Services, Node.js, React.js, Github, Typescript, Unit Testing
            , Firebase e Jest.
          </TextEducation>
        </SquareEducation>
        <SquareEducation bgcolor="#e8ae7a">
          <TitleEducation>Educação</TitleEducation>
          <Title>Bootcamp Full Stack Developer
            <br/> na Digital Innovation One</Title>
          <TextEducation>
            São 120 horas de conteúdo, nesse Bootcamp são abordadas tecnologias como: ES6, API´s, 
            Angular 8, PostgreSQL, Java, SpringBoot, dentre outras.
          </TextEducation>
        </SquareEducation>
        <SquareEducation bgcolor="#85a9d9">
          <Title>Curso Técnico em Informática 
            <br/> na Escola Técnica de Brasília</Title>
          <TextEducation>
            São mais de 1400 horas de carga horária abordando temas teóricos e práticos relativos a 
            conteúdos como: Lógica de programação, Modelagem de dados, Arquitetura de computadores, 
            Redes, Sistemas operacionais, HTML, CSS, PHP e JSP.
          </TextEducation>
        </SquareEducation>
      </Education>
      <MyProjects>
        <SmallTitle align="center">Meus projetos</SmallTitle>
        {myProjects}
        <CustonButton margin="20px 0" bgcolor="#f26363">Ver mais projetos</CustonButton>
      </MyProjects>
      <MyContacts>
        <MediumTitle>Contrate-me!</MediumTitle>
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
