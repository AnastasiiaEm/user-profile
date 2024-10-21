import { styled } from 'styled-components';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Button } from '../../styles/button';

const UserStyled = styled.div`
  max-width: 350px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 300px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`
const UserInfo = styled.div`
  display:flex;
  flex-direction: column;
`
const UserName= styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
`

const UserDetail = styled.span`
  margin-bottom: 16px;
  line-height: 20px;
`
const EditButton = styled(Button)`
  color: ${({ theme }) => theme.colors.buttonColor};
  text-decoration: underline;
  gap: 8px;
  line-height: 20px;

  & span {
    width: 20px;
    height: 20px;
    background-image: url('./assets/icons/edit.svg');
  }

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
const UserStats = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 24px;
`
const Stat = styled.div`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }
`

export const User = () => {
  return (
    <UserStyled>
      <FlexContainer>
        <img width="120px" height="120px" src='./assets/avatar.png' alt='avatar' />
        <UserInfo>
          <UserName>Benjamin Clementine</UserName>
          <UserDetail>@benclementine</UserDetail>
          <EditButton type="button">Edit Profile</EditButton>
        </UserInfo>
        <DropdownMenu />
      </FlexContainer>

      <UserStats>
        <Stat>
          <span>45</span>
          <span>synth</span>
        </Stat>
        <Stat>
          <span>110</span>
          <span>followers</span>
        </Stat>
        <Stat>
          <span>322</span>
          <span>following</span>
        </Stat>
      </UserStats>

      <p>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.</p>
    </UserStyled>
  )
};