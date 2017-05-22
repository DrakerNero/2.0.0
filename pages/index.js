import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import AboutSection from '../components/AboutSection'
import SponsorsSection from '../components/SponsorsSection'
import BackgroundLogo from '../hocs/createBackgroundLogo'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <BackgroundLogo position='right'>
      <section id='about'><AboutSection /></section>
      <SectionSeparator />
      <section id='tickets'><TicketsSection /></section>
      <SectionSeparator />
      <section id='sponsors'><SponsorsSection /></section>
      <SectionSeparator />
    </BackgroundLogo>
    <BackgroundLogo>
      <section id='speakers'><SpeakersSection /></section>
    </BackgroundLogo>
    <SectionSeparator />
    <section id='contact'><FooterSection /></section>
  </MainLayout>
)
