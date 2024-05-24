import { FC, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';
import { movieListRequestAction, movieListSelector } from '@/store/movieList';
import { useSubject } from '@/utils/hooks';
import { MovieCard } from '../MovieCard';
import { Loader } from '../Loader';
import { CardList, Wrapper } from './components';

type Props = {};

export const MovieList: FC<Props> = ({}) => {
  const movieList = useSelector(movieListSelector.movieList);
  const paginationCount = useSelector(movieListSelector.movieListTotalResults);
  const isLoading = useSelector(movieListSelector.movieListStatus);
  const dispatch = useDispatch();
  const pageChangeEvent$ = useSubject<number>();

  useEffect(() => {
    const subscription = pageChangeEvent$.current.subscribe(value => {
      dispatch(movieListRequestAction({ page: value }));
    });

    return () => subscription.unsubscribe();
  }, []);

  const count = useMemo(() => (paginationCount ? Math.ceil(+paginationCount / 10) : 0), [paginationCount]);

  const handlePageChange = useCallback<Required<UsePaginationProps>['onChange']>((_, page) => {
    pageChangeEvent$.current.next(page);
  }, []);

  return (
    <Wrapper>
      <Loader isLoading={isLoading} />
      <CardList>{movieList ? movieList.map((movie, index) => <MovieCard {...movie} key={index} />) : null}</CardList>
      {count ? <Pagination count={count} onChange={handlePageChange} /> : null}
    </Wrapper>
  );
};
