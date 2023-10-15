import { useEffect, useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Versions from './components/Versions'


function App(): JSX.Element {
  const [api] = useState(window.api)


  useEffect(() => {

    if (api.isDev()) {
      document.querySelector('body')?.setAttribute('class', 'debug-screens')
    }
    console.log(api.isDev());


  }, [])
  return (
    <div className="container">
      <Versions></Versions>
      <ThemeButton />
    </div>
  )
}

export default App
