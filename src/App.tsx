import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Divider } from './components/common/Divider';
import { MainSection } from './components/sections/MainSection';
import { AccommodationSection } from './components/sections/AccommodationSection';
import { TransportSection } from './components/sections/TransportSection';
import { KidsSection } from './components/sections/KidsSection';
import { DressCodeSection } from './components/sections/DressCodeSection';
import { GiftsSection } from './components/sections/GiftsSection';
import { RSVPSection } from './components/sections/RSVPSection';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <MainSection />
      <Divider />
      <AccommodationSection />
      <Divider />
      <TransportSection />
      <Divider />
      <KidsSection />
      <Divider />
      <DressCodeSection />
      <Divider />
      <GiftsSection />
      <Divider />
      <RSVPSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
