import { styled } from 'styled-components';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';
import { Button } from '../../styles/button';

const DropdownMenuContainer = styled.div`
  position: relative;
`
const DropdownMenuStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(21.746253967285156px);
  opacity: 0.94;
  border-radius: 8px;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  min-width: 176px;
  position: absolute;
  top: 36px;
  z-index: 2;

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    padding-block: 24px;

    li {
      display: flex;
      gap: 16px;
      height: 38px;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        cursor: pointer;
      }
    }
  }
`

export const DropdownMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenuHandler = () => {
    setMenuVisible(prev => !prev);
  };

  return (
    <DropdownMenuContainer>
      <Button type='button' onClick={showMenuHandler}>
        <Icon $width="24px" $height="16px" $src="./assets/icons/dots-menu.svg"/>
      </Button>
      <DropdownMenuStyled $isVisible={isMenuVisible}>
        <ul>
          <li>
            <Icon $width="20px" $height="20px" $src="./assets/icons/report.svg"/>
            Report User
          </li>
          <li>
            <Icon $width="20px" $height="20px" $src="./assets/icons/block.svg"/>
            Block User
          </li>
        </ul>
      </DropdownMenuStyled>
    </DropdownMenuContainer>
  )
};