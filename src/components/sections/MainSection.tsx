import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import { Section, Container, TextCenter } from '../common/Section';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 0;
`;

const HeroImageContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: -20px;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 250px;
  }
`;

const IntroText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const CeremonyInfo = styled.div`
  margin-top: 30px;

  img {
    margin: -50px 0 -70px 0;
    width: 650px;
    max-width: 100%;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin: -40px 0 -60px 0;
    }
  }
`;

const Location = styled.div`
  margin-top: 30px;
`;

const VenueName = styled.p`
  margin-bottom: 0;
`;

const MAIN_IMAGE_URL =
  'https://res.cloudinary.com/douriists/image/upload/w_800,f_auto,q_auto/main_uocu12.png';

const TIMELINE_URLS: Record<string, string> = {
  en: 'https://res.cloudinary.com/douriists/image/upload/w_800,f_auto,q_auto/timeline_en_viqsop.png',
  fr: 'https://res.cloudinary.com/douriists/image/upload/w_800,f_auto,q_auto/timeline_fr_xcnosb.png',
  pt: 'https://res.cloudinary.com/douriists/image/upload/w_800,f_auto,q_auto/timeline_pt_i2ajau.png',
};

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/5t37EwW8zCQLJxFV6';

export function MainSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const timelineUrl = TIMELINE_URLS[currentLang] || TIMELINE_URLS.en;

  return (
    <Section id="main" $isMain>
      <Container>
        <TextCenter>
          <Title>{t('main.title')}</Title>
          <HeroImageContainer>
            <HeroImage src={MAIN_IMAGE_URL} alt="Beatriz and Gabriel" />
          </HeroImageContainer>
          <IntroText>
            <Trans i18nKey="main.intro" />
          </IntroText>
          <CeremonyInfo>
            <img src={timelineUrl} alt="Wedding Timeline" />
          </CeremonyInfo>
          <Location>
            <VenueName>
              <strong>Quinta de Oleiros</strong>
            </VenueName>
            <p className="address">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Av. Nova da Igreja 68, 4625-068 Favões, Portugal
              </a>
            </p>
          </Location>
        </TextCenter>
      </Container>
    </Section>
  );
}
