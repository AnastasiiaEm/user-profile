import { styled } from 'styled-components';

const PostStyled = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  max-width: 374px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.xxl}) {
    max-width: 350px;
  }
`

export const PostCard = ({ children }) => {
  return (
    <PostStyled>
      {children}
    </PostStyled>
  )
};