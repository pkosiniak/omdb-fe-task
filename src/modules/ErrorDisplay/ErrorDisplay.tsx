import { Typography, css, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { red } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { FlexBox, BackButton } from '@/components';

const Wrapper = styled(FlexBox)(
  ({ theme }) => css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${theme.spacing(8)};
    padding-bottom: ${theme.spacing(8)};
  `
);

type Props = PropsWithChildren<{ error?: string; showBackButton?: boolean }>;

export const ErrorDisplay: FC<Props> = ({ error, children, showBackButton }) => {
  const { t } = useTranslation();

  return error ? (
    <Wrapper>
      <Typography variant='h3' color={red[800]}>
        {t('errorOccurred')}
      </Typography>

      <Typography variant='caption' color={red[800]}>
        {error}
      </Typography>

      {showBackButton && <BackButton />}
    </Wrapper>
  ) : (
    <>{children}</>
  );
};
