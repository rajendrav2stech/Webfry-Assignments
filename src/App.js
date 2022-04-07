import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '././assets/scss/master.css'
import '././assets/scss/responsive.css'
import Header from './components/Pages/AboutUs/Header/Header'
import About from './components/Pages/AboutUs/About/About'
import AboutDetils from './components/Pages/AboutUs/AboutDetils/AboutDetils'
import Philosophy from './components/Pages/AboutUs/Philosophy/Philosophy'
import Vission from './components/Pages/AboutUs/Vission/Vission'
import Mission from './components/Pages/AboutUs/Mission/Mission'
import TeamMembers from './components/Pages/AboutUs/TeamMembers/TeamMembers'
import Footer from './components/Pages/AboutUs/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <About />
      <AboutDetils />
      <Philosophy />
      <Vission />
      <Mission />
      <TeamMembers />
      <Footer />
    </>
  )
}

export default App;
