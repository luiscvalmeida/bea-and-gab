import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Section, Container, TextCenter, MaxWidth600 } from '../common/Section';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 30px;
`;

export function KidsSection() {
  const { t } = useTranslation();

  return (
    <Section id="kids" $bgAlt>
      <Container>
        <TextCenter>
          <Title>{t('kids.title')}</Title>
          <MaxWidth600>
            <p>{t('kids.intro')}</p>
            <p>{t('kids.note')}</p>
          </MaxWidth600>
        </TextCenter>
      </Container>
    </Section>
  );
}
