import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const InitiatorBoard = () => {

const { userInfo } = useContext(AuthContext);

  return (
    <>
        {
            userInfo.username
        }
    </>
  )
}

export default InitiatorBoard