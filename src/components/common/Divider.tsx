import styled from 'styled-components';

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: -20px;
  margin-bottom: -17px;
  z-index: 10;
  position: relative;
`;

const DividerImage = styled.img`
  max-width: 120px;
  opacity: 0.8;
`;

const DIVIDER_URL =
  'https://res.cloudinary.com/douriists/image/upload/w_200,f_auto,q_auto/divider_2_snxedi.png';

export function Divider() {
  return (
    <DividerContainer>
      <DividerImage src={DIVIDER_URL} alt="divider" />
      <DividerImage src={DIVIDER_URL} alt="divider" />
      <DividerImage src={DIVIDER_URL} alt="divider" />
    </DividerContainer>
  );
}
