import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'
import IconesHeader from '../IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    background-color: #fff;
    justify-content: center;
  
`

function Header(){
    return(
        <HeaderContainer>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header