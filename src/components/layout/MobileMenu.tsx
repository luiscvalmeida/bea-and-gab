import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-150%')});
  transition: transform 0.3s ease;
  z-index: 999;
  text-align: center;
`;

const MenuLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { key: 'nav.home', href: '#main' },
  { key: 'nav.accommodation', href: '#accommodation' },
  { key: 'nav.transport', href: '#transport' },
  { key: 'nav.kids', href: '#kids' },
  { key: 'nav.dresscode', href: '#dresscode' },
  { key: 'nav.gifts', href: '#gifts' },
  { key: 'nav.rsvp', href: '#rsvp' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <MenuContainer $isOpen={isOpen}>
      {navItems.map((item) => (
        <MenuLink key={item.key} href={item.href} onClick={onClose}>
          {t(item.key)}
        </MenuLink>
      ))}
    </MenuContainer>
  );
}
