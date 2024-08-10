import React, {useState} from 'react'
import '../../App.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
    user_lastname: 'ni',
    user_city: 'Hyderabad',
    user_zipcode: '500072',
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://syoft.dev/Api/user_registeration/api/user_registeration',
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
      <h2>Sign Up</h2>
      <input
        type="text"
        name="user_firstname"
        value={formData.user_firstname}
        onChange={handleChange}
        required
        placeholder="First Name"
      />
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
      <input
        type="tel"
        name="user_phone"
        value={formData.user_phone}
        onChange={handleChange}
        required
        placeholder="Phone Number"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp
