import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(248, 248, 248, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLogo = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 80px;
    width: auto;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    opacity: 1;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const LOGO_URL =
  'https://res.cloudinary.com/douriists/image/upload/w_150,f_auto,q_auto/flowers_pzh5wj.png';

const navItems = [
  { key: 'nav.home', href: '#main' },
  { key: 'nav.accommodation', href: '#accommodation' },
  { key: 'nav.transport', href: '#transport' },
  { key: 'nav.kids', href: '#kids' },
  { key: 'nav.dresscode', href: '#dresscode' },
  { key: 'nav.gifts', href: '#gifts' },
  { key: 'nav.rsvp', href: '#rsvp' },
];

export function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo href="#main">
            <img src={LOGO_URL} alt="B & G" />
          </NavLogo>
          <NavLinks>
            {navItems.map((item) => (
              <li key={item.key}>
                <NavLink href={item.href}>{t(item.key)}</NavLink>
              </li>
            ))}
          </NavLinks>
          <LanguageSwitcher />
          <Hamburger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavContainer>
      </Nav>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
