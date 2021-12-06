import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NotFound from './components/NotFound'
import LoginForm from './features/Auth/components/LoginForm'
// import CartFuture from './features/Cart'
// import ProductFeature from './features/Product'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Redirect from="home" to="/" exact />
        {/* <Route path="/products" component={ProductFeature} />
        // <Route path="/cart" component={CartFuture} /> */}
        {/* <Route path="/" */}
        <Route component={NotFound} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  )
}

export default App
