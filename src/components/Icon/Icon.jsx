import { styled } from 'styled-components';

const SpanStyled = styled.span`
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  background-image: url(${({$src}) => $src});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`
export const Icon = ({ $width, $height, $src }) => {
  return (
    <SpanStyled $width={$width} $height={$height} $src={$src} />
  )
};