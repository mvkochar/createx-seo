import { Route, Routes } from 'react-router-dom'
import {
  About, Blog, Careers, CaseStudies, CaseStudy, Contacts,
  Home, Service, Services, SinglePost
} from '../pages'

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
      <Route
        path='service'
        element={<Service />}
      />
      <Route
        path='case-study'
        element={<CaseStudy />}
      />
      <Route
        path='careers'
        element={<Careers />}
      />
      <Route
        path='single-post'
        element={<SinglePost />}
      />
    </Routes>
  )
}

export default Main