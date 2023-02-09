/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')

const databasePath = path.join(__dirname, 'Registration.db')

const app = express()

app.use(express.json())

let database = null

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () =>
      console.log('Server Running at http://localhost:3000/'),
    )
  } catch (error) {
    console.log(`DB Error: ${error.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()

app.post('/registration-details', async (request, response) => {
  const {
    firstname,
    lastname,
    address,
    phonenumber,
    email,
    gender,
    dateOfBirth,
    username,
    password,
    conformPassword,
  } = request.body
  const RegistrationQuery = `
  INSERT INTO
    registration ( first_name, last_name, Address, phone_number, email, gender, date_of_birth, user_name, password, conform_password)
  VALUES
    (${firstname}, '${lastname}', '${address}','${phonenumber}','${email}','${gender}','${dateOfBirth}','${username}','${password}','${conformPassword}' );`
  await database.run(RegistrationQuery)
  response.send('Registered Successfully')
})

app.post('/api/login', async (request, response) => {
  const {username, password} = request.body
  // here  check the credentials with registered data of username and password.
  // if is it match send success response otherwise failure response

  await database.run('LoginQuery')
  response.send('Login Successfully')
})

app.get('/registration-details', async (request, response) => {
  const getRegistrationQuery = `
    SELECT
      *
    FROM
    registration;`
  const RegistrationArray = await database.all(getRegistrationQuery)
  response.send(RegistrationArray)
})

module.exports = app
