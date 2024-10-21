import { styled } from 'styled-components';

const StyledLogo = styled.img`
  width: 50px;
  height: 23px;
`

export const Logo = () => {
  return (
    <StyledLogo src="./assets/logo.svg"  alt="Synth Logo" />
  );
};