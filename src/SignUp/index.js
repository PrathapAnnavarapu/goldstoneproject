/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-extraneous-dependencies */
import {useState, useEffect} from 'react'

import './index.css'
import RegistrationSuccess from '../RegistrationSuccess'

function SignUp() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    phonenumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    username: '',
    password: '',
    conformPassword: '',
  })
  const [Errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const validateForm = values => {
    const errors = {}
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const re = {
      capital: /[A-Z]/,
      digit: /[0-9]/,
      // full: /^[@#]$/,
    }
    if (!values.firstname) {
      errors.firstname = 'FirstName is Required!'
    }
    if (!values.lastname) {
      errors.lastname = 'LastName is Required!'
    }
    if (!values.address) {
      errors.address = 'Address is Required!'
    }
    if (!values.phonenumber) {
      errors.phonenumber = 'PhoneNumber is Required!'
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = 'PhoneNumber must have 10 Digits'
    } else if (values.phonenumber.length > 10) {
      errors.phonenumber = 'PhoneNumber cannot grater than 10 Digits'
    }
    if (!values.email) {
      errors.email = 'Email is Required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not Valid Email Format!'
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'DateOfBirth is Required!'
    }
    if (!values.username) {
      errors.username = 'UserName is Required!'
    } else if (values.username.length < 3) {
      errors.username = 'UserName should have grater than 3 characters!'
    } else if (values.username.length > 26) {
      errors.username = 'UserName cannot grater than 16 characters!'
    }
    if (!values.password) {
      errors.password = 'Password is Required!'
    } else if (!re.capital.test(values.password)) {
      errors.password = 'Password Must have at least one Capital Letter!'
    } else if (!re.digit.test(values.password)) {
      errors.password = 'Password Must have at least one Digit!'
    } /* else if (
      !re.full.test(values.password)
    ) {
      errors.password =
        'Password Should have Alphanumeric & Symbol with Letters!'
    } */
    if (!values.conformPassword) {
      errors.conformPassword = 'conformPassword is Required!'
    } else if (values.conformPassword !== values.password) {
      errors.conformPassword = 'conformPassword must same as password'
    }
    return errors
  }

  const onSubmitForm = async e => {
    e.preventDefault()
    setErrors(validateForm(userData))
    setIsSubmit(true)
  }

  const onChangeHandeler = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
    console.log(userData)
  }

  /* const loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="blue" width="50" height="50" />
    </div>
  ) */

  useEffect(async () => {
    if (Object.keys(Errors).length === 0 && isSubmit === true) {
      const url = ''
      const options = {
        method: 'POST',
        body: JSON.stringify(userData),
      }
      const response = await fetch(url, options)
      // const data = await response.json()
      if (response.ok === true) {
        // Save Response message in state and it will pass to successFull component//
        console.log('data')
      } else {
        // Show Error Message //
        console.log('errMsg')
      }
    }
  }, [Errors])

  return (
    <div className="main-container">
      {Object.keys(Errors).length === 0 && isSubmit === true ? (
        <RegistrationSuccess />
      ) : (
        <form className="signup-container" onSubmit={onSubmitForm}>
          <h3 className="register-heading">Register</h3>
          <div className="names">
            <div>
              <label htmlFor="firstname" className="firstname">
                FirstName<span className="star">*</span>
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="names-input"
                value={userData.firstname}
                onChange={onChangeHandeler}
              />
              <p className="error-msg">{Errors.firstname}</p>
            </div>
            <br />
            <div>
              <label htmlFor="lastname" className="firstname">
                LastName <span className="star">*</span>
              </label>
              <br />
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="names-input"
                value={userData.lastname}
                onChange={onChangeHandeler}
              />
              <p className="error-msg">{Errors.lastname}</p>
            </div>
          </div>
          <br />
          <label htmlFor="address" className="firstname">
            Address <span className="star">*</span>
          </label>
          <br />
          <textarea
            id="address"
            name="address"
            className="text-input"
            value={userData.address}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.address}</p>
          <br />
          <br />
          <label htmlFor="phonenumber" className="firstname">
            Phone Number <span className="star">*</span>
          </label>
          <br />
          <select>
            <option>+91</option>
            <option>+1</option>
          </select>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            className="phone-input"
            value={userData.phonenumber}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.phonenumber}</p>
          <br />
          <br />
          <label htmlFor="email" className="firstname">
            Email <span className="star">*</span>
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            value={userData.email}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.email}</p>

          <h4>
            Gender <span className="star">*</span>
          </h4>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={onChangeHandeler}
          />
          <label htmlFor="male" className="male">
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={onChangeHandeler}
          />
          <label htmlFor="female" className="female">
            Female
          </label>
          <br />
          <br />
          <label htmlFor="date" className="firstname">
            Date Of Birth <span className="star">*</span>
          </label>
          <br />
          <input
            type="date"
            id="date"
            name="dateOfBirth"
            className="date-input"
            value={userData.dateOfBirth}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.dateOfBirth}</p>

          <br />
          <br />
          <label htmlFor="username" className="firstname">
            UserName <span className="star">*</span>
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            className="date-input"
            value={userData.username}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.username}</p>
          <br />
          <label htmlFor="password" className="firstname">
            Password <span className="star">*</span>
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="date-input"
            value={userData.password}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.password}</p>
          <br />
          <label htmlFor="conform-password" className="firstname">
            Conform Password <span className="star">*</span>
          </label>
          <br />
          <input
            type="password"
            id="conform-password"
            name="conformPassword"
            className="date-input"
            value={userData.conformPassword}
            onChange={onChangeHandeler}
          />
          <p className="error-msg">{Errors.conformPassword}</p>
          <br />
          <button type="submit" className="signup">
            SignUp
          </button>
        </form>
      )}
    </div>
  )
}

export default SignUp
