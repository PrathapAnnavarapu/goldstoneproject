/* eslint-disable import/no-extraneous-dependencies */
import {useState, useEffect} from 'react'
import './index.css'

const UserPreview = props => {
  const [userInformation, setUserInformation] = useState({})

  const onClickLogout = () => {
    const {history} = props
    history.replace('/')
  }

  const setFailureView = () => (
    <div className="failure-view">
      <img
        src="https://bl-i.thgim.com/public/news/1p8ycp/article65608331.ece/alternates/FREE_1200/BL07_Goldstone%20Technologies.jpg"
        alt="failure view"
        className="failure"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button">Retry</button>
    </div>
  )

  const projectsApiUrl = () => {
    const url = ''
    const options = {
      method: 'GET',
      headers: {
        Authentication: `Bearer jwtToken`,
      },
    }
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setUserInformation(data)
      })
      .catch(() => {
        setFailureView()
      })
  }

  useEffect(() => {
    projectsApiUrl()
  })

  return (
    <>
      <div className="container">
        <nav className="header-container">
          <img
            src="https://bl-i.thgim.com/public/news/1p8ycp/article65608331.ece/alternates/FREE_1200/BL07_Goldstone%20Technologies.jpg"
            className="img"
            alt="website logo"
          />
          <div>
            <button className="logout" type="button" onClick={onClickLogout}>
              Logout
            </button>
          </div>
        </nav>
        <ul className="table-container">
          <li className="table">
            <h1>FirstName =</h1>
            <p>{userInformation.firstname}</p>
          </li>
          <li className="table">
            <h1>LastName =</h1>
            <p>{userInformation.lastname}</p>
          </li>
          <li className="table">
            <h1>Address:</h1>
            <p>{userInformation.address}</p>
          </li>
          <li className="table">
            <h1>PhoneNumber =</h1>
            <p>{userInformation.phonenumber}</p>
          </li>
          <li className="table">
            <h1>Email =</h1>
            <p>{userInformation.email}</p>
          </li>
          <li className="table">
            <h1>Gender =</h1>
            <p>{userInformation.gender}</p>
          </li>
          <li className="table">
            <h1>DateOfBirth =</h1>
            <p>{userInformation.dateOfBirth}</p>
          </li>
          <li className="table">
            <h1>UserName =</h1>
            <p>{userInformation.username}</p>
          </li>
          <li className="table">
            <h1>Password =</h1>
            <p>{userInformation.password}</p>
          </li>
          <li className="table">
            <h1>ConformPassword =</h1>
            <p>{userInformation.conformpassword}</p>
          </li>
        </ul>
      </div>
    </>
  )
}
export default UserPreview
