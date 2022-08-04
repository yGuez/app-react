import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import './index.css'
import Freelances from './pages/Freelances'
import Home from './pages/Home'
import Results from './pages/Results'
import Survey from './pages/Survey'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results />}/>
        <Route path="/freelances" element={<Freelances />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
