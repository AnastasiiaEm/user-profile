import { styled } from 'styled-components';

const LayoutStyled = styled.div`
  height: 100%;
`
export const Layout = ({ children }) => {
  return (
    <LayoutStyled>    
      {children}
    </LayoutStyled>
  )
};