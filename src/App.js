import HomePage from './Pages/home'
import AboutPage from './Pages/about'
import DiscographyPage from './Pages/discography'

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/discography' component={DiscographyPage} />
    </div>
  )
}

export default App; 