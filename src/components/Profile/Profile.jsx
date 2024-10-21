import { styled } from 'styled-components';
import { Icon } from '../Icon/Icon';

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const FlexContaier = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`
const ProfileImg = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('./assets/profile-image.png');
  margin-right: 12px;
`

const Title = styled.span`
  color: ${({ theme }) => theme.colors.textColorGray};
`

export const Profile = () => {
  return (
    <StyledProfile>
      <Title>Arthur Wood</Title>
      <FlexContaier>
        <ProfileImg></ProfileImg>
        <Icon $width="16px" $height="16px" $src="./assets/icons/arrow-down.svg"/>
      </FlexContaier>
      
      <FlexContaier>
        <Icon $width="32px" $height="32px" $src="./assets/icons/notifications.svg"/>
        <Icon $width="32px" $height="32px" $src="./assets/icons/present.svg"/>
        <Icon $width="32px" $height="32px" $src="./assets/icons/medium.svg"/>
      </FlexContaier>
    </StyledProfile>
  );
};