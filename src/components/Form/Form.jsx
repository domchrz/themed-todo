import { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { Input, Label, StyledForm } from './styled';

export default function Form({ dispatch }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      dispatch({ type: 'ADD_TODO', payload: value.trim() });
    }
    setValue('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        Add Task:
        <Input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </Label>
      <IconButton type="accent">
        add
      </IconButton>
    </StyledForm>
  );
}
