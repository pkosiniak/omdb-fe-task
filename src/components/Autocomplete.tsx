import { FC, useCallback } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField,
  styled,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDerivedState } from '@/utils/hooks';
import { AutocompleteOption } from '@/utils/types';

const StyledAutocomplete = styled(MuiAutocomplete)(({ theme: { breakpoints } }) => ({
  minWidth: 250,
  maxWidth: 500,
  [breakpoints.up('sm')]: { minWidth: 400 },
}));

export type AutocompleteProps = MuiAutocompleteProps<AutocompleteOption, undefined, undefined, undefined>;

type Props = {
  onChange: (value: string) => void;
  initValue?: string;
  options: AutocompleteOption[];
};

export const Autocomplete: FC<Props> = ({ initValue, onChange, options }) => {
  const { t } = useTranslation();

  const [value, setValue] = useDerivedState(initValue);

  const handleInputChange = useCallback<Required<AutocompleteProps>['onInputChange']>(
    (_, next) => {
      setValue(next);
      onChange(next);
    },
    [onChange]
  );

  return (
    <StyledAutocomplete
      disablePortal
      value={value ?? ''}
      options={options}
      onInputChange={handleInputChange}
      renderInput={params => <TextField {...params} label={t('search')} />}
      isOptionEqualToValue={() => true} // hack to remove console.warn
    />
  );
};
