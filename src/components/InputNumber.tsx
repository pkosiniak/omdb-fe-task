import { FormControl, TextField } from '@mui/material';
import { ChangeEventHandler, FC, useCallback } from 'react';

type Props = {
  label: string;
  min: number;
  max: number;
  defaultValue?: number;
  onChange: (value: number) => void;
};

export const InputNumber: FC<Props> = ({ label, min, max, defaultValue, onChange }) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>>(
    event => {
      onChange(parseInt(event.target.value));
    },
    [onChange]
  );

  return (
    <FormControl>
      <TextField
        onChange={handleChange}
        size='small'
        type='number'
        label={label}
        InputProps={{ inputProps: { min, max } }}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
