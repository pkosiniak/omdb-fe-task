import { FC, PropsWithChildren } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import { BackButton, Footer, Header, Main, PageContainer } from './components';

type Props = PropsWithChildren & {};

export const Page: FC<Props> = ({ children }) => {
  const { movieId } = useParams();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Header>
        {movieId && (
          <Link to={'/'}>
            <BackButton variant='text' startIcon={<ArrowBackIcon />}>
              {t('back')}
            </BackButton>
          </Link>
        )}
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </PageContainer>
  );
};
