import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignUp from './SignUp'
import Login from './Login'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
)

export default App
