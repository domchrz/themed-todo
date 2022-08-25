import styled, { css } from 'styled-components';

const shared = css`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Button = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.l};
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme, bgColor = null, type = 'secondary' }) =>
    bgColor || theme.colors[type]};
  padding: 1rem;
  cursor: pointer;
  ${shared}
`;

export const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-size: inherit;
  font-family: ${({ theme }) => theme.font.families.icon};
`;
