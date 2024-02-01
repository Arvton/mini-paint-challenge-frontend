import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LearnToPaint from './components/LearnToPaint/LearnToPaint'
import WhyMini from './components/WhyMini/WhyMini'
import CurrentPhoto from './components/CurrentPhoto/CurrentPhoto'
// import FAQ from './components/FAQ/FAQ'
import './App.scss'

export default function App() {

  return (
    <>
      <Header />
      <Hero />
      <LearnToPaint />
      <WhyMini />
      <CurrentPhoto />
      {/* <FAQ /> */}
    </>
  )
}
