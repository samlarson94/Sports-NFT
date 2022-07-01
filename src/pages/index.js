import Hero from '../components/Hero/Hero';
import Process from '../components/TheProcess/Process';
import LearnMore from '../components/LearnMore/learnmore';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Process />
      <LearnMore />
    </Layout>
  );
};

export default Home;
