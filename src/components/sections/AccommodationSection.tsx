import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Section, Container, TextCenter, MaxWidth600 } from '../common/Section';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 400;
  margin-bottom: 30px;
`;

const AccomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AccomColumn = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
`;

const AccomItem = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.main};

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    margin-top: 10px;
  }

  li {
    margin-bottom: 2px;
    padding-left: 15px;
    position: relative;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.4;

    &::before {
      content: '•';
      color: ${({ theme }) => theme.colors.main};
      position: absolute;
      left: 0;
    }
  }
`;

const BookingLink = styled.a`
  font-size: 0.8rem;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.main};
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 10px;
  vertical-align: middle;
`;

const Note = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textLight};
`;

interface Accommodation {
  titleKey: string;
  url: string;
  linkText: string;
  details: string[];
  note?: string;
}

const housesData: Accommodation[] = [
  {
    titleKey: 'accom.casaDaEiraTitle',
    url: 'https://www.booking.com/hotel/pt/casa-da-eira-marco-de-canavezes.fr.html',
    linkText: 'Booking',
    details: [
      'accom.casaDaEiraBedrooms',
      'accom.casaDaEiraDistance',
      'accom.casaDaEiraBreakfast',
    ],
  },
  {
    titleKey: 'accom.bemViverTitle',
    url: 'https://www.booking.com/hotel/pt/bem-viver-country-house.fr.html',
    linkText: 'Booking',
    details: ['accom.bemViverBedrooms', 'accom.bemViverDistance'],
  },
  {
    titleKey: 'accom.miragemTitle',
    url: 'https://www.booking.com/hotel/pt/miragem-do-douro.fr.html',
    linkText: 'Booking',
    details: ['accom.miragemDistance', 'accom.miragemView'],
  },
  {
    titleKey: 'accom.stoneHouseTitle',
    url: 'https://www.booking.com/hotel/pt/stone-house-entre-os-rios.fr.html',
    linkText: 'Booking',
    details: [
      'accom.stoneHouseBedrooms',
      'accom.stoneHouseView',
      'accom.stoneHouseDistance',
    ],
  },
  {
    titleKey: 'accom.cancelaVelhaTitle',
    url: 'https://www.booking.com/hotel/pt/cancela-velha-guest-house.fr.html',
    linkText: 'Booking',
    details: [
      'accom.cancelaVelhaBedrooms',
      'accom.cancelaVelhaLocation',
      'accom.cancelaVelhaDistance',
    ],
  },
];

const hotelsData: Accommodation[] = [
  {
    titleKey: 'accom.canhotosTitle',
    url: 'https://www.booking.com/hotel/pt/casa-da-eira-sao-lourenco-do-douro.fr.html',
    linkText: 'Booking',
    details: [
      'accom.canhotosDescription',
      'accom.canhotosView',
      'accom.canhotosDistance',
    ],
  },
  {
    titleKey: 'accom.dajasTitle',
    url: 'https://www.booking.com/hotel/pt/dajas-douro-valley-suites.fr.html',
    linkText: 'Booking',
    details: [
      'accom.dajasBrideGroom',
      'accom.dajasView',
      'accom.dajasBreakfast',
      'accom.dajasTransport',
      'accom.dajasDistance',
    ],
    note: 'accom.dajasNote',
  },
  {
    titleKey: 'accom.hostWiseTitle',
    url: 'https://www.airbnb.ca/rooms/1198529379160321603',
    linkText: 'Airbnb',
    details: [
      'accom.hostWiseDescription',
      'accom.hostWiseView',
      'accom.hostWiseDistance',
    ],
  },
];

function AccommodationCard({ item }: { item: Accommodation }) {
  const { t } = useTranslation();

  return (
    <AccomItem>
      <h4>
        {t(item.titleKey)}{' '}
        <BookingLink href={item.url} target="_blank" rel="noopener noreferrer">
          {item.linkText}
        </BookingLink>
      </h4>
      <ul>
        {item.details.map((detailKey) => (
          <li key={detailKey}>{t(detailKey)}</li>
        ))}
      </ul>
      {item.note && <Note>{t(item.note)}</Note>}
    </AccomItem>
  );
}

export function AccommodationSection() {
  const { t } = useTranslation();

  return (
    <Section id="accommodation" $bgAlt>
      <Container>
        <TextCenter>
          <Title>{t('accom.title')}</Title>
        </TextCenter>
        <TextCenter>
          <MaxWidth600>
            <p>{t('accom.intro')}</p>
            <p>{t('accom.help')}</p>
          </MaxWidth600>
        </TextCenter>
        <AccomGrid>
          <AccomColumn>
            <h3>{t('accom.housesTitle')}</h3>
            {housesData.map((item) => (
              <AccommodationCard key={item.titleKey} item={item} />
            ))}
          </AccomColumn>
          <AccomColumn>
            <h3>{t('accom.hotelsTitle')}</h3>
            {hotelsData.map((item) => (
              <AccommodationCard key={item.titleKey} item={item} />
            ))}
          </AccomColumn>
        </AccomGrid>
      </Container>
    </Section>
  );
}
