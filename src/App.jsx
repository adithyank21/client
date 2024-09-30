import './App.css'

// import Loginpage from './components/loginpage'

import Aboutpage from './components/aboutpage'
import Cardskerala from './components/cardskerala'
import Headernav from './components/headernav'
import Slider from './components/slider'
import {Routes,Route} from 'react-router-dom'
import Homepage from './components/homepage'
import { lazy,Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import { ComponentProvider } from './components/commentProvider'
function App() {
const Hpage =lazy(()=>import('./components/homepage'))
const Aboutpage = lazy(()=>import("./components/aboutpage"))
// const Rpage =lazy(()=>import('./components/registerpage'))
// const Lpage =lazy(()=>import('./components/loginpage'))


  return (
    <>
    <ComponentProvider>
    <Headernav/>
    <section>
      <Suspense  fallback={<div>
        <Spinner animation='"border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>}>
      <Routes>
      <Route path='/' element={<Hpage/>}></Route>
      <Route path='/about' element={<Aboutpage/>}></Route>
      {/* <Route path='/register' element={<Rpage/>}></Route> */}
      {/* <Route path='/login' element={<Lpage/>}></Route> */}


    </Routes>
      </Suspense>
    </section>
    </ComponentProvider>
     
    </>
  )
}

export default App