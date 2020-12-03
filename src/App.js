import ResponsiveComponent from './components/ResponsiveComponent'
import { ViewportProvider } from './components/viewportContext'
import CustomComponent from './components/CustomComponent'

// function App () {
//   return (
//     <ResponsiveComponent>
//       <CustomComponent />
//     </ResponsiveComponent>
//   )
// };

function App () {
  return (
    <ViewportProvider>
      <ResponsiveComponent>
        <CustomComponent />
      </ResponsiveComponent>
    </ViewportProvider>
  )
};

export default App;
