import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Section, Container, TextCenter, MaxWidth600 } from '../common/Section';
import { ButtonLink } from '../common/Button';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  margin-top: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  h4 {
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '•';
      color: ${({ theme }) => theme.colors.main};
      position: absolute;
      left: 0;
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 40px;

  iframe {
    border: 0;
    width: 100%;
    height: 300px;
  }
`;

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/5t37EwW8zCQLJxFV6';
const EMBED_URL =
  'https://maps.google.com/maps?q=Quinta+de+Oleiros,Favoes&t=&z=15&ie=UTF8&iwloc=&output=embed';

const transportNotes = [
  'transport.note1',
  'transport.note2',
  'transport.note3',
  'transport.note4',
  'transport.note5',
];

export function TransportSection() {
  const { t } = useTranslation();

  return (
    <Section id="transport">
      <Container>
        <TextCenter>
          <Title>{t('transport.title')}</Title>
        </TextCenter>
        <TextCenter>
          <MaxWidth600>
            <p>{t('transport.intro')}</p>
            <p>{t('transport.early')}</p>
          </MaxWidth600>
        </TextCenter>
        <InfoBox>
          <h4>{t('transport.importantTitle')}</h4>
          <ul>
            {transportNotes.map((noteKey) => (
              <li key={noteKey}>{t(noteKey)}</li>
            ))}
          </ul>
        </InfoBox>
        <MapContainer>
          <iframe
            src={EMBED_URL}
            loading="lazy"
            allowFullScreen
            title="Venue Location"
          />
        </MapContainer>
        <TextCenter>
          <ButtonLink
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('main.gmapsBtn')}
          </ButtonLink>
        </TextCenter>
      </Container>
    </Section>
  );
}
