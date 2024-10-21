import { useState } from 'react';
import { styled } from 'styled-components';

const SwitcherStyled = styled.div`
  label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  label input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.mandy : '#ccc')};
    transition: background-color 0.3s;
    border-radius: 24px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s;
    border-radius: 50%;
    transform: ${({ $isChecked }) => ($isChecked ? 'translateX(16px)' : 'translateX(0)')};
  }
`;

export const Switcher = () => {
  const [$isChecked, setIsChecked] = useState(true);

  const handleSwitchToggle = () => {
    setIsChecked(!$isChecked);
  };

  return (
    <SwitcherStyled $isChecked={$isChecked}>
      <label>
        <input 
          type="checkbox"
          checked={$isChecked} 
          onChange={handleSwitchToggle} 
          />
        <span></span>
      </label>
    </SwitcherStyled>
  )
};