import { useCallback, useMemo, useState } from 'react';
import { FormControl, MenuItem, Select as MuiSelect, SelectProps, SxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

const styles: SxProps = {
  minWidth: 110,
  '& span': {
    opacity: '1 !important',
    position: 'relative',
    top: -6,
    color: '#ffffffb3',
  },
};

const ALL = 'all';
export type All = typeof ALL;

export type Item<T extends number | string = string> = {
  value: T;
  label: string;
};

type Props<T extends number | string = string> = {
  items: Item<T>[];
  label: string;
  onChange: (value: T | All) => void;
};

export const Select = <T extends number | string = string>({ items, label, onChange }: Props<T>) => {
  const [select, setSelect] = useState<T | All>(ALL);
  const { t } = useTranslation();

  const menuItems = useMemo<Item<T | All>[]>(() => [{ label: t(ALL), value: ALL }, ...items], [items, t]);

  const handleChange = useCallback<Required<SelectProps<T | 'all'>>['onChange']>(
    event => {
      const value = event.target.value as T | 'all';
      setSelect(value);
      onChange(value);
    },
    [onChange]
  );

  return (
    <FormControl size='small'>
      <MuiSelect sx={styles} label={label} value={select} onChange={handleChange}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
