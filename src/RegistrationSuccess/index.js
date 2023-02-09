import {Link} from 'react-router-dom'

import './index.css'

const RegistrationSuccess = () => (
  <div className="login-success-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="log-in-success-image"
      alt="success"
    />
    <p className="successful-text">Registered Successfully</p>
    <Link to="/">
      <button type="button" className="get-form-button">
        Login
      </button>
    </Link>
  </div>
)

export default RegistrationSuccess
