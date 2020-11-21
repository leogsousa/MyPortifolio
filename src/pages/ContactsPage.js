import React from 'react'
import styled from 'styled-components'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'

const ContactsContainer = styled.div`
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
const MediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`
const RoundedBorder = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgcolor};
  width: 50px;
  height: 50px;
  margin: 20px 25px 15px 0;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
  :hover{
    transform: translate(0, -10px);
  }
  @media only screen and (max-width: 375px) {
    margin: 20px 12px 15px 0;
  }
`
const Text = styled.h3`
  width: 50%;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`

function ContactsPage() {

  return (
    <ContactsContainer>
      <Text>
        <h3>Ei! Bora conversar?! 💬</h3><br/>
        Me mande uma menssagem nas minhas redes e acompanhe nas mídias o meu progresso como Desenvolvedor.<br/><br/>
        &nbsp;📍 : Brasília - Distrito Federal <br/>
        📧:<strong> leonardogomessousa5@gmail.com </strong>
        <br/>
        📞:<strong> (61) 99546-6161 </strong>

      </Text>
      <MediaIconsContainer>
        <RoundedBorder bgcolor="rgb(36,41,46)" href="https://github.com/leogsousa" target="_blanck">
          <img src={github}/>
        </RoundedBorder>
        <RoundedBorder bgcolor="#C13584" href="https://www.instagram.com/leo._.gomes/" target="_blanck">
          <img src={instagram}/>
        </RoundedBorder>
        <RoundedBorder bgcolor="#2867B2" href="https://www.linkedin.com/in/leo-gomes-a2502/" target="_blanck">
          <img src={linkedin}/>
        </RoundedBorder>
        <RoundedBorder bgcolor="#4AC959" href="https://api.whatsapp.com/send?phone=5561995466161" target="_blanck">
          <img src={whatsapp} />
        </RoundedBorder>
      </MediaIconsContainer>
    </ContactsContainer>
  )
}

export default ContactsPage