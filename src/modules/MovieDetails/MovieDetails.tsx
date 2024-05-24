import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material';
import { movieDetailsSelector } from '@/store/movieDetails';
import { Title } from '../Title';
import { Score } from '../Score';
import { Description } from '../Description';
import { Awards } from '../Awards';
import { Ratings } from '../Ratings';
import { Details } from '../Details/Details';
import { TitleContainer, Article, Wrapper } from './components';

type Props = {};

const StyledDescription = styled(Description)`
  flex-basis: calc(100% - 350px);
  min-width: 280px;
`;

export const MovieDetails: FC<Props> = ({}) => {
  const movieDetails = useSelector(movieDetailsSelector.movieDetails);

  return (
    <Article component={'article'}>
      <TitleContainer>
        <Title {...movieDetails} />

        <Score {...movieDetails} />
      </TitleContainer>

      <Wrapper>
        {movieDetails && <img src={movieDetails.Poster} height={450} width={300} style={{ objectFit: 'cover' }} />}

        <StyledDescription {...movieDetails} />
      </Wrapper>

      <Awards {...movieDetails} />

      <Ratings {...movieDetails} />

      <Details {...movieDetails} />
    </Article>
  );
};
