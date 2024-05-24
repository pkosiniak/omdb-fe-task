import { FC } from 'react';
import { styled } from '@mui/system';
import { FlexBox } from '@/components';
import { MovieList, Page, SearchBox } from '@/modules';

type Props = {};

const Container = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  align-items: center;
`;

export const MovieSearch: FC<Props> = ({}) => {
  return (
    <Page>
      <Container>
        <SearchBox />

        <MovieList />
      </Container>
    </Page>
  );
};
