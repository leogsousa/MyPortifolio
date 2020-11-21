import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const FooterContainer = styled.div`
  height: 10vh;
  background-color: #000;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  box-shadow: 0 0 2px 0 #69696977;
  > * {
    margin: 0 20px;
  }
`
const ThisSite = styled.div`
  cursor: pointer;
  font-size: 20px;
  background-color: #0062cc66;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.h3`
  color: #0062cc;
  display: inline;
`

function Footer() {
  const history = useHistory()

  const goToThisSite = () => {
    history.push("/thisSite")
  }

  return (
    <FooterContainer>
      <div>© 2020 <Line>--</Line> Leonardo Gomes</div>
      <ThisSite onClick={goToThisSite}>👨🏾‍💻</ThisSite>
    </FooterContainer>
  )
}

export default Footer