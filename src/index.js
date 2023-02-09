import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

/* const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
] */
/* const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const dt2 = `(${year}, ${month}, ${date})`
    const userDate = new Date(userData.dateOfBirth)
    const newDate = userDate.getDate()
    const newMonth = userDate.getMonth()
    const newYear = userDate.getFullYear()
    const dt1 = `(${newYear}, ${newMonth + 1}, ${newDate})`
    console.log(dt2)
    console.log(dt1) */

/* if (
      userData.username === '' &&
      userData.password === '' &&
      userData.conformPassword === '' &&
      userData.phonenumber === ''
    ) {
      setErrors({
        ...errors,
        userNameError: true,
        passwordError: true,
        phoneNumberError: true,
        conformPasswordError: true,
      }) 
    } */
/* if (userData.username.length < 3 || userData.username.length > 25) {
      setErrors({
        ...errors,
        userNameError: true,
      })
    } else if (userData.password.length < 8 || userData.password.length > 32) {
      setErrors({
        ...errors,
        passwordError: true,
      })
    } else if (userData.password !== userData.conformPassword) || useeData. {
      setErrors({
        ...errors,
        conformPasswordError: true,
      })
    } else if (
      userData.phonenumber.length !== 10 ||
      userData.phonenumber !== Number
    ) {
      setErrors({
        ...errors,
        phoneNumberError: true,
      })
    } else {
      setErrors({
        ...errors,
        userNameError: false,
        passwordError: false,
        phoneNumberError: false,
        conformPasswordError: false,
      })
      setIsFormSubmitted(true)
    }

    if (isFormSubmitted) {
      const userDetails = {
        firstName: userData.firstname,
        lastName: userData.lastname,
        address: userData.address,
        phoneNumber: userData.phonenumber,
        email: userData.email,
        gender: userData.gender,
        dateOfBirth: userData.dateOfBirth,
        userName: userData.username,
        password: userData.password,
        conformPassword: userData.conformPassword,
      }
      console.log(userDetails) */
