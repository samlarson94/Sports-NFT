import Hero from '../components/Hero/Hero';
import Process from '../components/TheProcess/Process';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Process />
    </Layout>
  );
};

export default Home;
