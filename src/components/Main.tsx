import { Route, Routes } from 'react-router-dom'
import { About, CaseStudies, Home, Services } from '../pages'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='services'
          element={<Services/>}
        />
        <Route
          path='case-studies'
          element={<CaseStudies/>}
        />
        <Route
          path='about'
          element={<About/>}
        />
    </Routes>
  )
}

export default Main