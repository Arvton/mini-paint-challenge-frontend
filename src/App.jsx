import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LearnToPaint from './components/LearnToPaint/LearnToPaint'
import WhyMini from './components/WhyMini/WhyMini'
import CurrentPhoto from './components/CurrentPhoto/CurrentPhoto'
import ButtonCTA from './components/ButtonCTA/ButtonCTA'
// import FAQ from './components/FAQ/FAQ'
import FormModal from './components/FormModal/FormModal'
import { useState } from 'react'
import './App.scss'

export default function App() {

  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  const handleOpenFormModal = () => {
    setIsFormModalOpen(true)
  }

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false)
  }

  return (
    <>
      <Header />
      <Hero onClick={handleOpenFormModal} />
      <div className="desktop">
        <div className="desktop__divider"></div>
        <div className="desktop__container">
          <LearnToPaint />
          <WhyMini onClick={handleOpenFormModal} />
          <CurrentPhoto onClick={handleOpenFormModal} />
        </div>
        <ButtonCTA
          className="desktop__cta"
          content="Send Me A Welcome Package"
          onClick={handleOpenFormModal} />
      </div>
      {/* <FAQ /> */}
      <FormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseFormModal}
      />
    </>
  )
}
