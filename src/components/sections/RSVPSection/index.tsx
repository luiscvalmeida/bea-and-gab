import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import { Section, Container, TextCenter } from '../../common/Section';
import { RSVPForm } from './RSVPForm';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 30px;
`;

export function RSVPSection() {
  const { t } = useTranslation();

  return (
    <Section id="rsvp" $bgAlt>
      <Container>
        <TextCenter>
          <Title>{t('rsvp.title')}</Title>
          <p>
            <Trans i18nKey="rsvp.intro" />
          </p>
        </TextCenter>
        <RSVPForm />
      </Container>
    </Section>
  );
}
