import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = userData => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/dashboard">
          {user ? <Dashboard user={user} /> : <Login onLogin={handleLogin} />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
