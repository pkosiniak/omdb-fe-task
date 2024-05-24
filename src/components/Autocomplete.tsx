import { FC, useCallback } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField,
  styled,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export type AutocompleteOption = {
  value: string;
  label: string;
};

export type AutocompleteProps = MuiAutocompleteProps<AutocompleteOption, undefined, undefined, undefined>;

type Props = {
  onChange: (value: string) => void;
};

const StyledAutocomplete = styled(MuiAutocomplete)(({ theme: { breakpoints } }) => ({
  minWidth: 250,
  maxWidth: 500,
  [breakpoints.up('sm')]: { minWidth: 400 },
}));

export const Autocomplete: FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();

  const handleInputChange = useCallback<Required<AutocompleteProps>['onInputChange']>(
    (_, value) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <StyledAutocomplete
      disablePortal
      options={[]} // TODO: make options from searched list or change component
      onInputChange={handleInputChange}
      renderInput={params => <TextField {...params} label={t('search')} />}
    />
  );
};
