import { FC, PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '@/components';
import { Footer, Header, Main, PageContainer } from './components';

type Props = PropsWithChildren & {};

export const Page: FC<Props> = ({ children }) => {
  const { movieId } = useParams();

  return (
    <PageContainer>
      <Header>{movieId && <BackButton />}</Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </PageContainer>
  );
};
