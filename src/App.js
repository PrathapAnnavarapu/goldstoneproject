import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import SignUp from './SignUp'
import Login from './Login'
import UserPreview from './UserPreview'
import NotFound from './NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/preview" component={UserPreview} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </BrowserRouter>
)

export default App
