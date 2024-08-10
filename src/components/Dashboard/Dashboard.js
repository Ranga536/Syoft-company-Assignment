import React from 'react'
import '../../App.css'

const Dashboard = ({user}) => {
  ;<div className="dashboard">
    <h2>Welcome, {user.user_firstname}!</h2>
    <p>Email: {user.user_email}</p>
    <p>Phone: {user.user_phone}</p>
    <p>City: {user.user_city}</p>
    <p>Zip Code: {user.user_zipcode}</p>
  </div>
}

export default Dashboard
