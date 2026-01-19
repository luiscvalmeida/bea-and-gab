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
  {
    titleKey: 'accom.natureStoneTitle',
    url: 'https://www.booking.com/hotel/pt/nature-stone-and-villas.fr.html?label=gen173bo-10CAsouwFCH2Nhc2EtZGEtZWlyYS1tYXJjby1kZS1jYW5hdmV6ZXNIDVgDaCeIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgKoAgG4ApyLsMsGwAIB0gIkMzVhY2Y5YWMtMjNkZC00MDYyLTkxNzYtMzAzM2JkNDQ5MDM12AIB4AIB&aid=304142&ucfs=1&checkin=2026-08-14&checkout=2026-08-16&dest_id=-2168697&dest_type=city&group_adults=2&no_rooms=1&group_children=1&age=0&req_age=0&nflt=oos%3D1&srpvid=9fc29a93506c02f4&srepoch=1768687168&matching_block_id=1302692003_403138735_4_0_0&atlas_src=sr_iw_title#',
    linkText: 'Booking',
    details: ['accom.natureStoneBedrooms', 'accom.natureStoneDistance'],
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
  {
    titleKey: 'accom.villaSeteTitle',
    url: 'https://www.booking.com/hotel/pt/quinta-de-villasete.fr.html?label=gen173bo-10CAsouwFCH2Nhc2EtZGEtZWlyYS1tYXJjby1kZS1jYW5hdmV6ZXNIDVgDaCeIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgKoAgG4ApyLsMsGwAIB0gIkMzVhY2Y5YWMtMjNkZC00MDYyLTkxNzYtMzAzM2JkNDQ5MDM12AIB4AIB&aid=304142&ucfs=1&dest_id=-2168697&dest_type=city&group_adults=8&no_rooms=4&group_children=0&nflt=oos%3D1&srpvid=9fc29a93506c02f4&srepoch=1768687498&matching_block_id=143797409_217491613_2_42_0&atlas_src=sr_iw_title&checkin=2026-08-14&checkout=2026-08-16&req_adults=8&req_children=0',
    linkText: 'Booking',
    details: ['accom.villaSeteDistance'],
  },
  {
    titleKey: 'accom.castroPayvaTitle',
    url: 'https://www.booking.com/hotel/pt/crasto-payva-douro-nature.fr.html?aid=304142&label=gen173bo-10CAsouwFCH2Nhc2EtZGEtZWlyYS1tYXJjby1kZS1jYW5hdmV6ZXNIDVgDaCeIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgKoAgG4ApyLsMsGwAIB0gIkMzVhY2Y5YWMtMjNkZC00MDYyLTkxNzYtMzAzM2JkNDQ5MDM12AIB4AIB&sid=56a97084a85ef87dc1636487b87150c8&age=0&all_sr_blocks=894222501_359824755_2_1_0%2C894222502_377398803_2_1_0%2C894222504_377398803_2_1_0&checkin=2026-08-14&checkout=2026-08-16&dest_id=-2157964&dest_type=city&dist=0&group_adults=6&group_children=1&hapos=5&highlighted_blocks=894222501_359824755_2_1_0%2C894222502_377398803_2_1_0%2C894222504_377398803_2_1_0&hpos=5&matching_block_id=894222501_359824755_2_1_0&no_rooms=3&req_adults=6&req_age=0&req_children=1&room1=A%2CA&room2=A%2CA&room3=A%2CA%2C0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=894222501_359824755_2_1_0__24300%2C894222502_377398803_2_1_0__25200%2C894222504_377398803_2_1_0__28000&srepoch=1768687804&srpvid=9a3a9bd914e30007&type=total&ucfs=1',
    linkText: 'Booking',
    details: ['accom.castroPayvaDistance'],
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
