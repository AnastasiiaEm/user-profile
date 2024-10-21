import { styled } from 'styled-components';

const NavStyled = styled.nav`
  & ul {
    padding: 0;
    display: flex;
    gap: 36px;
  }

  & li {
    list-style: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -19px;
      height: 4px;
      width: 100%;
      background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`
export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li><a href='#'>FEED</a></li>
        <li><a href='#'>EXPLORE</a></li>
        <li><a href='#'>DISCUSSIONS</a></li>
      </ul>
    </NavStyled>
  )
};
