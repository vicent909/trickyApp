import React, { useContext } from 'react'
import { GetStarted, Splash } from './pages'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { AuthContext, AuthProvider } from './context'
import { Loading } from './components'

const MainApp = () => {
  const {loading} = useContext(AuthContext);

  return(
    <NavigationContainer>
        <Router/>
        {loading && <Loading/>}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <MainApp/>
    </AuthProvider>
  )
}

export default App