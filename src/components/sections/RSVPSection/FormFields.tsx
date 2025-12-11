import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: white;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const RadioLabel = styled.label<{ $checked?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  border: 2px solid
    ${({ theme, $checked }) => ($checked ? theme.colors.main : '#ddd')};
  border-radius: 25px;
  transition: all 0.3s ease;
  background-color: ${({ $checked }) =>
    $checked ? 'rgba(63, 81, 11, 0.05)' : 'white'};

  &:hover {
    border-color: ${({ theme }) => theme.colors.main};
  }

  input {
    margin-right: 8px;
    accent-color: ${({ theme }) => theme.colors.main};
  }

  span {
    color: ${({ theme, $checked }) =>
      $checked ? theme.colors.main : 'inherit'};
    font-weight: ${({ $checked }) => ($checked ? 600 : 'normal')};
  }
`;

export const FormDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 10px;
  font-style: italic;
`;

export const ConditionalField = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FormMessage = styled.div<{ $type: 'success' | 'error' }>`
  padding: 15px 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  background-color: ${({ $type }) =>
    $type === 'success' ? 'rgba(63, 81, 11, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
  color: ${({ $type }) => ($type === 'success' ? '#3f510b' : '#dc3545')};
  border: 2px solid
    ${({ $type }) => ($type === 'success' ? '#3f510b' : '#dc3545')};
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
