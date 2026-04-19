import Navbar from './components/marketing/Navbar'
import Hero from './components/marketing/Hero'
import FeatureGrid from './components/marketing/FeatureGrid'
import HowItWorks from './components/marketing/HowItWorks'
import InstitutionCTA from './components/marketing/InstitutionCTA'
import Faq from './components/marketing/Faq'
import Footer from './components/marketing/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-dm-background text-dm-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <InstitutionCTA />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
