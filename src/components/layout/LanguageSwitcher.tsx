import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: auto;
    margin-right: 15px;
  }
`;

const LangButton = styled.button<{ $active: boolean }>`
  background: none;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.main : 'transparent')};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.main : theme.colors.textLight};
  padding: 2px 5px;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 8px;
    font-size: 0.9rem;
  }
`;

const languages = ['en', 'fr', 'pt'] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <SwitcherContainer>
      {languages.map((lang) => (
        <LangButton
          key={lang}
          $active={i18n.language === lang}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </LangButton>
      ))}
    </SwitcherContainer>
  );
}
