import { FC, useCallback, useEffect, useMemo } from 'react';
import { debounceTime, filter } from 'rxjs';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Autocomplete, InputNumber } from '@/components';
import { useSubject } from '@/utils/hooks';
import { movieListRequestAction } from '@/store/movieList';
import { MovieType } from '@/utils/omdbTypes';
import { All, Item, Select } from '@/components/Select';
import { FilterWrapper, Wrapper } from './components';

const DEBOUNCE_TIME = 1000;
const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;
const MAX_YEAR = CURRENT_YEAR;

type Props = {};


export const SearchBox: FC<Props> = ({}) => {
  const inputEvent$ = useSubject<string>();
  const movieTypeEvent$ = useSubject<MovieType | 'all'>();
  const yearEvent$ = useSubject<number>();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const subscription = inputEvent$.current
      .pipe(
        filter(value => value.length >= 3),
        debounceTime(DEBOUNCE_TIME)
      )
      .subscribe(value => {
        dispatch(movieListRequestAction({ search: value }));
      });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = yearEvent$.current
      .pipe(
        filter(value => value >= MIN_YEAR && value <= MAX_YEAR),
        debounceTime(DEBOUNCE_TIME)
      )
      .subscribe(value => {
        dispatch(movieListRequestAction({ year: value }));
      });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = movieTypeEvent$.current.pipe().subscribe(value => {
      const type = value === 'all' ? undefined : value;
      dispatch(movieListRequestAction({ type }));
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleInputChange = useCallback((value: string) => {
    inputEvent$.current.next(value);
  }, []);

  const movieTypes = useMemo<Item<MovieType>[]>(
    () => Object.values(MovieType).map(value => ({ value, label: t(value) })),
    []
  );

  const handleSelectChange = useCallback((value: MovieType | All) => {
    movieTypeEvent$.current.next(value);
  }, []);

  const handleYearChange = useCallback((value: number) => {
    yearEvent$.current.next(value);
  }, []);

  return (
    <Wrapper>
      <Autocomplete onChange={handleInputChange} />

      <FilterWrapper>
        <Select label={t('movieType')} items={movieTypes} onChange={handleSelectChange} />

        <InputNumber label={t('year')} min={1900} max={MAX_YEAR} onChange={handleYearChange} />
      </FilterWrapper>
    </Wrapper>
  );
};
