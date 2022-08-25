import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
