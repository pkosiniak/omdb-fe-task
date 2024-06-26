import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { movieDetailsAction, movieDetailsSelector } from '@/store/movieDetails';
import { Awards, Description, Details, Loader, Page, Ratings, Score, Title, ErrorDisplay } from '@/modules';
import { TitleContainer, Article, Wrapper } from './components';

type Props = {};

const StyledDescription = styled(Description)`
  flex-basis: calc(100% - 350px);
  min-width: 280px;
`;

export const MovieDetails: FC<Props> = ({}) => {
  const movieDetails = useSelector(movieDetailsSelector.movieDetails);
  const isLoading = useSelector(movieDetailsSelector.movieDetailsStatus);
  const errorMessage = useSelector(movieDetailsSelector.movieDetailsError);
  const dispatch = useDispatch();

  const { movieId } = useParams();

  useEffect(() => {
    dispatch(movieDetailsAction.request({ id: movieId }));
  }, [movieId]);

  return (
    <Page>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <ErrorDisplay error={errorMessage} showBackButton>
          <Article component={'article'}>
            <TitleContainer>
              <Title {...movieDetails} />

              <Score {...movieDetails} />
            </TitleContainer>

            <Wrapper>
              {movieDetails && (
                <img src={movieDetails.Poster} height={450} width={300} style={{ objectFit: 'cover' }} />
              )}

              <StyledDescription {...movieDetails} />
            </Wrapper>

            <Awards {...movieDetails} />

            <Ratings {...movieDetails} />

            <Details {...movieDetails} />
          </Article>
        </ErrorDisplay>
      )}
    </Page>
  );
};
