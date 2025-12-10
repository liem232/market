import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage/CatalogPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CatalogPage />}></Route>
      </Routes>

    </>
  )
}

export default App
