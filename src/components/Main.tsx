import { Route, Routes } from 'react-router-dom'
import { Home, Services } from '../pages'

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
    </Routes>
  )
}

export default Main