import Hero from '../components/Hero';
import Story from '../components/Story';
import CuratedToday from '../components/CuratedToday';
import BrewingGuides from '../components/BrewingGuides';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <CuratedToday />
      <BrewingGuides />
      <Newsletter />
    </>
  );
}