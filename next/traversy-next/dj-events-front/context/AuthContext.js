import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => checkUserLoggedIn(), [])

  //register
  const register = async (user) => {
    console.log(user)
  }

  //login
  const login = async ({email:identifier, password}) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    })
    const data = await res.json()
    console.log(data)
    
    if (res.ok) {
      setUser(data.user)
    } else {
      setError(data.message)
      setError(null)
    }

  }

  //logout
  const logout = async () => {
    console.log('loged out')
  }

  //check if logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()
    
    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{user, error, register, login, logout, checkUserLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext