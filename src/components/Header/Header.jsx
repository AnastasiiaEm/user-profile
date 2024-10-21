import { styled } from 'styled-components';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Profile } from '../Profile/Profile';

const HeaderStyled = styled.header`
  padding-inline: 135px;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: 112px;
  box-sizing: border-box;
  padding-block: 24px;
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.06);

  @media (max-width: ${props => props.theme.breakpoints.xxl}) {
    padding-inline: 100px;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding-inline: 34px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-inline: 16px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const AddButton = styled.button`
  background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
  border: none;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  transform: translateY(88%);
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;


  & span {
    background-image: url("./assets/icons/plus.svg");
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(88%) scale(1.05);
    cursor: pointer;
  }
`

export const Header = () => {
  return (
    <HeaderStyled>
      <InnerContainer>
        <div>
          <Logo />
          <Nav />
        </div>
        <FlexContainer>
          <Profile />
          <AddButton type='button'><span></span></AddButton>
        </FlexContainer>
      </InnerContainer>
    </HeaderStyled>
  )
};