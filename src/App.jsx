import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LearnToPaint from './components/LearnToPaint/LearnToPaint'
import WhyMini from './components/WhyMini/WhyMini'
import CurrentPhoto from './components/CurrentPhoto/CurrentPhoto'
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
      </div>
      {/* <FAQ /> */}
      <FormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseFormModal}
      />
    </>
  )
}
