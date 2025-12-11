import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Section, Container, TextCenter, MaxWidth600 } from '../common/Section';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 30px;
`;

export function DressCodeSection() {
  const { t } = useTranslation();

  return (
    <Section id="dresscode" $bgAlt>
      <Container>
        <TextCenter>
          <Title>{t('dresscode.title')}</Title>
          <MaxWidth600>
            <p>{t('dresscode.intro')}</p>
          </MaxWidth600>
        </TextCenter>
      </Container>
    </Section>
  );
}
