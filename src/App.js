import logo from './logo.svg'
import './App.css'
import ResponsiveComponent from './components/ResponsiveComponent'

function App () {
  return (
    <ResponsiveComponent>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>This is a responsive React page.</p>
        </header>
      </div>
    </ResponsiveComponent>
  )
}

export default App
