/* eslint-disable import/no-extraneous-dependencies */
import {useState} from 'react'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  })

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/preview')
  }

  const onSubmitFailure = errorMsg => {
    setCredentials({
      ...credentials,
      showSubmitError: true,
      errorMsg,
    })
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {
      username: credentials.username,
      password: credentials.password,
    }
    const url = 'https:'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={credentials.password}
        onChange={e =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
        placeholder="Password"
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={credentials.username}
        onChange={e =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
        placeholder="Username"
      />
    </>
  )

  return (
    <>
      <div className="login-form-container">
        <img
          src="https://bl-i.thgim.com/public/news/1p8ycp/article65608331.ece/alternates/FREE_1200/BL07_Goldstone%20Technologies.jpg"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://bl-i.thgim.com/public/news/1p8ycp/article65608331.ece/alternates/FREE_1200/BL07_Goldstone%20Technologies.jpg"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <nav className="nav-container">
            <a href="/authenticate-Password" target="_self">
              Forget Password?
            </a>
            <a href="/register" target="_self">
              Not Registered? SignUp
            </a>
          </nav>
          <button type="submit" className="login-button">
            Login
          </button>
          {credentials.showSubmitError && (
            <p className="error-message">*{credentials.errorMsg}</p>
          )}
        </form>
      </div>
    </>
  )
}

export default Login
