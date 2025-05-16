import { Route, Routes } from 'react-router-dom'
import { CaseStudies, Home, Services } from '../pages'

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
    </Routes>
  )
}

export default Main