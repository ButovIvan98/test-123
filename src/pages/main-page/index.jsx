import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('test')}>click me</button>
      <Link to="/expenses">Expenses</Link>
    </div>
  )
}

export default MainPage
