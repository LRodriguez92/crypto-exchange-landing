import Hero from './components/Hero';
import Header from './components/Header';
import Features from './components/Features';
import ExchangeTable from './components/ExchangeTable';
import CTA from './components/CTA';
import Logos from './components/Logos';

function App() {
  return (
    <div class = "bg-gradient-to-b from-[#000000] via-[#8780D6] to-[#F7D1F9]">
      <Header />
      <Hero />
      <Features />
      <ExchangeTable />
      <CTA />
      <Logos />
    </div>
  );
}

export default App;
