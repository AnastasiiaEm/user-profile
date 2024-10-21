import { styled } from 'styled-components';
import { User } from '../User/User';
import { Switcher } from '../Switcher/Switcher';
import { Feed } from '../Feed/Feed';

const MainStyled = styled.main`
  padding-inline: 135px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 1100px;
  padding-top: 72px;
  display: flex;
  gap: 47px;

  @media (max-width: ${props => props.theme.breakpoints.xxl}) {
    padding-inline: 100px;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding-inline: 34px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-inline: 16px;
  }
`

const MainFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`
const SwitcherContainer = styled.div`
  display: flex;
  gap: 30px;
`
const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const Main = () => {
  return (
    <MainStyled>
        <User />
        <MainFeed>
          <SwitcherContainer>
            <Label>Public</Label>
            <Switcher />
            <Label>Private</Label>
          </SwitcherContainer>
          <Feed />
        </MainFeed>
    </MainStyled>
  )
};