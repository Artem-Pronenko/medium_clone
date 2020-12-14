import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/TopBar'
import {CurrentUserProvider} from 'contexts/currentUser'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDo0BwzikoCxLLmNUcR43a5xK2iscMtq9Q',
  authDomain: 'react-medium-clone-ap.firebaseapp.com',
  projectId: 'react-medium-clone-ap',
  storageBucket: 'react-medium-clone-ap.appspot.com',
  messagingSenderId: '504759534434',
  appId: '1:504759534434:web:65bd6bd5762ca00428623b'
}

firebase.initializeApp(firebaseConfig)

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar/>
        <Routes/>
      </Router>
    </CurrentUserProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
