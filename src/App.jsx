import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainPage from './pages/MainPage/MainPage'
import Header from './content/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <MainPage />
    </div>
  )
}

export default App
