import styled, { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin-top: 30px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
    opacity: 1;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const ButtonLink = styled.a`
  ${buttonStyles}
`;
