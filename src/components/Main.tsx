import { Route, Routes } from 'react-router-dom'
import { About, Blog, CaseStudies, Contacts, Home, Services } from '../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='services'
        element={<Services />}
      />
      <Route
        path='case-studies'
        element={<CaseStudies />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='blog'
        element={<Blog />}
      />
      <Route
        path='contacts'
        element={<Contacts />}
      />
    </Routes>
  )
}

export default Main