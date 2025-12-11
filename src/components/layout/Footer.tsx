import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.5rem;
`;

const FooterQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  padding: 40px 20px;
  margin: 0;
`;

const FooterFlowers = styled.img`
  max-width: 50px;
  margin: 3px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const FLOWERS_URL =
  'https://res.cloudinary.com/douriists/image/upload/w_150,f_auto,q_auto/flowers_pzh5wj.png';

export function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterQuote>{t('footer.quote')}</FooterQuote>
      <FooterFlowers src={FLOWERS_URL} alt="Flowers" />
    </FooterContainer>
  );
}
