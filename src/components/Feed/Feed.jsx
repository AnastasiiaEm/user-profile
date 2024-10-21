import { styled } from 'styled-components';
import { PostCard } from '../PostCard/PostCard';
import { Icon } from '../Icon/Icon';
import { Button } from '../../styles/button';

const FeedStyled = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.xxl}) {
    gap: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    justify-content: center;
  }
`
const PostTitle = styled.h3`
  font-size: 36px;
  font-weight: normal;
  line-height: 43.88px;
  margin-bottom: 46px;
`
const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostAuthor = styled.div`
  font-size: 14px;
  line-height: 16.41px;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Dot = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.bombay};
  border-radius: 50%;
`
const ShareButton = styled(Button)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.buttonColor};

  &:hover {
    font-weight: 600;
  }
`
const Stats = styled.div`
  display: flex;
  gap: 16px;
`

const Stat = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const SharedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 10px;
`

const Highlighted = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
`
export const Feed = () => {
  return (
    <FeedStyled>
      <PostCard>
        <PostTitle>New air routes that promise cheap flights in</PostTitle>
        <PostFooter>
          <FlexContainer>
            <Dot />
            <PostAuthor>Gregory Watkins</PostAuthor>
          </FlexContainer>
          <ShareButton type='button'>Share</ShareButton>
        </PostFooter>
      </PostCard>

      <PostCard>
        <PostTitle>New air routes that promise cheap flights in</PostTitle>
        <PostFooter>
          <FlexContainer>
            <Dot /> 
            <PostAuthor>Gregory Watkins</PostAuthor>
          </FlexContainer>
          <ShareButton type='button'>Share</ShareButton>
        </PostFooter>
      </PostCard>

      <PostCard>
        <SharedInfo>
          <span>Shared to <Highlighted>#discussionaboutanimgttdds…</Highlighted></span>
        </SharedInfo>
        <PostTitle>New air routes that promise cheap flights in</PostTitle>
        <PostFooter>
          <FlexContainer>
            <Dot />
            <PostAuthor>Gregory Watkins</PostAuthor>
          </FlexContainer>
          <Stats>
            <Stat>
              <Icon $width="16px" $height="16px" $src="./assets/icons/play.svg"/>
              <span>88</span>
            </Stat>
            <Stat>
              <Icon $width="16px" $height="16px" $src="./assets/icons/like.svg"/>
              <span>24</span>
            </Stat>
          </Stats>
        </PostFooter>
      </PostCard>

      <PostCard>
        <SharedInfo>
          <Icon $width="18.33px" $height="18.33px" $src="./assets/icons/link.svg"/>
          <span>Shared via weblink</span>
        </SharedInfo>
        <PostTitle>New air routes that promise cheap flights in</PostTitle>
        <PostFooter>
          <FlexContainer>
            <Dot />
            <PostAuthor>Gregory Watkins</PostAuthor>
          </FlexContainer>
          <Stats>
            <Stat>
              <Icon $width="16px" $height="16px" $src="./assets/icons/play.svg"/>
              <span>88</span>
            </Stat>
            <Stat>
              <Icon $width="16px" $height="16px" $src="./assets/icons/like.svg"/>
              <span>24</span>
            </Stat>
          </Stats>
        </PostFooter>
      </PostCard>
    </FeedStyled>
  )
};