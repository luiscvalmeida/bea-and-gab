import styled from 'styled-components';

interface SectionWrapperProps {
  $bgAlt?: boolean;
  $isMain?: boolean;
}

export const Section = styled.section<SectionWrapperProps>`
  padding: ${({ $isMain }) => ($isMain ? '140px 0 80px 0' : '80px 0')};
  background-color: ${({ theme, $bgAlt }) =>
    $bgAlt ? theme.colors.bgAlt : theme.colors.bg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 90px 0;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const MaxWidth600 = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleFont = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
`;
