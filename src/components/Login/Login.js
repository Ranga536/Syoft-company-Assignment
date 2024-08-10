import React, {useState} from 'react'
import '../../App.css'

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: '',
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://syoft.dev/Api/userlogin/api/userlogin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      )
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
        placeholder="Email"
      />
      <input
        type="password"
        name="user_password"
        value={formData.user_password}
        onChange={handleChange}
        required
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
