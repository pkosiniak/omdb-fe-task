import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieSearch } from './MovieSearch';
import { MovieDetails } from './MovieDetails';

type Props = {};

export const AppRouter: FC<Props> = ({}) => {
  return (
    <Routes>
      <Route path='/' element={<MovieSearch />} />
      <Route path='/:movieId' element={<MovieDetails />} />
    </Routes>
  );
};
