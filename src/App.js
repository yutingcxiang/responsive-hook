import './App.css'
import ResponsiveComponent from './components/ResponsiveComponent';
import CustomComponent from './components/CustomComponent';

function App () {
  return (
    <ResponsiveComponent>
      <div className='App'>
        <CustomComponent/>
      </div>
    </ResponsiveComponent>
  )
}

export default App
